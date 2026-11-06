import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-clean-elements';
const port = 9290;
const artifactDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b9595647-c32c-4cc9-b7b5-20be60d3e6e7';

async function main() {
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    '--window-size=1280,800',
    'http://localhost:3001/'
  ]);

  let list = null;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 400));
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

  for (let i = 0; i < 30; i++) {
    const check = await send('Runtime.evaluate', {
      expression: 'Boolean(document.querySelector("#hero") && document.querySelector("#countdown"))',
      returnByValue: true
    });
    if (check.result?.value === true) break;
    await new Promise(r => setTimeout(r, 300));
  }
  await new Promise(r => setTimeout(r, 1000));

  // 1. Capture Hero Section
  const heroShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'verify_01_hero_no_poster_bug.png'), Buffer.from(heroShot.data, 'base64'));
  console.log('verify_01_hero_no_poster_bug.png saved');

  // 2. Capture Countdown Section
  await send('Runtime.evaluate', {
    expression: 'document.querySelector("#countdown").scrollIntoView({ block: "center", behavior: "instant" })'
  });
  await new Promise(r => setTimeout(r, 600));
  const countdownShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'verify_02_countdown_no_spin.png'), Buffer.from(countdownShot.data, 'base64'));
  console.log('verify_02_countdown_no_spin.png saved');

  ws.close();
  chromeProc.kill();
}

main().catch(console.error);

