import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-hero-menu';
const port = 9235;
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

  // Disable smooth scroll
  await send('Runtime.evaluate', {
    expression: `
      const s = document.createElement('style');
      s.innerHTML = '* { scroll-behavior: auto !important; }';
      document.head.appendChild(s);
    `
  });

  await new Promise(r => setTimeout(r, 1000));

  async function captureTarget(name, evalScrollExpr, waitMs = 500) {
    if (evalScrollExpr) {
      await send('Runtime.evaluate', { expression: evalScrollExpr });
      await new Promise(r => setTimeout(r, waitMs));
    }
    const screenshot = await send('Page.captureScreenshot', { format: 'png' });
    const filePath = path.join(artifactDir, `${name}.png`);
    fs.writeFileSync(filePath, Buffer.from(screenshot.data, 'base64'));
    console.log(`Saved: ${filePath}`);
  }

  // 1. Hero Section (top of page)
  await captureTarget('hero_clean_hook', 'window.scrollTo(0, 0);');

  // 2. Menu Section Header (Featured Products)
  await captureTarget('menu_promotional_header', `
    const el = document.querySelector("#menu");
    if (el) {
      const pos = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo(0, pos);
    }
  `);

  // 3. Ready to Reserve (compact & aesthetic, without 6 kursi)
  await captureTarget('reserve_aesthetic_bar', `
    (() => {
      const el = document.querySelector("#reserve");
      if (!el) return { found: false };
      const rect = el.getBoundingClientRect();
      const targetTop = rect.top + window.scrollY - 200;
      window.scrollTo(0, targetTop);
      return { found: true, targetTop };
    })()
  `, 1000);

  // 4. Bottom of page (Crowd canvas directly to Footer, confirming InstagramGrid removed)
  await captureTarget('bottom_flow_clean', `
    window.scrollTo(0, document.body.scrollHeight - 950);
  `);

  console.log('All verification captures completed!');
  ws.close();
  chromeProc.kill();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
