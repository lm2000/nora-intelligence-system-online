# Editorial integration preparation

Approved objective: refine the selected complete overhaul and prepare it for integration without publication.

- [x] Create isolated codex/editorial-overhaul from 0044c73419b35ac060a3caebc164d6eee317c69a; leave original pending edits intact.
- [x] Carry approved layout changes into editorial.css and shared components; remove all comparison-only source.
- [x] Refine hero scale, primary action, figure width and founder alignment; reuse tested responsive disclosure helper.
- [x] Align AGENTS.md, PRODUCT.md, DESIGN.md and the machine-readable design record with the selected direction.
- [x] Run pnpm validate and verify the clean integration preview at desktop/mobile sizes, first jumps, keyboard selection and walkthrough history.
- [x] Obtain independent source/visual review, record any fixes and commit the local branch. Do not push, merge or deploy.

## Integration boundary

The original main checkout contains 37 pending OpenDesign modifications. They are excluded from this branch and remain untouched. This branch carries the selected design over committed source; it does not silently adopt the earlier naming or navigation changes. Production publication remains a separate decision.

## Verification receipt

- pnpm validate: 23 tests, zero diagnostics, 20 pages, 872 checked links.
- Browser matrix: 27 route/viewport checks, no overflow, six visible primary links, no broken images.
- Fresh desktop jump: #example selected, section top110/header bottom86. Mobile jump: #example selected, top192/header bottom168, disclosure closed.
- Walkthrough next -> grounding and back -> current-question; diagram Enter and Escape passed.
- Independent review: one category-tag contrast finding fixed using a component theme variable. All 12 tags now measure at least 8.55:1 on rendered dark backgrounds.
- Canonical public diagrams and source manifests unchanged. Source contains no local comparison UI.

## Later integration

This local branch is based on committed main 0044c73, excluding the original checkout's 37 pending OpenDesign changes. The four overlapping paths are Header.astro, HomeArchitectureMap.astro, OriginalIndex.astro and pages/index.astro. Do not apply this candidate over that dirty checkout or discard those edits implicitly. Review the candidate in its isolated worktree, reconcile any independently retained changes, then integrate through the project's normal process. A push to the production branch can trigger Vercel; no push or deployment is part of this task.

## Authorized local integration completed

The owner subsequently authorized reconciliation and local integration, retaining the no-publication boundary. Useful pending changes were reconciled and committed as 7169f3d. Local main was fast-forwarded to that commit and pnpm validate passed there: 23 tests, zero diagnostics,20 pages and 872 links. The original 37 pending file versions are preserved in stash 1ca53eae98c3a94ad2c35906ce81e381a583402c and an exact patch/file/manifest backup under the comparison workspace's integration/pending-before-reconciliation directory. Header, HomeArchitectureMap, OriginalIndex and Home are reconciled. Prepared source storage remains distinct from its Qdrant index. Old #harness and new #shared-coordination both remain. No push or deployment was performed. Do not reapply the full recovery stash over the combined result.
