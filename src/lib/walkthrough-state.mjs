export function parseFlowParam(value) {
  if (value === 'request' || value === 'ingestion') return value;
  return 'request';
}

export function normalizeStepIndex(value, steps) {
  if (!steps || steps.length === 0) return 0;
  const idx = Number(value);
  if (!Number.isFinite(idx) || idx < 0 || idx >= steps.length) return 0;
  return Math.floor(idx);
}

export function findStepIndexById(flow, id, data) {
  const steps = data[flow];
  if (!steps) return 0;
  const idx = steps.findIndex(s => s.id === id);
  return idx >= 0 ? idx : 0;
}

export function getState(flow, step, data) {
  const f = parseFlowParam(flow);
  const steps = data[f] || data.request;
  const stepIdx = findStepIndexById(f, step, data);
  return { flow: f, stepIndex: stepIdx, steps };
}

export function canNext(state) {
  return state.stepIndex < state.steps.length - 1;
}

export function canPrev(state) {
  return state.stepIndex > 0;
}

export function nextState(state) {
  if (!canNext(state)) return state;
  return { ...state, stepIndex: state.stepIndex + 1 };
}

export function prevState(state) {
  if (!canPrev(state)) return state;
  return { ...state, stepIndex: state.stepIndex - 1 };
}

export function resetState(state) {
  return { ...state, stepIndex: 0 };
}

export function buildUrl(flow, stepId) {
  const params = new URLSearchParams();
  params.set('flow', flow);
  params.set('step', stepId);
  return `?${params.toString()}`;
}

export function buildCanonicalUrl(flow, stepId) {
  const f = parseFlowParam(flow);
  return buildUrl(f, stepId);
}