const fs = require('fs');
const zlib = require('zlib');

const TARGET_UUID = '3418b598-a8b5-46f5-b2c3-89ea95955d4a';
const SRC = 'c:/Users/dev/Downloads/SOFIN Ecosystem _Standalone_.html';
const DEST = 'c:/Users/dev/Desktop/sofin_group/public/ecosystem-animation.html';

const html = fs.readFileSync(DEST, 'utf8');

// Get manifest
const mStart = html.indexOf('<script type="__bundler/manifest">');
const mEnd = html.indexOf('</script>', mStart);
const manifest = JSON.parse(html.slice(mStart + '<script type="__bundler/manifest">'.length, mEnd).trim());

const entry = manifest[TARGET_UUID];
if (!entry) { console.error('UUID not found'); process.exit(1); }

// Decode
const bytes = Buffer.from(entry.data, 'base64');
let text;
if (entry.compressed) {
  text = zlib.gunzipSync(bytes).toString('utf8');
} else {
  text = bytes.toString('utf8');
}

// The rect content area: x=3..21, below line y=9, height y=9..19
// Center of content: x=12, y=14
// Fix triangle: M10 11 L10 17 L16 14 Z  → centroid = (12, 14)
// Old path: d="M3 9h18M8 13l4 2.5L8 18z"
// New path: d="M3 9h18M10 11L10 17L16 14z"

const OLD = 'd="M3 9h18M8 13l4 2.5L8 18z"';
const NEW = 'd="M3 9h18M10 11L10 17L16 14z"';

if (!text.includes(OLD)) {
  console.error('Pattern not found in JS. Current media icon area:');
  const idx = text.toLowerCase().indexOf('media');
  console.log(text.slice(idx - 50, idx + 300));
  process.exit(1);
}

const fixed = text.replace(OLD, NEW);
console.log('Replaced:', OLD, '→', NEW);

// Re-encode
let newData;
if (entry.compressed) {
  newData = zlib.gzipSync(Buffer.from(fixed, 'utf8')).toString('base64');
} else {
  newData = Buffer.from(fixed, 'utf8').toString('base64');
}

manifest[TARGET_UUID] = { ...entry, data: newData };

// Rebuild HTML
const newManifest = JSON.stringify(manifest);
const newHtml = html.slice(0, mStart + '<script type="__bundler/manifest">'.length)
  + newManifest
  + html.slice(mEnd);

fs.writeFileSync(DEST, newHtml, 'utf8');
console.log('Done. Output size:', fs.statSync(DEST).size);
