# Home and walkthrough refinements

Scope approved by Michael: implement audit recommendations 1 and 3, validate, deploy to Vercel and verify production.

Design: retain Astro, existing factual content, diagrams and query state. Move Home actions before the video. Render input/operation/result from step data; use a native mobile step picker and retain desktop numbered navigation. Show contextual links only on final steps. Hide the request reference for ingestion. No dependencies or canonical asset changes.

- [x] Update Home order and all eleven step summaries.
- [x] Render summaries, compact mobile picker and contextual endings; preserve next/previous/reset, focus, deep links and history.
- [x] Run pnpm validate and responsive browser checks for both flows.
- [ ] Integrate into main, push, verify exact Vercel production commit and live behavior.
