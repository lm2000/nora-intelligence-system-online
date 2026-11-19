import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { navyDiagram } from '../src/lib/diagram-presentation.mjs';
import { parseDiagramSource } from '../src/lib/diagram-source.mjs';
const names = ['02-question-to-answer', 'architecture-request-path', '01-system-architecture', 'model-routing', 'manual-ingestion', 'harness-workflows', 'judge-registry', 'artifact-review-flow', 'case-system', 'case-evolution', 'case-request'];
test('navy presentation preserves every source label, ID, path and geometry', () => {
  for (const name of names) {
    const { svg } = parseDiagramSource(readFileSync(new URL(`../public/diagrams/${name}.html`, import.meta.url), 'utf8'));
    const themed = navyDiagram(svg);
    const withoutColors = value => value.replace(/#[0-9a-f]{3,8}\b/gi, '#COLOR');
    assert.equal(withoutColors(themed), withoutColors(svg), name);
    assert.match(themed, /#edf5f8/i, name);
    assert.doesNotMatch(themed, /#fff\b|#ffffff\b/i, name);
  }
});
