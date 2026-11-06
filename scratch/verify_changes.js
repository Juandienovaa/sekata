import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-verify-changes';
const port = 9295;
const artifactDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b9595647-c32c-4cc9-b7b5-20be60d3e6e7';

async function main() {
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    '--window-size=1280,900',
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
      expression: 'Boolean(document.querySelector("#filosofi"))',
      returnByValue: true
    });
    if (check.result?.value === true) break;
    await new Promise(r => setTimeout(r, 300));
  }
  await new Promise(r => setTimeout(r, 800));

  // 1. Capture BrandStory (#filosofi) showing Gambar 5 balanced text and Gambar 1 removed badge
  await send('Runtime.evaluate', {
    expression: 'document.querySelector("#filosofi").scrollIntoView({ block: "start", behavior: "instant" })'
  });
  await new Promise(r => setTimeout(r, 600));
  const shot1 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'verify_03_brand_story_balanced_text.png'), Buffer.from(shot1.data, 'base64'));
  console.log('verify_03_brand_story_balanced_text.png saved');

  // Scroll down a bit in #filosofi to see the photo (Gambar 1 check)
  await send('Runtime.evaluate', {
    expression: 'window.scrollBy(0, 600)'
  });
  await new Promise(r => setTimeout(r, 500));
  const shot2 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'verify_04_brand_story_photo_no_badge.png'), Buffer.from(shot2.data, 'base64'));
  console.log('verify_04_brand_story_photo_no_badge.png saved');

  // 2. Capture SlowbarSpatialPresence (Gambar 2 check)
  await send('Runtime.evaluate', {
    expression: 'window.scrollBy(0, 600)'
  });
  await new Promise(r => setTimeout(r, 500));
  const shot3 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'verify_05_spatial_presence_no_badge.png'), Buffer.from(shot3.data, 'base64'));
  console.log('verify_05_spatial_presence_no_badge.png saved');

  // 3. Scroll to bottom crowd canvas (Gambar 4 check)
  await send('Runtime.evaluate', {
    expression: 'document.querySelector("canvas") ? document.querySelector("canvas").scrollIntoView({ block: "center", behavior: "instant" }) : null'
  });
  await new Promise(r => setTimeout(r, 500));
  const shot4 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'verify_06_crowd_canvas_no_badge.png'), Buffer.from(shot4.data, 'base64'));
  console.log('verify_06_crowd_canvas_no_badge.png saved');

  ws.close();
  chromeProc.kill();
}

main().catch(console.error);

