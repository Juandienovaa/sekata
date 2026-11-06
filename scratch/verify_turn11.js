import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-turn11';
const port = 9250;
const artifactDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b9595647-c32c-4cc9-b7b5-20be60d3e6e7';

async function main() {
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    '--window-size=390,844',
    'http://localhost:3001/'
  ]);

  let list = null;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 500));
    try {
      list = await new Promise((res, rej) => {
        http.get(`http://127.0.0.1:${port}/json/list`, resp => {
          let data = '';
          resp.on('data', chunk => data += chunk);
          resp.on('end', () => res(JSON.parse(data)));
        }).on('error', rej);
      });
      if (list && list.length > 0) break;
    } catch (e) {}
  }

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
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });

  // Wait until mounted
  for (let i = 0; i < 30; i++) {
    const check = await send('Runtime.evaluate', {
      expression: 'Boolean(document.querySelector("#countdown") && document.querySelector("#menu"))'
    });
    if (check?.result?.value === true) break;
    await new Promise(r => setTimeout(r, 500));
  }

  await new Promise(r => setTimeout(r, 1000));

  // 1. Capture ColorfulStatement section
  await send('Runtime.evaluate', {
    expression: 'window.scrollTo(0, window.innerHeight * 0.9);'
  });
  await new Promise(r => setTimeout(r, 600));

  let shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'verify_11_statement_mobile.png'), Buffer.from(shot.data, 'base64'));
  console.log('Saved verify_11_statement_mobile.png');

  // 2. Capture Compact Bento Countdown section
  await send('Runtime.evaluate', {
    expression: 'document.querySelector("#countdown").scrollIntoView({ behavior: "instant", block: "center" })'
  });
  await new Promise(r => setTimeout(r, 600));

  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'verify_11_countdown_compact.png'), Buffer.from(shot.data, 'base64'));
  console.log('Saved verify_11_countdown_compact.png');

  // 3. Capture Menu Card with Eye + Cart Buttons
  await send('Runtime.evaluate', {
    expression: 'document.querySelector("#menu").scrollIntoView({ behavior: "instant", block: "start" }); window.scrollBy(0, 160);'
  });
  await new Promise(r => setTimeout(r, 600));

  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'verify_11_card_eye_and_cart.png'), Buffer.from(shot.data, 'base64'));
  console.log('Saved verify_11_card_eye_and_cart.png');

  ws.close();
  chromeProc.kill();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

