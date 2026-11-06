import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-verify-all';
const port = 9255;
const artifactDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b9595647-c32c-4cc9-b7b5-20be60d3e6e7';

async function main() {
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    '--window-size=1440,900',
    'http://localhost:3001/'
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

  for (let i = 0; i < 30; i++) {
    const check = await send('Runtime.evaluate', {
      expression: 'Boolean(document.querySelector("#hero") && document.querySelector("#menu") && document.querySelector("#reserve"))'
    });
    if (check?.result?.value === true) break;
    await new Promise(r => setTimeout(r, 500));
  }

  await send('Runtime.evaluate', {
    expression: `
      const s = document.createElement('style');
      s.innerHTML = '* { scroll-behavior: auto !important; }';
      document.head.appendChild(s);
    `
  });

  await new Promise(r => setTimeout(r, 1000));

  async function capture(name) {
    const screenshot = await send('Page.captureScreenshot', { format: 'png' });
    const filePath = path.join(artifactDir, `${name}.png`);
    fs.writeFileSync(filePath, Buffer.from(screenshot.data, 'base64'));
    console.log(`Saved: ${filePath}`);
  }

  // 1. Hero English Clean
  await capture('check_01_hero_english_clean');

  // 2. Menu Header Fixed (Gambar 1 check)
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const el = document.querySelector("#menu");
        if (el) {
          const rect = el.getBoundingClientRect();
          window.scrollTo(0, rect.top + window.scrollY - 50);
        }
      })()
    `
  });
  await new Promise(r => setTimeout(r, 800));
  await capture('check_02_menu_header_fixed');

  // 3. Ready to Reserve with English Hashtag (Gambar 2 check)
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const el = document.querySelector("#reserve");
        if (el) {
          const rect = el.getBoundingClientRect();
          window.scrollTo(0, rect.top + window.scrollY - 200);
        }
      })()
    `
  });
  await new Promise(r => setTimeout(r, 800));
  await capture('check_03_ready_to_reserve_hashtag');

  // 4. Open Navbar Drawer (Animation check)
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const btns = Array.from(document.querySelectorAll('button'));
        const menuBtn = btns.find(b => b.textContent.includes('MENU'));
        if (menuBtn) menuBtn.click();
      })()
    `
  });
  await new Promise(r => setTimeout(r, 800));
  await capture('check_04_navbar_drawer_animated');

  console.log('All verification captures completed!');
  ws.close();
  chromeProc.kill();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

