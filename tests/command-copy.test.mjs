import { test } from 'node:test';
import assert from 'node:assert/strict';
import { copyCommandGroup } from '../src/lib/command-copy.mjs';

const group = () => ({button: {disabled: false}, status: {textContent: ''}, code: {textContent: 'git checkout pinned-sha\nmake validate\n'}});
test('copies exact multiline code and announces success only after completion', async () => {
  const state = group();
  let resolve;
  let copied;
  state.clipboard = {writeText(text) { copied = text; return new Promise(r => { resolve = r; }); }};
  const pending = copyCommandGroup(state);
  assert.equal(state.button.disabled, true);
  assert.equal(state.status.textContent, 'Copying…');
  assert.equal(copied, state.code.textContent);
  resolve(); await pending;
  assert.equal(state.status.textContent, 'Commands copied.');
  assert.equal(state.button.disabled, false);
});
test('rejected clipboard writes announce failure and allow retry', async () => {
  const state = group();
  state.clipboard = {writeText: async () => { throw new Error('Denied'); }};
  await copyCommandGroup(state);
  assert.match(state.status.textContent, /Copy failed/);
  assert.equal(state.button.disabled, false);
  state.clipboard = {writeText: async () => {}};
  await copyCommandGroup(state);
  assert.equal(state.status.textContent, 'Commands copied.');
});
test('unavailable clipboard leaves commands available and does not claim success', async () => {
  const state = group();
  const before = state.code.textContent;
  await copyCommandGroup(state);
  assert.match(state.status.textContent, /Select the commands/);
  assert.equal(state.code.textContent, before);
  assert.equal(state.button.disabled, false);
});
