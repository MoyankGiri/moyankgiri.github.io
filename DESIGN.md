# Portfolio — Style Reference
> Warm-black portfolio — quiet, understated, work-forward, lit by a single amber accent

**Theme:** dark

This portfolio operates in a dim, warm-toned idiom: a near-black canvas with a faint umber undertone, hairline borders instead of shadows, and geometry scattered like circuit-board fragments across negative space. Type does the heavy lifting — a humanist sans (CircularXX) at 300/400 weight keeps the interface conversational while a display cut (Whyte) at 300 weight with extreme negative tracking lets the name and section titles whisper rather than shout. A single muted gold (#cab16a) is the only chromatic accent, reserved for primary actions (résumé download, contact, primary links); green, red, and gold appear as decorative punctuation in floating geometric shapes, never on functional UI. Surfaces stack through four warm-tinted grays (#0c0a09 → #1c1917 → #292524 → #44403c) so project cards and elevated panels read as luminance shifts, not color shifts. The effect suits a portfolio where the work — not the chrome — should hold attention.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Obsidian | `#0c0a09` | `--color-obsidian` | Page background, hero canvas, base surface — carries a warm umber undertone rather than neutral black so the page reads as lit, not void |
| Graphite | `#1c1917` | `--color-graphite` | Card surface, elevated panels, nav bar, footer — one step lighter than canvas to create depth without color shift |
| Charcoal | `#292524` | `--color-charcoal` | Higher elevation surfaces, input fields, nested cards — second step in the surface stack |
| Slate | `#44403c` | `--color-slate` | Tertiary surface, hover states on dark panels, subtle dividers in dense contexts |
| Stone | `#57534e` | `--color-stone` | Supporting neutral for secondary UI, dividers, and muted labels. Do not promote it to the primary CTA color |
| Ash | `#78716c` | `--color-ash` | Muted icon color, secondary metadata text, inactive stroke |
| Pebble | `#a8a29e` | `--color-pebble` | Tertiary text, captions, supporting metadata |
| Mist | `#d6d3d1` | `--color-mist` | Secondary text, link hover, subtle icon stroke |
| Fog | `#e5e7eb` | `--color-fog` | Primary text, headings, nav links — the dominant text color across the interface |
| Bone | `#f6f6f6` | `--color-bone` | High-emphasis text, button labels on dark fills, hero headline accent |
| Pure | `#ffffff` | `--color-pure` | Maximum contrast text, logo wordmark, high-priority callouts |
| Pilot Gold | `#cab16a` | `--color-pilot-gold` | Yellow supporting accent for decorative details and low-frequency emphasis |
| Circuit Green | `#89b482` | `--color-circuit-green` | Decorative geometry only — floating triangle/quarter-circle accents in hero and section backgrounds; never used on buttons or states |
| Signal Red | `#ea6962` | `--color-signal-red` | Red supporting accent for decorative details and low-frequency emphasis |

## Tokens — Typography

### CircularXX — Workhorse sans for body, nav, buttons, cards, and form labels. Weight 400 is the UI default; 500 for button text and emphasized labels; 300 appears in the logotype wordmark. The slight negative tracking (-0.019em) tightens the humanist forms into a more instrumented feel. · `--font-circularxx`
- **Substitute:** Inter, Söhne, General Sans
- **Weights:** 300, 400, 500, 600
- **Sizes:** 12, 14, 16, 18, 20, 24, 72
- **Line height:** 1.20–1.75
- **Letter spacing:** -0.019em
- **Role:** Workhorse sans for body, nav, buttons, cards, and form labels. Weight 400 is the UI default; 500 for button text and emphasized labels; 300 appears in the logotype wordmark. The slight negative tracking (-0.019em) tightens the humanist forms into a more instrumented feel.

### Whyte — Display face for hero headlines and section titles. Weight 300 at 72px with -0.056em tracking is the signature move: anti-convention for a dev tool, where most competitors use 700-800. The whisper-weight display creates authority through restraint — the type breathes instead of pushing. · `--font-whyte`
- **Substitute:** Söhne, GT America, Switzer
- **Weights:** 300, 400, 600, 700
- **Sizes:** 16, 24, 30, 36, 48, 72
- **Line height:** 1.00–1.50
- **Letter spacing:** -0.056em at display, -0.025em at subhead
- **Role:** Display face for hero headlines and section titles. Weight 300 at 72px with -0.056em tracking is the signature move: anti-convention for a dev tool, where most competitors use 700-800. The whisper-weight display creates authority through restraint — the type breathes instead of pushing.

### Whyte Inktrap — Mid-size headings (30-60px) where the inktrap terminals prevent thin strokes from closing up at smaller display sizes. Bridges the gap between the light display weight and readable mid-size headings. · `--font-whyte-inktrap`
- **Substitute:** Söhne Breit, GT America Expanded
- **Weights:** 400, 500, 600
- **Sizes:** 18, 30, 36, 48, 60
- **Line height:** 1.00–1.56
- **Letter spacing:** -0.056em at display, -0.025em at mid
- **Role:** Mid-size headings (30-60px) where the inktrap terminals prevent thin strokes from closing up at smaller display sizes. Bridges the gap between the light display weight and readable mid-size headings.

### CircularXXMono — Code snippets, monospaced labels, technical metadata, version strings. Limited to 12-18px — always auxiliary, never structural. · `--font-circularxxmono`
- **Substitute:** JetBrains Mono, IBM Plex Mono
- **Weights:** 400
- **Sizes:** 12, 14, 18
- **Line height:** 1.33–1.63
- **Letter spacing:** normal
- **Role:** Code snippets, monospaced labels, technical metadata, version strings. Limited to 12-18px — always auxiliary, never structural.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | -0.019px | `--text-caption` |
| body-sm | 14px | 1.56 | -0.019px | `--text-body-sm` |
| body | 16px | 1.5 | -0.019px | `--text-body` |
| subheading | 20px | 1.4 | -0.025px | `--text-subheading` |
| heading-sm | 24px | 1.33 | -0.025px | `--text-heading-sm` |
| heading | 36px | 1.2 | -0.056px | `--text-heading` |
| heading-lg | 48px | 1.11 | -0.056px | `--text-heading-lg` |
| display | 72px | 1 | -0.056px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 8px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 8 | 8px | `--spacing-8` |
| 16 | 16px | `--spacing-16` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 128 | 128px | `--spacing-128` |
| 144 | 144px | `--spacing-144` |
| 160 | 160px | `--spacing-160` |
| 192 | 192px | `--spacing-192` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 9999px |
| cards | 12px |
| inputs | 4px |
| buttons | 9999px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` | `--shadow-subtle` |
| subtle-2 | `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0p...` | `--shadow-subtle-2` |
| xl | `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1)...` | `--shadow-xl` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80-120px
- **Card padding:** 32px
- **Element gap:** 16-24px

## Components

### Primary Pill Button
**Role:** Hero and section CTAs (e.g., 'Download résumé', 'Get in touch', 'View all projects')

Pill shape (9999px radius), Pilot Gold (#cab16a) fill, #0c0a09 text, CircularXX weight 500 at 14-16px, horizontal padding 20px, vertical padding 10px. No border. No shadow. The gold against warm-black is the page's only chromatic permission — used sparingly so it always feels switched on.

### Ghost Outline Button
**Role:** Secondary CTAs (e.g., 'View project', 'Read more', 'Open on GitHub')

Pill shape (9999px radius), transparent fill, 1px border in #44403c, Fog (#e5e7eb) text, CircularXX weight 400 at 14-16px, padding 20px horizontal / 10px vertical. Hover lifts border to #78716c.

### Nav Link
**Role:** Top navigation items (About, Experience, Projects, Contact) and footer links

CircularXX weight 400 at 14px, Mist (#d6d3d1) default, Fog (#e5e7eb) hover, no underline. Padding 12px horizontal. Active page uses Pilot Gold underline or text color.

### Project Card
**Role:** Cards in the projects / publications grid

Graphite (#1c1917) fill, 1px border in #292524, 12px radius, padding 32px. Optional project thumbnail or screenshot at top with 12px radius. Title in CircularXX weight 500 at 20px (Fog), one- or two-line description at 14px in #a8a29e, and a row of tech tags below. Links ('View project', 'Source') as ghost buttons or Mist text links at the bottom. No shadow — depth comes from the surface stack; hover may lift the border to #44403c.

### Experience Timeline Entry
**Role:** Role/company items in the Experience and Academics sections

Transparent fill, 1px border-bottom in #292524 (hairline divider pattern), padding 16px vertical / 24px horizontal. Role title in CircularXX weight 500 at 16px (Fog); company and date range as metadata at 12px in #a8a29e, uppercase with +0.05em tracking for the label. Body description at 14px in #a8a29e. Stack entries vertically so the hairline dividers form a quiet timeline.

### Skill / Tech Tag
**Role:** Skills, tools, and technologies in the Experience section and on project cards

Pill shape (9999px radius), transparent or Charcoal (#292524) fill, 1px border in #44403c, CircularXX weight 400 at 12-14px, Mist (#d6d3d1) text, padding 6px 12px. Wrap in a flex row with 8px gaps. Decorative only — never colored per skill.

### Social Link Button
**Role:** Nav bar and footer links to GitHub, LinkedIn, email, etc.

Ghost outline (1px #44403c border) or bare icon button, pill radius, CircularXX at 14px, Fog text, small single-color icon in Ash (#78716c) → Mist on hover. Padding 8px 16px (with label) or square 8px (icon only).

### Hero Headline
**Role:** 72px display name / title on the landing hero

Whyte weight 300 at 72px, line-height 1.0, letter-spacing -0.056em, color Fog (#e5e7eb). Typically the name on one line and a role or tagline on the next, the line break creating a deliberate pause. Sets the whisper-weight authority for the entire site.

### Section Subtitle
**Role:** Short intro paragraph below the name or a section heading (e.g., a one-line bio)

CircularXX weight 400 at 18px, line-height 1.56, color #a8a29e. Max-width ~640px when used as a lead paragraph under a centered heading.

### Profile Avatar
**Role:** Portrait/avatar in the hero or About section

Circular or 12px-radius image, 96-160px, framed by a 1px #292524 border. Sits on the Obsidian canvas with generous clear space — one image is enough; keep it flat with no drop shadow beyond the surface stack.

### Inline Code Token
**Role:** Function names, file references, tools, or method calls within project/bio text

CircularXXMono at 14px, text in #d8a657 (warm amber) to distinguish from regular body text. No background pill — inline within the sentence flow.

### Decorative Geometry
**Role:** Background scatter elements in hero and section headers

Floating quarter-circles and right-triangles in Pilot Gold (#cab16a), Circuit Green (#89b482), and Signal Red (#ea6962). Absolutely positioned, 40-80px size, partially clipped by section edges. 15-20% opacity in some placements. Never overlap text or interactive elements.

## Do's and Don'ts

### Do
- Use Pilot Gold (#cab16a) exclusively for primary action fills (résumé download, contact, primary links) — it is the only chromatic color permitted on functional UI elements
- Set the hero name/title at 72px Whyte weight 300 with -0.056em tracking; the whisper-weight display is the site's signature voice
- Layer surfaces using the warm-gray stack (#0c0a09 → #1c1917 → #292524 → #44403c) to create depth without introducing hue
- Use 9999px radius for all buttons, skill tags, and badges to maintain the pill-shape consistency
- Set body text at 16px CircularXX weight 400 with -0.019em tracking; never go below 14px for readable content
- Place floating geometric shapes (triangles, quarter-circles) in gold, green, and red as background atmosphere — they are decorative, not informative
- Maintain 80-120px vertical breathing room between major sections to preserve the spacious, work-forward feel

### Don't
- Do not use green (#89b482) or red (#ea6962) on buttons, tags, or status indicators — they are decorative-only and lose meaning if repurposed
- Do not use bold (700+) weights for the name or section titles — the entire display system is built on the restraint of weight 300
- Do not introduce drop shadows beyond the single subtle nav shadow (rgba(0,0,0,0.05) 0 1px 2px); depth comes from surface stack, not blur
- Do not use pure #000000 as a background — the warm undertone of #0c0a09 is what makes the dark theme feel lit rather than void
- Do not set body text below 14px or use weights above 500 for paragraphs — the type system is designed for quiet scanning, not shouting
- Do not place text directly over decorative geometry — always maintain 40px+ clear space between type and floating shapes
- Do not add gradients to functional UI elements; the palette is deliberately flat, letting the gold accent do the chromatic work

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#0c0a09` | Page background, hero sections, full-bleed bands |
| 1 | Card | `#1c1917` | Project cards, content blocks sitting on canvas |
| 2 | Elevated | `#292524` | Nested elements, hover states, input fields, code blocks |
| 3 | Overlay | `#44403c` | Modals, popovers, highest elevation surfaces |

## Elevation

- **Sticky Nav:** `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **Button Hover:** `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
- **Project Card (active/hover state):** `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px`

## Imagery

The portfolio is primarily typographic and geometric, with a light, deliberate use of real imagery where it earns its place: a single profile avatar in the hero/About area, and optional project thumbnails or screenshots on project cards (flat, 12px radius, hairline #292524 border, no drop shadow). The recurring visual language is built from scattered geometric primitives (quarter-circles, right-triangles) in gold, green, and red that float around hero and section backgrounds like circuit-board fragments, partially clipped by section edges so the pattern feels like it continues beyond the viewport. Icons — for skills, tools, and social links — are minimal and single-color: 24px, 1.5px stroke, outline style in Ash/gold. The overall effect is text-dominant with geometric atmosphere and just enough photography to make the work concrete.

## Layout

The page follows a single-column, centered max-width (1200px) structure with full-bleed dark bands. The hero is centered and text-forward — the name at 72px, a one-line role/bio subtitle, primary + ghost CTAs (résumé, contact), and an optional avatar — with scattered geometric shapes floating in the negative space. Sections then flow top to bottom: About/bio, Skills (a wrapped row of tags), Experience and Academics (hairline-divided timeline entries), and Projects/Publications (a 3-column equal-width card grid with 24px gaps, collapsing to fewer columns on narrow screens). Vertical rhythm is generous — 80-120px between sections — creating a spacious, unhurried feel rather than a dense dashboard. The sticky top nav is minimal: name/logo left, section links center-left, social links + a primary 'Contact' or 'Résumé' pill right. A quiet footer repeats the social links and a copyright line.

## Agent Prompt Guide

**Quick Color Reference**
- text: #e5e7eb (Fog)
- background: #0c0a09 (Obsidian)
- card surface: #1c1917 (Graphite)
- border: #292524 (Charcoal)
- primary action: #cab16a (Pilot Gold)
- accent: #cab16a (Pilot Gold) — same as primary action

**3-5 Example Component Prompts**

1. Create a portfolio hero: Obsidian (#0c0a09) background. Centered name at 72px Whyte weight 300, color Fog (#e5e7eb), letter-spacing -0.056em, line-height 1.0, with the role/tagline on a second line. One-line bio subtitle at 18px CircularXX weight 400, color #a8a29e. Two buttons: primary pill with Pilot Gold (#cab16a) fill, #0c0a09 text at 14px CircularXX weight 500, padding 10px 20px ('Download résumé'); secondary ghost pill with 1px #44403c border, Fog text ('Get in touch'). Optional circular avatar (128px, 1px #292524 border). Scatter 4-6 decorative shapes (quarter-circles and triangles) in gold (#cab16a), green (#89b482), and red (#ea6962) around the hero edges at 40-80px size.

2. Create a projects grid: 3 equal columns with 24px gap. Each card uses Graphite (#1c1917) fill, 1px Charcoal (#292524) border, 12px radius, 32px padding, with an optional thumbnail (12px radius) at top. Title in CircularXX weight 500 at 20px, Fog text; description at 14px CircularXX weight 400, color #a8a29e. Below, a wrapped row of skill tags (pill, 1px #44403c border, 12px, Mist text) and two links: a ghost 'View project' button and a Mist 'Source' text link.

3. Create a nav bar: Obsidian (#0c0a09) background, 1px bottom border in #292524, hairline shadow rgba(0,0,0,0.05) 0 1px 2px. Name/logo in white CircularXX at 18px weight 600 left. Center: nav links (About, Experience, Projects, Contact) in CircularXX 14px weight 400, Mist (#d6d3d1) color. Right: social icon buttons (GitHub, LinkedIn) in Ash (#78716c) → Mist hover + a primary Pilot Gold pill 'Contact'.

4. Create an experience timeline: single column of entries separated by 1px #292524 bottom borders, 16px vertical / 24px horizontal padding each. Per entry: role title in CircularXX weight 500 at 16px (Fog); company + date range as uppercase 12px, weight 500, +0.05em tracking, #a8a29e; body description at 14px CircularXX weight 400, #a8a29e.

5. Create a decorative background layer: 8 geometric shapes absolutely positioned in a full-bleed section. Mix of quarter-circles (40-60px radius) and right-triangles (30-50px) in Pilot Gold (#cab16a), Circuit Green (#89b482), and Signal Red (#ea6962). Positions should be 20-30% from edges, partially clipped by the viewport. No shape should overlap text content areas.

## Decorative Geometry System

The scattered shapes are not random — they form a vocabulary. Three shape types (quarter-circle, right-triangle, small filled square) in three colors (Pilot Gold, Circuit Green, Signal Red) at three sizes (40px, 60px, 80px) create combinatorial variety from minimal primitives. Always position shapes so they are partially clipped by a section edge — this implies the pattern continues beyond the viewport and prevents the shapes from feeling like stickers placed on the page. Never center a shape. Never place two same-color shapes adjacent. Maintain at least 200px between shapes to preserve negative space.

## Aesthetic Influences

- **Linear** — Same dark warm-toned canvas (#0c0a09 family), whisper-weight display headlines, single accent color reserved exclusively for primary CTAs, and geometric decorative elements scattered in negative space
- **Vercel** — Similar full-bleed dark sections with generous 80-120px vertical rhythm, centered hero pattern, and minimal surface elevation relying on hairline borders rather than shadows
- **Resend** — Warm-black backgrounds, pill-shaped buttons, and a single muted chromatic accent against near-identical typographic restraint — a good reference for how sparingly to use the gold
- **Personal dev portfolios in this idiom** — Text-forward landing hero with a light-weight name, a wrapped row of skill tags, a hairline-divided experience timeline, and a project card grid, all on a warm-neutral dark palette with humanist-sans body copy

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-obsidian: #0c0a09;
  --color-graphite: #1c1917;
  --color-charcoal: #292524;
  --color-slate: #44403c;
  --color-stone: #57534e;
  --color-ash: #78716c;
  --color-pebble: #a8a29e;
  --color-mist: #d6d3d1;
  --color-fog: #e5e7eb;
  --color-bone: #f6f6f6;
  --color-pure: #ffffff;
  --color-pilot-gold: #cab16a;
  --color-circuit-green: #89b482;
  --color-signal-red: #ea6962;

  /* Typography — Font Families */
  --font-circularxx: 'CircularXX', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-whyte: 'Whyte', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-whyte-inktrap: 'Whyte Inktrap', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-circularxxmono: 'CircularXXMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.019px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.56;
  --tracking-body-sm: -0.019px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.019px;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.025px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.025px;
  --text-heading: 36px;
  --leading-heading: 1.2;
  --tracking-heading: -0.056px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.11;
  --tracking-heading-lg: -0.056px;
  --text-display: 72px;
  --leading-display: 1;
  --tracking-display: -0.056px;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --spacing-144: 144px;
  --spacing-160: 160px;
  --spacing-192: 192px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80-120px;
  --card-padding: 32px;
  --element-gap: 16-24px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-xl: 12px;
  --radius-full: 9999px;

  /* Named Radii */
  --radius-tags: 9999px;
  --radius-cards: 12px;
  --radius-inputs: 4px;
  --radius-buttons: 9999px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  --shadow-subtle-2: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px;

  /* Surfaces */
  --surface-canvas: #0c0a09;
  --surface-card: #1c1917;
  --surface-elevated: #292524;
  --surface-overlay: #44403c;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-obsidian: #0c0a09;
  --color-graphite: #1c1917;
  --color-charcoal: #292524;
  --color-slate: #44403c;
  --color-stone: #57534e;
  --color-ash: #78716c;
  --color-pebble: #a8a29e;
  --color-mist: #d6d3d1;
  --color-fog: #e5e7eb;
  --color-bone: #f6f6f6;
  --color-pure: #ffffff;
  --color-pilot-gold: #cab16a;
  --color-circuit-green: #89b482;
  --color-signal-red: #ea6962;

  /* Typography */
  --font-circularxx: 'CircularXX', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-whyte: 'Whyte', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-whyte-inktrap: 'Whyte Inktrap', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-circularxxmono: 'CircularXXMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.019px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.56;
  --tracking-body-sm: -0.019px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.019px;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.025px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.025px;
  --text-heading: 36px;
  --leading-heading: 1.2;
  --tracking-heading: -0.056px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.11;
  --tracking-heading-lg: -0.056px;
  --text-display: 72px;
  --leading-display: 1;
  --tracking-display: -0.056px;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --spacing-144: 144px;
  --spacing-160: 160px;
  --spacing-192: 192px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-xl: 12px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  --shadow-subtle-2: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px;
}
```