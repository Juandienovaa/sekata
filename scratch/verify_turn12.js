import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-turn12';
const port = 9260;
const artifactDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b9595647-c32c-4cc9-b7b5-20be60d3e6e7';

async function main() {
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    '--window-size=390,844',
    'http://localhost:3000/'
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

  for (let i = 0; i < 20; i++) {
    const check = await send('Runtime.evaluate', {
      expression: 'Boolean(document.querySelector("#countdown") && document.querySelector("#menu"))'
    });
    if (check?.result?.value === true) break;
    await new Promise(r => setTimeout(r, 500));
  }

  await new Promise(r => setTimeout(r, 1500));

  // 1. Capture Hero Section (Font Check)
  let shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'verify_12_hero_font.png'), Buffer.from(shot.data, 'base64'));
  console.log('Saved verify_12_hero_font.png');

  // 2. Capture Countdown (Gambar 3 style, no background, 4-column hairline divider)
  await send('Runtime.evaluate', {
    expression: 'document.querySelector("#countdown").scrollIntoView({ behavior: "instant", block: "center" })'
  });
  await new Promise(r => setTimeout(r, 600));

  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'verify_12_countdown_gambar3.png'), Buffer.from(shot.data, 'base64'));
  console.log('Saved verify_12_countdown_gambar3.png');

  // 3. Capture Menu Title (Font Check)
  await send('Runtime.evaluate', {
    expression: 'document.querySelector("#menu").scrollIntoView({ behavior: "instant", block: "start" })'
  });
  await new Promise(r => setTimeout(r, 600));

  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'verify_12_menu_font.png'), Buffer.from(shot.data, 'base64'));
  console.log('Saved verify_12_menu_font.png');

  ws.close();
  chromeProc.kill();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

