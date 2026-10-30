import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { parseDiagramSource } from '../src/lib/diagram-source.mjs';
const root = new URL('../', import.meta.url);
const manifest = JSON.parse(readFileSync(new URL('src/data/source-manifest.json', root), 'utf8'));

test('published diagrams and derived previews match their provenance', () => {
  for (const file of manifest.files) {
    const hash = path => createHash('sha256').update(readFileSync(new URL(path, root))).digest('hex');
    assert.equal(hash(file.website), file.sha256, file.website);
    assert.equal(file.website_sha256, file.sha256);
    if (file.preview) assert.equal(hash(file.preview), file.preview_sha256, file.preview);
  }
});

test('every selectable source component has a readable label and description', () => {
  for (const file of manifest.files.filter(f => f.website.endsWith('.html'))) {
    const { svg, details } = parseDiagramSource(readFileSync(new URL(file.website, root), 'utf8'));
    assert.match(svg, /<style>/, file.website);
    for (const node of svg.matchAll(/<g\b[^>]*class="node\b[^>]*>/g)) {
      const id = node[0].match(/\bid="([^"]+)"/)?.[1];
      assert.ok(details[id]?.label?.trim(), `${file.website} ${id}: label`);
      assert.ok(details[id]?.detail?.trim(), `${file.website} ${id}: description`);
    }
  }
});

test('attribute descriptions decode quoted and escaped text without executing source scripts', () => {
  const { details } = parseDiagramSource('<svg><g class="node" id="owner" data-title="Owner &amp; reviewer" data-detail="Check &quot;approval&quot; &#39;explicitly&#39;."></g></svg><script>throw Error("must not execute")</script>');
  assert.deepEqual(details.owner, { label: 'Owner & reviewer', detail: 'Check "approval" \'explicitly\'.' });
});
