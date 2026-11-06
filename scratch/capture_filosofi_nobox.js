import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-nobox';
const port = 9232;
const artifactDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b9595647-c32c-4cc9-b7b5-20be60d3e6e7';

async function main() {
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    '--window-size=1440,900',
    'http://localhost:3001/'
  ]);

  await new Promise(r => setTimeout(r, 2500));

  const list = await new Promise((res, rej) => {
    http.get(`http://127.0.0.1:${port}/json/list`, resp => {
      let data = '';
      resp.on('data', chunk => data += chunk);
      resp.on('end', () => res(JSON.parse(data)));
    }).on('error', rej);
  });

  const page = list.find(p => p.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(res => ws.addEventListener('open', res));

  let reqId = 1;
  const pending = new Map();
  ws.addEventListener('message', (e) => {
    const msg = JSON.parse(e.data);
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg.result);
      pending.delete(msg.id);
    }
  });

  function send(method, params = {}) {
    return new Promise(res => {
      const curId = reqId++;
      pending.set(curId, res);
      ws.send(JSON.stringify({ id: curId, method, params }));
    });
  }

  await send('Page.enable');
  await send('Runtime.enable');

  // Kill smooth scroll everywhere
  await send('Runtime.evaluate', {
    expression: `
      const style = document.createElement('style');
      style.innerHTML = '* { scroll-behavior: auto !important; }';
      document.head.appendChild(style);
    `
  });

  // Capture 1: Top of Filosofi section (Ticker + Hook headline)
  await send('Runtime.evaluate', {
    expression: `
      const el = document.querySelector('#filosofi');
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo(0, top);
    `
  });
  await new Promise(r => setTimeout(r, 800));
  let snap = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'nobox_01_filosofi_top.png'), Buffer.from(snap.data, 'base64'));
  console.log('Saved nobox_01_filosofi_top.png');

  // Capture 2: Middle of Filosofi section (Dual column + Photo + 3 pillars)
  await send('Runtime.evaluate', {
    expression: `
      const el = document.querySelector('#filosofi');
      const top = el.getBoundingClientRect().top + window.scrollY + 400;
      window.scrollTo(0, top);
    `
  });
  await new Promise(r => setTimeout(r, 800));
  snap = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'nobox_02_filosofi_pillars.png'), Buffer.from(snap.data, 'base64'));
  console.log('Saved nobox_02_filosofi_pillars.png');

  // Capture 3: Flow into Compact Reserve & Slowbar Space
  await send('Runtime.evaluate', {
    expression: `
      const el = document.querySelector('#reserve');
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo(0, top);
    `
  });
  await new Promise(r => setTimeout(r, 800));
  snap = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'nobox_03_reserve_flow.png'), Buffer.from(snap.data, 'base64'));
  console.log('Saved nobox_03_reserve_flow.png');

  ws.close();
  chromeProc.kill();
  console.log('Done nobox screenshots!');
}

main().catch(console.error);

