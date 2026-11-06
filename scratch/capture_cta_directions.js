import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-cta';
const port = 9335;
const artifactDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b9595647-c32c-4cc9-b7b5-20be60d3e6e7';
const targetHtml = path.join(artifactDir, 'cta-typography-directions.html');
const targetUrl = `file:///${targetHtml.replace(/\\/g, '/')}`;

async function main() {
  console.log('Target URL:', targetUrl);

  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    '--window-size=1280,1050',
    '--allow-file-access-from-files',
    '--disable-web-security',
    targetUrl
  ]);

  await new Promise(r => setTimeout(r, 2500));

  const list = await new Promise((res, rej) => {
    http.get(`http://127.0.0.1:${port}/json/list`, resp => {
      let data = '';
      resp.on('data', chunk => data += chunk);
      resp.on('end', () => res(JSON.parse(data)));
    }).on('error', rej);
  });

  const page = list.find(p => p.type === 'page') || list[0];
  if (!page) {
    console.error('No page found');
    chromeProc.kill();
    process.exit(1);
  }

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(res => ws.addEventListener('open', res));

  let reqId = 1;
  const pending = new Map();
  ws.addEventListener('message', (e) => {
    const msg = JSON.parse(e.data);
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg.result || msg.error);
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
  await send('DOM.enable');

  // Allow external Tailwind script & fonts to finish rendering
  await new Promise(r => setTimeout(r, 2000));

  console.log('1. Capturing Direction 1 (Editorial Broadside)...');
  const shot1 = await send('Page.captureScreenshot', { format: 'png' });
  if (shot1 && shot1.data) {
    fs.writeFileSync(path.join(artifactDir, 'cta_direction_1_editorial.png'), Buffer.from(shot1.data, 'base64'));
    console.log('Saved cta_direction_1_editorial.png');
  }

  console.log('2. Switching & Capturing Direction 2 (Marigold Daylight)...');
  await send('Runtime.evaluate', { expression: 'setDirection(2);' });
  await new Promise(r => setTimeout(r, 800));
  const shot2 = await send('Page.captureScreenshot', { format: 'png' });
  if (shot2 && shot2.data) {
    fs.writeFileSync(path.join(artifactDir, 'cta_direction_2_marigold.png'), Buffer.from(shot2.data, 'base64'));
    console.log('Saved cta_direction_2_marigold.png');
  }

  console.log('3. Switching & Capturing Direction 3 (Slowbar Ritual Pass)...');
  await send('Runtime.evaluate', { expression: 'setDirection(3);' });
  await new Promise(r => setTimeout(r, 800));
  const shot3 = await send('Page.captureScreenshot', { format: 'png' });
  if (shot3 && shot3.data) {
    fs.writeFileSync(path.join(artifactDir, 'cta_direction_3_ritual_pass.png'), Buffer.from(shot3.data, 'base64'));
    console.log('Saved cta_direction_3_ritual_pass.png');
  }

  console.log('4. Switching to Mobile View (Direction 1 Mobile)...');
  await send('Runtime.evaluate', { expression: 'setDirection(1); setViewMode("mobile");' });
  await new Promise(r => setTimeout(r, 800));
  const shot4 = await send('Page.captureScreenshot', { format: 'png' });
  if (shot4 && shot4.data) {
    fs.writeFileSync(path.join(artifactDir, 'cta_mobile_direction_1.png'), Buffer.from(shot4.data, 'base64'));
    console.log('Saved cta_mobile_direction_1.png');
  }

  console.log('All screenshots captured successfully!');
  ws.close();
  chromeProc.kill();
  process.exit(0);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
