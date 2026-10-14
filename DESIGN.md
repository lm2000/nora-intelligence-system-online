---
name: Nora Intelligence System
description: A guided technical architecture portfolio for a knowledge assistant system.
colors:
  bg: "#ffffff"
  cool-bg: "#f5f8fa"
  ink: "#121d36"
  body: "#43516b"
  secondary: "#5b6b80"
  muted-blue: "#234b82"
  teal: "#075973"
  teal-hover: "#054258"
  border: "#d5dfe7"
  border-strong: "#b0c0d0"
typography:
  display:
    fontFamily: "'Libre Caslon Display', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(44px, 6vw, 64px)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "normal"
  headline:
    fontFamily: "'Libre Caslon Display', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(28px, 3.5vw, 36px)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "normal"
  title:
    fontFamily: "'Libre Caslon Display', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(22px, 2.5vw, 26px)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "normal"
  body:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.65
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "6px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.teal-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.teal}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-outline-hover:
    backgroundColor: "{colors.cool-bg}"
  card:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.body}"
    rounded: "{rounded.md}"
    padding: "32px"
  chip:
    backgroundColor: "{colors.cool-bg}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
---

# Design System: Nora Intelligence System

## Overview

**Creative North Star: "The Clean Architecture Atlas"**

The visual identity is a cool white architecture atlas, prioritizing clarity, legibility, and engineering rigor. The system uses a navy serif headline with blue emphasis to anchor technical content, complemented by teal pill actions that guide the user through walkthroughs and architecture decisions.

Density is deliberate. Ample whitespace and strict container boundaries prevent technical diagrams and code-heavy text from becoming overwhelming. The Founders section inherits this design; it currently lists Michael Lvov alone, with Alla to be added later. Profiles are data-driven.

**Key Characteristics:**
- Cool white and navy palette with teal emphasis
- Serif headlines paired with highly legible sans-serif body text
- Clean framed canonical diagrams
- Pill-shaped primary and outline actions
- Flat aesthetic with tonal layering for depth

## Colors

The palette relies on cool neutrals for surfaces and boundaries, with a deep navy for primary text and a muted blue for emphasis.

### Primary
- **Deep Navy** (#121d36): Primary headings and high-contrast text.
- **Teal** (#075973): Primary actions, links, and active navigation indicators.
- **Teal Hover** (#054258): Hover state for primary actions.

### Secondary
- **Muted Blue** (#234b82): Headline emphasis and founder roles.
- **Slate Secondary** (#5b6b80): Captions, secondary metadata, and chip text.

### Neutral
- **Cool Paper** (#f5f8fa): Tonal background for cards, chips, and example cells.
- **Surface White** (#ffffff): Primary application background.
- **Body Slate** (#43516b): Default body text color.
- **Light Border** (#d5dfe7): Borders for cards, diagrams, and example strips.
- **Strong Border** (#b0c0d0): Stronger container delineation when needed.

**The Atlas Rule.** The UI maintains a cool, calm atlas aesthetic. Avoid warm colors or high-saturation accents outside the established Teal and Muted Blue.

## Typography

**Display Font:** 'Libre Caslon Display' (with Georgia, 'Times New Roman', serif fallback)
**Body Font:** 'Public Sans' (with -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif fallback)

**Character:** The high-contrast serif headlines provide editorial weight to technical concepts, grounded by the utilitarian, clean sans-serif body text.

### Hierarchy
- **Display** (400, clamp(44px, 6vw, 64px), 1.15): Primary page hero headings.
- **Headline** (400, clamp(28px, 3.5vw, 36px), 1.15): Section headings.
- **Title** (400, clamp(22px, 2.5vw, 26px), 1.15): Sub-section and card titles.
- **Body** (400, 18px, 1.65): Default paragraph text. Max width 67ch.
- **Label** (700, 13px, 0.06em, UPPERCASE): Example cell labels and metadata markers.

## Layout

Layout is governed by a central max-width container (1320px) with 40px padding. On mobile (max-width: 768px), container padding reduces to 20px and body font size drops slightly to 17px. Flexbox and CSS Grid are used for component arrangement, with a 32px gap standard for major grid layouts. Scrolling maintains standard behavior, respecting `prefers-reduced-motion`.

## Elevation & Depth

This system is virtually flat. Depth is conveyed through tonal layering (using `Cool Paper` backgrounds) and 1px borders (`Light Border`) rather than drop shadows.

### Shadow Vocabulary
- **Mobile Nav Dropdown** (`box-shadow: 0 4px 12px rgba(18, 29, 54, 0.08)`): Used exclusively for the mobile navigation dropdown to lift it above page content.

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows are only used for floating elements (like mobile dropdowns) and never for cards or primary buttons.

## Shapes

Form language is predominantly rounded. Interactive elements like buttons and chips use fully rounded pill shapes (`border-radius: 999px`). Containers and cards use a moderate 8px radius. Internal elements like founder portraits use a sharp 4px radius.

## Components

### Buttons
- **Shape:** Pill shape (999px radius)
- **Primary:** Teal background, white text, 14px 24px padding.
- **Hover / Focus:** Background darkens to Teal Hover.
- **Secondary / Outline:** Transparent background, Teal text and 2px Teal border.
- **Outline Hover:** Background becomes Cool Paper.

### Chips
- **Style:** Cool Paper background, Slate Secondary text, 4px 12px padding.
- **State:** Used for founder focus tags and metadata.

### Cards / Containers
- **Corner Style:** 8px radius.
- **Background:** Surface White.
- **Border:** 1px Light Border.
- **Internal Padding:** 32px (reduces to 24px on mobile).

### Inputs / Fields
- **Focus:** 3px solid Teal outline with 3px offset.

### Navigation
- **Style:** Desktop nav is inline text links (16px, 500 weight). Mobile uses a bordered summary button.
- **Active State:** 2px bottom border in Teal.
- **Hover:** Text color shifts to Teal.

## Do's and Don'ts

### Do:
- **Do** use pill shapes (999px radius) for all primary and secondary call-to-action buttons.
- **Do** frame diagrams and architecture figures with a 1px Light Border and 8px radius.
- **Do** use the `mailto:` contact convention for founder inquiries.

### Don't:
- **Don't** apply drop shadows to cards or buttons; use tonal layering (`Cool Paper`) for depth.
- **Don't** include credentials or private model routes in project documentation.
- **Don't** invent primary navigation links outside the established Architecture, Walkthroughs, Decisions, and Founders routes.