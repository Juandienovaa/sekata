import { spawn } from 'child_process';
import http from 'http';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-font-test';
const port = 9252;

async function main() {
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
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
  await send('Network.enable');

  // Wait until mounted
  for (let i = 0; i < 20; i++) {
    const res = await send('Runtime.evaluate', {
      expression: 'Boolean(document.querySelector("h1"))'
    });
    if (res?.result?.value === true) break;
    await new Promise(r => setTimeout(r, 500));
  }

  const fontCheck = await send('Runtime.evaluate', {
    expression: `(() => {
      const h1 = document.querySelector('h1');
      const body = document.body;
      const computedH1 = window.getComputedStyle(h1);
      const computedBody = window.getComputedStyle(body);
      return JSON.stringify({
        bodyFont: computedBody.fontFamily,
        h1Font: computedH1.fontFamily,
        rootSansVar: window.getComputedStyle(document.documentElement).getPropertyValue('--font-sans'),
        loadedFonts: Array.from(document.fonts).map(f => f.family + ' ' + f.weight + ' ' + f.status)
      });
    })()`,
    returnByValue: true
  });

  console.log('Font Check Result:', fontCheck.result.value);

  ws.close();
  chromeProc.kill();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
