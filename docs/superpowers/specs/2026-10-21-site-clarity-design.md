# Site clarity pass

## Purpose

Help a hiring manager understand the engineering story quickly and let an interviewer follow the evidence without mistaking two dated architecture versions for one deployed system. Preserve Nora SuperIntelligence Lab, the existing dark visual system, the four-item main navigation, and the current routes.

This pass covers four findings from the October 21 site review. It does not add mobile-specific behavior or mobile acceptance work, change the Harness, or publish the site.

## Reader path

Home remains the lab overview. Architecture explains the published, gateway-based Harness snapshot. Workflows names the three Harness tasks and then explains artifact review through Atlas. The build story explains the October 16 direct-API design candidate and the human/AI working method. Founders, Decisions, Validation, and Reproduce retain their current roles.

## 1. Distinguish architecture versions

Add a short, visible qualifier next to the Architecture system map: the diagram represents the pinned public Harness snapshot and includes the LiteLLM gateway. Link to the architecture-evolution chapter for the later direct-API design. In the case-study layout, keep the October 16 date and explicitly label its diagrams as a source candidate, not the published gateway snapshot or a deployed cutover. Do not redraw either architecture or imply that a comparison measured performance.

Representative wording:

> Published Harness snapshot: MCP clients use the LiteLLM gateway. The build story compares this with the later direct-API design target.

> October 16 design target: a direct NIS API source candidate, not a deployed cutover.

## 2. Restore 404 primary-button contrast

The generic link color currently overrides the primary CTA text color on the 404 page. Keep the existing mint button and set its visible text to the dark action-text token. Scope the CSS correction so ordinary text links and outline buttons retain their current appearance. The primary label must reach at least 4.5:1 contrast against its background in the normal state.

## 3. Match Workflows to its title

Keep `/workflows/` and the page title. Before the Atlas example, add three compact linked summaries: question answering, knowledge ingestion, and artifact evaluation/revision. Each summary names its distinct outcome and links to the existing walkthrough or detailed section. The rest of the page continues to focus on artifact review; do not duplicate the ingestion or request walkthroughs here.

## 4. Lead AI and evidence with the result

Open the `learning` chapter with a short summary of Michael's role, AI's contribution, and where a reader can inspect the supported work. Keep the dated checks, source-availability limits, and candidate/deployed distinction in their existing owning sections. Reduce repeated introductory caveats where the new summary already makes the boundary clear; do not upgrade any claim or expose private evidence.

Representative opening:

> Michael set the goals, scope, and architecture decisions. AI assisted with research, bounded source changes, and critique. The public Harness and dated validation show what can be inspected; the October 16 direct-API candidate remains a separate design record.

## Acceptance

- A reader moving from Architecture to the build story can identify which diagram is the published gateway snapshot and which is the later direct-API candidate without reading an entire chapter.
- The 404 primary CTA has readable dark text; other CTA and link styles do not regress.
- Workflows gives a one-screen map of three tasks before the Atlas review detail.
- The AI/evidence chapter states ownership, contribution, and evidence up front while preserving its limits.
- Run Astro checks, tests, build, local link check, and a desktop visual pass of affected routes. Record local verification separately from a hosted preview or production release.

## Out of scope

No new brand, navigation item, route, architecture diagram, mobile-specific layout or mobile QA, Harness change, service change, push, or deployment.
