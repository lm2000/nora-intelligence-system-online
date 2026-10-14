# Project Context

## Confirmed website goal — 2026-09-19

Help Michael succeed in technical interviews by giving interviewers following the link from his resume a clear, technically substantial architecture portfolio. The site should make his engineering reasoning easy to examine and give him concrete designs and tradeoffs to explain and discuss. Interview success is the desired outcome, not a guaranteed result.

### Audience and positioning

Primary audience: technical interviewers, senior engineers, architects, and hiring managers evaluating Michael's engineering depth. Present architecture and technical design, not a product sales pitch. This decision supersedes the earlier business-facing positioning for this site's future revision; the new revision follows this technical portfolio direction.

### Content direction

- System and component diagrams with explicit responsibilities and interfaces.
- Data flows and sequence diagrams for representative end-to-end scenarios.
- Key design decisions, alternatives considered, and tradeoffs.
- Failure handling, recovery, durable state, concurrency, and observability where relevant to the design.
- Scalability and security boundaries explained through concrete scenarios and clearly stated assumptions.
- A concise narrative Michael can use to discuss the architecture during an interview.

Present diagrams as architecture; do not clutter them with implemented/not-implemented status labels. Explain design choices without inventing personal contributions, production deployments, measurements, or outcomes.

### Review criteria

An interviewer can understand the system's purpose and principal components from the opening view, follow a concrete request through the system, and identify meaningful engineering decisions to discuss. Michael can explain why the design was chosen and compare it with alternatives.

### Next step

The accepted overhaul plan uses an Astro static guided portfolio with six primary routes and preserved legacy aliases. The selected approved visual direction is Option 1 (Light Architecture Atlas). Implementation is complete: 8 state tests pass, both root-domain and GitHub Pages builds pass locally, 360 links across 27 HTML files check successfully, and the current preview is available at localhost:8876. Final visual screenshots review passed, but user acceptance is pending.

Production deployment has not occurred. The original checkout and its pending local changes remain intact. Preview review is the next release step.

Vercel review preview: https://nora-intelligence-system-online-rnayxk9p9-nora-builders.vercel.app . Remote build READY and authenticated homepage readback succeeded. Existing Vercel login protection is enabled. The final preview includes the corrected pinned source references, verified by authenticated readback.

Implementation commit: e5c8fa9f407d6914ac1bbee2d7ff3f04a06f8b9d. The review branch codex/portfolio-overhaul-20261014 is published on GitHub. Main and the production domain await preview review.

## Comparative UI/UX review — 2026-10-14

The owner requested reassessment against the existing live website and option 3 browser prototype. Fresh captures identified material UI/UX regressions: the homepage lacks a compact guided entry, Architecture delays diagrams behind long prose, walkthrough step buttons miss their intended styles, and mobile diagram panning lacks clear guidance. The prior screenshot QA pass does not establish acceptance. Recommended next scope: a homepage/walkthrough pilot using the old site's numbered visitor journey and option 3's compact overview, plus diagram-first architecture navigation. Preserve current technical source, six routes, and founder/contact. Production publication remains pending design review.

## Approved three-page repair — 2026-10-14

The owner accepted the recommended pilot. Homepage now has a compact paired overview and four discovery links; walkthrough has numbered controls, a concrete fictional Atlas scene, and source SVG component focus; Architecture places its main figure before long prose with working section anchors. Root/Pages builds verify367 references across27 HTML files; eight state tests and browser history, keyboard, bounds, reset, reload, and highlight checks pass. Fresh screenshot review passes the supplied views with P3 follow-ups for link affordances and map proximity. Revised preview review remains pending.

Revised repair preview: https://nora-intelligence-system-online-1yao8pnf2-nora-builders.vercel.app. Remote build is READY. Repair commit 8c20be910c32ea1023fa6ca347ac6769b89ab0ac is published on the review branch. Preview login protection remains enabled; owner review precedes production publication.

## Reuse existing website style — 2026-10-14

The owner requested removal of the diagram format/source link bars, in-page HTML diagram interaction only where useful, consistent Nora SuperIntelligence Lab branding, and reuse of the current live website style and floating content index. This supersedes the earlier light Option 1 direction. The revised site uses dark navy surfaces, bold Public Sans headings, teal actions, and a floating index on five long reading pages with a compact mobile disclosure. Request walkthrough retains its own step index. Source-derived component selection, keyboard access, reset and mobile diagram panning run in the page; canonical HTML/GIF source bytes remain unchanged. Homepage keeps a simple overview. Michael Lvov and the approved contact remain the only current founder profile.

Root and GitHub Pages builds pass with 354 references across 27 HTML files; eight existing state tests pass. Browser checks confirm index targets, Purpose scroll tracking, mobile Contact auto-close, diagram selection/keyboard/reset, independent panning, no duplicate IDs or page overflow, Pages diagram behavior, and one founder with the correct email. Fresh screenshot review passes the supplied desktop/mobile views; it is not owner acceptance or a complete accessibility audit. Review preview publication follows these checks; production remains pending owner review.

Current style-reuse review preview: https://nora-intelligence-system-online-rkafvqgrp-nora-builders.vercel.app. Deployment dpl_Eitxjb2HPUQAqRytLgxUDweSdGr6 is READY; authenticated homepage and Architecture readback confirm the new branding, shared content index, inline interactive diagrams and removed format link bars. Implementation commit 9f1c0dc9b40f342fcffae73579f4734645a9cef8 is published on codex/portfolio-overhaul-20261014. Existing preview login protection remains enabled. Production publication awaits owner review.

## Original Foundation layout restoration — 2026-10-14

The owner requested closer adherence to the original Foundation UI/UX, superseding the compact navy reinterpretation. Both original stylesheets are reused byte-for-byte. Homepage and Architecture now use the original narrative hero, grid and glow treatment, white headline, numbered side navigation that docks after scrolling, spacious section bands and split headings. Header/footer and native dropdown follow the original markup patterns. Updated technical content, source-derived HTML diagrams, the fictional Atlas walkthrough, Michael Lvov and the approved contact remain the portfolio content. Diagram format link bars remain removed. A measured header-height offset keeps mobile anchors clear of the wrapped navigation.

Root build and 344 link checks across 27 HTML files pass, alongside eight state tests. Desktop docking and section tracking have been checked in the browser. Mobile section tracking, dropdown navigation, diagram panning, one founder/contact and the retained walkthrough have been checked. Final preview publication is in progress; production publication remains pending owner review.

Fresh screenshot comparison passes for the supplied original-reference, restored desktop and mobile views. Both original stylesheet copies are byte-identical, six canonical diagram source checksums remain unchanged, and design documentation/sidecar reflect the restored original system. Review deployment follows; production publication awaits owner review.

Original-layout review preview: https://nora-intelligence-system-online-c5d3fwj0e-nora-builders.vercel.app. Deployment dpl_2yAuZY77Q7Xp9WCaRvauNqy62rxa is READY. Authenticated Architecture readback confirms the original hero/grid/glows, numbered navigation, three inline interactive diagrams and removed format links. Implementation d23ccf32751a53218a4a336db9be52d4757ae6af is published on the review branch. Existing preview login protection remains enabled; production publication is pending owner review.


## Direct diagram interaction — 2026-10-14

The owner requested removing the diagram component dropdown and reset bar, and bringing interaction into the diagrams as in the public harness. The shared Diagram component now offers direct node activation, connected-edge highlighting, source-path moving markers, selected-node toggle and Escape clearing. A single pause/resume button sits inside the viewport. Motion respects reduced-motion changes and stops offscreen or when the document is hidden. Canonical imported HTML/GIF diagram assets and topology remain unchanged.

Local implementation and root build, Astro checks, 344 link checks and eight existing state tests pass. Browser verification covers direct node-surface clicks, Enter/Space/Escape, moving path positions, pause, reduced-motion and mobile containment. This edit is local; the earlier Vercel review deployment does not contain it yet.


## Diagram readability and explanations — 2026-10-14

Owner accepted recommendation 1 only. Architecture diagrams now use a single figure without nested bordered framing or repeated headings. The original hero and stylesheets are preserved; an Architecture-only override narrows the docked index to 170px. Diagram sections reserve 190px for the index from 1081–1599px and use full 1180px width at 1600px and above. All five index links remain available with 44px targets. Eleven request-path node explanations are maintained in src/data/diagram-details.json, derived from the pinned public diagram responsibilities; canonical imported HTML/GIF assets stay unchanged. Mobile header and CTA-copy refinements remain separate, unselected recommendations.

Root build, Astro diagnostics (zero errors/warnings), 344 link checks, and eight existing state tests pass. Browser checks cover five CSS desktop widths (1081, 1280, 1440, 1600, 1920), no index/diagram overlap or document overflow, source-grounded node details, mobile containment and horizontal pan, keyboard selection and Escape clearing. Implementation is local only; prior Vercel preview is unchanged. Ollama Cloud generated the CSS and explanations; generated selectors and unsupported wording were corrected during integration.

GitHub Pages base-path build and its 344 link checks also pass. Final browser screenshot was inspected; framing is simplified and the selected Retrieval explanation adds responsibilities beyond the node subtitle.


## Four main pages and page-owned indexes — 2026-10-14

Owner accepted removing Explore and using four main pages: Home, Architecture, Walkthroughs, and Founders. Founders is now /founders/ with Michael alone, sourced profile/focus, opportunities, and approved contact; Home retains a brief teaser at the old #founders anchor. Decisions, Validation, and Reproduce remain separate supporting pages with contextual and footer links. Hero indexes use the original numbered card and dock after scrolling; supporting pages use matching numbered rails. Walkthroughs owns its active flow's step index, preserving query deep links, browser history, and previous/next/reset controls. All indexes become compact native “On this page” disclosures on mobile.

Ollama Cloud produced the navigation/page/index implementation. The original walkthrough state script was preserved and enhanced only for disclosure and index focus behavior. A truncated provider response was recovered for complete files; a bounded follow-up supplied the remaining CSS/index changes. Integration corrected selectors, duplicate future-profile IDs, repeated contact copy, and mobile grid containment. Original stylesheets, diagram assets, fixtures, and source pins remain unchanged.

Astro checks pass with zero errors/warnings; root and Pages builds pass. Root and Pages link checks cover 351 references across 28 HTML files including the new Founders route; eight existing state tests pass. Browser checks verify four direct header links/active Founders state, one founder, source-grounded contact, active walkthrough step/map focus, Next and browser Back, mobile closed indexes/step focus with 390px containment, and supporting-page index targets. This implementation remains local; prior Vercel review and production are unchanged.

Final desktop Founders check confirms the 170px docked index, active Expertise entry, and 20px separation from content at 1600px. The old Home #founders bookmark resolves to its teaser and dedicated-page link. Final Founders screenshot was inspected.


## Distinct lab overview on Home — 2026-10-14

Owner approved and requested the Home-only lab-overview plan. Home now introduces the independent lab with the exact approved headline and intro, one current Nora project, three working principles, a brief Michael teaser, and the approved contact action. Its index is Overview, Current work, Approach, People, Contact. The old IDs overview/example/system-map/founders/contact are preserved, with example now Current work and system-map now Approach. Architecture retains the service diagrams, Walkthroughs retains the fictional Atlas fixture, and Founders retains the full profile. Header, other page implementations, source pins, fixtures, and diagram assets were not changed for this scope.

Ollama Cloud generated the Home implementation and Home data. Integration corrected supporting-page links and kept explanations concise. Original stylesheets and founder/contact data are unchanged. Astro checks pass with zero errors/warnings; root and Pages builds and 352 links across 28 HTML files pass. Eight existing walkthrough tests pass. Browser verification covers exact copy, all five anchors/index labels, no Home diagrams, desktop docking and active Approach state, both hero destinations and the first walkthrough step, mobile 390px containment, 44px disclosure, People bookmark and Founders navigation. Publication is outside scope; this change is local only.

Final Home screenshot was inspected: original hero/grid/glows and numbered index are preserved; the page presents the lab and current work without an embedded architecture diagram or Atlas Q&A.


## All-page UI and content cleanup — 2026-10-14

Owner approved all three audit batches. Architecture retains its three interactive diagrams and replaces its long duplicated reference with concise related reading. Decisions, Validation, and Reproduce now have distinct task-specific headings; supporting-page mobile indexes follow the title and introduction. Validation retains its dated evidence, metrics, providers, and limitations. Reproduce emphasizes pinned source, prerequisites, commands, and expected results. Founders groups profile/expertise and opportunities/contact in two tighter sections, with one closing contact group and all existing anchors. Shared navigation distinguishes Nora source from Website source, and the footer describes the lab. Project guidance records the page-ownership rules.

Ollama Cloud generated the cleanup and a scoped fix for Founders index tracking when a bookmark cannot align at the maximum scroll position. Integration corrected base-path links, redundant introductions, checkpoint wording, and hash-change refresh. Root and GitHub Pages builds and 359 local links across 28 HTML files pass. Astro reports zero errors/warnings and 11 existing hints; eight walkthrough state tests pass. Browser checks cover all seven desktop/mobile routes, containment at 1600/390px, no duplicate IDs, mobile index placement and closing, anchor offsets, and Founders Expertise/Contact active states. Old Home, Founders, Architecture, and supporting-page fragments remain. Home content, Walkthroughs, diagram assets and component, fixtures, founder/contact data, source pins, and original stylesheets are unchanged. The shared OriginalIndex receives only the compact Founders tracking fix and hash-change refresh.

Fresh screenshot review found no material regressions in the supplied views; Architecture closing was additionally inspected from a full-page capture after its initial viewport capture was blank. This is local verification, not full accessibility compliance or owner acceptance. No commit, push, preview deployment, or production publication was performed for this cleanup. Local review remains http://127.0.0.1:8876/.
