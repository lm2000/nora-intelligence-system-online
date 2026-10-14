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
