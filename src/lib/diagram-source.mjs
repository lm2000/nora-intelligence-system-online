// Normalize the metadata formats used by the pinned Harness diagrams.
// Source HTML stays unchanged; only its SVG and descriptive data are embedded.
function decodeAttribute(value) {
  const entities = { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>' };
  return value.replace(/&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt);/gi, (_, key) => {
    if (key.startsWith('#')) return String.fromCodePoint(parseInt(key.slice(key[1].toLowerCase() === 'x' ? 2 : 1), key[1].toLowerCase() === 'x' ? 16 : 10));
    return entities[key.toLowerCase()];
  });
}

export function parseDiagramSource(html) {
  let svg = html.match(/<svg\b[\s\S]*?<\/svg>/i)?.[0] || '';
  if (svg && !/^<svg\b[^>]*\bxmlns=/.test(svg)) {
    svg = svg.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  /** @type {Record<string, {label: string, detail: string}>} */
  const details = {};
  const encoded = html.match(/const details\s*=\s*(\{[\s\S]*?\});/);
  if (encoded) {
    const source = JSON.parse(encoded[1]);
    for (const [id, value] of Object.entries(source)) {
      const entry = Array.isArray(value) ? { label: value[0], detail: value[1] } : value;
      if (typeof entry.label === 'string' && typeof entry.detail === 'string') details[id] = entry;
    }
  }
  for (const match of svg.matchAll(/<g\b([^>]+)>/g)) {
    const attrs = Object.fromEntries([...match[1].matchAll(/([\w-]+)="([^"]*)"/g)].map(m => [m[1], decodeAttribute(m[2])]));
    if (attrs.id && attrs['data-title'] && attrs['data-detail']) {
      details[attrs.id] = { label: attrs['data-title'], detail: attrs['data-detail'] };
    }
  }
  // Some sources place diagram CSS in the document head, others inside SVG.
  const css = [...html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]).join('\n');
  svg = svg.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
  if (svg) svg = svg.replace(/(<svg\b[^>]*>)/, `$1<style>${css}</style>`);
  return { svg, details };
}
