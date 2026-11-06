import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-verify-board';
const port = 9265;
const artifactDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b9595647-c32c-4cc9-b7b5-20be60d3e6e7';

async function capture() {
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    '--window-size=1280,1000',
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

  // Wait for React hydration
  for (let i = 0; i < 30; i++) {
    const check = await send('Runtime.evaluate', {
      expression: 'Boolean(document.querySelector("#hero") && document.querySelector("#menu"))',
      returnByValue: true
    });
    if (check.result?.value === true) break;
    await new Promise(r => setTimeout(r, 300));
  }
  await new Promise(r => setTimeout(r, 1000));

  // Scroll to menu section
  await send('Runtime.evaluate', {
    expression: 'document.querySelector("#menu").scrollIntoView({ block: "start", behavior: "instant" })'
  });
  await new Promise(r => setTimeout(r, 600));

  // Click Board View
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const boardBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Papan Menu Kedai'));
        if (boardBtn) boardBtn.click();
      })()
    `
  });
  await new Promise(r => setTimeout(r, 800));

  // Scroll inside the board to bottom of menu
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const el = document.querySelector('#menu');
        if (el) window.scrollBy(0, el.offsetHeight - 500);
      })()
    `
  });
  await new Promise(r => setTimeout(r, 800));

  const shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'check_06_menu_board_bottom_verified.png'), Buffer.from(shot.data, 'base64'));
  console.log('check_06_menu_board_bottom_verified.png saved');

  ws.close();
  chromeProc.kill();
}

capture().catch(console.error);
