import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-poster2';
const port = 9280;

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

  await new Promise(r => setTimeout(r, 1500));

  const diag = await send('Runtime.evaluate', {
    awaitPromise: true,
    expression: `
      new Promise(async (resolve) => {
        const vid = document.querySelector('video');
        if (!vid) return resolve({ error: 'no video' });
        
        await new Promise(r => {
          if (vid.readyState >= 2) return r();
          vid.onloadeddata = r;
          setTimeout(r, 2000);
        });

        const canvas = document.createElement('canvas');
        canvas.width = vid.videoWidth || 1280;
        canvas.height = vid.videoHeight || 720;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);
        
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
        resolve({
          readyState: vid.readyState,
          videoWidth: vid.videoWidth,
          videoHeight: vid.videoHeight,
          currentTime: vid.currentTime,
          dataUrlPrefix: dataUrl.substring(0, 50),
          length: dataUrl.length,
          dataUrl: dataUrl
        });
      })
    `,
    returnByValue: true
  });

  console.log('Diag:', {
    readyState: diag.result.value.readyState,
    videoWidth: diag.result.value.videoWidth,
    videoHeight: diag.result.value.videoHeight,
    length: diag.result.value.length,
    prefix: diag.result.value.dataUrlPrefix
  });

  if (diag.result.value.length > 500) {
    const raw = diag.result.value.dataUrl.replace(/^data:image\/jpeg;base64,/, '');
    fs.writeFileSync('public/hero-poster.jpg', Buffer.from(raw, 'base64'));
    console.log('Saved hero-poster.jpg size:', fs.statSync('public/hero-poster.jpg').size);
  }

  ws.close();
  chromeProc.kill();
}

main().catch(console.error);

