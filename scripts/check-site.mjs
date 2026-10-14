import fs from 'node:fs';
import path from 'node:path';

const outDir = process.argv[2] || 'dist';
const SITE_BASE = (process.env.SITE_BASE || '/').replace(/^\/+|\/+$/g, '');
const BASE_PREFIX = SITE_BASE ? '/' + SITE_BASE : '';
const PAGES_PREFIX = '/nora-intelligence-system-online/';

const primary = ['/', '/architecture/', '/walkthroughs/', '/founders/', '/decisions/', '/validation/', '/reproduce/'];
const legacy = ['/foundation/', '/foundation/operating-principles/', '/business-value/', '/offerings/boutique-marketing-agency/', '/offerings/boutique-marketing-agency/presentation.html', '/offerings/boutique-marketing-agency/walkthrough.html', '/offerings/career-interview-system/', '/use-cases/boutique-marketing-agency.html'];

function walk(dir, arr = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, arr);
    else if (/\.html$/i.test(e.name)) arr.push(p);
  }
  return arr;
}

function stripBase(p) {
  if (BASE_PREFIX && p.startsWith(BASE_PREFIX)) return p.substring(BASE_PREFIX.length);
  if (p.startsWith(PAGES_PREFIX)) return p.substring(PAGES_PREFIX.length - 1);
  return p;
}

function resolveLocal(htmlFile, url) {
  let u = stripBase(url.replace(/&amp;/gi, '&')).split('#')[0].split('?')[0];
  if (!u || /^(https?:|mailto:|tel:|data:|\/\/)/i.test(u)) return null;
  if (u.startsWith('/')) return path.posix.normalize(u).replace(/^\.\//, '');
  let htmlPath = path.relative(outDir, htmlFile).split(path.sep).join('/');
  return path.posix.normalize(path.posix.join(path.posix.dirname(htmlPath), u));
}

const htmlFiles = walk(outDir);
const errors = [];
let checked = 0;

for (const f of htmlFiles) {
  const html = fs.readFileSync(f, 'utf-8');
  const matches = [...html.matchAll(/(?:href|src)\s*=\s*["']([^"']+)["']/gi)];
  for (const m of matches) {
    let u = m[1];
    if (u.startsWith('#')) continue;
    let resolved = resolveLocal(f, u);
    if (resolved === null) continue;
    let localPath = path.join(outDir, resolved);
    if (fs.existsSync(localPath) || fs.existsSync(path.join(localPath, 'index.html'))) {
      checked++;
    } else {
      errors.push(`Missing ${u} from ${path.relative(outDir, f)}`);
    }
  }
}

for (const p of [...primary, ...legacy]) {
  let cleanP = p.startsWith(PAGES_PREFIX) ? p.substring(PAGES_PREFIX.length - 1) : p;
  cleanP = cleanP.replace(/^\/+/, '/');
  let file = path.join(outDir, cleanP === '/' ? 'index.html' : cleanP.replace(/\/$/, '/index.html').replace(/^\//, ''));
  if (!fs.existsSync(file)) errors.push(`Missing route: ${p}`);
}

if (errors.length > 0) {
  console.error(`Failed. ${errors.length} errors:`);
  for (const e of errors.slice(0, 20)) console.error(`- ${e}`);
  process.exit(1);
}
console.log(`Success. ${checked} links checked across ${htmlFiles.length} files. Primary and legacy paths verified.`);