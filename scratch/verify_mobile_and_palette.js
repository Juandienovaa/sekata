import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-mobile-test';
const port = 9245;
const artifactDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b9595647-c32c-4cc9-b7b5-20be60d3e6e7';

async function main() {
  // Launch Chrome with mobile viewport 390x844
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    '--window-size=390,844',
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

  // Wait until #hero and #reserve exist in DOM
  let domReady = false;
  for (let i = 0; i < 30; i++) {
    const check = await send('Runtime.evaluate', {
      expression: 'Boolean(document.querySelector("#hero") && document.querySelector("#reserve"))'
    });
    if (check?.result?.value === true) {
      domReady = true;
      break;
    }
    await new Promise(r => setTimeout(r, 500));
  }
  console.log('DOM Ready status:', domReady);

  // Disable smooth scroll
  await send('Runtime.evaluate', {
    expression: `
      const s = document.createElement('style');
      s.innerHTML = '* { scroll-behavior: auto !important; }';
      document.head.appendChild(s);
    `
  });

  await new Promise(r => setTimeout(r, 1500));

  async function capture(name) {
    const screenshot = await send('Page.captureScreenshot', { format: 'png' });
    const filePath = path.join(artifactDir, `${name}.png`);
    fs.writeFileSync(filePath, Buffer.from(screenshot.data, 'base64'));
    console.log(`Saved: ${filePath}`);
  }

  // 1. Mobile Hero
  await capture('mobile_01_hero');

  // 2. Mobile Ready to Reserve (Gambar 2 verification)
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const el = document.querySelector("#reserve");
        if (el) {
          const rect = el.getBoundingClientRect();
          window.scrollTo(0, rect.top + window.scrollY - 100);
        }
      })()
    `
  });
  await new Promise(r => setTimeout(r, 800));
  await capture('mobile_02_ready_to_reserve');

  // 3. Mobile Menu Header
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const el = document.querySelector("#menu");
        if (el) {
          const rect = el.getBoundingClientRect();
          window.scrollTo(0, rect.top + window.scrollY);
        }
      })()
    `
  });
  await new Promise(r => setTimeout(r, 800));
  await capture('mobile_03_menu_header');

  // 4. Mobile Navbar Drawer (Gambar 3 verification)
  // Click Menu button to open drawer
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        // Find menu toggle button
        const btns = Array.from(document.querySelectorAll('button'));
        const menuBtn = btns.find(b => b.textContent.includes('MENU') || b.getAttribute('aria-label')?.includes('menu') || b.querySelector('svg.lucide-menu'));
        if (menuBtn) {
          menuBtn.click();
        }
      })()
    `
  });
  await new Promise(r => setTimeout(r, 1000));
  await capture('mobile_04_navbar_drawer');

  // Scroll inside drawer if needed to see the contact block
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const drawer = document.querySelector('.overflow-y-auto') || window;
        if (drawer.scrollTo) {
          drawer.scrollTo(0, 500);
        }
      })()
    `
  });
  await new Promise(r => setTimeout(r, 600));
  await capture('mobile_05_navbar_drawer_bottom');

  console.log('Mobile verification finished!');
  ws.close();
  chromeProc.kill();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
