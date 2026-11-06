import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-cdp';
const port = 9222;

const chromeProc = spawn(chromePath, [
  '--headless=new',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${userDataDir}`,
  '--window-size=1440,900',
  'http://localhost:3001/'
]);

await new Promise(r => setTimeout(r, 1500));

http.get(`http://127.0.0.1:${port}/json/list`, resp => {
  let data = '';
  resp.on('data', chunk => data += chunk);
  resp.on('end', () => {
    const list = JSON.parse(data);
    console.log('Pages:', list.length);
    if (list[0]) {
      console.log('WS URL:', list[0].webSocketDebuggerUrl);
      const ws = new WebSocket(list[0].webSocketDebuggerUrl);
      ws.addEventListener('open', () => {
        console.log('WS Open Success!');
        ws.send(JSON.stringify({ id: 1, method: 'Page.enable' }));
      });
      ws.addEventListener('message', (e) => {
        console.log('Got message:', e.data.slice(0, 50));
        ws.close();
        chromeProc.kill();
        process.exit(0);
      });
    }
  });
});

