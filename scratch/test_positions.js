import { spawn } from 'child_process';
import http from 'http';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-pos';
const port = 9227;

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

  const selectors = ['#hero', '#menu', '#filosofi', '#reserve', '#slowbar-space', '#lokasi'];

  for (const s of selectors) {
    const res = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const el = document.querySelector('${s}');
          if (!el) return { found: false };
          const rect = el.getBoundingClientRect();
          return {
            found: true,
            top: rect.top,
            scrollY: window.scrollY,
            absoluteTop: rect.top + window.scrollY,
            height: rect.height,
            width: rect.width
          };
        })()
      `,
      returnByValue: true
    });
    console.log(`Selector ${s}:`, res.result.value);
  }

  ws.close();
  chromeProc.kill();
}

main().catch(console.error);

