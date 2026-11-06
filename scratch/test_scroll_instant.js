import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-instant';
const port = 9229;
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

  // Kill smooth scroll everywhere with inline style injection
  await send('Runtime.evaluate', {
    expression: `
      const style = document.createElement('style');
      style.innerHTML = '* { scroll-behavior: auto !important; }';
      document.head.appendChild(style);
    `
  });

  const targets = [
    { name: 'huashu_01_reserve_compact.png', sel: '#reserve', offset: -250 },
    { name: 'huashu_02_kinetic_typography.png', sel: 'section.bg-\\[\\#0d0806\\]', offset: 0 },
    { name: 'huashu_03_slowbar_spatial.png', sel: '#slowbar-space', offset: 0 }
  ];

  for (const t of targets) {
    const evalRes = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const el = document.querySelector('${t.sel}');
          if (!el) return { found: false };
          const rect = el.getBoundingClientRect();
          const targetTop = rect.top + window.scrollY + ${t.offset};
          window.scrollTo(0, targetTop);
          document.documentElement.scrollTop = targetTop;
          document.body.scrollTop = targetTop;
          return {
            found: true,
            targetTop,
            actualScrollY: window.scrollY,
            docScrollTop: document.documentElement.scrollTop
          };
        })()
      `,
      returnByValue: true
    });
    console.log(`Scroll for ${t.sel}:`, evalRes.result.value);

    await new Promise(r => setTimeout(r, 600));

    const snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, t.name), Buffer.from(snap.data, 'base64'));
    console.log(`Saved ${t.name}: ${fs.statSync(path.join(artifactDir, t.name)).size} bytes`);
  }

  ws.close();
  chromeProc.kill();
  console.log('Instant scroll capture completed!');
}

main().catch(console.error);

