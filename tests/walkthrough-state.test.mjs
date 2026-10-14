import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  parseFlowParam,
  findStepIndexById,
  canNext,
  canPrev,
  nextState,
  prevState,
  resetState,
  buildUrl
} from '../src/lib/walkthrough-state.mjs';

const mockData = {
  request: [
    { id: 'req-1', title: 'A' },
    { id: 'req-2', title: 'B' },
    { id: 'req-3', title: 'C' }
  ],
  ingestion: [
    { id: 'ing-1', title: 'X' },
    { id: 'ing-2', title: 'Y' }
  ]
};

test('parseFlowParam: valid request returns request', () => {
  assert.equal(parseFlowParam('request'), 'request');
});

test('parseFlowParam: valid ingestion returns ingestion', () => {
  assert.equal(parseFlowParam('ingestion'), 'ingestion');
});

test('parseFlowParam: invalid value falls back to request', () => {
  assert.equal(parseFlowParam('invalid'), 'request');
  assert.equal(parseFlowParam(null), 'request');
  assert.equal(parseFlowParam(''), 'request');
});

test('findStepIndexById: invalid id falls back to 0', () => {
  assert.equal(findStepIndexById('request', 'nope', mockData), 0);
});

test('canNext/canPrev: last step cannot go next', () => {
  const last = { stepIndex: 2, steps: mockData.request };
  assert.equal(canNext(last), false);
  assert.equal(canPrev(last), true);
});

test('canNext/canPrev: first step cannot go prev', () => {
  const first = { stepIndex: 0, steps: mockData.request };
  assert.equal(canPrev(first), false);
  assert.equal(canNext(first), true);
});

test('nextState/prevState: bounds are clamped', () => {
  const last = { stepIndex: 2, steps: mockData.request };
  const next = nextState(last);
  assert.equal(next.stepIndex, 2);
  const first = { stepIndex: 0, steps: mockData.request };
  const prev = prevState(first);
  assert.equal(prev.stepIndex, 0);
});

test('resetState: returns to index 0', () => {
  const s = { stepIndex: 2, steps: mockData.request };
  const r = resetState(s);
  assert.equal(r.stepIndex, 0);
});

test('buildUrl preserves flow and step deep-link state', () => {
  assert.equal(buildUrl('ingestion', 'activate-verify'), '?flow=ingestion&step=activate-verify');
});
