# Portfolio — Style Reference
> True-black developer portfolio with a single spring-green signal, heavy grotesk headlines, and structured content patterns (stat row, tabbed timeline, filterable project gallery)

**Theme:** dark

This portfolio runs on a true-black canvas with one vivid spring-green accent doing all the chromatic work. The signature is a heavy geometric grotesk set very large — the name fills the hero at display scale with a trailing period. Green never fills big buttons; it lives in small, high-value places: the eyebrow line, inline keyword highlights, link arrows, icon glyphs, and selected-state accents. Depth is flat — surfaces separate through a faint white-alpha hairline and a one-step shift from black to near-black, never shadows. Structured content is never dumped as loose text: quick facts sit in a **stat-box row**, career history sits in a **tabbed timeline**, and work sits in a **filterable card gallery**. Body copy is quiet system-ui; the personality comes from scale, the green, and the negative space.

> **Extraction notes.** Tokens (colors, type, radii) come from the site's screenshots and its Chakra UI CSS. Confirmed from CSS: body font `system-ui, sans-serif`; base line-height `1.5`; site border `rgba(255,255,255,0.16)` (Chakra whiteAlpha.300); scrollbar track `#080808`, thumb `#111111` (8px); selection `#90CDF4` on `#FEFEFE`; focus ring `#4299E1`. The display typeface and the exact green are eyeballed (best-match grotesk; green is a sampled approximation) — verify against the live stylesheet.
>
> **Three layout patterns below — stat row, tabbed timeline, filterable gallery — are adopted from additional reference screenshots.** Those screenshots use a **violet** accent (~`#8B5CF6`); it has been **mapped to the system's Spring Green** so the site keeps one signal color. If a violet accent is actually wanted, swap `--color-spring-green` accordingly and it will propagate.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Ink Black | `#080808` | `--color-ink` | Page canvas — true-black base (matches scrollbar track) |
| Pure Black | `#000000` | `--color-pure-black` | Full-bleed bands a notch deeper than canvas |
| Coal | `#111111` | `--color-coal` | Card / panel / elevated surface (matches scrollbar thumb) |
| Onyx | `#161616` | `--color-onyx` | Chip, tag-pill, social-button, sidebar-row fills |
| Spring Green | `#4ADE80` | `--color-spring-green` | The single accent — eyebrow, inline highlights, link arrows, icon glyphs, stat icon tint, active org text. *Approximate; may be Chakra green.400 `#48BB78`.* |
| Green Hover | `#38B26B` | `--color-green-hover` | Hover/pressed state for green links and icons |
| Off White | `#FEFEFE` | `--color-off-white` | Primary headline text; **fill color for selected/active chips** (tabs, date pills, active filter) |
| Pure White | `#FFFFFF` | `--color-white` | Max-contrast text, nav links, tag-pill labels |
| Gray 300 | `#CBD5E0` | `--color-gray-300` | Bright secondary text, tag labels |
| Gray 400 | `#A0AEC0` | `--color-gray-400` | Body text, descriptions, inactive filter labels |
| Gray 500 | `#718096` | `--color-gray-500` | Captions, section eyebrows in the sidebar, fine metadata |
| Gray 700 | `#2D3748` | `--color-gray-700` | Dotted-grid dots, solid low-contrast dividers |
| Hairline | `rgba(255,255,255,0.16)` | `--color-hairline` | Site-wide border — nav underline, card/sidebar edges, timeline rail |
| Selection Blue | `#90CDF4` | `--color-selection` | Text-selection highlight background |
| Focus Ring | `#4299E1` | `--color-focus-ring` | Keyboard focus ring (60% alpha) |

## Tokens — Typography

### Display Grotesk — Heavy geometric grotesk for the name, section headings, stat numbers, timeline titles, and nav. Very bold (700–800), large, slightly tight tracking; headings often end in a period. The site's whole personality. *Family inferred — Sora / Space Grotesk / Poppins; verify.* · `--font-display`
- **Substitute:** Sora, Space Grotesk, Poppins, General Sans
- **Weights:** 500, 600, 700, 800
- **Sizes:** 14, 18, 20, 24, 28, 32, 48, 72, 128
- **Line height:** 1.00–1.20
- **Letter spacing:** -0.02em at display sizes, normal at label sizes
- **Role:** Heavy grotesk for the name, section headings, stat numbers, timeline entry titles, and nav.

### System Sans — Body copy, descriptions, timeline paragraphs, card blurbs, filter labels, tag-pill text. Confirmed base family (`system-ui, sans-serif`), weight 400–600, line-height 1.5. Neutral so the display type and green carry character. · `--font-body`
- **Substitute:** -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter
- **Weights:** 400, 500, 600
- **Sizes:** 12, 13, 14, 16, 18, 20
- **Line height:** 1.5
- **Role:** Body copy and all small structural text; keyword spans inside it are Spring Green.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Weight | Token |
|------|------|-------------|----------------|--------|-------|
| tag | 13px | 1.2 | — | 500 | `--text-tag` |
| caption | 14px | 1.5 | — | 400 | `--text-caption` |
| body | 16px | 1.5 | — | 400 | `--text-body` |
| body-lg | 20px | 1.5 | — | 400 | `--text-body-lg` |
| nav | 18px | 1.2 | — | 700 | `--text-nav` |
| card-title | 20px | 1.2 | -0.01em | 800 | `--text-card-title` |
| timeline-title | 24px | 1.15 | -0.01em | 800 | `--text-timeline-title` |
| subheading | 28px | 1.2 | -0.01em | 700 | `--text-subheading` |
| stat-number | 32px | 1.0 | -0.01em | 800 | `--text-stat` |
| heading | 48px | 1.1 | -0.02em | 800 | `--text-heading` |
| heading-lg | 72px | 1.05 | -0.02em | 800 | `--text-heading-lg` |
| display | 128px | 1.0 | -0.02em | 800 | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px · **Density:** comfortable

### Spacing Scale
4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px → `--spacing-4` … `--spacing-128`

### Border Radius

| Element | Value |
|---------|-------|
| tag / tech chip (project) | 8px |
| tag pill (timeline) / date pill / tab / filter row | 9999px (full) |
| social button | 8px |
| stat-icon tile | 12px |
| cards (project, stat, panel) | 16px |
| media / thumbnail | 12–16px |
| sidebar panel | 16px |
| scrollbar thumb | 8px |

### Shadows
Flat by default — elevation is the black → Coal shift plus the white-alpha hairline. Only shadow token is the focus ring.

| Name | Value | Token |
|------|-------|-------|
| focus-ring | `0 0 0 3px rgba(66,153,225,0.6)` | `--shadow-focus` |

### Layout
- **Page max-width:** ~1200px (project gallery may go wider, ~1320px, to fit sidebar + 3 columns)
- **Section gap:** 96–128px
- **Card padding:** 20–24px · **Sidebar/panel padding:** 16–24px · **Element gap:** 12–16px

## Global Components

### Monogram Logo
A `{i}` monogram in Off White, Display weight 700 at ~24px, subtle metallic treatment on the brackets. ~32px from the left edge.

### Nav Bar
Transparent over the canvas with a 1px hairline underline. Monogram left; links (Home, Projects, Blog) right in Display weight 700 at 18px, Pure White; active/hover link takes Spring Green. No pills, no fills.

### Selected / Active State (convention)
Selected controls **invert to a light chip**: Off-White (#FEFEFE) fill with Ink (#080808) text. This applies to the active tab, the active filter row, the active view-toggle icon, and date pills. Everything unselected stays transparent/dark with Gray-400 text. This light-invert is the site's only high-contrast UI move besides the green.

### Tag Pill
Two variants:
- **Timeline tag** — Onyx (#161616) fill, **full** radius, ~6px×14px padding, label in System Sans weight 500 at 13px, Gray 300 / white. Used in timeline entries.
- **Project tech chip** — Onyx fill, **8px** radius, ~4px×10px padding, 13px label, plus an overflow chip `+N` (e.g. `+9`) when the list is truncated.

## Hero & Stats

### Eyebrow Line
Display weight 700 at ~30px in Spring Green ('Hey there!, I'm-'). Sits directly above the name.

### Hero Name
Display weight 800 at ~96–128px (fluid), Off White, line-height 1.0, tracking -0.02em, trailing period. Left-aligned with the dotted-grid motif behind its top-left.

### Body Copy with Green Highlights
System Sans 400 at 16–20px, line-height 1.5, Gray 400. Keywords ('Frontend', 'Open Source', 'AI', the name) are set inline in Spring Green; bold lead-ins ('Full Stack Developer') in Pure White.

### Social Button
Onyx fill, 8px radius, ~12px×20px padding, no border. Brand-colored/green glyph left, Pure White label (System Sans 600, 16px). The site's closest thing to a CTA — dark chips with green icons, never green fills.

### Stat Box (image 3)
A row of four equal cards near the top of the page (directly below the hero). Each card: Coal (#111111) surface, 1px hairline, 16px radius, ~20px padding, laid out as icon-left / text-right.
- **Icon tile:** ~48px rounded square (12px radius) with a subtle Spring-Green-tinted translucent/gradient fill (source uses a violet gradient — mapped to green), holding a single light line icon (medal, briefcase, star, people).
- **Number:** Display weight 800 at ~32px, Off White, e.g. `50+`, `2+`, `99%`, `50+`. The `+`/`%` may take Spring Green.
- **Label:** System Sans 400 at 14px, Gray 400, e.g. 'Projects Completed', 'Years Experience', 'Client Satisfaction', 'Happy Clients'.

Row is a 4-up grid with 16–24px gaps, collapsing to 2-up then 1-up on smaller screens.

## Experience · Education · Achievements — Tabbed Timeline (image 1)

### Segmented Tab Control
A dark rounded-full bar (Onyx/#161616, optional 1px hairline) holding the three tabs: **Experience · Education · Achievements**. The active tab uses the light-invert (Off-White fill, Ink text, full radius); inactive tabs are transparent with Gray-400 text (white on hover), Display weight 600 at ~16px. Centered above the timeline. Switching tabs swaps the timeline content in place.

### Timeline Rail
A single vertical hairline (`whiteAlpha.300`) running down the middle-left of the content area, with a filled ~10px dot at each entry's anchor point. The rail visually threads the entries; it carries no color.

### Timeline Entry
A two-column row anchored to a rail dot:
- **Left column (right-aligned toward the rail):** a **Date Pill** (light-invert: Off-White fill, Ink bold text, full radius, ~4px×12px — e.g. 'Dec 2023 - April 2026'); below it the **title** in Display weight 800 at ~24px, Pure White (e.g. 'Junior Frontend Developer'); below that the **organization** in Spring Green, System Sans weight 500 at ~16px (e.g. 'Solspro' — this is where the source's violet maps to green).
- **Right column (left-aligned):** the **description** in System Sans 400 at 16–18px, Gray 400; then a wrapped row of **timeline Tag Pills** (Onyx, full radius) listing tools/skills for that entry.

Entries stack down the rail with generous vertical spacing (48–64px). If a tab has many entries, show the most recent set and reveal older ones with a green 'See more →' link beneath the rail (expanding adds more Timeline Entries, never a text list).

## Projects — Filterable Gallery (image 2)

### Gallery Toolbar
A top row above the grid: a full-width **Search input** ('Search projects…', Coal fill, full/large radius, magnifier glyph left); a **Sort dropdown** ('Newest first ▾', Onyx pill); a **View Toggle** (grid / list segmented control, active icon uses the light-invert); and a **result count** ('63 projects', Display weight 700, right-aligned).

### Filter Sidebar
A Coal (#111111) panel, 16px radius, 1px hairline, left of the grid. Contains collapsible groups:
- **Group header** — uppercase System Sans 600 at 12px, Gray 500, with a collapse chevron ('CATEGORY', 'TECH STACK', 'CMS / BUILDERS').
- **Filter row** — icon + label + right-aligned **count badge**. The active row uses the light-invert (Off-White fill, Ink text, e.g. 'All categories 63'); inactive rows are transparent with Gray-400 label and a muted count badge (e.g. 'Web Development 46', 'Web Tool 4', 'eBay Template 1').

### Project Card
Coal (#111111) surface, 16px radius, 1px hairline, in a 3-column grid (24px gaps).
- **Thumbnail** — website screenshot, 12–16px top radius, with two overlays: a **year badge** top-right (dark pill, e.g. '2025') and a **category tag** bottom-left (dark pill with a small icon, e.g. '🌐 Web Changes').
- **Title** — Display weight 800 at ~20px, Pure White (e.g. 'Mine Jewellery Boutique').
- **Description** — System Sans 400 at ~14–15px, Gray 400, clamped to 2–3 lines with an ellipsis.
- **Tech chips** — small Onyx 8px-radius chips (e.g. 'Shopify', 'Product Uploads') with an overflow chip '+9'.
- **View project button** — full-width, Onyx fill, 8px radius, Pure White label + trailing '↗', subtle hairline. Hover lifts the border / adds green to the arrow.

The gallery paginates or lazy-loads rather than using 'See more'; filters and search drive what's shown.

## Content & Structure Rules

Structured content is never dumped as loose text — each content type has one prescribed treatment, applied consistently:

- **Quick facts → Stat Box row** near the top of the page (4-up). Never inline stats as a sentence.
- **Experience / Education / Achievements → one Tabbed Timeline.** The three live under a single segmented tab control (this is how they stay separate — do not stack them as merged text blocks or three disconnected sections). Each entry is a full Timeline Entry (date pill → title → org → description → tag pills); a secondary/older entry is the same shape as a recent one, just shorter.
- **Projects → the filterable card Gallery.** Every project is a Project Card of identical shape; category/tech filters and search handle scale.
- **Any other list (publications, certifications) →** reuse the Project Card grid or the Timeline, whichever fits; never bare rows.
- **Selected = light-invert.** Active tab, active filter, active view, and date pills all use the Off-White-fill / Ink-text chip. Keep it consistent so 'selected' always reads the same way.
- **Overflow.** Timelines reveal extra entries with a green 'See more →'; galleries paginate/lazy-load; tag lists truncate with a `+N` chip. Expanding never produces a plain text list.
- **Logos (reconcile).** These reference screenshots use **text-only** pills for tech/skills and **accent-colored text** (not a logo) for the organization — so text pills are the primary spec here. Your earlier request for real logos still stands as an *option*: you may prefix the org name with a small logo tile and lead skill chips with a tool glyph. Pick one convention and keep it consistent across the site; flag which you want and I'll lock it in.

## Do's and Don'ts

### Do
- Put quick facts in a 4-up Stat Box row at the top; icon tile + big Display number + gray label
- Group Experience/Education/Achievements under one segmented tab control with a threaded timeline
- Use the light-invert (Off-White fill, Ink text) for every selected state — tabs, active filters, active view, date pills
- Keep the green for small signals — org names, link arrows, icon glyphs, keyword highlights, `+`/`%` accents — not big fills
- Give project cards a thumbnail with a year badge + category tag overlay, a clamped description, tech chips with a `+N` overflow, and a 'View project ↗' button
- Use small radii (8px chips, 12–16px cards/tiles); reserve full-pill radius for tabs, filter rows, date pills, and timeline tags
- Separate surfaces with the hairline + black→Coal shift, not shadows

### Don't
- Never inline stats, experience, or projects as running text — use the stat row, timeline, and gallery
- Never stack Experience/Education/Achievements as three separate merged blocks — they belong under the tab control
- Never fill large buttons or wide surfaces with green — keep it a signal; CTAs are dark chips with green icons
- Never set headlines light/thin — the identity is heavy weight (700–800)
- Never introduce a second accent on functional UI — green is the only signal (the source's violet is mapped to it); blue appears solely in selection/focus
- Never add drop shadows for elevation, and never use oversized 30px+ radii
- Never mix logo sizes, stretch, or recolor brand logos if you opt into the logo variant

## Surfaces & Elevation

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#080808` | Page background |
| 0b | Deep Band | `#000000` | Full-bleed sections a notch deeper |
| 1 | Card / Panel | `#111111` | Stat boxes, project cards, sidebar, timeline area |
| 2 | Chip | `#161616` | Tabs, tag pills, filter rows, social buttons |

No drop shadows for elevation; depth is the `#080808 → #111111` shift plus the 1px `whiteAlpha.300` hairline. Only shadow token is the blue focus ring.

## Imagery

Sparse and purposeful: one circular, slightly-desaturated portrait in the About section; project **thumbnails** (real website screenshots) in the gallery cards with year/category overlays; and single line icons — in the nav, stat tiles, filter rows, and social buttons — often tinted Spring Green. The recurring graphic device is the dotted-grid motif behind the hero name and the portrait. No stock photography, no gradients on functional UI beyond the subtle stat-icon tile tint. Code-forward and confident: big type, black space, a green pulse.

## Layout

Centered container (~1200px; the gallery widens to fit sidebar + 3 columns). **Nav:** monogram left, links right, hairline underline. **Hero:** left-aligned — dotted grid behind the top-left, green eyebrow, oversized name with period, white+gray tagline, green-highlighted status lines, a row of social chips. **Stat row:** a 4-up Stat Box grid directly below the hero. **About:** two columns — green-highlighted copy left, circular portrait with dotted grid right. **Experience/Education/Achievements:** a centered segmented tab control above a threaded two-column timeline. **Projects page:** a toolbar (search + sort + view toggle + count) over a two-pane layout — filter sidebar left, 3-column card grid right. **Contact:** centered 'Keep In Touch.', a green 'Feel free to reach out!' line, and a centered row of social chips. Vertical rhythm 96–128px between sections.

## Agent Prompt Guide

**Quick Color Reference**
- text (primary): #FEFEFE / #FFFFFF · secondary: #A0AEC0 · tertiary: #718096
- background (page): #080808 · card: #111111 · chip: #161616
- border (hairline): rgba(255,255,255,0.16)
- accent: #4ADE80 (spring green — text/links/icons/active accents, not fills)
- selected chip: #FEFEFE fill + #080808 text · selection: #90CDF4 · focus: #4299E1

**Example Component Prompts**
1. Stat row: 4 equal cards, #111111, 16px radius, 1px rgba(255,255,255,0.16) border, 20px padding, icon-left/text-right. Icon in a 48px 12px-radius tile with a subtle green-tinted fill. Number in Display 800 at 32px (#FEFEFE, '50+'), label in system-ui 400 at 14px (#A0AEC0, 'Projects Completed').
2. Tabbed timeline: a full-radius #161616 bar with three tabs (Experience/Education/Achievements); active tab = #FEFEFE fill + #080808 text, others transparent #A0AEC0. Below, a vertical hairline rail with 10px dots. Each entry: left = white date pill (#FEFEFE fill, #080808 text, full radius) → title Display 800 24px (#FFF) → org in #4ADE80 15px; right = description #A0AEC0 16px + wrapped #161616 full-radius tag pills.
3. Project card: #111111, 16px radius, hairline. Thumbnail (16px top radius) with a dark '2025' badge top-right and a dark category tag bottom-left. Title Display 800 20px (#FFF); description system-ui 14px #A0AEC0 clamped to 3 lines; #161616 8px-radius tech chips ('Shopify', 'Product Uploads', '+9'); full-width 'View project ↗' button (#161616, 8px radius, white label).
4. Filter sidebar: #111111 panel, 16px radius, hairline. Group header uppercase 12px #718096 with chevron ('CATEGORY'). Rows = icon + label + right count badge; active row inverts to #FEFEFE fill / #080808 text ('All categories 63'), inactive transparent #A0AEC0 ('Web Development 46').
5. Gallery toolbar: full-width #111111 search input with magnifier ('Search projects…'), an Onyx 'Newest first ▾' sort pill, a grid/list view toggle (active icon light-inverted), and a right-aligned count 'N projects' in Display 700.

## Typographic Voice
A two-way contrast: a very heavy geometric grotesk at large size for names, headings, stat numbers, and timeline titles (weight 800, tight tracking, trailing period) against quiet neutral system-ui body copy. No light/thin register anywhere — authority comes from mass and scale. The green does the accenting the type refuses to: eyebrow, keyword highlights, link arrows, icons, org names, and `+`/`%` marks.

## Aesthetic Influences
- **Brittany Chiang** — dotted-grid device, single-accent-on-dark discipline, quiet-body / loud-accent split
- **Vercel-adjacent dev portfolios** — true-black canvas, system-ui body, restraint everywhere but the type
- **Modern SaaS/agency portfolios** — the stat-box row, tabbed timeline, and filterable project gallery with a category/tech sidebar
- **This site's own moves** — oversized name-with-period, green inline keyword highlighting, and light-invert selected states are the signatures to preserve

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-ink: #080808;
  --color-pure-black: #000000;
  --color-coal: #111111;
  --color-onyx: #161616;
  --color-spring-green: #4ade80;   /* approximate — verify (maybe #48bb78). Source pattern accent was violet #8b5cf6, mapped here. */
  --color-green-hover: #38b26b;
  --color-off-white: #fefefe;      /* also the selected/active chip fill */
  --color-white: #ffffff;
  --color-gray-300: #cbd5e0;
  --color-gray-400: #a0aec0;
  --color-gray-500: #718096;
  --color-gray-700: #2d3748;
  --color-hairline: rgba(255, 255, 255, 0.16);
  --color-selection: #90cdf4;
  --color-focus-ring: #4299e1;

  /* Typography */
  --font-display: 'Sora', 'Space Grotesk', 'Poppins', ui-sans-serif, system-ui, sans-serif; /* inferred — verify */
  --font-body: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  --text-tag: 13px;
  --text-caption: 14px;
  --text-body: 16px;      --leading-body: 1.5;
  --text-body-lg: 20px;
  --text-nav: 18px;
  --text-card-title: 20px;
  --text-timeline-title: 24px;
  --text-subheading: 28px;
  --text-stat: 32px;
  --text-heading: 48px;
  --text-heading-lg: 72px;
  --text-display: 128px;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;

  /* Spacing */
  --spacing-4: 4px;   --spacing-8: 8px;   --spacing-12: 12px; --spacing-16: 16px;
  --spacing-24: 24px; --spacing-32: 32px; --spacing-48: 48px; --spacing-64: 64px;
  --spacing-96: 96px; --spacing-128: 128px;

  /* Layout */
  --page-max-width: 1200px;
  --gallery-max-width: 1320px;
  --section-gap: 96px;   /* 96–128px */
  --card-padding: 24px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-tag: 8px;         /* project tech chips */
  --radius-media: 16px;      /* thumbnails */
  --radius-tile: 12px;       /* stat icon tiles */
  --radius-card: 16px;       /* cards, panels, sidebar */
  --radius-pill: 9999px;     /* tabs, filter rows, date pills, timeline tags */

  /* Shadows */
  --shadow-focus: 0 0 0 3px rgba(66, 153, 225, 0.6);

  /* Surfaces */
  --surface-canvas: #080808;
  --surface-deep: #000000;
  --surface-card: #111111;
  --surface-chip: #161616;

  /* Selected / active chip */
  --chip-selected-bg: #fefefe;
  --chip-selected-fg: #080808;
}

::selection { background: var(--color-selection); color: var(--color-off-white); }
::-webkit-scrollbar { width: 8px; background: #080808; }
::-webkit-scrollbar-thumb { background: #111111; border-radius: 8px; }
```

### Tailwind v4

```css
@theme {
  --color-ink: #080808;
  --color-pure-black: #000000;
  --color-coal: #111111;
  --color-onyx: #161616;
  --color-spring-green: #4ade80;   /* approximate — verify */
  --color-green-hover: #38b26b;
  --color-off-white: #fefefe;
  --color-white: #ffffff;
  --color-gray-300: #cbd5e0;
  --color-gray-400: #a0aec0;
  --color-gray-500: #718096;
  --color-gray-700: #2d3748;

  --font-display: 'Sora', 'Space Grotesk', 'Poppins', ui-sans-serif, system-ui, sans-serif;
  --font-body: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  --text-tag: 13px;
  --text-caption: 14px;
  --text-body: 16px;
  --text-body-lg: 20px;
  --text-nav: 18px;
  --text-card-title: 20px;
  --text-timeline-title: 24px;
  --text-subheading: 28px;
  --text-stat: 32px;
  --text-heading: 48px;
  --text-heading-lg: 72px;
  --text-display: 128px;

  --spacing-4: 4px;   --spacing-8: 8px;   --spacing-12: 12px; --spacing-16: 16px;
  --spacing-24: 24px; --spacing-32: 32px; --spacing-48: 48px; --spacing-64: 64px;
  --spacing-96: 96px; --spacing-128: 128px;

  --radius-tag: 8px;
  --radius-media: 16px;
  --radius-tile: 12px;
  --radius-card: 16px;
  --radius-pill: 9999px;
}
```