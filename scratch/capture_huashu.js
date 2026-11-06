import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-huashu';
const port = 9225;
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
      document.body.style.overflow = 'unset';
    `
  });

  async function captureTarget(selector, filename, offset = 0) {
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          document.body.style.overflow = 'unset';
          const el = document.querySelector('${selector}');
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY + ${offset};
            window.scrollTo(0, top);
          }
        })()
      `
    });
    await new Promise(r => setTimeout(r, 800));
    const res = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, filename), Buffer.from(res.data, 'base64'));
    console.log('Saved ' + filename);
  }

  // 1. Compact Ready to Reserve (Gambar 1 replacement)
  await captureTarget('#reserve', 'huashu_01_reserve_compact.png', -20);

  // 2. Animated Brand Kinetic Typography (Gambar 2 replacement)
  await captureTarget('section.bg-\\[\\#0d0806\\]', 'huashu_02_kinetic_typography.png', 0);

  // 3. Minimalist Slowbar Spatial Presence (Gambar 3 replacement)
  await captureTarget('#slowbar-space', 'huashu_03_slowbar_spatial.png', 0);

  ws.close();
  chromeProc.kill();
  console.log('Huashu verification captures completed!');
}

main().catch(console.error);

