# Reading and Mobile Refinements Implementation Plan

> Execute inline in the existing editorial worktree. Michael approved all three audit recommendations, validation, Vercel deployment and live verification.

**Goal:** Reduce repeated setup and mobile navigation/table friction while preserving content, bookmarks and provenance.

**Architecture:** Keep the workflow chooser; retain one review-loop explanation for every viewport. Use a native responsive chapter disclosure and render research-table field labels during the existing Markdown build. Desktop tables and navigation remain expanded.

**Spec:** Michael's approved three-item live audit, `.private/live-content-audit/review.md` in the main checkout.

## Constraints and review focus

- Preserve all chapter routes, in-page IDs, source links, canonical diagrams and source pins.
- No factual material is removed from research tables or historical chapters.
- Tables retain real headers and header-cell associations; labels must not duplicate screen-reader output.
- Mobile navigation must expose the selected chapter and work with keyboard input; desktop must remain expanded across resize.
- Missing/merged table headers must not acquire incorrect labels. No JavaScript dependency for stacked records.
- Use the existing pnpm toolchain and Vercel Git deployment path.

## Tasks

- [x] Workflows: shorten the subtitle and shared introduction; suppress redundant diagram summaries where the page already owns the explanation; retain the ordered owner-review list, both revision returns, source links and all anchors. Browser-check desktop and mobile.
- [x] Chapters: wrap existing chapter navigation in a native disclosure with chapter position; use the existing responsive-disclosure behavior. Verify mobile collapse/keyboard activation, desktop expansion, resize and all five current-chapter states.
- [x] Research tables: add build-time header labels and explicit semantic roles/associations to Landscape and historical Markdown tables, without changing their cell content. Test real AST transformation for content preservation, existing IDs, scope and complex-table exclusion. Stack at <=680px; preserve desktop tables.
- [x] Validate: run `pnpm validate`; compare research Markdown, table text/links and protected source assets with baseline. Review the final diff and responsive browser behavior at 320/390/1440px.
- [ ] Release: integrate the clean candidate into main, run `pnpm validate` there, push main, confirm matching READY Vercel production commit and passing CI, then verify live pages and save private release evidence.

## Verification record

Research-table tests were observed failing for missing labels/associations, then passing against the real Markdown renderer. Independent review found no blockers and passed all nine focused table/disclosure tests. Rendered research table text and source links and prior bookmarks compare equal to the previous build. Browser checks cover 320/390/1439 CSS pixels, native chapter keyboard expansion, selected states and desktop resize. Author review found no remaining issues.

Final worktree `pnpm validate`: 28 tests passed, zero diagnostics, 20 built pages, 888 checked links. Release remains pending at this preparation checkpoint; the private release receipt records the completed production readback.
