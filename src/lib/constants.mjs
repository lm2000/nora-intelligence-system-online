const rawBase = import.meta.env.BASE_URL || '/';

function normalizeBase(base) {
  if (!base) return '/';
  let b = base.trim();
  if (!b.startsWith('/')) b = '/' + b;
  if (!b.endsWith('/')) b = b + '/';
  return b;
}

export const BASE = normalizeBase(rawBase);

export function href(path) {
  if (!path) return BASE;
  let p = path.trim();
  if (/^https?:/i.test(p) || p.startsWith('//') || p.startsWith('mailto:') || p.startsWith('tel:')) return p;
  if (p.startsWith('#')) return p;
  if (!p.startsWith('/')) p = '/' + p;
  const u = new URL(p, 'http://e.o');
  const segs = u.pathname.split('/').map(seg => seg ? encodeURIComponent(decodeURIComponent(seg)) : seg);
  const outPath = segs.join('/').replace(/^\//, '');
  const cleanBase = BASE.replace(/\/$/, '');
  let finalPath = cleanBase + '/' + outPath;
  if (u.search) finalPath += u.search;
  if (u.hash) finalPath += u.hash;
  return finalPath;
}

export const SITE_NAME = 'Nora SuperIntelligence Lab';

export const SOURCE_COMMIT = 'f9cea261f0b33217028fe31e39ff88b5a10c3d4a';
export const SOURCE_REPO = 'lm2000/nora-ai-knowledge-agent-harness-public';

export function sourceUrl(path, heading = '') {
  const cleanPath = path.replace(/^\/+/, '');
  const encodedPath = cleanPath.split('/').map(seg => encodeURIComponent(decodeURIComponent(seg))).join('/');
  let url = `https://github.com/${SOURCE_REPO}/blob/${SOURCE_COMMIT}/${encodedPath}`;
  if (heading) {
    const slug = heading
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
    url += `#${slug}`;
  }
  return url;
}
