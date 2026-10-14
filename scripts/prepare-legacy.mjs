import fs from 'node:fs';
import path from 'node:path';

// legacy/source is archival input, not active pages. No external fetch/build-time Git dependency.
const legacySourceDir = path.resolve('legacy/source');
const SITE_BASE = (process.env.SITE_BASE || '/').replace(/^\/+|\/+$/g, '');
const BASE_PREFIX = SITE_BASE ? '/' + SITE_BASE : '';
const archiveDir = path.resolve('public/archive');

function gitTree() {
  const out = [];
  function walk(rel) {
    const dir = path.join(legacySourceDir, rel);
    for (const name of fs.readdirSync(dir)) {
      const relPath = path.posix.join(rel, name);
      if (fs.statSync(path.join(dir, name)).isDirectory()) walk(relPath);
      else out.push(relPath);
    }
  }
  walk('');
  return out;
}
function gitShow(file) {
  return fs.readFileSync(path.join(legacySourceDir, file));
}

let files;
try {
  files = gitTree();
} catch (e) {
  console.error('Legacy source read failed:', e.message);
  process.exit(1);
}

const PAGES_PREFIX = '/nora-intelligence-system-online/';
function stripPrefix(p) {
  return p.startsWith(PAGES_PREFIX) ? p.substring(PAGES_PREFIX.length - 1) : p;
}
function stripBase(p) {
  return p.startsWith(BASE_PREFIX) ? p.substring(BASE_PREFIX.length) : p;
}
function normalizePath(p) {
  return path.posix.normalize(p).replace(/^\.\//, '');
}
function resolveLocal(htmlPath, url) {
  let u = stripBase(stripPrefix(url)).split('#')[0].split('?')[0];
  if (!u || /^(https?:|mailto:|tel:|data:|\/\/)/i.test(u)) return null;
  if (u.startsWith('/')) return normalizePath(u);
  return normalizePath(path.posix.join(path.posix.dirname(htmlPath), u));
}

function isActiveBasePath(p) {
  return p.startsWith('/architecture/') || p.startsWith('/decisions/') || p.startsWith('/walkthroughs/') || p.startsWith('/validation/') || p.startsWith('/reproduce/');
}
function transformAttr(attr, q, p) {
  if (/^(https?:|mailto:|tel:|data:|\/\/)/i.test(p)) return `${attr}=${q}${p}${q}`;
  let raw = p.split('#')[0].split('?')[0];
  let hash = p.includes('#') ? '#' + p.split('#')[1] : '';
  let search = p.includes('?') && !hash ? '?' + p.split('?')[1] : '';

  if (raw.startsWith(PAGES_PREFIX)) {
    if (isActiveBasePath(raw)) {
      let active = raw.substring(PAGES_PREFIX.length - 1);
      return `${attr}=${q}${BASE_PREFIX}${active}${search}${hash}${q}`;
    } else if (raw === PAGES_PREFIX || raw === PAGES_PREFIX.slice(0, -1)) {
      return `${attr}=${q}${BASE_PREFIX}/${search}${hash}${q}`;
    }
    let stripped = raw.substring(PAGES_PREFIX.length - 1);
    return `${attr}=${q}${BASE_PREFIX}/archive${stripped}${search}${hash}${q}`;
  }
  if (raw === '/' || raw === '') return `${attr}=${q}${BASE_PREFIX}/${search}${hash}${q}`;
  if (raw.startsWith('/') && !raw.startsWith('/archive/')) {
    if (isActiveBasePath(raw)) return `${attr}=${q}${BASE_PREFIX}${raw}${search}${hash}${q}`;
    return `${attr}=${q}${BASE_PREFIX}/archive${raw}${search}${hash}${q}`;
  }
  return `${attr}=${q}${p}${q}`;
}

const fileSet = new Set(files);
fs.mkdirSync(archiveDir, { recursive: true });

for (const file of files) {
  if (/^\.git\//.test(file) || /^node_modules\//.test(file) || /(^|\/)private\//.test(file) || /^videos\//.test(file) || /\.(pptx)$/i.test(file)) continue;
  if (file === 'README.md' || file === 'LICENSE' || /\.(html|png|jpg|jpeg|gif|webp|svg|css|js|json|mp4|webm|ogg|mp3|pdf)$/i.test(file) || /^assets\//.test(file)) {
    if (!fileSet.has(file)) continue;
    const dest = path.join(archiveDir, file);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    let buf = gitShow(file);
    if (/\.html$/i.test(file)) {
      let html = buf.toString('utf-8');

      html = html.replace(/<script\b[^>]*src\s*=\s*["'][^"']*_vercel\/insights[^"']*["'][^>]*><\/script>/gi, '');

      html = html.replace(/<video\b[\s\S]*?<\/video>/gi, (m) => {
        if (/<source\b[\s\S]*?>/i.test(m)) {
          let srcMatch = m.match(/<source\b[^>]*src\s*=\s*["']([^"']+)["']/i);
          if (srcMatch) {
            let ref = srcMatch[1].replace(/&amp;/gi, '&');
            let resolved = resolveLocal(file, ref);
            if (resolved && !fileSet.has(resolved)) return '<p style="padding:1rem;background:#eee;border:1px solid #ccc;">Historical media unavailable.</p>';
          }
        }
        return m;
      });

      html = html.replace(/<img\b[^>]*>/gi, (m) => {
        let srcMatch = m.match(/src\s*=\s*["']([^"']+)["']/i);
        if (srcMatch) {
          let ref = srcMatch[1].replace(/&amp;/gi, '&');
          let resolved = resolveLocal(file, ref);
          if (resolved && !fileSet.has(resolved)) {
            let alt = m.match(/alt\s*=\s*["']([^"']*)["']/i);
            return `<p style="padding:1rem;background:#eee;border:1px solid #ccc;">${alt ? alt[1] : 'Historical media unavailable.'}</p>`;
          }
        }
        return m;
      });

      html = html.replace(/<a\b[^>]*href\s*=\s*["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (m, href, text) => {
        let ref = href.replace(/&amp;/gi, '&');
        if (/\.(pptx)$/i.test(ref)) {
          return `<a href="${BASE_PREFIX}/archive/historical-notes.html">${text}</a>`;
        }
        let resolved = resolveLocal(file, ref);
        if (resolved && !fileSet.has(resolved)) {
          if (/^archive\//.test(resolved) && !fileSet.has(resolved)) return `<a href="${BASE_PREFIX}/">${text}</a>`;
        }
        return m;
      });

      html = html.replace(/(href|src)\s*=\s*(["'])([^"']*)\2/gi, (_match, attr, q, p) => transformAttr(attr, q, p));

      const notice = '<div style="padding:1rem;background:#eee;border-bottom:1px solid #ccc;font-size:0.9rem;">Archived historical content. <a href="' + BASE_PREFIX + '/">View current homepage</a>.</div>';
      html = html.replace(/<body([^>]*)>/i, `<body$1>${notice}`);
      fs.writeFileSync(dest, html);
    } else {
      fs.writeFileSync(dest, buf);
    }
  }
}

const redirects = [
  { p: 'foundation/index.html', t: 'architecture/' },
  { p: 'foundation/operating-principles/index.html', t: 'decisions/' },
  { p: 'business-value/index.html', t: '/' },
  { p: 'offerings/boutique-marketing-agency/index.html', t: 'archive/offerings/boutique-marketing-agency/index.html' },
  { p: 'offerings/boutique-marketing-agency/presentation.html', t: 'archive/offerings/boutique-marketing-agency/presentation.html' },
  { p: 'offerings/boutique-marketing-agency/walkthrough.html', t: 'archive/offerings/boutique-marketing-agency/walkthrough.html' },
  { p: 'offerings/career-interview-system/index.html', t: 'archive/offerings/career-interview-system/index.html' },
  { p: 'use-cases/boutique-marketing-agency.html', t: 'archive/use-cases/boutique-marketing-agency.html' }
];

for (const r of redirects) {
  const dir = path.join('public', path.dirname(r.p));
  fs.mkdirSync(dir, { recursive: true });
  const target = r.t.startsWith('/') ? `${BASE_PREFIX}${r.t}` : `${BASE_PREFIX}/${r.t}`;
  const canonical = `https://nora-intelligence-system.com/${r.t.replace(/^\//, '')}`;
  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${target}"><link rel="canonical" href="${canonical}"><script>location.replace(${JSON.stringify(target)});</script></head><body><a href="${target}">Redirect</a></body></html>`;
  fs.writeFileSync(path.join('public', r.p), html);
}
console.log('Legacy preparation complete.');
