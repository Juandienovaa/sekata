import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-capture-accurate';
const port = 9228;
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

  await send('Runtime.evaluate', {
    expression: `
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.style.scrollBehavior = 'auto';
    `
  });

  // 1. Capture ReadyToReserve (Gambar 1 replacement)
  // Let's scroll so #reserve is centered in the viewport
  await send('Runtime.evaluate', {
    expression: `
      const el = document.querySelector('#reserve');
      const top = el.getBoundingClientRect().top + window.scrollY - 300;
      window.scrollTo(0, top);
    `
  });
  await new Promise(r => setTimeout(r, 1000));
  let snap = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'huashu_01_reserve_compact.png'), Buffer.from(snap.data, 'base64'));
  console.log('Captured huashu_01_reserve_compact.png');

  // 2. Capture BrandKineticTypography (Gambar 2 replacement)
  await send('Runtime.evaluate', {
    expression: `
      const el = document.querySelector('section.bg-\\[\\#0d0806\\]');
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo(0, top);
    `
  });
  await new Promise(r => setTimeout(r, 1000));
  snap = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'huashu_02_kinetic_typography.png'), Buffer.from(snap.data, 'base64'));
  console.log('Captured huashu_02_kinetic_typography.png');

  // 3. Capture SlowbarSpatialPresence (Gambar 3 replacement)
  await send('Runtime.evaluate', {
    expression: `
      const el = document.querySelector('#slowbar-space');
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo(0, top);
    `
  });
  await new Promise(r => setTimeout(r, 1000));
  snap = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'huashu_03_slowbar_spatial.png'), Buffer.from(snap.data, 'base64'));
  console.log('Captured huashu_03_slowbar_spatial.png');

  ws.close();
  chromeProc.kill();
  console.log('All accurate captures saved!');
}

main().catch(console.error);

