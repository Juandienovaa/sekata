import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-order';
const port = 9355;
const artifactDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b9595647-c32c-4cc9-b7b5-20be60d3e6e7';

async function main() {
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    '--window-size=1280,1200',
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

  const page = list[0];
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
  await send('DOM.enable');
  await new Promise(r => setTimeout(r, 1500));

  // Inspect order of sections in DOM
  const order = await send('Runtime.evaluate', {
    expression: `
      Array.from(document.querySelectorAll('main > *')).map(el => {
        const id = el.id || el.querySelector('section, aside, div')?.id || el.tagName;
        const text = el.innerText?.slice(0, 40)?.replace(/\\n/g, ' ') || '';
        return { tag: el.tagName, id, text };
      })
    `,
    returnByValue: true
  });

  console.log('DOM Section Order:', JSON.stringify(order.value, null, 2));

  // Scroll to #grab-sekata and take screenshot showing context
  await send('Runtime.evaluate', {
    expression: `
      const el = document.getElementById('grab-sekata');
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo(0, top);
      }
    `
  });
  await new Promise(r => setTimeout(r, 1500));

  const shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'verify_new_order_desktop.png'), Buffer.from(shot.data, 'base64'));
  console.log('Saved verify_new_order_desktop.png');

  // Also test mobile view
  await send('Emulation.setDeviceMetricsOverride', {
    width: 375,
    height: 812,
    deviceScaleFactor: 2,
    mobile: true
  });
  await new Promise(r => setTimeout(r, 800));

  await send('Runtime.evaluate', {
    expression: `
      const el = document.getElementById('grab-sekata');
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 40;
        window.scrollTo(0, top);
      }
    `
  });
  await new Promise(r => setTimeout(r, 1500));

  const shotMobile = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'verify_new_order_mobile.png'), Buffer.from(shotMobile.data, 'base64'));
  console.log('Saved verify_new_order_mobile.png');

  ws.close();
  chromeProc.kill();
  process.exit(0);
}

main().catch(console.error);

