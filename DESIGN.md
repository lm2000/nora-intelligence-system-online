---
name: Nora SuperIntelligence Lab
description: Deep-navy lab portfolio — dark blueprint hero, teal–violet accents, one assistant with clear service boundaries.
colors:
  navy-deep: "#071827"
  navy-surface: "#0b2436"
  paper-dark: "#0b1d2b"
  teal: "#13b99d"
  teal-glow: "#73ecd9"
  violet: "#7067f0"
  ink: "#eef7fb"
  ink-soft: "#a7bdc9"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.4rem, 4.7vw, 4.45rem)"
    fontWeight: 760
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
rounded:
  sm: "12px"
  md: "18px"
  lg: "28px"
spacing:
  band: "120px 0"
  card: "34px"
  gutter: "20px"
components:
  button-primary:
    backgroundColor: "linear-gradient(135deg, #62efd3, #a7f5e6)"
    textColor: "#05271f"
    rounded: "999px"
    padding: "0 22px"
  button-outline:
    backgroundColor: "rgba(255, 255, 255, 0.04)"
    textColor: "{colors.ink}"
    rounded: "999px"
    padding: "0 22px"
---

# Design System: Nora SuperIntelligence Lab

## Overview

**Creative North Star: "The Dark Lab Blueprint"**

The interface reads as a working blueprint pinned up inside a lab: deep-navy canvas, a faint engineering grid, and soft teal and violet glows that mark where the energy concentrates. Documentation is dense and technical, but every page opens with a confident white headline that states the thesis plainly, then lets spacious bands of dark surface carry the detail.

Authority comes from the original stylesheet: `original.css` and `original-navigation.css` are imported byte-for-byte and hold the highest precedence; hero, header, and section patterns reuse the legacy shell/nav/orchestration DOM classes directly. Typography is a single voice — Inter over the system-ui stack (Public Sans remains imported only for legacy helpers; it is never the body face). Depth is conveyed through gradient-filled hero canvases, blurred glass cards, and tonal bands rather than elevation shadows on content surfaces. The brand is always "Nora SuperIntelligence Lab" with exact spacing; one founder, Michael Lvov, is the sole profile.

**Key Characteristics:**
- Deep-navy blueprint canvas with faint grid and teal/violet radial glows
- One font voice (Inter) with tight -0.035em letter-spacing on headlines
- Pill buttons; teal-gradient primary is the single loud accent
- Numbered orchestration card doubles as a docked floating page index
- Split section headings; 112–120px section bands on alternating dark tones

## Colors

The palette is a dark navy foundation energized by a teal accent family and a single violet counterpoint; surfaces stay tonal and borders are translucent ink tints.

### Primary
- **Orchestration Teal** (#13b99d): Section labels, eyebrows, marker numbers, accent borders, the gradient bar across orchestration cards. Signals "the system is alive here."
- **Teal Glow** (#73ecd9): Current-state highlight in navs and indexes, muted link color on dark ground, status pill dots.

### Secondary
- **Foundation Violet** (#7067f0): The second glow in heroes, the violet value-card gradient, and the teal→violet underline on the active nav item. Used sparingly as the counterpoint to teal.

### Neutral
- **Deep Navy** (#071827): Hero ground and sticky header base (rendered at 94% opacity with backdrop blur).
- **Navy Surface** (#0b2436): Raised dark surface — proof bands, dropdown menus.
- **Dark Paper** (#0b1d2b): The body/page background; section bands alternate with #0d2233.
- **Ink** (#eef7fb): Headline and high-emphasis text; pure white appears in gradient cards.
- **Ink Soft** (#a7bdc9): Body and secondary text on dark ground.

### Named Rules
**The Two-Glow Rule.** Every hero carries exactly two radial glows — violet top-right, teal bottom-left — at low opacity over the grid. Adding a third glow or recoloring them breaks the blueprint feel.

**The Teal Means State Rule.** Teal (and its glow variant) marks interactivity and current state: links, active index dots, eyebrow dots, accent borders. Body copy is never teal; it stays ink or ink-soft.

## Typography

**Display Font:** Inter (with ui-sans-serif, system stack fallback)
**Body Font:** Inter (same stack — one family for everything)

**Character:** A single grotesque voice carries both the oversized hero headline and the small technical captions; hierarchy is built from weight (670–850) and tight negative tracking, not from font changes.

### Hierarchy
- **Display** (760, clamp(2.4rem, 4.7vw, 4.45rem), 1.12, -0.035em): Hero headline on home; architecture hero uses the compact override clamp(2rem, 3.5vw, 3.25rem).
- **Headline** (730, clamp(1.55rem, 2.6vw, 2.15rem), 1.12): Section h2s inside split headings.
- **Title** (700, 1.2rem, 1.12): Card h3s and callout headings.
- **Body** (400, 15px, 1.65): Prose on dark ground in ink-soft; ledes bump to clamp(0.98rem, 1.4vw, 1.14rem).
- **Label** (800, 0.75rem, 0.16em tracking, uppercase): Eyebrow and section-label; precedes every h2.

### Named Rules
**The One Family Rule.** Inter does all the work. Public Sans stays imported for legacy helpers but must not be applied to new elements; no serif, no mono display face.

## Layout

Content rides a centered `.shell` at `min(100% - 48px, 1180px)`. The sticky header is a `.shell.nav-wrap` flex row (min-height 86px) with brand, centered-nav, dropdown, and an outline GitHub pill; below 1080px the nav wraps to a full-width second row. Heroes are grid layouts (`hero-layout`, two columns, ~1.25fr/0.75fr) over an absolute grid layer and two glows, minimum height ~540–580px. Sections below alternate dark tones with 112–120px vertical padding and use split headings: label + h2 in a 1.5fr column, supporting paragraph in a 0.62fr column. Below 860px all split layouts collapse to a single column and padding drops to 82–88px.

## Elevation & Depth

Depth is atmospheric, not structural: heroes glow, glass surfaces blur, and content bands stay flat. `--shadow` (0 24px 70px rgba(9,30,48,.13)) and `--shadow-soft` appear mainly on light-ground cards (tables, use-case cards); dark-ground cards (`problem-card`, `pilot-card`) explicitly set `box-shadow: none`. Sticky chrome (header, docked index) uses backdrop-filter blur over the navy ground instead of drop shadows.

### Named Rules
**The Flat Dark Surface Rule.** Cards sitting on the navy foundation do not cast shadows. Elevation is reserved for glass blur, the primary pill's teal halo, and light-section cards.

## Shapes

Corners run large and soft: 28px on feature cards, 18px on standard cards and figures, 12px on small tokens and portraits — and a full 999px pill language for buttons, badges, tabs, number chips, and metric pills. Numbered mini-flow markers are 10px-radius squares; diagram figures carry 10px inner image rounding inside an 18px frame on white canvas.

## Components

### Buttons
- **Shape:** full pill (999px), 52px min-height, 0 22px padding, weight ~720
- **Primary:** teal gradient (135deg, #62efd3→#a7f5e6) with dark-green text; hover lifts 2px and deepens the teal halo
- **Ghost/Outline:** translucent white fill (4–4.5%) with 17–25% white border; outline is the header GitHub pill (small, 40px)
- **Focus:** 3px rgba(55,208,181,.7) outline, 3px offset — the universal dark-ground focus ring

### Cards / Containers
- **Orchestration card:** glass card — 28px radius, white-on-white translucent gradient, 18px blur, and a teal→violet gradient bar across the top edge. Hosts the numbered mini-flow index.
- **Problem/workflow cards:** flat #102a3c-ish fills, 1px translucent ink borders, accent variants tint the fill toward teal/violet/amber.
- **Light cards:** white surface, `var(--shadow-soft)`, 1px `var(--line)` border, and a 4px gradient top strip.

### Navigation
- **Header:** sticky, navy at 94% opacity + 18px blur, hairline bottom border. Links are 14px/600 in #bbccd7; hover and current go white; current adds a 2px teal→violet gradient underline.
- **Dropdown:** details-based "Explore" menu — 10px-radius navy-surface panel, white 14px items, 6px hover chips.
- **Docked index:** the orchestration card fixes itself top-right after the hero, shrinks to 238px, collapses its title and descriptions to a numbered mini-flow, and marks the current section in teal. Below 1081px it is hidden; generic `.page-index` dot-nav serves the remaining long pages.

### Diagram Figure
- **Style:** white-canvas figure (#f9fbfc, 18px radius, shadow-soft) framing source-extracted HTML diagrams; images render on #ffffff with 10px rounding. The architecture variant goes borderless on #0b2032 with a teal-tinted border — a page-native panel, not a slide.

## Do's and Don'ts

### Do:
- **Do** set heroes on `var(--navy)` with the grid layer plus exactly the teal and violet glows.
- **Do** open every section with an uppercase teal section-label before the h2.
- **Do** reuse the legacy DOM classes (`.shell`, `.nav-wrap`, `.hero-layout`, `.orchestration-card`, `.section-heading--split`) instead of re-deriving layout.
- **Do** give dark-ground interactive elements the 3px teal focus ring with 3px offset.

### Don't:
- **Don't** apply Public Sans (or any non-Inter face) to body or headline text; it exists only for legacy helper code.
- **Don't** put drop shadows on cards that sit on the navy foundation; flat dark surfaces are the norm.
- **Don't** introduce a second accent hue beyond the teal family and the single violet counterpoint (amber appears only inside established value/workflow variants).
- **Don't** write teal body copy; prose stays ink or ink-soft.


## Page navigation

The main navigation contains Home, Architecture, Walkthroughs, Workflows, Use cases, and Founders as separate pages. It has no Explore dropdown. Every page provides a numbered content index using the original dark palette and active teal state. Hero-based indexes dock after scrolling on desktop; supporting-page indexes float from the reading view. The walkthrough index uses its active flow's steps and preserves deep links, history, and previous/next/reset controls. Desktop rails are 170px wide and stay separate from content. On mobile, indexes become compact native “On this page” disclosures. Decisions, Validation, and Reproduce are supporting pages linked from relevant content and the footer.


## Home as lab overview

The Current work section uses a compact light-canvas inline architecture map adapted from the detailed system diagram. It keeps the same component colors and tool names while showing separate browser and MCP entrances, the assistant, retrieval/inference/checkpoint services, and manual knowledge preparation. Keep the complete map on Architecture; the Home version links to it.

Home uses the original hero, grid/glows, section bands, and numbered index to introduce the lab and one current project. Its five sections are Overview, Current work, Approach, People, and Contact. Architecture owns the detailed service diagrams; Walkthroughs owns the fictional Atlas example. Home's headline and intro use the approved independent-lab copy, with Explore the architecture as the primary action and Follow a walkthrough as the secondary action. Home keeps the compact map and a brief founder introduction.

## Compact profile and supporting-page layout

Founders uses a responsive portrait/profile row and two content sections with scoped spacing. Its original hero, docking gutter, four index targets, and mobile disclosure remain. Supporting reader pages place the index after the title and introduction on mobile; the desktop rail remains fixed. Keep original stylesheet copies unchanged.
