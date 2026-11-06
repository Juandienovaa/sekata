import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-vframe';
const port = 9285;

// Create a local html page that loads the video and draws frame 0 to canvas
const html = `
<!DOCTYPE html>
<html>
<body>
<video id="v" src="http://localhost:3001/herosection.mp4" muted autoplay playsinline style="width:1280px;height:720px;"></video>
<canvas id="c"></canvas>
<script>
  const v = document.getElementById('v');
  const c = document.getElementById('c');
  v.addEventListener('playing', () => {
    setTimeout(() => {
      c.width = v.videoWidth || 1280;
      c.height = v.videoHeight || 720;
      const ctx = c.getContext('2d');
      ctx.drawImage(v, 0, 0, c.width, c.height);
      window.capturedFrame = c.toDataURL('image/jpeg', 0.88);
    }, 200);
  });
</script>
</body>
</html>
`;
fs.writeFileSync('scratch/extract.html', html);

async function run() {
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    'file:///d:/SEKATA.TNJ/scratch/extract.html'
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

  let frame = null;
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 300));
    const res = await send('Runtime.evaluate', {
      expression: 'window.capturedFrame',
      returnByValue: true
    });
    if (res.result?.value && res.result.value.startsWith('data:image/jpeg')) {
      frame = res.result.value;
      break;
    }
  }

  if (frame) {
    const base64 = frame.replace(/^data:image\/jpeg;base64,/, '');
    fs.writeFileSync('public/hero-poster.jpg', Buffer.from(base64, 'base64'));
    console.log('Saved public/hero-poster.jpg, size:', fs.statSync('public/hero-poster.jpg').size);
  } else {
    console.log('Frame capture timed out');
  }

  ws.close();
  chromeProc.kill();
}

run().catch(console.error);

