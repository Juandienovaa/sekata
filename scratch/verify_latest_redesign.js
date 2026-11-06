import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-verify-latest';
const port = 9260;
const artifactDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b9595647-c32c-4cc9-b7b5-20be60d3e6e7';

async function capture() {
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    '--window-size=1280,800',
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
      expression: 'Boolean(document.querySelector("#hero") && document.querySelector("#reserve") && document.querySelector("#countdown"))',
      returnByValue: true
    });
    if (check.result?.value === true) break;
    await new Promise(r => setTimeout(r, 300));
  }

  await new Promise(r => setTimeout(r, 1000));

  // 1. Capture Hero Section (Desktop Viewport 1280x800)
  const heroShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'check_01_hero_unclipped.png'), Buffer.from(heroShot.data, 'base64'));
  console.log('check_01_hero_unclipped.png saved');

  // 2. Capture ReadyToReserve Section (#reserve)
  await send('Runtime.evaluate', {
    expression: 'document.querySelector("#reserve").scrollIntoView({ block: "center", behavior: "instant" })'
  });
  await new Promise(r => setTimeout(r, 600));
  const reserveShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'check_02_ready_to_reserve_hashtag.png'), Buffer.from(reserveShot.data, 'base64'));
  console.log('check_02_ready_to_reserve_hashtag.png saved');

  // 3. Capture Compact Grand Opening Countdown Section (#countdown)
  await send('Runtime.evaluate', {
    expression: 'document.querySelector("#countdown").scrollIntoView({ block: "center", behavior: "instant" })'
  });
  await new Promise(r => setTimeout(r, 600));
  const countdownShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'check_03_grand_opening_compact.png'), Buffer.from(countdownShot.data, 'base64'));
  console.log('check_03_grand_opening_compact.png saved');

  // 4. Switch to "Papan Menu Kedai" (board view) and scroll to bottom to verify dashed boxes are gone
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const boardBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Papan Menu Kedai'));
        if (boardBtn) boardBtn.click();
      })()
    `
  });
  await new Promise(r => setTimeout(r, 600));
  await send('Runtime.evaluate', {
    expression: 'window.scrollBy(0, 1800)'
  });
  await new Promise(r => setTimeout(r, 600));
  const boardBottomShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'check_04_menu_board_no_dashed_boxes.png'), Buffer.from(boardBottomShot.data, 'base64'));
  console.log('check_04_menu_board_no_dashed_boxes.png saved');

  // 5. Test Mobile Viewport (iPhone 14: 390x844) for Hero unclipped
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' });
  await new Promise(r => setTimeout(r, 800));
  const mobileHeroShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'check_05_mobile_hero_unclipped.png'), Buffer.from(mobileHeroShot.data, 'base64'));
  console.log('check_05_mobile_hero_unclipped.png saved');

  ws.close();
  chromeProc.kill();
  console.log('All verification captures completed successfully.');
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});

