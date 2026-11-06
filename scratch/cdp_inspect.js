import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-cdp';
const port = 9222;
const artifactDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b9595647-c32c-4cc9-b7b5-20be60d3e6e7';

async function main() {
  if (fs.existsSync(userDataDir)) {
    try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch (e) {}
  }

  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    '--window-size=1440,900',
    'http://localhost:3001/'
  ]);

  // Wait for CDP to be available
  let versionData = null;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 500));
    try {
      versionData = await new Promise((res, rej) => {
        http.get(`http://127.0.0.1:${port}/json/list`, resp => {
          let data = '';
          resp.on('data', chunk => data += chunk);
          resp.on('end', () => res(JSON.parse(data)));
        }).on('error', rej);
      });
      if (versionData && versionData.length > 0) break;
    } catch (e) {}
  }

  if (!versionData || !versionData[0]) {
    console.error('Failed to connect to Chrome CDP');
    chromeProc.kill();
    return;
  }

  const wsUrl = versionData[0].webSocketDebuggerUrl;
  console.log('Connected to WS:', wsUrl);

  // We can use standard WebSocket in Node 24!
  const ws = new WebSocket(wsUrl);
  await new Promise(res => ws.onopen = res);

  let id = 1;
  function send(method, params = {}) {
    return new Promise(res => {
      const curId = id++;
      const handler = (evt) => {
        const msg = JSON.parse(evt.data);
        if (msg.id === curId) {
          ws.removeEventListener('message', handler);
          res(msg.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id: curId, method, params }));
    });
  }

  await send('Page.enable');
  await send('Runtime.enable');
  await send('DOM.enable');

  // Let page load & settle
  await new Promise(r => setTimeout(r, 1500));

  const sections = [
    { name: 'critique_01_hero.png', selector: '#hero' },
    { name: 'critique_02_countdown.png', selector: '#countdown' },
    { name: 'critique_03_menu.png', selector: '#menu' },
    { name: 'critique_04_filosofi.png', selector: '#filosofi' },
    { name: 'critique_05_reserve.png', selector: '#reserve' },
    { name: 'critique_06_cerita.png', selector: '#cerita' },
    { name: 'critique_07_lokasi.png', selector: '#lokasi' },
    { name: 'critique_08_footer.png', selector: 'footer' }
  ];

  for (const s of sections) {
    try {
      await send('Runtime.evaluate', {
        expression: `
          const el = document.querySelector('${s.selector}');
          if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
        `
      });
      await new Promise(r => setTimeout(r, 800));

      const screenshot = await send('Page.captureScreenshot', { format: 'png' });
      if (screenshot && screenshot.data) {
        const filePath = path.join(artifactDir, s.name);
        fs.writeFileSync(filePath, Buffer.from(screenshot.data, 'base64'));
        console.log(`Captured ${s.name}: ${fs.statSync(filePath).size} bytes`);
      }
    } catch (err) {
      console.error(`Error capturing ${s.name}:`, err.message);
    }
  }

  ws.close();
  chromeProc.kill();
  console.log('All critiques captured successfully.');
}

main().catch(console.error);

