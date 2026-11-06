import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-cdp';
const port = 9222;
const artifactDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b9595647-c32c-4cc9-b7b5-20be60d3e6e7';

async function main() {
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    '--window-size=1440,900',
    'http://localhost:3001/'
  ]);

  await new Promise(r => setTimeout(r, 2000));

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

  // Disable smooth scrolling globally on page
  await send('Runtime.evaluate', {
    expression: `
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.style.scrollBehavior = 'auto';
    `
  });

  const targets = [
    { name: 'critique_03_menu.png', sel: '#menu' },
    { name: 'critique_04_filosofi.png', sel: '#filosofi' },
    { name: 'critique_05_cerita.png', sel: '#cerita' },
    { name: 'critique_06_lokasi.png', sel: '#lokasi' }
  ];

  for (const t of targets) {
    const evalRes = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const el = document.querySelector('${t.sel}');
          if (!el) return { found: false };
          const top = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo(0, top);
          return { found: true, top, scrollY: window.scrollY };
        })()
      `,
      returnByValue: true
    });
    console.log(`Scroll for ${t.sel}:`, evalRes.value);

    await new Promise(r => setTimeout(r, 800));

    const res = await send('Page.captureScreenshot', { format: 'png' });
    if (res && res.data) {
      const filePath = path.join(artifactDir, t.name);
      fs.writeFileSync(filePath, Buffer.from(res.data, 'base64'));
      console.log(`Saved ${t.name}: ${fs.statSync(filePath).size} bytes`);
    }
  }

  ws.close();
  chromeProc.kill();
  console.log('Done test scroll.');
}

main().catch(console.error);

