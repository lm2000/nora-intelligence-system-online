import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const home = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
const walkthroughs = readFileSync(new URL('../src/pages/walkthroughs.astro', import.meta.url), 'utf8');

test('Home uses Founders consistently for the founder section', () => {
  assert.match(home, /label: 'Founders', description: 'Michael and the work behind the lab'/);
  assert.match(home, /data-index-label="Founders"/);
  assert.match(home, /<p class="section-label">Founders<\/p>/);
});

test('walkthroughs names the reused request figure clearly', () => {
  assert.match(walkthroughs, /<summary>Open the shared request-path figure<\/summary>/);
  assert.doesNotMatch(walkthroughs, /Open full request figure/);
});

test('walkthrough step headings track the active step ID', () => {
  assert.match(walkthroughs, /state\.titleEl\.id = 'step-' \+ state\.flow \+ '-' \+ step\.id;/);
});
