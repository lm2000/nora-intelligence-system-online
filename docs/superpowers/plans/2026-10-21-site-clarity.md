# Site Clarity Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the site's architecture versions, workflow scope, AI-assisted contribution, and 404 recovery clear to a technical reader.

**Architecture:** Keep the Astro routes and shared visual system intact. Clarify copy at its owning pages, correct the shared link selector that overrides the 404 CTA, and verify the affected desktop journey. No new diagram or dependency is needed.

**Tech Stack:** Astro 7, TypeScript/CSS, Node 24, pnpm 12.

**Spec:** `docs/superpowers/specs/2026-10-21-site-clarity-design.md`

## Global Constraints

- Preserve the **Nora SuperIntelligence Lab** brand, existing dark visual system, four-item main navigation, and current routes.
- Keep the pinned public gateway snapshot distinct from the **October 16 direct-API source candidate**; never call the latter deployed or measured.
- Do not add mobile-specific layout, mobile QA, Harness/service changes, push, or deployment.
- Keep durable content in English. Avoid private evidence and invented results.
- For these reversible copy/CSS changes, do not add tests that merely assert wording or selectors; use the existing test suite and the concrete readbacks below.

## File Map

- `src/pages/architecture.astro`: qualifier and comparison link next to the published system map.
- `src/layouts/CaseStudyLayout.astro`: concise, consistent candidate status beside each case-study heading.
- `src/styles/global.css`: prevent generic link colors from overriding CTA button colors.
- `src/pages/workflows.astro`: three linked workflow summaries before the Atlas detail.
- `src/content/case-study/learning.md`: result-first account of ownership, AI contribution, and inspectable evidence.

## Review Focus

1. A reader arriving directly on either architecture page sees its version and status without needing a second page: verify both page openings in Task 1.
2. The comparison and workflow links work under both root and GitHub Pages base paths: run both link-check builds in Tasks 1 and 3/final QA.
3. The 404 primary label reaches 4.5:1 contrast while outline CTAs and ordinary links retain their colors: computed-style and desktop screenshot check in Task 2.
4. Workflows names all three tasks but does not repeat the request/ingestion walkthroughs: inspect the first desktop viewport and targets in Task 3.
5. AI and evidence distinguishes Michael's decisions, AI assistance, public checks, and unpublished candidate: read the opening and retained evidence/limits sections in Task 4.

---

### Task 1: Label the two architecture versions

**Files:** Modify `src/pages/architecture.astro`, `src/layouts/CaseStudyLayout.astro`.

- [ ] Add a visible qualifier by Architecture's system map naming the pinned public Harness snapshot and its LiteLLM gateway, with an `href('/case-study/evolution/')` comparison link.
- [ ] Change the case-study status line to identify the direct NIS API path in the story as an October 16 source candidate; retain the used gateway baseline, undeployed boundary, and date.
- [ ] Run `pnpm build` and `node scripts/check-site.mjs` from the project root. Expected: build and local links pass.
- [ ] Read both rendered desktop openings. Expected: gateway snapshot and direct candidate are distinguishable before reading the body; existing diagrams and main navigation are unchanged.
- [ ] Commit only these two files with a message such as `Clarify architecture version labels`.

### Task 2: Fix 404 CTA contrast

**Files:** Modify `src/styles/global.css`.

- [ ] Exclude `.cta` from the generic `main a:not(.button)` normal and hover color rules; keep the CTA component's own `--color-action-text` and outline styles authoritative.
- [ ] Run `pnpm build` and render `/404.html` at a desktop viewport. Check the dark computed text color against both mint-gradient endpoints for at least 4.5:1 contrast; inspect outline buttons and an ordinary content link for unintended color changes.
- [ ] Commit only `src/styles/global.css` as `Restore 404 CTA contrast`.

### Task 3: Explain the three workflows up front

**Files:** Modify `src/pages/workflows.astro`.

- [ ] Insert three short linked summaries before `#example`: question answering → supported answer and retained conversation (`/walkthroughs/?flow=request`); knowledge ingestion → verified knowledge release (`/walkthroughs/?flow=ingestion`); artifact review → feedback plus owner decision (`#artifact-review`). Use the existing `href()` helper and compact page styling.
- [ ] Keep the Atlas decision example and the two existing diagrams as the detailed artifact-review section; do not copy walkthrough steps into this page.
- [ ] Run `pnpm build` and root `node scripts/check-site.mjs`. Expected: build and links pass.
- [ ] Inspect the first desktop viewport and click each summary link. Expected: all three tasks are visible and each target opens the intended flow or section.
- [ ] Commit only `src/pages/workflows.astro` as `Orient readers to three workflows`.

### Task 4: Lead the AI/evidence chapter with the result

**Files:** Modify `src/content/case-study/learning.md`.

- [ ] Replace the opening paragraph with a concise account of Michael's scope/architecture decisions, AI-assisted bounded work, and public source/dated validation. Keep the direct-API candidate's separate, undeployed status.
- [ ] Remove only nearby repetition made unnecessary by that opening. Preserve the dated checks, claim-evidence map, source-availability limit, and distinction between plans and completed work.
- [ ] Run `pnpm build` and `node scripts/check-site.mjs`. Expected: build and links pass.
- [ ] Read the rendered chapter opening and its evidence/limits sections. Expected: ownership and inspectable results appear first; no private receipts or stronger claims are introduced.
- [ ] Commit only `src/content/case-study/learning.md` as `Lead AI evidence chapter with ownership`.

### Final verification

- [ ] Run `pnpm check`, `pnpm test`, `pnpm build`, and `node scripts/check-site.mjs` from the project root. Expected: all pass.
- [ ] Run `SITE_BASE=/nora-intelligence-system-online SITE_URL=https://lm2000.github.io pnpm build` and `SITE_BASE=/nora-intelligence-system-online node scripts/check-site.mjs`. Expected: Pages-base links pass; rebuild the root target afterward.
- [ ] Inspect desktop Home → Architecture → Workflows → build story and `/404.html`; check the four acceptance outcomes in the spec. No mobile QA is required.
- [ ] Check `git diff --check` and `git status --short`. Report local changes and remaining limitations. Do not push or deploy.
