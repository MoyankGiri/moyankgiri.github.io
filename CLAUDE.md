# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

This is Moyank Giri's personal portfolio site, hosted at `moyankgiri.github.io` via GitHub Pages. It's a single scrolling page (Hero → Stats → About → Skills → Journey [tabbed Experience/Education/Achievements timeline] → Projects [filterable gallery] → Publications → Contact) built with plain Jekyll (no theme gem, no framework, no build step beyond Jekyll itself). Visual design follows `DESIGN.md` (currently: a true-black canvas with a single spring-green accent, heavy 700–800-weight geometric grotesk display type, a dotted-grid motif, a tabbed timeline for career history, and a filterable project gallery) — read that file before touching anything visual. `DESIGN.md` is user-edited and can change to a completely different system between sessions (it already has, twice); always re-read it rather than assuming the previous palette/type/component set still applies.

GitHub Pages builds and deploys this site automatically from the `master` branch using its native Jekyll support — there is no explicit deploy workflow in `.github/workflows/`.

## The core architecture: data-driven content

**All content lives in `_data/*.yml`, not in templates.** This is the entire point of the site's structure: editing a YAML file is the only thing needed to change what's on the page — adding, editing, or removing a list entry automatically adds/edits/removes it from the rendered site, because every section loops over its data file with Liquid. Template changes are only needed when the *shape* of a section changes, never for routine content updates.

| File | Renders in | Controls |
|---|---|---|
| `_data/site.yml` | nav, hero, footer, contact | name, tagline, contact info, social links, résumé PDF path, hero subtitle, About paragraph, nav links |
| `_data/stats.yml` | `#top` stat row | 4 entries `{icon, number, label}` for the quick-facts row below the hero — `icon` must be a name defined in `_includes/icon.html` |
| `_data/skills.yml` | `#skills` | skill groups (`category` + `items[]`, each item `{name, icon}` — `icon` is an optional [Simple Icons](https://simpleicons.org) slug rendered via `cdn.simpleicons.org`; leave `icon: ""` for concepts with no real brand mark) |
| `_data/experience.yml` | `#journey` (Experience tab) | work history (`company`, `role`, `duration`, `location`, `mode`, `logo`, `bullets[]`) — `logo` is a path under `assets/img/`; leave `""` to fall back to an initials monogram |
| `_data/education.yml` | `#journey` (Education tab) | degrees/schools (`institution`, `degree`, `duration`, `grade`, `logo`, `highlights[]`, `courses[]`) |
| `_data/achievements.yml` | `#journey` (Achievements tab) | scholarship/extracurricular entries as `{title, description}` objects — same Timeline Entry shape as Experience/Education, just without dates/org |
| `_data/publications.yml` | `#publications` | `title`, `venue`, `date`, `summary`, `github` |
| `_data/projects.yml` | `#projects` | `title`, `date_range`, `org`, `category`, `summary`, `skills[]`, `github` — `category` and `skills` drive the gallery's Category and Tech Stack filter groups |

Full field-by-field guide is in `README.md`.

## Commands

Ruby/Jekyll project, no npm/package.json, no Node build step.

```bash
bundle install                      # install gems (Jekyll, jekyll-sitemap)
bundle exec jekyll serve            # local dev server with live reload (http://localhost:4000)
bundle exec jekyll build            # build the static site into _site/
```

CI (`.github/workflows/ci.yml`) runs on every push/PR and only validates that the site builds via `bundle exec appraisal jekyll build --future`. There are no linters or tests configured beyond this build check.

## Template structure

- `index.html` — front matter only; body is `_includes/sections/{hero,stats,about,skills,journey,projects,publications,contact}.html` in order, each pulling from its matching `_data/*.yml`. `journey.html` is the merged Experience/Education/Achievements tabbed timeline (replaces what used to be three separate section files).
- `_layouts/default.html` — the only layout. Wraps `head.html` + `header.html` (nav) + `{{ content }}` + `footer.html` + `main.js`.
- `_includes/icon.html` — inline SVG icon partial, called as `{% include icon.html name="github" %}`; add new icons here rather than hand-rolling SVGs inline elsewhere. (Real *brand/tool* logos on skill chips are the one exception — those load from `cdn.simpleicons.org` by slug, not from this partial.)
- `assets/css/tokens.css` — design tokens (colors, type scale, spacing, radii) transcribed verbatim from `DESIGN.md`.
- `assets/css/main.css` — every component (nav, hero, stat row, tabbed timeline, project gallery, cards, chips, etc.), built only from those tokens. Includes an `[hidden] { display: none !important; }` override needed because several component classes set their own `display` and would otherwise beat the browser's default `[hidden]` rule at equal specificity.
- `assets/js/main.js` — vanilla JS: mobile nav toggle, `IntersectionObserver`-based scroll-spy, the Journey tab switcher (`[data-tab-target]` / `[data-tab-panel]`), a generic "see more" expand/collapse handler (`.see-more-link`, keyed off `.is-extra` items in the element right before the button), and the Projects gallery controller (search input, sort toggle, grid/list view toggle, and a Category/Tech-Stack filter sidebar built at runtime from each card's `data-category`/`data-skills` attributes). No animation/motion framework.
- `404.html` — uses the same `default` layout.

There is no blog (`_posts`, `_projects` collection, tags, comments, and search were removed as unused theme leftovers) and no other page — this is a one-page site by design, not an oversight.

## Design and visual changes

`DESIGN.md` is the binding style spec for this site — it overrides generic design instinct. When touching anything visual:

- **Re-read `DESIGN.md` before assuming anything about the current look.** It has already changed twice (warm-black/gold → deep-space/cobalt → the current true-black/spring-green tabbed-timeline-and-gallery system) and is user-owned — never carry over colors, type, or component shapes from memory of a previous version.
- **Don't invent colors, fonts, spacing, or radii outside `assets/css/tokens.css`.** Every value in `main.css` should trace back to a token or a documented DESIGN.md component spec.
- **Fonts are substituted, not literal.** DESIGN.md's current display typeface is an inferred heavy grotesk (Sora/Space Grotesk/Poppins/General Sans); this site uses Sora — the only one of those with a free weight 800 on Google Fonts, which the type scale requires — loaded via a Google Fonts `<link>` in `head.html`. Body text uses DESIGN.md's own confirmed `system-ui` stack, no webfont needed. If DESIGN.md's font names change again, re-check its own substitute recommendations and weight requirements before picking a replacement.
- **Structural rules are binding content rules, not styling.** The current DESIGN.md requires: a 4-up Stat Box row below the hero; Experience/Education/Achievements merged under one segmented Tabbed Timeline (not three separate sections); Projects rendered as a filterable Gallery (search + sort + view toggle + Category/Tech-Stack filter sidebar), not a plain grid. Real org logos and real skill-chip logos are kept as a deliberate, user-approved deviation from DESIGN.md's literal text-only-pill spec (see the "Logos (reconcile)" note in DESIGN.md itself). Check DESIGN.md's "Content & Structure Rules" section before changing section structure, not just `assets/css/`.
- **One theme, dark only.** DESIGN.md defines only the dark palette — there is no light mode toggle. Don't add one without a reason to update DESIGN.md itself.
- **Preserve content when restyling.** Every experience/education/project/publication/achievement entry and every social/contact link must stay represented; a visual change re-skins, it doesn't drop content.
- **Verify against DESIGN.md's current Do's and Don'ts** before calling a visual change done, then confirm `bundle exec jekyll build` still succeeds.
