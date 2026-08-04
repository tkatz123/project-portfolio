---
name: Tyler Katz — Portfolio
description: A recruiter-facing engineer identity rendered as a dark technical document — grid, numerals, one red instrument.
colors:
  ink: "#0a0a0c"
  surface: "#101014"
  surface-2: "#16161c"
  line: "rgba(245, 245, 242, 0.09)"
  fg: "#f5f5f2"
  fg-body: "#a8a8b3"
  fg-mute: "#82828f"
  accent: "#e5484d"
  accent-soft: "rgba(229, 72, 77, 0.12)"
  crimson: "#6e1b21"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "3rem (sm: 4.5rem, lg: 6rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.02em"
    fontVariation: "font-stretch: 125% (wdth axis)"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.5rem (sm: 1.875rem)"
    fontWeight: 700
    letterSpacing: "-0.02em"
    fontVariation: "font-stretch: 125% (wdth axis)"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1rem (sm: 1.125rem)"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.6875rem–0.875rem"
    fontWeight: 400
rounded:
  none: "0px"
spacing:
  tag-gap: "8px"
  card-gap: "20px"
  gutter: "20px"
  gutter-sm: "32px"
  card-pad: "24px"
  card-pad-sm: "28px"
  section-y: "96px"
  section-y-sm: "128px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.fg}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.fg-body}"
    rounded: "{rounded.none}"
    padding: "8px 16px"
  filter-chip-active:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
  tag-pill:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent}"
    rounded: "{rounded.none}"
    padding: "4px 10px"
  tag-pill-neutral:
    backgroundColor: "transparent"
    textColor: "{colors.fg-mute}"
    rounded: "{rounded.none}"
    padding: "4px 10px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "24px"
  card-hover:
    backgroundColor: "{colors.surface-2}"
---

# Design System: Tyler Katz — Portfolio

## Overview

**Creative North Star: "The Dark Technical Document"**

The site renders an engineer's identity the way an engineering document renders a system: near-black ground, a faded blueprint grid, numbered sections, hairline rules, and exactly one instrument color — a precise red — used the way a red pen is used on a schematic. Density is calm and generous; nothing glows, nothing bounces, nothing is pastel. Depth of work is argued through structure (numerals, rules, mono metadata) rather than decoration.

The world explicitly refuses two clichés: the pastel template portfolio and the neon-glow dev page. There are no gradients-as-branding, no glassmorphism cards, no rounded-friendly shapes. Atmosphere exists in exactly one register — the hero's faded engineering grid with a slow crimson gradient drift — and the same grid frames the project detail pages so every surface stays inside the one world.

**Key Characteristics:**
- Near-black ground (#0a0a0c) with tonal surface layering, never shadows
- One accent — red #e5484d — scoped to rules, numerals, pills, underlines, and the primary CTA
- Square corners everywhere; hairline 1px borders carry all structure
- Wide Archivo display (stretched to 125% width), Hanken Grotesk body, JetBrains Mono strictly for numerals/pills/metadata
- Numbered sections (01–04) mirrored between the sticky nav and section headings — the page is its own table of contents

## Colors

A three-layer dark neutral stack, a gray-to-off-white text hierarchy, and a single red instrument with one deep-crimson atmospheric relative.

### Primary
- **Instrument Red** (`{colors.accent}`, #e5484d): the site's only accent. Appears as section numerals, mono prefixes (`outcome:`, `//`), tech-stack pills, link underlines, dash bullet markers, timeline dots, the solid primary CTA fill, hover states, text selection, and the focus ring. It marks and measures; it never floods.
- **Red Wash** (`{colors.accent-soft}`, rgba(229,72,77,0.12)): the only permitted red background tint — behind tech pills and the click-to-copy email button.
- **Deep Crimson** (`{colors.crimson}`, #6e1b21): atmosphere only. Exists solely inside the hero's drifting radial gradients; never used on UI elements or text.

### Neutral
- **Ink** (`{colors.ink}`, #0a0a0c): the page ground. Also the text color on red or off-white fills (buttons, active filter chips).
- **Surface** (`{colors.surface}`, #101014): raised card ground — project cards, skill pills, the resume panel, placeholder frames.
- **Surface 2** (`{colors.surface-2}`, #16161c): hover elevation for cards; the second and final tonal step.
- **Hairline** (`{colors.line}`, rgba(245,245,242,0.09)): every border, rule, and divider — a translucent off-white so it reads on any surface.
- **Off-White** (`{colors.fg}`, #f5f5f2): headings, names, and emphasized UI text.
- **Body Gray** (`{colors.fg-body}`, #a8a8b3): default body text (set on `<body>`).
- **Mute Gray** (`{colors.fg-mute}`, #82828f): metadata, captions, inactive nav items. Tuned to hold ≥4.5:1 contrast on ink and surface — do not darken it.

### Named Rules
**The One Instrument Rule.** Red is a marking tool, not a theme. It appears at hairline/numeral/pill scale and on at most one solid CTA per composition; it is never a heading color, a large text color, or a section background.

**The Tonal Ladder Rule.** Depth has exactly three rungs — ink → surface → surface-2 — climbed one step at a time (rest → hover). No fourth surface, no shadows, no overlays.

## Typography

**Display Font:** Archivo (variable, `wdth` axis; system-ui fallback)
**Body Font:** Hanken Grotesk (system-ui fallback)
**Label/Mono Font:** JetBrains Mono (ui-monospace fallback)

**Character:** Confident and technical. Archivo is driven wide (font-stretch 125%) and tight (-0.02em) so headings read as stamped nameplates; Hanken keeps paragraphs warm and legible; JetBrains Mono supplies the document's machine voice — numerals, paths, tags, timestamps.

### Hierarchy
- **Display** (900, 3rem → 4.5rem → 6rem across sm/lg, line-height 0.95): the hero name only. Detail-page titles use the same voice one step down (1.875rem → 3rem, weight 900, leading-tight).
- **Headline** (700, 1.5rem → 1.875rem): section headings, always fused with a red mono numeral and a trailing hairline rule (see SectionHeading).
- **Title** (700, 1.125rem–1.25rem): card titles, sub-block headings (Education, Skills, Experience), panel headings. Contact's centered invitation runs larger (1.875rem → 2.25rem).
- **Body** (400, 1rem → 1.125rem, line-height 1.625): paragraphs and descriptions in Hanken; card body text drops to 0.875rem. Prose columns cap near `max-w-xl`–`max-w-3xl`.
- **Label** (mono, 400, 0.6875rem–0.875rem): section numerals, pills, captions, nav numbers, mono prefixes. Skill-group labels add uppercase + tracking-widest; everything else stays lowercase/sentence case.

### Named Rules
**The Mono Scope Rule.** JetBrains Mono is reserved for numerals, pills, tags, captions, and metadata. CTAs, buttons, and navigation labels use the body face in title case — a mono button is out of world.

**The Lowercase Machine Rule.** Mono metadata speaks in a lowercase terminal register with red `//` and `:` separators (`ai/ml engineer in training // syracuse, ny`, `outcome:`, `404 // page not found`).

## Layout

Single-page document with numbered anchored sections plus per-project detail pages. Content lives in a `max-w-6xl` (72rem) container with `px-5` gutters (`sm:px-8`); detail pages narrow to `max-w-4xl` for reading. Sections breathe at `py-24 sm:py-32` (96/128px) and use `scroll-mt-24` to clear the fixed 64px (`h-16`) nav; `html` gets `scroll-padding-top: 5.5rem` and smooth scrolling (disabled under reduced motion).

The hero is a full-viewport (`min-h-svh`) left-aligned stack: mono role line, display name, tagline, CTA row, social row. Project cards sit in a `gap-5` grid — 1 column mobile, 2 at `sm`, 3 at `lg`. About uses asymmetric grids (`1fr_320px` bio/headshot, 2-col skills/experience at `lg`); the education timeline is a left-bordered vertical list on mobile that rotates to a top-bordered horizontal row at `sm`. Spacing rhythm within blocks runs on Tailwind steps: 8px pill gaps, 20px card gaps, 24–28px card padding, 40–80px between sub-blocks.

## Elevation & Depth

**No shadows anywhere.** Depth is tonal and structural: surfaces step up the ladder (ink → surface → surface-2), hairline borders define edges, and hover states combine a border shift toward red with a 1-step surface lift and a `-translate-y-1` rise on cards. The sticky nav gains depth only after scroll (>24px), switching from transparent to `bg-ink/85` with `backdrop-blur-md` and a bottom hairline. The hero's grid and crimson sweep are the only atmospheric layers, both `aria-hidden` and purely decorative.

### Named Rules
**The Flat Document Rule.** No box-shadows, no glows, no gradient fills on components. If an element needs to come forward, it gets a lighter surface, a red-tinted border, or a hairline — never a shadow.

## Shapes

Square corners are the form language: buttons, cards, pills, images, and panels all ship at 0px radius. The only curvature in the system is functional — the 2px radius on the focus outline, the small radius on nav-link hit areas, and the circular (rounded-full) 10px timeline dots. Borders are always 1px hairlines (`{colors.line}`), promoted to `accent/25`–`accent/60` tints or full accent on hover/active. Two special frames exist: the headshot's offset red frame (a `border-accent/50` rectangle translated 3px right/down that eases back on hover) and the dashed hairline frame marking placeholder slots. Horizontal hairline rules (`h-px`) and short red dashes (`h-px w-3`–`w-4`) are recurring structural marks.

## Components

### Buttons
- **Shape:** square (0px radius), text-sm, body face.
- **Primary:** solid red fill, ink text, semibold, `px-6 py-3` (`View Projects`, `Download Resume (PDF)` at `px-8 py-4`); hover swaps the fill to off-white (`hover:bg-fg`) — red to bone, never a darker red.
- **Ghost/Secondary:** transparent with hairline border, `text-fg` medium; hover moves border and text to red (`hover:border-accent hover:text-accent`).
- **Icon affordance:** primary CTAs carry a 16px stroke icon that nudges diagonally (`translate-x-0.5 -translate-y-0.5`) or vertically on hover.
- **Focus:** global `:focus-visible` — 2px red outline, 3px offset.

### Chips (project filters)
- **Style:** square bordered buttons, `px-4 py-2 text-sm font-medium`, with a trailing mono count.
- **State:** active = solid red fill + ink text (`aria-pressed`); inactive = hairline border + body gray, hovering toward `border-accent/60`.

### Tag Pills
- **Tech pills:** mono 11px red text on `{colors.accent-soft}` wash with `border-accent/25`.
- **Category pills:** the neutral variant — mono 11px mute gray with plain hairline border, sitting first in the same tag row. Category labels are pills in tag rows, never eyebrows above titles.

### Cards / Containers
- **Corner Style:** square.
- **Background:** `{colors.surface}` at rest, `{colors.surface-2}` on hover.
- **Border:** hairline at rest, `border-accent/60` on hover.
- **Hover motion:** whole-card `-translate-y-1` rise (200ms); title and arrow icon shift to red.
- **Internal padding:** 24px (`sm:` 28px); an internal hairline `border-t` separates description from the mono `outcome:` line; tag row is bottom-anchored via `mt-auto`.

### Inputs / Fields
None exist. The site is static — no forms. The click-to-copy email button (red-washed bordered button showing the address in mono, swapping to a check + "Copied to clipboard" with `aria-live="polite"`) is the only input-like control.

### Navigation
- **Style:** fixed full-width bar, 64px tall, transparent at top; after 24px of scroll it gains `bg-ink/85`, backdrop blur, and a bottom hairline (300ms color transition).
- **Entries:** mono red numeral (`01.`, 11px, hidden on mobile) + body-face label; active section (tracked by IntersectionObserver) reads off-white with red numeral, inactive reads mute gray.
- **Mobile:** numerals drop, list scrolls horizontally, wordmark collapses to "TK".
- **Detail pages:** a simpler hairline-bottomed header — mono `back to projects` with a left arrow, wordmark right.

### SectionHeading (signature)
Red mono numeral fused into the Archivo headline baseline (`01.` at 1rem–1.125rem against a 1.5rem–1.875rem heading), followed by a flex-1 hairline rule that carries the eye across the page. Detail pages repeat the pattern with slash-prefixed numerals (`/01`–`/06`) over `border-t` section dividers. This numbering — shared with the nav — is the system's signature move.

### Motion grammar
Framer-motion, one voice: entrances fade + rise (`y: 24–28px`, 0.55–0.7s, ease `[0.16, 1, 0.3, 1]`) with small stagger delays; scroll reveals fire once at `-80px` margin; filter changes animate layout with 0.25s ease-out scale/fade. The hero sweep drifts over 26s. `useReducedMotion` disables all of it, and a `<noscript>` style forces SSR'd opacity-0 content visible — motion is progressive enhancement, never a gate.

## Do's and Don'ts

### Do:
- **Do** scope red to marks: numerals, pills, underlines, hairline dashes, dots, focus rings, and one solid CTA per composition.
- **Do** climb the tonal ladder for depth — surface at rest, surface-2 + red-tinted hairline + `-translate-y-1` on hover — and nothing else.
- **Do** set all metadata in JetBrains Mono at 11–14px, lowercase, with red `//` or `:` separators.
- **Do** number any new top-level section and register it in both the nav and its SectionHeading.
- **Do** keep the faded `hero-grid` as the world frame on any new page-level surface (as the detail pages do), masked so it fades before content density rises.
- **Do** respect `prefers-reduced-motion` and keep content visible without JS for every new animated element.

### Don't:
- **Don't** use eyebrows or kickers above headings — this system refuses them; category labels live as neutral pills in tag rows.
- **Don't** add box-shadows, glows, glass blur (outside the scrolled nav), or gradient-filled components.
- **Don't** round corners on buttons, cards, pills, or images; the world is square.
- **Don't** set CTAs, buttons, or nav labels in mono or uppercase — body face, title case.
- **Don't** introduce a second accent hue or use Deep Crimson (#6e1b21) outside the hero/atmosphere gradients.
- **Don't** darken text below Mute Gray (#82828f); it is the contrast floor (≥4.5:1 on ink and surface).
