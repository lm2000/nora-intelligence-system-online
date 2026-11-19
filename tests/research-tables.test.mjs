import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createSatteriMarkdownProcessor } from '@astrojs/markdown-satteri';
import { researchTables } from '../src/lib/research-tables.mjs';

const renderer = await createSatteriMarkdownProcessor({ hastPlugins: [researchTables], syntaxHighlight: false });
const render = async (markdown, file = 'src/content/ai-harness-landscape.md') =>
  (await renderer.render(markdown, { fileURL: new URL('../' + file, import.meta.url) })).code;

// Catch dropped source links/markup and labels mapped to the wrong column.
test('research records retain cell contents and associate mobile labels with real headers', async () => {
  const html = await render('| Product | Public description | Source |\n|---|---|---|\n| Harvey | **Legal** & research | [Vendor](https://www.harvey.ai/) |');
  assert.match(html, /class="research-table"/);
  assert.match(html, /<th[^>]*scope="col"[^>]*>Source<\/th>/);
  assert.match(html, /<span class="research-cell-label" aria-hidden="true">Public description<\/span><strong>Legal<\/strong> &amp; research/);
  assert.match(html, /<span class="research-cell-label" aria-hidden="true">Source<\/span><a href="https:\/\/www.harvey.ai\/">Vendor<\/a>/);
  const headerId = html.match(/<th[^>]*id="([^"]+)"[^>]*>Source<\/th>/)[1];
  assert.ok(html.includes(`headers="${headerId}"`));
});

test('multiple historical tables get unique header IDs without changing existing bookmarks', async () => {
  const html = await render('<h2 id="older-bookmark">Choices</h2>\n\n| Component | Evidence |\n|---|---|\n| A | `src/a.py` |\n\n| Provider | Evidence |\n|---|---|\n| B | [Source](../learning/) |', 'src/content/case-study/choices.md');
  assert.match(html, /id="older-bookmark"/);
  assert.match(html, /<code>src\/a.py<\/code>/);
  assert.match(html, /href="\.\.\/learning\/"/);
  const ids = [...html.matchAll(/<th[^>]*id="([^"]+)"/g)].map(m => m[1]);
  assert.equal(ids.length, 4);
  assert.equal(new Set(ids).size, 4);
  const headers = [...html.matchAll(/<td[^>]*headers="([^"]+)"/g)].map(m => m[1]);
  assert.deepEqual(headers, ids);
});

test('unrelated Markdown tables are left untouched', async () => {
  const html = await render('| Check | Result |\n|---|---|\n| Source | Pass |', 'src/content/unrelated.md');
  assert.doesNotMatch(html, /research-table|research-cell-label/);
});

test('merged cells do not acquire misleading mobile column labels', async () => {
  const html = await render('<table><thead><tr><th>Item</th><th>Notes</th></tr></thead><tbody><tr><td colspan="2">Combined</td></tr></tbody></table>');
  assert.doesNotMatch(html, /research-table|research-cell-label/);
  assert.match(html, /colspan="2">Combined/);
});
