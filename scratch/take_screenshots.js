import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const artifactDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b9595647-c32c-4cc9-b7b5-20be60d3e6e7';
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\SEKATA.TNJ\\.chrome-temp';

const screens = [
  { name: 'redesign_menu_section.png', width: 1440, height: 1000, url: 'http://localhost:3001/#menu' },
  { name: 'redesign_filosofi_section.png', width: 1440, height: 1000, url: 'http://localhost:3001/#filosofi' }
];

for (const screen of screens) {
  const dest = path.join(artifactDir, screen.name);
  if (fs.existsSync(dest)) fs.unlinkSync(dest);
  const cmd = `"${chromePath}" --headless=new --user-data-dir="${userDataDir}" --window-size=${screen.width},${screen.height} --screenshot="${dest}" ${screen.url}`;
  try {
    execSync(cmd, { timeout: 15000 });
    console.log(`Saved ${screen.name}: ${fs.existsSync(dest) ? fs.statSync(dest).size : 0} bytes`);
  } catch (e) {
    console.error(`Failed ${screen.name}:`, e.message);
  }
}
