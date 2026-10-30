# Nora SuperIntelligence Lab

This repository contains the static Astro website for the Nora SuperIntelligence Lab.

## Purpose

Give technical interviewers a guided view of the Nora SuperIntelligence Lab: service boundaries, request and ingestion paths, design decisions, validation, and reproduction instructions.

Home introduces the independent lab, its current Nora AI agent harness, a simplified map of the published Harness architecture, working approach, people, and contact. Architecture owns the detailed technical diagrams. The walkthrough retains the fictional Atlas example: “What still blocks the Atlas release?” → “The load test and rollback rehearsal remain.” It does not call a model or describe a real release.

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

## Checks and deployment

Vercel is the only host, at [nora-intelligence-system.com](https://nora-intelligence-system.com). GitHub stores the source and runs validation; GitHub Pages is disabled.

Run the same checks locally, in GitHub Actions and during the Vercel build:

```bash
pnpm install --frozen-lockfile
pnpm validate
```

`validate` runs tests, Astro/TypeScript diagnostics, the production build and local link checks. A failure stops the command and blocks the Vercel deployment from becoming ready.

- Pull requests to `main` run the **Website checks / Validate website** workflow. Vercel creates preview deployments for branches through its existing GitHub integration.
- Merging or pushing to `main` runs the checks and starts a Vercel production build. Vercel runs `pnpm validate` independently, so production does not depend on a race with GitHub Actions.
- Keep `main` as the Vercel project's production branch. The build/install settings and enabled Git deployments live in `vercel.json`.
- No Vercel token is stored in GitHub Actions and no manual file upload is part of the normal release path. Keep the existing production deployment if validation or deployment fails.

The site builds at the domain root. Historical Pages-era URLs in the preserved archive remain reference material, not a second hosting configuration.

## Pages and sources

- The website is a static build with in-page HTML diagram interactions and a guided fictional walkthrough. It has no live chat functionality.
- Main navigation: Home, Architecture, Walkthroughs, [Workflows](src/pages/workflows.astro), Use cases, and Founders, each on its own page with its own index. Supporting pages include Decisions, Validation, Reproduce, and the [engineering build story](src/content/case-study/readme.md).
- Founder profile on `/founders/` is Michael Lvov (alone). The profile array lives in `src/data/site.json`.
- Public contact supplied by owner: `mailto:michael.lm00@gmail.com`.
- GitHub: `https://github.com/lm2000`.
- Later, Alla may be appended *only* as a confirmed object with no placeholder.

## Harness source and diagrams

Architecture, Workflows, Walkthroughs, Decisions and Reproduce use published Harness snapshot `f9cea261f0b33217028fe31e39ff88b5a10c3d4a`. Validation separates current checks from older container/fixture evidence, which retains its original source pin. The build story remains a historical account.

`public/diagrams` contains all 16 canonical Harness HTML/GIF pairs, with derived SVG previews, alongside the historical build-story assets. The HTML/GIF files remain byte-identical to the published snapshot. `src/lib/diagram-source.mjs` adapts source SVG styles and component metadata to the existing accessible, in-page viewer. Provenance and hashes are recorded in `src/data/source-manifest.json`, `src/data/workflow-sources.json`, and the separate historical `src/data/case-study-sources.json`.

The historical website source at commit `ea6c16137977431b9535316c938b9473393fd2da` is preserved in `legacy/source/`. `pnpm build` generates its archive and legacy redirect files; it does not need Git history. Old presentation/video files already absent at that baseline are not restored.

See `PRODUCT.md` for the audience and content structure, `DESIGN.md` for the visual system, and `Context.md` for the current project state.

## License

The original website content retains its Apache LICENSE. The testing harness source is MIT licensed. See `NOTICE.md` for details.

Use cases is a top-level page linking the lab’s AI coordinator example and AI Harness Landscape research case study. It uses the original floating-index pattern; detailed case studies keep their own index.

Additional use cases: Interview Preparation describes a stage-specific preparation method; Client Research and Pitch Preparation is a proposed agency workflow. Both include illustrative examples and a page-owned content index.

AI and data readiness provides a supporting assessment method at `/case-studies/ai-data-readiness/`. Use-case pages adapt the legacy interview learning loop, agency acquisition and delivery methods, and public landscape research; examples remain illustrative.
