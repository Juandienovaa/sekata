import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-final';
const port = 9224;
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
    `
  });

  // 1. Menu Modal
  await send('Runtime.evaluate', {
    expression: `
      const menuBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('MENU'));
      if (menuBtn) menuBtn.click();
    `
  });
  await new Promise(r => setTimeout(r, 600));
  let snap = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'final_01_menu_modal.png'), Buffer.from(snap.data, 'base64'));
  console.log('Saved final_01_menu_modal.png');

  // Close menu modal and unlock body scroll
  await send('Runtime.evaluate', {
    expression: `
      const closeBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('TUTUP'));
      if (closeBtn) closeBtn.click();
      document.body.style.overflow = 'unset';
    `
  });
  await new Promise(r => setTimeout(r, 600));

  // Helper to scroll to element and capture
  async function captureElement(selector, filename, offset = 0) {
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
    await new Promise(r => setTimeout(r, 700));
    const res = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, filename), Buffer.from(res.data, 'base64'));
    console.log('Saved ' + filename);
  }

  // 2. Ticker + Filosofi
  await captureElement('#filosofi', 'final_02_ticker_filosofi.png', -50);

  // 3. Ready to Reserve
  await captureElement('#reserve', 'final_03_ready_to_reserve.png', 0);

  // 4. Wholesale Section
  await captureElement('section.border-b-hairline .bg-\\[\\#244549\\]', 'final_04_wholesale.png', -30);

  // 5. Instagram Section
  await captureElement('section.bg-burnt-orange', 'final_05_instagram.png', 0);

  // 6. Contact Section
  await captureElement('#lokasi', 'final_06_contact.png', 0);

  ws.close();
  chromeProc.kill();
  console.log('All final review captures done!');
}

main().catch(console.error);

