import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-clean';
const port = 9231;
const artifactDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b9595647-c32c-4cc9-b7b5-20be60d3e6e7';

async function main() {
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    '--window-size=1440,900',
    'http://localhost:3001/'
  ]);

  await new Promise(r => setTimeout(r, 3000));

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

  // Wait until #reserve exists in DOM
  let attempts = 0;
  while (attempts < 20) {
    const check = await send('Runtime.evaluate', {
      expression: 'Boolean(document.querySelector("#reserve"))'
    });
    if (check.result.value === true) break;
    await new Promise(r => setTimeout(r, 500));
    attempts++;
  }
  console.log(`Ready after ${attempts} checks.`);

  // Kill smooth scroll everywhere
  await send('Runtime.evaluate', {
    expression: `
      const style = document.createElement('style');
      style.innerHTML = '* { scroll-behavior: auto !important; }';
      document.head.appendChild(style);
    `
  });

  const targets = [
    { name: 'huashu_01_reserve_compact.png', sel: '#reserve', offset: -250 },
    { name: 'huashu_02_kinetic_typography.png', sel: '#brand-kinetic', offset: -50 },
    { name: 'huashu_03_slowbar_spatial.png', sel: '#slowbar-space', offset: -50 }
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
          return {
            found: true,
            targetTop,
            actualScrollY: window.scrollY
          };
        })()
      `,
      returnByValue: true
    });
    console.log(`Target ${t.name}:`, evalRes.result.value);

    await new Promise(r => setTimeout(r, 800));

    const snap = await send('Page.captureScreenshot', { format: 'png' });
    const outPath = path.join(artifactDir, t.name);
    fs.writeFileSync(outPath, Buffer.from(snap.data, 'base64'));
    console.log(`Wrote ${t.name} (${fs.statSync(outPath).size} bytes)`);
  }

  ws.close();
  chromeProc.kill();
  console.log('Capture clean done!');
}

main().catch(console.error);

