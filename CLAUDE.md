# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

This is Moyank Giri's personal portfolio site, hosted at `moyankgiri.github.io` via GitHub Pages. It's a single scrolling page (Hero → About → Skills → Experience → Academics → Projects → Publications → Contact) built with plain Jekyll (no theme gem, no framework, no build step beyond Jekyll itself). Visual design follows `DESIGN.md` (a dark, warm-black system with a single muted-gold accent) — read that file before touching anything visual.

GitHub Pages builds and deploys this site automatically from the `master` branch using its native Jekyll support — there is no explicit deploy workflow in `.github/workflows/`.

## The core architecture: data-driven content

**All content lives in `_data/*.yml`, not in templates.** This is the entire point of the site's structure: editing a YAML file is the only thing needed to change what's on the page — adding, editing, or removing a list entry automatically adds/edits/removes it from the rendered site, because every section loops over its data file with Liquid. Template changes are only needed when the *shape* of a section changes, never for routine content updates.

| File | Renders in | Controls |
|---|---|---|
| `_data/site.yml` | nav, hero, footer, contact | name, tagline, contact info, social links, résumé PDF path, hero subtitle, About paragraph, nav links |
| `_data/skills.yml` | `#skills` | skill tag groups (`category` + `items[]`) |
| `_data/experience.yml` | `#experience` | work history timeline (`company`, `role`, `duration`, `location`, `mode`, `bullets[]`) |
| `_data/education.yml` | `#academics` | degrees/schools (`institution`, `degree`, `duration`, `grade`, `highlights[]`, `courses[]`) — entries with `highlights`/`courses` render as full cards, empty-array entries render in the compact secondary row |
| `_data/achievements.yml` | `#academics` | flat list of scholarship/extracurricular strings |
| `_data/publications.yml` | `#publications` | `title`, `venue`, `date`, `summary`, `github` |
| `_data/projects.yml` | `#projects` | `title`, `date_range`, `org`, `summary`, `skills[]`, `github`, `featured: true/false` — `featured: true` renders as a full card, everything else renders in the compact "More projects" list |

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

- `index.html` — front matter only; body is `_includes/sections/{hero,about,skills,experience,academics,projects,publications,contact}.html` in order, each pulling from its matching `_data/*.yml`.
- `_layouts/default.html` — the only layout. Wraps `head.html` + `header.html` (nav) + `{{ content }}` + `footer.html` + `main.js`.
- `_includes/icon.html` — inline SVG icon partial, called as `{% include icon.html name="github" %}`; add new icons here rather than hand-rolling SVGs inline elsewhere.
- `assets/css/tokens.css` — design tokens (colors, type scale, spacing, radii, shadows) transcribed verbatim from `DESIGN.md`.
- `assets/css/main.css` — every component (nav, hero, buttons, timeline entries, project cards, tags, etc.), built only from those tokens.
- `assets/js/main.js` — vanilla JS: mobile nav toggle + `IntersectionObserver`-based scroll-spy. No animation/motion framework — intentionally not introduced since `DESIGN.md`'s system is static/hairline-based, not motion-heavy.
- `404.html` — uses the same `default` layout.

There is no blog (`_posts`, `_projects` collection, tags, comments, and search were removed as unused theme leftovers) and no other page — this is a one-page site by design, not an oversight.

## Design and visual changes

`DESIGN.md` is the binding style spec for this site — it overrides generic design instinct. When touching anything visual:

- **Don't invent colors, fonts, spacing, or radii outside `assets/css/tokens.css`.** Every value in `main.css` should trace back to a token or a documented DESIGN.md component spec.
- **Fonts are substituted, not literal.** DESIGN.md names paid fonts (Whyte, CircularXX, CircularXXMono); this site uses DESIGN.md's own listed free substitutes instead — Switzer, General Sans, and JetBrains Mono, loaded via Fontshare/Google Fonts `<link>` tags in `head.html`. Keep using those substitutes; don't swap in a different font family without updating DESIGN.md's own substitute list first.
- **One theme, dark only.** DESIGN.md defines only the dark palette — there is no light mode toggle. Don't add one without a reason to update DESIGN.md itself.
- **Preserve content when restyling.** Every experience/education/project/publication entry and every social/contact link must stay represented; a visual change re-skins, it doesn't drop content.
- **Verify against DESIGN.md's Do's and Don'ts** (no bold 700+ display type, no shadows beyond the one hairline nav shadow, no pure `#000000`, gold reserved for primary actions only) before calling a visual change done, then confirm `bundle exec jekyll build` still succeeds.
