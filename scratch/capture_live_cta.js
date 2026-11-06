import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-live-cta';
const port = 9345;
const artifactDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b9595647-c32c-4cc9-b7b5-20be60d3e6e7';

async function main() {
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    '--window-size=1280,1000',
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

  const page = list.find(p => p.type === 'page') || list[0];
  if (!page) {
    console.error('No page');
    chromeProc.kill();
    process.exit(1);
  }

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(res => ws.addEventListener('open', res));

  let reqId = 1;
  const pending = new Map();
  ws.addEventListener('message', (e) => {
    const msg = JSON.parse(e.data);
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg.result || msg.error);
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

  // Wait for initial render
  await new Promise(r => setTimeout(r, 1500));

  // 1. Scroll directly to #grab-sekata
  console.log('Scrolling to #grab-sekata on desktop...');
  await send('Runtime.evaluate', {
    expression: `
      const el = document.getElementById('grab-sekata');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    `
  });

  // Wait for the CTA image to fully decode
  await send('Runtime.evaluate', {
    awaitPromise: true,
    expression: `
      new Promise((resolve) => {
        const img = document.querySelector('#grab-sekata img');
        if (!img) return resolve();
        if (img.complete && img.naturalHeight > 0) return resolve();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        setTimeout(resolve, 3000);
      });
    `
  });
  await new Promise(r => setTimeout(r, 1200));

  const shotDesktop = await send('Page.captureScreenshot', { format: 'png' });
  if (shotDesktop && shotDesktop.data) {
    fs.writeFileSync(path.join(artifactDir, 'verify_cta_live_desktop.png'), Buffer.from(shotDesktop.data, 'base64'));
    console.log('Saved verify_cta_live_desktop.png');
  }

  // 2. Switch to Mobile (375x812, deviceScaleFactor: 2)
  console.log('Emulating mobile viewport...');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 375,
    height: 812,
    deviceScaleFactor: 2,
    mobile: true
  });
  await new Promise(r => setTimeout(r, 800));

  const scrollResult = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const el = document.getElementById('grab-sekata');
        if (el) {
          el.scrollIntoView({ behavior: 'instant', block: 'start' });
          return { found: true, top: el.getBoundingClientRect().top, scrollY: window.scrollY };
        }
        return { found: false };
      })()
    `,
    returnByValue: true
  });
  console.log('Mobile scroll result:', scrollResult.result?.value);
  await new Promise(r => setTimeout(r, 2000));

  const shotMobile = await send('Page.captureScreenshot', { format: 'png' });
  if (shotMobile && shotMobile.data) {
    fs.writeFileSync(path.join(artifactDir, 'verify_cta_live_mobile.png'), Buffer.from(shotMobile.data, 'base64'));
    console.log('Saved verify_cta_live_mobile.png');
  }

  console.log('All live captures complete!');
  ws.close();
  chromeProc.kill();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
