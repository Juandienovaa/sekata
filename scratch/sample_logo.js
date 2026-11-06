import http from 'http';
import { spawn } from 'child_process';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-sample';
const port = 9239;

async function main() {
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    'http://localhost:3001/'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  const list = await new Promise((res, rej) => {
    http.get(`http://127.0.0.1:${port}/json/list`, resp => {
      let data = '';
      resp.on('data', chunk => data += chunk);
      resp.on('end', () => res(JSON.parse(data)));
    }).on('error', rej);
  });
  const page = list.find(p => p.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r));
  
  let id = 1;
  function send(method, params = {}) {
    return new Promise(res => {
      const cur = id++;
      const handler = (e) => {
        const msg = JSON.parse(e.data);
        if (msg.id === cur) {
          ws.removeEventListener('message', handler);
          res(msg.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id: cur, method, params }));
    });
  }

  const evalRes = await send('Runtime.evaluate', {
    expression: `
      new Promise((resolve) => {
        const img = new Image();
        img.src = '/logo.png';
        img.onload = () => {
          const cvs = document.createElement('canvas');
          cvs.width = img.width;
          cvs.height = img.height;
          const ctx = cvs.getContext('2d');
          ctx.drawImage(img, 0, 0);
          const data = ctx.getImageData(0, 0, cvs.width, cvs.height).data;
          const colors = {};
          for (let i = 0; i < data.length; i += 4) {
            if (data[i + 3] > 180 && (data[i] < 220 || data[i+1] < 220 || data[i+2] < 220)) {
              const hex = '#' + ((1 << 24) + (data[i] << 16) + (data[i + 1] << 8) + data[i + 2]).toString(16).slice(1);
              colors[hex] = (colors[hex] || 0) + 1;
            }
          }
          const sorted = Object.entries(colors).sort((a, b) => b[1] - a[1]).slice(0, 5);
          resolve(sorted);
        };
      })
    `,
    awaitPromise: true,
    returnByValue: true
  });
  console.log('Sampled logo colors:', evalRes.result.value);
  ws.close();
  chromeProc.kill();
  process.exit(0);
}

main().catch(console.error);
