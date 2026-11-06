import { spawn } from 'child_process';
import http from 'http';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp-inspect-rule';
const port = 9255;

async function run() {
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
  await send('DOM.enable');
  await send('CSS.enable');

  for (let i = 0; i < 20; i++) {
    const check = await send('Runtime.evaluate', {
      expression: 'Boolean(document.querySelector("h1"))'
    });
    if (check?.result?.value === true) break;
    await new Promise(r => setTimeout(r, 500));
  }

  const doc = await send('DOM.getDocument');
  const h1Node = await send('DOM.querySelector', { nodeId: doc.root.nodeId, selector: 'h1' });
  const styles = await send('CSS.getMatchedStylesForNode', { nodeId: h1Node.nodeId });

  console.log('--- MATCHED RULES FOR H1 ---');
  for (const match of styles.matchedCSSRules) {
    const fontDecl = match.rule.style.cssProperties.find(p => p.name === 'font-family');
    if (fontDecl) {
      console.log('Selector:', match.rule.selectorList.text, '-> font-family:', fontDecl.value);
      if (match.rule.styleSheetId) {
        const sheet = await send('CSS.getStyleSheetText', { styleSheetId: match.rule.styleSheetId });
        console.log('Sheet hint:', sheet.text.slice(0, 300));
      }
    }
  }

  // Also check inline style
  if (styles.inlineStyle) {
    const inlineFont = styles.inlineStyle.cssProperties.find(p => p.name === 'font-family');
    if (inlineFont) console.log('Inline style font-family:', inlineFont.value);
  }

  // Also check computed font-family
  const computed = await send('CSS.getComputedStyleForNode', { nodeId: h1Node.nodeId });
  const compFont = computed.computedStyle.find(p => p.name === 'font-family');
  console.log('COMPUTED H1 FONT-FAMILY:', compFont.value);

  ws.close();
  chromeProc.kill();
  process.exit(0);
}
run().catch(console.error);
