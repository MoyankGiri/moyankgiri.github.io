# Portfolio — Style Reference
> Deep-space personal portfolio with electric blue signals

**Theme:** dark

This portfolio runs on a deep-space canvas: near-black navy surfaces, whisper-thin type at display weights, and a single electric cobalt-blue accent that lights the interface like circuit current. Surfaces stack dark-on-dark, separated by hairline lavender-tinted borders rather than elevation, giving the page a flat, architectural depth. The voice is restrained and premium — generous radii, plenty of negative space, and color used sparingly so the blue accent always reads as intentional. Type is the signature: weight-100 headlines on a geometric face float above the page rather than commanding it, creating authority through restraint. Everything that lists comparable things — education, experience, projects, accomplishments — is presented as consistent cards, never as loose text, so the whole site reads as one deliberate system.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Void Navy | `#03081a` | `--color-void-navy` | Page canvas and primary dark surface — the base layer everything else floats on |
| Deep Indigo | `#020626` | `--color-deep-indigo` | Card surfaces, raised panels, and secondary structural fills |
| Inkline Violet | `#292f66` | `--color-inkline-violet` | Hairline dividers, card borders, icon strokes — the structural skeleton color |
| Quartz Lavender | `#aab1f2` | `--color-quartz-lavender` | Secondary text, outlined link borders, muted body copy, inactive navigation |
| Mist Lilac | `#7a83cc` | `--color-mist-lilac` | Tertiary text and supporting UI elements needing softer contrast |
| Dusk Iris | `#4d5499` | `--color-dusk-iris` | Muted borders, disabled states, low-priority card outlines |
| Glacier White | `#f5f6ff` | `--color-glacier-white` | Light-theme card surfaces, light section backgrounds, high-contrast text on dark |
| Pure White | `#ffffff` | `--color-pure-white` | Primary headlines, primary text on dark, nav and button borders |
| Pulse Cobalt | `#3d50fc` | `--color-pulse-cobalt` | Primary action buttons, active states, key icons, brand signal — the single vivid accent that powers the entire interface |
| Signal Teal | `#05e0e0` | `--color-signal-teal` | Secondary accent for icons, tertiary links, gradient terminal, and data-viz highlights |
| Cyan Teal | `#05cee0` | `--color-cyan-teal` | Decorative gradient origin and atmospheric illustration accent |
| Gradient Teal-Blue | `linear-gradient(90deg, rgb(5, 161, 201) 0%, rgb(61, 80, 252) 100%)` | `--color-gradient-teal-blue` | Hero gradient banner, brand transition washes — teal flowing into cobalt creates a continuous energy signal |

## Tokens — Typography

### Times — Times — detected in extracted data but not described by AI · `--font-times`
- **Weights:** 400
- **Sizes:** 16px
- **Line height:** 1.2
- **Role:** Times — detected in extracted data but not described by AI

### Plain — Primary interface typeface. Weight 100 for large display and heading sizes (42–147px), weight 300 for body, weight 400 for emphasized inline text. The ultralthin weights are the defining signature — no other fintech brand runs 100-weight at this scale. Substitute: Inter (light/extra-light), Neue Haas Grotesk Display Thin, or Untitled Sans Light. · `--font-plain`
- **Substitute:** Inter, Neue Haas Grotesk Display Thin, Untitled Sans Light
- **Weights:** 100, 300, 400
- **Sizes:** 10px, 13px, 14px, 16px
- **Line height:** 1.20, 1.30
- **Letter spacing:** 0.2500em at 10px (tracked eyebrow/label style), normal at body sizes
- **Role:** Primary interface typeface. Weight 100 for large display and heading sizes (42–147px), weight 300 for body, weight 400 for emphasized inline text. The ultralthin weights are the defining signature — no other fintech brand runs 100-weight at this scale. Substitute: Inter (light/extra-light), Neue Haas Grotesk Display Thin, or Untitled Sans Light.

### Plain Light — Long-form body copy, description paragraphs, and card detail text. Weight 300 keeps long passages airy and scannable against the dark canvas. The 1.80 line-height variant is used for spacious paragraph blocks. Substitute: Inter Light, Untitled Sans Light. · `--font-plain-light`
- **Substitute:** Inter Light, Untitled Sans Light
- **Weights:** 300
- **Sizes:** 12px, 14px
- **Line height:** 1.40, 1.50, 1.80
- **Letter spacing:** normal
- **Role:** Long-form body copy, description paragraphs, and card detail text. Weight 300 keeps long passages airy and scannable against the dark canvas. The 1.80 line-height variant is used for spacious paragraph blocks. Substitute: Inter Light, Untitled Sans Light.

### Plain Ultralight — Subheadings, section headers within cards, and product category labels. Weight 100 at 28px stays in the same whisper register as the display sizes but at a scannable mid-scale. Substitute: Inter ExtraLight, Neue Haas Grotesk Display Thin. · `--font-plain-ultralight`
- **Substitute:** Inter ExtraLight, Neue Haas Grotesk Display Thin
- **Weights:** 100
- **Sizes:** 28px
- **Line height:** 1.30
- **Letter spacing:** -0.56px (-0.02em)
- **Role:** Subheadings, section headers within cards, and product category labels. Weight 100 at 28px stays in the same whisper register as the display sizes but at a scannable mid-scale. Substitute: Inter ExtraLight, Neue Haas Grotesk Display Thin.

### Plain Ultrathin — Hero headlines, display text, and section-leading titles. Weight 100 at 147px is the brand's most extreme typographic move — the characters nearly dissolve into hairlines, which is why the vivid blue accent and surrounding negative space carry so much of the visual weight. Substitute: Inter Thin, Neue Haas Grotesk Display Thin. · `--font-plain-ultrathin`
- **Substitute:** Inter Thin, Neue Haas Grotesk Display Thin
- **Weights:** 100
- **Sizes:** 42px, 56px, 83px, 147px
- **Line height:** 0.80, 1.00, 1.10, 1.20
- **Letter spacing:** -0.84px at 42px, -1.12px at 56px, -1.66px at 83px, -2.94px at 147px (all -0.02em)
- **Role:** Hero headlines, display text, and section-leading titles. Weight 100 at 147px is the brand's most extreme typographic move — the characters nearly dissolve into hairlines, which is why the vivid blue accent and surrounding negative space carry so much of the visual weight. Substitute: Inter Thin, Neue Haas Grotesk Display Thin.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| eyebrow | 10px | 1.2 | 2.5px | `--text-eyebrow` |
| caption | 12px | 1.5 | — | `--text-caption` |
| body | 16px | 1.3 | — | `--text-body` |
| subheading | 28px | 1.3 | -0.56px | `--text-subheading` |
| heading-sm | 42px | 1.1 | -0.84px | `--text-heading-sm` |
| heading | 56px | 1.1 | -1.12px | `--text-heading` |
| heading-lg | 83px | 1 | -1.66px | `--text-heading-lg` |
| display | 147px | 0.8 | -2.94px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 52 | 52px | `--spacing-52` |
| 64 | 64px | `--spacing-64` |
| 104 | 104px | `--spacing-104` |
| 196 | 196px | `--spacing-196` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 17px |
| cards | 35px |
| inputs | 35px |
| buttons | 48px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64px
- **Card padding:** 32px
- **Element gap:** 9px

## Components

### Primary Filled Button
**Role:** Main call-to-action — highest-priority action on a surface (e.g., 'Download résumé', 'Get in touch')

Pulse Cobalt (#3d50fc) fill, Pure White text, 48px border-radius (pill-shaped), 22px horizontal padding × 14px vertical padding. Plain weight 300 at 16px, letter-spacing normal. No shadow, no border. The saturated blue against the deep navy creates a high-voltage focal point without needing elevation.

### Ghost Outline Button
**Role:** Secondary action — paired beside primary CTAs (e.g., 'View project', 'Open on GitHub', 'See more')

Transparent background, 1px Pure White border (#ffffff), Pure White text, 48px border-radius, 22px × 14px padding. Plain weight 300 at 16px. For secondary navigation-level actions and the "See more" reveal control.

### Pill Navigation Link
**Role:** Right-side utility nav items and floating action triggers

Transparent fill, 1px border in Pure White or Quartz Lavender (#aab1f2), white or lavender text, 48px border-radius. 13–14px Plain weight 300–400. The lavender border variant signals a non-primary or secondary nav position.

### Dark Card
**Role:** The universal container for education, experience, project, and accomplishment entries on dark sections

Deep Indigo (#020626) background, 1px Inkline Violet (#292f66) border, 35px border-radius, 32px padding. No drop shadow. Cards rely on the violet hairline border and subtle background shift rather than elevation to separate from the void canvas. Every listed item in a section uses this same card — primary and "See more" items alike — so a section never mixes cards with bare text.

### Entry Card (Education / Experience)
**Role:** A single education, experience, or accomplishment record

A Dark Card whose top row is an Org Logo Tile (left) beside the title block: title in Plain weight 400 at 18–20px (Pure White), organization in Plain Light 300 at 14px (Quartz Lavender), and a tracked date range in Plain Light 300 at 12px (Mist Lilac). Below the header: an optional metric line (e.g., 'CGPA 9.6 / 10'), a short bulleted body in Plain Light 300 at 14px line-height 1.5, and a wrapped row of Skill Logo Chips at the bottom. Keep the header rhythm identical across every card so a grid of them reads as one system.

### Org Logo Tile
**Role:** The institution/company logo that leads every experience and education entry

Real logo centered in a 44–48px square tile, 12–14px inner padding, Glacier White (#f5f6ff) fill with a 1px Inkline Violet border and ~14px radius (a smaller, squarer radius than the card). The white tile normalizes logos that ship in clashing brand colors so they read consistently on the navy canvas. Never stretch, crop awkwardly, or recolor the logo; if no logo exists, fall back to a monogram of the org's initials in Plain weight 300, Quartz Lavender.

### Skill Logo Chip
**Role:** A single skill / tool / technology in the Skills section and on entry cards

Pill (17px radius), transparent or Deep Indigo fill, 1px Inkline Violet (#292f66) border, 6px × 12px padding, 9px gap between chips. Leads with the technology's real logo at 18–20px (kept at a consistent size and vertically centered), followed by the label in Plain weight 400 at 13–14px, Quartz Lavender. When a technology has no recognizable logo, render the chip as text-only in the same shape so the row stays even.

### See More Toggle
**Role:** Reveals additional cards in a section beyond the default set

Ghost/text control below a card grid: Plain weight 400 at 14px in Pulse Cobalt (#3d50fc) or Quartz Lavender, with a downward chevron and a count — e.g., 'See 3 more'. Expanding appends the remaining items as full Entry Cards in the same grid (never as text); the control then reads 'See less' with an upward chevron and collapses back to the default set.

### Tab Pill
**Role:** Category selector for filtering projects or skill groups

Pulse Cobalt (#3d50fc) fill for the active tab, white text, 17px border-radius (smaller pill than buttons), 22px × 14px padding. Inactive tabs are transparent with a faint violet border. 14px Plain weight 400.

### Eyebrow Label
**Role:** Small section-prelude text above a heading — e.g. 'EDUCATION', 'EXPERIENCE', 'SELECTED PROJECTS'

Plain weight 400 at 10px with 0.25em letter-spacing (2.5px), uppercase, Quartz Lavender (#aab1f2) or Signal Teal (#05e0e0) color. Frames the weight-100 section heading below it and keeps sections visually distinct from one another.

### Outlined Link
**Role:** Inline 'Explore →' and 'Learn more' style links within body copy

No background, Quartz Lavender (#aab1f2) 1px bottom border acting as the link underline, lavender text, Plain weight 300 at 16px. The thin lavender rule replaces the traditional solid underline for a lighter, architectural feel.

### Hero Headline
**Role:** The name / primary page title — the largest typographic statement on the page

Plain Ultrathin weight 100, Pure White (#ffffff), 56–83px size range with -0.02em letter-spacing, 1.0–1.1 line-height. Left-aligned with a generous left margin, paired with a role/tagline subtitle and, optionally, an avatar or abstract sculpture on the right.

### Profile Avatar
**Role:** Portrait/avatar in the hero or About area

Circular or 35px-radius image, 96–160px, framed by a 1px Inkline Violet (#292f66) border on the void canvas, with generous clear space around it. Flat — no drop shadow beyond the border.

### Project Screenshot
**Role:** In-context project visuals embedded in project cards

Contained within a 35px-radius card with a 1px violet border. Screenshots keep a dark UI with cobalt/teal accents where possible; use a subtle inset border to separate the image from the card background.

### Navigation Menu
**Role:** Primary top navigation list (About, Experience, Projects, Contact)

Plain weight 300 at 14–16px, Pure White text, no background, ~14px gap between items. The primary action ('Contact' or 'Résumé') renders as a Pulse Cobalt filled pill; a secondary item may render as a 48px-radius ghost pill with a 1px white border.

### Name Lockup
**Role:** Wordmark in the top-left header position

Optional glyph/monogram in Pure White followed by the name in Plain weight 300 at ~20px, white, 32px from the left edge.

## Content & Card Rules

These rules exist to fix a specific failure mode: primary items shown as polished cards while secondary items collapse into plain text, and two unrelated sections (e.g. education and accomplishments) bleeding together. They are as binding as the token rules.

### Everything in a list is a card
- Any section that lists comparable records — education, experience, projects, publications, accomplishments, certifications — renders each record as a Dark Card / Entry Card. Never render some records as cards and the rest as bare text rows or a plain column of lines.
- All cards in a section share one layout: same header rhythm (logo tile → title → org → dates), same padding, same radius, same body/tag treatment. A secondary school entry is the same card shape as a graduate degree, just with less body content.

### Top values first, the rest behind "See more"
- Show the most important / most recent N records as full cards by default (2–3 in a grid is typical). Hide the remainder.
- A **See More Toggle** reveals the remaining records as full cards in the same grid — expanding must never produce a text list. Collapsing returns to the default N.
- Order records by importance or recency so the default set is always the strongest.

### Keep sections separate
- Each distinct section (Education, Experience, Accomplishments, Projects) keeps its own Eyebrow Label + heading and its own card grid. Never merge two sections into one undifferentiated block, and never let one section's overflow flow visually into the next.
- If two sections must sit close together, separate them with a full section gap (64px) and their own headings so the boundary is unmistakable.

### Logos in Skills, Experience & Education
- **Experience & Education entries** lead with an **Org Logo Tile** — the real institution/company logo on a Glacier White tile with a hairline border — placed left of the title block, instead of relying on the org name in text alone.
- **Skills (and per-card tech tags)** use **Skill Logo Chips**: each skill shows its real tool/technology logo at a consistent 18–20px beside the label, not text-only pills.
- Normalize logos for consistency: equal sizing, equal padding, seated on a neutral tile; never stretch, distort, or recolor a brand logo. Where no logo exists, fall back to a clean monogram (orgs) or a text-only chip (skills) in the same shape so rows and grids stay even.

## Do's and Don'ts

### Do
- Use Plain Ultrathin weight 100 for the name and all section-level headings at 42px or larger
- Use 48px border-radius for all buttons, nav pills, and the "See more" control; 35px for all cards; 17px for tags/skill chips
- Use #3d50fc exclusively for primary filled actions and active states — never another color
- Render every record in a section as a card of the same shape; reveal overflow with a "See more" toggle that shows the rest as cards
- Lead experience and education cards with the organization's logo on a Glacier White tile; show real tech logos on skill chips
- Give each section its own eyebrow label + heading and a full 64px gap so sections never blur together
- Use 0.25em letter-spacing (2.5px) on all 10px uppercase eyebrow labels
- Separate dark surfaces with 1px #292f66 hairlines, not drop shadows

### Don't
- Never dump secondary records (older schooling, extra accomplishments) as plain text rows — keep them as cards behind "See more"
- Never merge two distinct sections (e.g. education + accomplishments) into one undifferentiated block
- Never mix logo sizes, stretch, or recolor brand logos — normalize them on equal tiles
- Never use weight 600 or 700 for headlines — the ultralight register is the signature
- Never add drop shadows to cards or buttons — the system is flat by design
- Never use more than one vivid accent color per surface; cobalt and teal should not compete on the same element
- Never use solid underlines on links — use the 1px Quartz Lavender (#aab1f2) bottom border instead
- Never set body copy below weight 300, and never use sharp corners (0–4px radius) on cards, buttons, or inputs
- Never introduce a second dark-canvas color outside #03081a and #020626 — surface depth comes from the two-step shift between them

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Void Canvas | `#03081a` | Page-level background, the deep-space base layer |
| 1 | Deep Indigo Card | `#020626` | Card and panel surfaces sitting on the void canvas |
| 2 | Light Content Surface | `#ffffff` | Light-theme content cards, logo tiles, and section inversions |

## Elevation

This system does not use drop shadows for elevation. Depth is achieved through hairline violet borders (#292f66, #4d5499), subtle surface color shifts between #03081a and #020626, and generous border-radius. This flat-architectural approach keeps the dark canvas clean and lets the vivid blue accent do the visual lifting.

## Imagery

The identity is typographic and geometric, with a light, purposeful use of real imagery: an optional profile avatar in the hero/About area, project screenshots inside rounded cards, and — importantly — real organization and technology logos on entry cards and skill chips (seated on neutral tiles so varied brand colors stay consistent). Optional abstract 3D or gradient accents can occupy negative space beside the hero. No stock lifestyle photography. Icons are outlined at 1.5–2px strokes in lavender or cobalt. The overall impression is abstract, premium, and work-focused — the projects and credentials are the visual subject.

## Layout

Max-width 1200px centered container with a 32–64px outer gutter. The hero is a full-bleed dark band: the name in weight-100 left-aligned, a role/tagline subtitle beneath, primary + ghost CTAs (résumé, contact), and an optional avatar or abstract accent on the right with 40–80px of breathing room. Below the hero, sections stack with 64px vertical gaps, each opening with an eyebrow label + heading. Education, Experience, Accomplishments, and Projects each render as a grid of equal cards (typically 2–3 across, collapsing to one column on narrow screens), with a "See more" toggle beneath any section that has overflow. Skills render as a wrapped row of logo chips. The top bar sits 24px from the top edge: name lockup left, nav links center/right, primary action pill far right.

## Agent Prompt Guide

**Quick Color Reference**
- text (primary): #ffffff
- text (secondary): #aab1f2
- text (tertiary): #7a83cc
- background (page): #03081a
- background (card dark): #020626
- logo tile / light surface: #f5f6ff
- border (hairline): #292f66
- border (subtle): #4d5499
- accent: #05e0e0
- primary action: #3d50fc (filled action)

**Example Component Prompts**
1. Build a portfolio hero: name in Plain Ultrathin weight 100, 83px, #ffffff, line-height 1.0, letter-spacing -1.66px, left-aligned. Below it a role/tagline in Plain Light 300 at 16px, #aab1f2, line-height 1.8. Primary CTA: 48px-radius pill, #3d50fc fill, white text, 22px×14px padding ('Download résumé'); secondary ghost pill (1px white border) 'Contact'.
2. Build an education card: #020626 background, 1px #292f66 border, 35px radius, 32px padding. Top row: a 46px Glacier White (#f5f6ff) logo tile (1px #292f66 border, 14px radius) holding the institution logo, beside a title block — degree in Plain weight 400 at 20px white, institution in Plain Light 300 at 14px #aab1f2, date range at 12px #7a83cc. Body: metric line + bullets in Plain Light 300 at 14px. Footer: a wrapped row of skill logo chips.
3. Build a skills row: wrapped flex row, 9px gaps. Each chip is a 17px-radius pill, transparent fill, 1px #292f66 border, 6px×12px padding, leading with the tool's real logo at 18px then a Plain weight 400 14px label in #aab1f2. Text-only fallback chip for logo-less skills.
4. Build a "See more" section: render the top 2 records as full cards in a 2-column grid (24px gap). Beneath, a ghost text toggle in #3d50fc — 'See 3 more' with a down chevron — that appends the remaining records as identical cards in the same grid and switches to 'See less'.
5. Build a section header: an uppercase eyebrow label at 10px, weight 400, 2.5px letter-spacing, #aab1f2 ('ACCOMPLISHMENTS'), then a Plain Ultrathin weight 100 heading at 56px in white with -1.12px tracking, followed by its own card grid.

## Gradient System

Two gradients are signature: a teal-to-cobalt horizontal sweep (linear 90deg, #05a1c9 → #3d50fc) for any full-bleed banner surfaces, and a blue-to-cobalt micro-gradient (#1e78f5 → #3d50fc) for smaller UI accents. Gradients always flow left-to-right and always terminate on Pulse Cobalt (#3d50fc) — never start on it — so energy always reads as moving into the brand color.

## Typographic Voice

Plain is a geometric face used in an unusually thin register. Weight 100 at 42–147px is the signature move: most portfolios reach for weight 600–700 headings to project authority, while this system projects authority through restraint — the type almost dissolves, forcing the surrounding negative space and the cobalt accent to carry the visual weight. The 0.25em tracked-out 10px eyebrow label is the counterpoint: tightly tracked large display paired with wide-tracked tiny caps creates dramatic scale contrast. Body copy sits at weight 300 (Light) at 16px — one step lighter than typical — so the whole system leans thin.

## Aesthetic Influences

- **Mercury** — Dark-canvas premium aesthetic with a single vivid accent and thin geometric headlines
- **Ramp** — Dark platform with a single electric blue accent and ultralight display type on a near-black canvas
- **Modern Treasury** — Deep navy theme with cobalt primary actions and hairline-border card separation
- **Linear** — Thin-weight display type, generous radii, and a single vivid accent punching through a quiet dark canvas
- **Dev portfolios in this idiom** — A weight-100 name hero, logo-led experience/education cards, skill chips with real tool logos, and consistent card grids with progressive "See more" reveals

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-void-navy: #03081a;
  --color-deep-indigo: #020626;
  --color-inkline-violet: #292f66;
  --color-quartz-lavender: #aab1f2;
  --color-mist-lilac: #7a83cc;
  --color-dusk-iris: #4d5499;
  --color-glacier-white: #f5f6ff;
  --color-pure-white: #ffffff;
  --color-pulse-cobalt: #3d50fc;
  --color-signal-teal: #05e0e0;
  --color-cyan-teal: #05cee0;
  --color-gradient-teal-blue: #05a1c9;
  --gradient-gradient-teal-blue: linear-gradient(90deg, rgb(5, 161, 201) 0%, rgb(61, 80, 252) 100%);

  /* Typography — Font Families */
  --font-times: 'Times', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-plain: 'Plain', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-plain-light: 'Plain Light', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-plain-ultralight: 'Plain Ultralight', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-plain-ultrathin: 'Plain Ultrathin', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-eyebrow: 10px;
  --leading-eyebrow: 1.2;
  --tracking-eyebrow: 2.5px;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body: 16px;
  --leading-body: 1.3;
  --text-subheading: 28px;
  --leading-subheading: 1.3;
  --tracking-subheading: -0.56px;
  --text-heading-sm: 42px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: -0.84px;
  --text-heading: 56px;
  --leading-heading: 1.1;
  --tracking-heading: -1.12px;
  --text-heading-lg: 83px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -1.66px;
  --text-display: 147px;
  --leading-display: 0.8;
  --tracking-display: -2.94px;

  /* Typography — Weights */
  --font-weight-thin: 100;
  --font-weight-light: 300;
  --font-weight-regular: 400;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-52: 52px;
  --spacing-64: 64px;
  --spacing-104: 104px;
  --spacing-196: 196px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64px;
  --card-padding: 32px;
  --element-gap: 9px;

  /* Border Radius */
  --radius-sm: 0.864px;
  --radius-2xl: 17.352px;
  --radius-3xl: 34.704px;
  --radius-full: 47.7072px;
  --radius-full-2: 360px;

  /* Named Radii */
  --radius-tags: 17px;
  --radius-cards: 35px;
  --radius-inputs: 35px;
  --radius-buttons: 48px;

  /* Surfaces */
  --surface-void-canvas: #03081a;
  --surface-deep-indigo-card: #020626;
  --surface-light-content-surface: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-void-navy: #03081a;
  --color-deep-indigo: #020626;
  --color-inkline-violet: #292f66;
  --color-quartz-lavender: #aab1f2;
  --color-mist-lilac: #7a83cc;
  --color-dusk-iris: #4d5499;
  --color-glacier-white: #f5f6ff;
  --color-pure-white: #ffffff;
  --color-pulse-cobalt: #3d50fc;
  --color-signal-teal: #05e0e0;
  --color-cyan-teal: #05cee0;
  --color-gradient-teal-blue: #05a1c9;

  /* Typography */
  --font-times: 'Times', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-plain: 'Plain', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-plain-light: 'Plain Light', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-plain-ultralight: 'Plain Ultralight', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-plain-ultrathin: 'Plain Ultrathin', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-eyebrow: 10px;
  --leading-eyebrow: 1.2;
  --tracking-eyebrow: 2.5px;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body: 16px;
  --leading-body: 1.3;
  --text-subheading: 28px;
  --leading-subheading: 1.3;
  --tracking-subheading: -0.56px;
  --text-heading-sm: 42px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: -0.84px;
  --text-heading: 56px;
  --leading-heading: 1.1;
  --tracking-heading: -1.12px;
  --text-heading-lg: 83px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -1.66px;
  --text-display: 147px;
  --leading-display: 0.8;
  --tracking-display: -2.94px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-52: 52px;
  --spacing-64: 64px;
  --spacing-104: 104px;
  --spacing-196: 196px;

  /* Border Radius */
  --radius-sm: 0.864px;
  --radius-2xl: 17.352px;
  --radius-3xl: 34.704px;
  --radius-full: 47.7072px;
  --radius-full-2: 360px;
}
```