import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-poster';
const port = 9275;

async function main() {
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    '--window-size=1920,1080',
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

  // Extract video frame using canvas
  const result = await send('Runtime.evaluate', {
    awaitPromise: true,
    expression: `
      new Promise((resolve, reject) => {
        const vid = document.querySelector('video');
        if (!vid) return reject('No video found');

        const tryCapture = () => {
          if (vid.videoWidth > 0 && vid.videoHeight > 0) {
            const canvas = document.createElement('canvas');
            canvas.width = vid.videoWidth;
            canvas.height = vid.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL('image/jpeg', 0.92));
          } else {
            setTimeout(tryCapture, 100);
          }
        };

        if (vid.readyState >= 2) {
          tryCapture();
        } else {
          vid.addEventListener('loadeddata', tryCapture);
          setTimeout(tryCapture, 500);
        }
      })
    `,
    returnByValue: true
  });

  if (result.result?.value) {
    const dataUrl = result.result.value;
    const base64Data = dataUrl.replace(/^data:image\/jpeg;base64,/, '');
    fs.writeFileSync('public/hero-poster.jpg', Buffer.from(base64Data, 'base64'));
    console.log('Successfully saved public/hero-poster.jpg! Size:', fs.statSync('public/hero-poster.jpg').size);
  } else {
    console.error('Failed to capture frame:', result);
  }

  ws.close();
  chromeProc.kill();
}

main().catch(console.error);

