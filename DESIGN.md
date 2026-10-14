---
name: Nora SuperIntelligence Lab
description: Open-source intelligence system architecture documentation with a dark, teal-accented technical reading experience.
colors:
  page-bg: "#0b1d2b"
  surface: "#0b2436"
  canvas-cool: "#071827"
  ink: "#eef7fb"
  body: "#c2d4de"
  secondary: "#a7bdc9"
  muted-blue: "#73ecd9"
  teal: "#5fe8cd"
  teal-hover: "#8df0dc"
  action-fill: "#bff5e9"
  action-fill-hover: "#d8faf2"
  action-text: "#071827"
  border: "rgba(178, 205, 219, 0.18)"
  border-strong: "rgba(178, 205, 219, 0.38)"
typography:
  display:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(2rem, 3.5vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.7rem, 2.9vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  body:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
components:
  button-primary:
    backgroundColor: "{colors.action-fill}"
    textColor: "{colors.action-text}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.action-fill-hover}"
    textColor: "{colors.action-text}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-outline:
    textColor: "{colors.teal}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  card:
    backgroundColor: "{colors.canvas-cool}"
    textColor: "{colors.body}"
    rounded: "{rounded.lg}"
    padding: "24px"
  field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
---

# Design System: Nora SuperIntelligence Lab

## Overview

**Creative North Star: "The Dark Instrument Panel"**

Nora SuperIntelligence Lab presents an open-source intelligence architecture as a deep-field technical surface: dark navy grounds, a single luminous teal voice, and quiet white-canvased diagrams. The system reads like a well-lit control room — calm surfaces, precise boundaries, and one bright signal color that always means "you can act on this."

Every screen is content-first. Long-form architecture prose sits in measured columns, diagrams are interactive only where interaction adds understanding, and navigation stays compact and out of the way: a sticky header that never shouts, a floating section index on wide desktops, and a collapsible On-this-page disclosure on smaller viewports.

**Key Characteristics:**
- Deep navy layered surfaces (page, surface, cool canvas) with thin low-contrast borders instead of shadows.
- One sans voice — self-hosted Public Sans — for display, body, and labels.
- A single teal accent family for links, selection, and interactive state; pale aqua fills reserved for primary actions.
- Diagrams always render on a white canvas so source-extracted SVG stays readable against the dark UI.
- Compact, sticky navigation and an unobtrusive On-this-page index; nothing auto-plays.

## Colors

The palette is a dark navy field with one teal signal family; surfaces layer tonally, never with light cards on light pages.

### Primary
- **Signal Teal** (#5fe8cd): The interactive voice. Inline links, outline-button stroke, hover color for nav items and footer links, and the text selection background. Use it wherever the user can act.
- **Signal Teal Hover** (#8df0dc): The lifted hover state for links; lighter, never a different hue.
- **Action Aqua** (#bff5e9): The filled primary-button background — a pale, high-contrast aqua that anchors the call-to-action moments.
- **Action Aqua Hover** (#d8faf2): The primary button's hover lift; a brighter tint of Action Aqua.

### Secondary
- **Muted Aqua-Blue** (#73ecd9): The secondary signal, for headings emphasis (the hero's highlighted phrase), the page-index current-location marker, founder roles, and the focus-visible outline. Slightly deeper than Signal Teal, so hierarchy stays clear.

### Neutral
- **Page Navy** (#0b1d2b): The global body background; the darkest field everything floats on.
- **Surface Navy** (#0b2436): The header bar, input/select fills, diagram viewport surround, and disclosure bodies. One step lighter than the page.
- **Cool Canvas** (#071827): The deepest surface — card backgrounds, footer band, diagram detail area, page-index panel, and the portrait frame behind founder photos. Also the text color on Action Aqua fills and the theme-color meta.
- **Heading Ink** (#eef7fb): Near-white with a cool cast; headings only.
- **Body Slate** (#c2d4de): The default reading color; softer than ink so headings always lead.
- **Secondary Slate** (#a7bdc9): Muted support text — subtitles, captions, hints, page-index entries, diagram purpose lines.
- **Hairline Border** (rgba(178, 205, 219, 0.18)): The default 1px structural line around cards, sections, header/footer edges.
- **Strong Border** (rgba(178, 205, 219, 0.38)): A firmer line used sparingly, e.g. the page-index dot markers.

### Named Rules
**The One Signal Rule.** The teal family is the only accent voice on the dark field. One accent, used for action and focus — never introduce a second accent hue for decoration.

**The Dark Field Rule.** Pages are dark navy; Action Aqua and white canvases are the only light masses. Aqua fills belong to primary buttons and step numerals — never to full panels or page backgrounds.

## Typography

**Display Font:** Public Sans (self-hosted via @fontsource, weights 400–700, with -apple-system / Segoe UI fallback)
**Body Font:** Public Sans (same stack; there is no separate body face)
**Label/Mono Font:** Public Sans, uppercase with wide tracking (no mono face in use)

**Character:** A single bright sans carries the whole system — assertive, tight-tracked headings over a comfortable 15px reading body. No serif, no display ornament; the typography behaves like instrumentation lettering: precise and high-contrast.

### Hierarchy
- **Display** (700, clamp(2rem, 3.5vw, 3.25rem), line-height 1.12): Page heroes and H1s; tight `letter-spacing: -0.03em` in Heading Ink.
- **Headline** (700, clamp(1.7rem, 2.9vw, 2.25rem), line-height 1.12): H2 section heads; same tightening.
- **Title** (700, 1.2rem, line-height 1.12): H3s, card headings, diagram titles (diagram titles render at 24px within their figure header).
- **Body** (400, 15px, line-height 1.65): Default reading text in Body Slate; measure kept near 67ch (`max-width: 67ch` on paragraphs). Lead paragraphs scale to 18–21px on content pages and hero intros.
- **Label** (700, 13px, uppercase, letter-spacing 0.06em): Cell labels, step markers, and the On-this-page index entries (0.7rem uppercase).

### Named Rules
**The One Voice Rule.** Public Sans at 400/500/600/700 is the entire type system. Weight and tracking create hierarchy — never a second family.

**The Tight Head Rule.** Headings always keep `letter-spacing: -0.03em` and `line-height: 1.12` in Heading Ink; body copy never inherits that tightening.

## Layout

Content sits in a centered container capped at the site maximum width (1180px) with 40px side padding on desktop, tightening to 20px at or below 768px. The homepage hero is a two-column grid (text + system map) that collapses to a single column with the map first on mobile; journey cards flow in an auto-fit grid (minimum 250px columns).

The header is sticky and compact (minimum height 80px, 12px vertical padding), with the desktop nav inline and a details-based Menu disclosure appearing at or below 900px. Anchored headings carry a scroll margin of the header height plus 24px so targets never slide under the bar.

Section indexing adapts by viewport: at 1280px and up, a fixed On-this-page panel hugs the right edge (180px wide, vertically centered) while the main column gains 220px of right padding to clear it; below 1280px the index becomes a collapsible disclosure inline above the content. The index renders only when a page has at least three eligible sections.

Diagrams keep a centered viewport that becomes horizontally scrollable on mobile (minimum SVG width 900–1000px) with a "Swipe to explore" hint instead of squeezing the drawing.

## Elevation & Depth

The system is essentially flat: depth comes from tonal layering of the three navy surfaces plus hairline borders, not from drop shadows. Page Navy holds the field, Surface Navy raises interactive furniture, and Cool Canvas sinks detail wells and cards.

### Shadow Vocabulary
- **Mobile nav menu** (`box-shadow: 0 4px 12px rgba(18, 29, 54, 0.08)`): The one structural shadow, on the open mobile Menu dropdown so it reads above the page.
- **Page-index panel (fallback token)** (`box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15)`, used via `var(--shadow-soft, …)`): A soft lift on the floating desktop index; the value is a hardcoded fallback reference, not a defined global token.

### Named Rules
**The Flat-By-Default Rule.** Cards, inputs, and buttons cast no shadow. Layer with the three surface colors and borders; reach for shadow only when an element genuinely floats above the page (nav dropdown, fixed index).

## Shapes

Corners are gentle and small, with pills reserved for genuine actions. There is no global radius token scale — radii are hardcoded per component and documented here as reference values: subtle rounding on controls (6px), section containers (8px), small accents like the focus outline and diagram detail wells (2–8px), and full pills (999px or 100px) on call-to-action buttons and founder focus chips. Step numerals are perfect circles (50%).

Borders do most of the structural work: a 1px Hairline Border traces cards, disclosures, the header/footer edges, and diagram viewports. Active navigation state is a 2px teal underline, not a filled tab.

## Components

### Buttons
- **Shape:** Fully rounded pills (999px radius) with a 2px transparent border for stable geometry.
- **Primary:** Light aqua fill (background Action Aqua, text Cool Canvas), padding 14px 24px, minimum height 48px, weight 600.
- **Hover / Focus:** Primary lifts to a brighter tint (Action Aqua Hover). Outline variant fills with a translucent teal wash, `rgba(95, 232, 205, 0.1)`. Focus uses the global focus-visible outline.
- **Outline:** Transparent background, 2px Signal Teal border, Signal Teal text; same pill geometry.

### Chips
- **Style:** Founder focus chips are Cool Canvas pills (100px radius) with Secondary Slate text at 14px, padding 4px 12px.
- **State:** Informational only — no selected state; they tag areas of focus.

### Cards / Containers
- **Corner Style:** Softly rounded (8px).
- **Background:** Cool Canvas for journey cells and detail wells; founder cards sit directly on the page field with a border instead of a fill.
- **Shadow Strategy:** None at rest — see the Flat-By-Default Rule.
- **Border:** 1px Hairline Border.
- **Internal Padding:** 24px (32px for founder cards).

### Inputs / Fields
- **Style:** Surface Navy fill, 1px Hairline Border, rounded corners (6px), padding 10px 14px, minimum height 44px; used by the diagram component selector.
- **Focus:** Global focus-visible treatment — 3px Muted Aqua-Blue outline with 3px offset.
- **Error / Disabled:** Disabled controls dim to 60% opacity with a waiting cursor; no error styling is defined.

### Navigation
- **Style:** A compact sticky header (Surface Navy, 1px bottom border) holding the N-mark self-hosted SVG plus the wordmark in Heading Ink at 19px/600. Desktop links are 16px/500 in Heading Ink with no underline at rest.
- **States:** Hover turns links Signal Teal; the current page carries a 2px Signal Teal bottom border (`aria-current="page"`).
- **Mobile treatment:** At or below 900px the inline nav collapses into a bordered Menu disclosure (Surface Navy, 6px radius, 44px touch targets); the open menu drops a panel with the mobile nav shadow and Cool Canvas hover on rows.
- **Footer:** A Cool Canvas band separated from the page by a 1px top border; links are plain ink that hover to Signal Teal.

### On this page index
- A dual-mode section navigator driven by the real headings. Desktop (≥1280px): a fixed right-edge panel on Cool Canvas with 8px dot markers; the current location gets Muted Aqua-Blue text and a filled, slightly enlarged dot. Mobile (<1280px): an inline collapsible disclosure labeled "On this page" with chevron summary; entries are uppercase labels separated by hairlines. It appears only when three or more sections qualify, and scroll state updates via `aria-current="location"`.

### Interactive diagram
- Architecture and request-path figures embed the source HTML diagram's inline SVG on a white-canvas host (SVG artwork is always drawn on white — its internal ink, not the dark UI palette, keeps the drawing readable) inside a Surface Navy viewport. A native select and clickable/keyboard-focusable nodes drive a shared selection state: the active node and its incident edges highlight in the host shadow's deep teal (#075973) over a pale blue fill (#f0fbff), and the detail well below (Cool Canvas, 8px radius) reports the component's canonical responsibility. A Reset control clears the state, a hidden fallback details list serves no-JS readers, and pulse animations are suppressed — figures never auto-play.

### System map (SourceMap)
- The homepage system map renders the same source-extracted SVG on the white canvas, but interaction is programmatic highlight only: `data-active` node IDs paint the active stroke/fill and a caption line names the focused services ("System overview" when empty). Nodes are non-interactive here (`cursor: default`; no tabindex) — selection on this component is owned by the page, not the reader.

## Do's and Don'ts

### Do:
- **Do** layer the three navy surfaces (Page #0b1d2b → Surface #0b2436 → Cool Canvas #071827) for depth instead of adding shadows.
- **Do** keep Action Aqua fills on primary CTAs and step numerals only; pair them with Cool Canvas text.
- **Do** render every diagram artwork on a white canvas so the source SVG stays readable, and keep captions concise.
- **Do** use the global focus treatment (3px Muted Aqua-Blue outline, 3px offset) on every interactive element.
- **Do** respect reduced motion: collapses to near-instant transitions under `prefers-reduced-motion`, and never auto-play diagram animation.
- **Do** keep the accent to the teal family for anything actionable; lift on hover within the family (teal → teal-hover).

### Don't:
- **Don't** introduce serif or display faces — no Libre Caslon or similar heritage fonts; Public Sans is the only voice.
- **Don't** put light panels on the dark field outside the documented exceptions (Action Aqua fills, white diagram canvases).
- **Don't** invent new token names or alias scales (e.g. imaginary `--radius-*` globals); radius values are hardcoded per component as documented.
- **Don't** add second accent hues (warning oranges, brand purples) — one signal color keeps the control-room calm.
- **Don't** drop shadows on resting cards or buttons; reserve shadow for genuinely floating elements.
- **Don't** make the homepage system map reader-interactive; highlight state there comes from the page's data, not clicks.
