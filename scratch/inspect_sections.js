import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const artifactDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b9595647-c32c-4cc9-b7b5-20be60d3e6e7';
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp';

// We can take a tall screenshot of the entire page to inspect every section!
const dest = path.join(artifactDir, 'full_page_tall.png');
if (fs.existsSync(dest)) fs.unlinkSync(dest);

// Let's test 1440 width and 6000 height
const cmd = `"${chromePath}" --headless=new --user-data-dir="${userDataDir}" --window-size=1440,6500 --screenshot="${dest}" http://localhost:3001/`;
try {
  execSync(cmd, { timeout: 20000 });
  console.log(`Saved tall screenshot: ${fs.existsSync(dest) ? fs.statSync(dest).size : 0} bytes`);
} catch (e) {
  console.error(`Failed tall screenshot:`, e.message);
}

