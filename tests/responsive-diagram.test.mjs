import { test } from 'node:test';
import assert from 'node:assert/strict';
import { bindDiagramDisclosure } from '../src/lib/responsive-diagram.mjs';

class Viewport extends EventTarget {
  constructor(matches) { super(); this.matches = matches; }
  resize(matches) {
    if (matches === this.matches) return;
    this.matches = matches;
    this.dispatchEvent(new Event('change'));
  }
}

test('mobile starts with the overview and an expandable full diagram', () => {
  const details = { open: true };
  bindDiagramDisclosure(details, new Viewport(true));
  assert.equal(details.open, false);
});

test('desktop always starts with the full diagram visible', () => {
  const details = { open: false };
  bindDiagramDisclosure(details, new Viewport(false));
  assert.equal(details.open, true);
});

test('resizing within mobile preserves a reader-opened diagram', () => {
  const viewport = new Viewport(true);
  const details = { open: true };
  bindDiagramDisclosure(details, viewport);
  details.open = true;
  viewport.resize(true);
  assert.equal(details.open, true);
});

test('crossing to desktop reveals the diagram and returning to mobile restores compact reading', () => {
  const viewport = new Viewport(true);
  const details = { open: true };
  bindDiagramDisclosure(details, viewport);
  viewport.resize(false);
  assert.equal(details.open, true);
  viewport.resize(true);
  assert.equal(details.open, false);
});

test('disconnecting removes viewport listeners', () => {
  const viewport = new Viewport(true);
  const details = { open: true };
  const disconnect = bindDiagramDisclosure(details, viewport);
  disconnect();
  viewport.resize(false);
  assert.equal(details.open, false);
});
