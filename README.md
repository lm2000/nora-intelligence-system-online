# Nora SuperIntelligence Lab

This repository contains the static Astro website for the Nora SuperIntelligence Lab.

## Purpose

Give technical interviewers a guided view of the Nora SuperIntelligence Lab: service boundaries, request and ingestion paths, design decisions, validation, and reproduction instructions.

Home introduces the independent lab, its current Nora knowledge-assistant project, a simplified map of the published Harness architecture, working approach, people, and contact. Architecture owns the detailed technical diagrams. The walkthrough retains the fictional Atlas example: “What still blocks the Atlas release?” → “The load test and rollback rehearsal remain.” It does not call a model or describe a real release.

## Commands

Run from the project root:

```bash
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm test
pnpm build
node scripts/check-site.mjs
```

## Environment & Build

The primary host is Vercel at `nora-intelligence-system.com`. GitHub Pages is a secondary host with the repository base path (`SITE_BASE=/nora-intelligence-system-online`).

To build for the Pages preview environment:
```bash
SITE_BASE=/nora-intelligence-system-online SITE_URL=https://lm2000.github.io pnpm build
SITE_BASE=/nora-intelligence-system-online node scripts/check-site.mjs
```

To build for the root primary domain:
```bash
pnpm build
```

## Pages and sources

- The website is a static build with in-page HTML diagram interactions and a guided fictional walkthrough. It has no live chat functionality.
- Main navigation: Home, Architecture, Walkthroughs, [Workflows](src/pages/workflows.astro), Use cases, and Founders, each on its own page with its own index. Supporting pages include Decisions, Validation, Reproduce, and the [engineering build story](src/content/case-study/readme.md).
- Founder profile on `/founders/` is Michael Lvov (alone). The profile array lives in `src/data/site.json`.
- Public contact supplied by owner: `mailto:michael.lm00@gmail.com`.
- GitHub: `https://github.com/lm2000`.
- Later, Alla may be appended *only* as a confirmed object with no placeholder.

## Harness source and diagrams

The original Architecture, Validation, and Reproduce material uses public Harness snapshot `10bd370c711afabdfc7b23b516911c31ff58bcb4`; the header and Architecture hero link to the current public repository. Keep the historical pin for reproducible examples until those pages are deliberately refreshed.

`public/diagrams` contains three pinned architecture HTML/GIF pairs and their derived preview SVGs, two workflow pairs, and three build-story pairs. Provenance is recorded in `src/data/source-manifest.json`, `src/data/workflow-sources.json`, and `src/data/case-study-sources.json`; the last records separate source and website hashes for adapted diagrams. The build story draws on a dated local source candidate; its status is stated on the pages.

The historical website source at commit `ea6c16137977431b9535316c938b9473393fd2da` is preserved in `legacy/source/`. `pnpm build` generates its archive and legacy redirect files; it does not need Git history. Old presentation/video files already absent at that baseline are not restored.

See `PRODUCT.md` for the audience and content structure, `DESIGN.md` for the visual system, and `Context.md` for the current project state.

## License

The original website content retains its Apache LICENSE. The testing harness source is MIT licensed. See `NOTICE.md` for details.

Use cases is a top-level page linking the lab’s knowledge-assistant example and AI Harness Landscape research case study. It uses the original floating-index pattern; detailed case studies keep their own index.

Additional use cases: Interview Preparation describes a stage-specific preparation method; Client Research and Pitch Preparation is a proposed agency workflow. Both include illustrative examples and a page-owned content index.

AI and data readiness provides a supporting assessment method at `/case-studies/ai-data-readiness/`. Use-case pages adapt the legacy interview learning loop, agency acquisition and delivery methods, and public landscape research; examples remain illustrative.
