import { execSync } from 'child_process';
import fs from 'fs';

const target = 'd:\\SEKATA.TNJ\\test_screen.png';
if (fs.existsSync(target)) fs.unlinkSync(target);

try {
  execSync(`"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless=new --user-data-dir="d:\\SEKATA.TNJ\\.chrome-temp" --window-size=1280,800 --screenshot="${target}" http://localhost:3001/`, { timeout: 15000 });
  console.log('File created:', fs.existsSync(target), 'size:', fs.existsSync(target) ? fs.statSync(target).size : 0);
} catch (e) {
  console.error('Error:', e.message);
}
