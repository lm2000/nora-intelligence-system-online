---
name: Nora Intelligence System
description: A guided technical architecture portfolio for a knowledge assistant system.
colors:
  paper-white: "#ffffff"
  atlas-cool: "#f5f8fa"
  ink-navy: "#121d36"
  body-slate: "#43516b"
  muted-blue: "#234b82"
  teal-action: "#075973"
  teal-action-hover: "#054258"
  divider-frost: "#d5dfe7"
  divider-strong: "#b0c0d0"
typography:
  display:
    fontFamily: "'Libre Caslon Display', Georgia, serif"
    fontSize: "clamp(2.75rem, 6vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "normal"
  headline:
    fontFamily: "'Libre Caslon Display', Georgia, serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "normal"
  title:
    fontFamily: "'Libre Caslon Display', Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "normal"
  body:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.06em"
rounded:
  xs: "2px"
  sm: "4px"
  md: "8px"
  pill: "100px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  container: "40px"
components:
  button-primary:
    backgroundColor: "{colors.teal-action}"
    textColor: "{colors.paper-white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.teal-action-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.teal-action}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.atlas-cool}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.teal-action}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    height: "44px"
  card:
    backgroundColor: "{colors.atlas-cool}"
    rounded: "{rounded.md}"
    padding: "24px"
  framed-diagram:
    backgroundColor: "{colors.paper-white}"
    rounded: "{rounded.md}"
    padding: "24px"
---

# Design System: Nora Intelligence System

## Overview

**Creative North Star: "The Cool White Architecture Atlas"**

Nora Intelligence System presents as a precise, technical document. The visual language relies on a cool white backdrop, deep navy serif headlines, and deliberate teal pill-shaped actions. It prioritizes clarity over flourish, utilizing framed canonical diagrams and cool-toned cards to make engineering boundaries easy to examine.

The density is relaxed but structured. Information is chunked into bordered containers that establish a clear architectural rhythm. The Founders section inherits this system cleanly, presenting data-driven profiles that currently feature Michael Lvov alone, with structural readiness for Alla to be added later.

**Key Characteristics:**
- Cool white and frost surfaces.
- Navy serif headlines (Libre Caslon Display) with muted blue emphasis.
- Teal pill action buttons.
- Clean framed canonical diagrams.
- Structured, bordered containers for architectural chunking.

## Colors

The palette characterizes a cool, analytical environment, leaning heavily on whitespace, tonal frosts, and distinct navy/teal accents.

### Primary
- **Teal Action** (#075973): Primary accent for call-to-action buttons, active step indicators, links, and interactive focus outlines.
- **Teal Action Hover** (#054258): Hover state for primary buttons.

### Neutral
- **Paper White** (#ffffff): Base background and standard surface color.
- **Atlas Cool** (#f5f8fa): Secondary background for cards, step lists, and outline button hovers.
- **Ink Navy** (#121d36): Primary heading color and strong text.
- **Body Slate** (#43516b): Default body text color.
- **Muted Blue** (#234b82): Used for emphasis within hero headlines and founder roles.
- **Divider Frost** (#d5dfe7): Standard border color for cards, frames, and dividers.
- **Divider Strong** (#b0c0d0): Stronger border for active or emphasized states.

**The Cool Ground Rule.** Backgrounds must remain strictly cool and near-white. Avoid warm grays or off-whites; the system's clarity depends on the cool atlas aesthetic.

## Typography

**Display Font:** Libre Caslon Display (with Georgia, serif)
**Body Font:** Public Sans (with -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif)

**Character:** A refined, literary serif paired with a modern, highly legible humanist sans-serif. This establishes a tone of authoritative engineering documentation.

### Hierarchy
- **Display** (400, clamp(2.75rem, 6vw, 4rem), 1.15): Hero headlines; where the primary architectural thesis appears.
- **Headline** (400, clamp(1.75rem, 3.5vw, 2.25rem), 1.15): Section headers.
- **Title** (400, 1.5rem, 1.15): Card titles and sub-section headers.
- **Body** (400, 1.125rem, 1.65): Primary reading text, max-width 67ch.
- **Label** (700, 0.8125rem, 1.4): Uppercase metadata, step counters, and cell labels.

**The Serif Leadership Rule.** Serif fonts are reserved for headings. Body text, UI controls, and labels use Public Sans to maintain technical readability.

## Layout

The layout model is container-based, restricted to a maximum width of 1320px. Internal padding is typically 40px on desktop, reducing to 20px on mobile.

Spacing follows a consistent rhythm: 8px (sm), 16px (md), 24px (lg), and 32px (xl). Grids use `auto-fit` with `minmax(250px, 1fr)` for responsive card arrays. Walkthrough pages utilize a 280px sidebar for step navigation alongside a flexible 1fr main panel.

## Elevation & Depth

The system is mostly flat, relying on tonal layering (Paper White vs. Atlas Cool) and crisp 1px borders (Divider Frost) to establish structure.

### Shadow Vocabulary
- **Ambient Pop** (`box-shadow: 0 1px 3px rgba(18,29,54,0.06)`): Used exclusively for active step list items to indicate current selection.
- **Mobile Dropdown** (`box-shadow: 0 4px 12px rgba(18, 29, 54, 0.08)`): Applied to the mobile navigation dropdown menu.
- **Diagram Focus** (`filter: drop-shadow(0 3px 5px #254c6a55)`): Applied via SVG to active nodes in the interactive SourceMap component.

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows or drop-shadows appear only as a response to interactive state (hover, active, focus).

## Shapes

The form language uses sharp, precise frames with highly rounded actions. Standard cards, diagram frames, and containers use an 8px border radius. Step list buttons and mobile menus use a 6px radius. Founder portraits use a 4px radius. Action buttons (CTAs) use a 999px (pill) radius. Focus outlines are offset by 3px with a 2px radius.

## Components

### Buttons
- **Shape:** Pill shape for CTAs (999px radius), slight rounding for utility buttons (6px).
- **Primary:** Teal Action background, white text, 14px 24px padding.
- **Hover / Focus:** Primary darkens to Teal Action Hover. Outline buttons fill with Atlas Cool. Focus uses a 3px solid Teal Action outline.
- **Outline:** Transparent background, Teal Action text and 2px border.
- **Ghost / Utility:** Transparent background, Teal Action text, 2px Teal Action border. Used for walkthrough controls.

### Chips
- **Style:** Atlas Cool background, Body Slate text, 100px pill radius.
- **State:** Used for founder focus areas and non-interactive metadata tags.

### Cards / Containers
- **Corner Style:** 8px border radius.
- **Background:** Atlas Cool for standard cards (journey list, step nav). Paper White for emphasized panels and diagram frames.
- **Border:** 1px solid Divider Frost.
- **Internal Padding:** 24px or 32px depending on content density.

### Inputs / Fields
- **Style:** N/A (static architectural portfolio, no form inputs implemented).

### Navigation
- **Style:** Sticky header (80px height). Desktop uses inline links with a 2px transparent bottom border. Active state uses a Teal Action bottom border. Mobile uses a details/summary disclosure with a bordered dropdown.
- **Typography:** Public Sans, 16px, 500 weight. Brand wordmark is 20px, 600 weight.

### Founders Section
- **Style:** Data-driven section currently rendering Michael Lvov. Structurally supports adding Alla later. Uses the standard Card component (8px radius, 1px border, 32px padding). Contact links authorize `mailto:` and external profile links. Focus areas use pill Chips.

### Framed Diagrams
- **Style:** Canonical diagrams are wrapped in a Paper White frame with a 1px Divider Frost border and 8px radius. Image headers use the Serif Title typography.

## Do's and Don'ts

### Do:
- **Do** use the full name "Nora Intelligence System" or "NIS".
- **Do** use bordered containers (1px solid Divider Frost) to separate architectural concepts.
- **Do** maintain the data-driven structure for the Founders section so Michael Lvov and Alla can be rendered dynamically.
- **Do** use `mailto:` links for contact authorizations.

### Don't:
- **Don't** include credentials, private model routes, or live chat UI in the project documentation or interfaces.
- **Don't** use warm grays or off-whites; stick to the cool atlas palette (Atlas Cool, Paper White).
- **Don't** apply shadows to resting elements; reserve them for active states (The Flat-By-Default Rule).
- **Don't** replace serif headings with sans-serif fonts (The Serif Leadership Rule).
