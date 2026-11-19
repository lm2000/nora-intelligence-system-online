# Responsive navy diagrams

Michael authorized mobile summaries, native full-diagram disclosures, navy styling, validation, Vercel deployment and live verification.

Design: keep imported canonical diagrams and provenance unchanged. A color-only website adapter preserves source geometry, labels, IDs, paths and role distinctions. The shared Diagram component supplies three-part mobile summaries keyed by source filename. Existing full-map disclosures suppress the additional inner summary to avoid nesting. Desktop topology remains open; breakpoint transitions reuse the tested disclosure binder. SourceMap retains its selected-component mobile focus and full-map disclosure, with matching navy colors.

- [x] Add and verify the color-only topology invariant test.
- [x] Add compact summaries for all eleven shared diagram types.
- [x] Verify local mobile expansion, desktop full views, keyboard selection/reset, pause and 320px/390px reflow.
- [x] Run final pnpm validate (24 tests, zero diagnostics, 886 links).
- [ ] Integrate into main and push.
- [ ] Verify exact production deployment, live diagram colors, mobile disclosures and source preservation.
