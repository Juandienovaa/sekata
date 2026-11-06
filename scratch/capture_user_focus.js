import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-cdp2';
const port = 9223;
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

  // 1. Capture Menu Modal Open
  await send('Runtime.evaluate', {
    expression: `
      const menuBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('MENU'));
      if (menuBtn) menuBtn.click();
    `
  });
  await new Promise(r => setTimeout(r, 600));
  let snap = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'check_01_menu_modal.png'), Buffer.from(snap.data, 'base64'));
  console.log('Saved check_01_menu_modal.png');

  // Close menu modal
  await send('Runtime.evaluate', {
    expression: `
      const closeBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('TUTUP'));
      if (closeBtn) closeBtn.click();
    `
  });
  await new Promise(r => setTimeout(r, 600));

  // 2. Capture Ticker + Filosofi
  await send('Runtime.evaluate', {
    expression: `
      const el = document.querySelector('#filosofi');
      if (el) {
        // scroll slightly above to show ticker
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo(0, top);
      }
    `
  });
  await new Promise(r => setTimeout(r, 800));
  snap = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'check_02_filosofi.png'), Buffer.from(snap.data, 'base64'));
  console.log('Saved check_02_filosofi.png');

  // 3. Capture Ready to Reserve
  await send('Runtime.evaluate', {
    expression: `
      const el = document.querySelector('#reserve');
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 40;
        window.scrollTo(0, top);
      }
    `
  });
  await new Promise(r => setTimeout(r, 800));
  snap = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'check_03_reserve.png'), Buffer.from(snap.data, 'base64'));
  console.log('Saved check_03_reserve.png');

  // 4. Capture Instagram Grid
  await send('Runtime.evaluate', {
    expression: `
      const el = document.querySelector('section.bg-burnt-orange');
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo(0, top);
      }
    `
  });
  await new Promise(r => setTimeout(r, 800));
  snap = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'check_04_instagram.png'), Buffer.from(snap.data, 'base64'));
  console.log('Saved check_04_instagram.png');

  // 5. Capture Contact Section
  await send('Runtime.evaluate', {
    expression: `
      const el = document.querySelector('#lokasi');
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo(0, top);
      }
    `
  });
  await new Promise(r => setTimeout(r, 800));
  snap = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'check_05_contact.png'), Buffer.from(snap.data, 'base64'));
  console.log('Saved check_05_contact.png');

  ws.close();
  chromeProc.kill();
  console.log('All focus screenshots captured!');
}

main().catch(console.error);

