import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const home = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
const architecture = readFileSync(new URL('../src/pages/architecture.astro', import.meta.url), 'utf8');
const founders = readFileSync(new URL('../src/pages/founders.astro', import.meta.url), 'utf8');
const validation = readFileSync(new URL('../src/content/validation.md', import.meta.url), 'utf8');
const walkthroughs = readFileSync(new URL('../src/pages/walkthroughs.astro', import.meta.url), 'utf8');

test('Home uses Founders consistently for the founder section', () => {
  assert.match(home, /label: 'Founders', description: 'Michael and the work behind the lab'/);
  assert.match(home, /data-index-label="Founders"/);
  assert.match(home, /<p class="section-label">Founders<\/p>/);
});

test('walkthroughs names the reused request figure clearly', () => {
  assert.match(walkthroughs, /<summary>Open the request-path reference diagram<\/summary>/);
  assert.doesNotMatch(walkthroughs, /Open full request figure/);
});

test('Architecture and Walkthroughs keep distinct roles and one compact step navigator per flow', () => {
  assert.match(architecture, /The walkthrough applies those same boundaries to concrete scenarios/);
  assert.match(architecture, /<a href=\{href\(`\/walkthroughs\/\?flow=request&step=\$\{firstRequestStep\}`\)\}>Walkthroughs<\/a>/);
  assert.equal((walkthroughs.match(/class="step-nav"/g) || []).length, 2);
  assert.doesNotMatch(walkthroughs, /walkthrough-index|Choose a flow|On this page/);
});

test('Founders links current Nora examples to evidence anchors', () => {
  assert.match(founders, /Decision · request boundary/);
  assert.match(founders, /\/decisions\/#approach-and-tradeoffs/);
  assert.match(founders, /\/architecture\/#manual-ingestion/);
  assert.match(founders, /\/validation\/#isolated-container-checks/);
});

test('Validation records dated and undated checks in a semantic table', () => {
  assert.match(validation, /<table class="validation-table">/);
  assert.match(validation, /datetime="2026-09-14"/);
  assert.match(validation, /datetime="2026-10-13"/);
  assert.match(validation, /<th scope="row">Undated<\/th>/);
  assert.match(validation, /Checkpoint persistence does not establish clean-target restoration/);
});

test('walkthrough step headings track the active step ID', () => {
  assert.match(walkthroughs, /state\.titleEl\.id = 'step-' \+ state\.flow \+ '-' \+ step\.id;/);
});
