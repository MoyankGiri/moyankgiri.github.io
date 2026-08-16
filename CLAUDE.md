# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

This is Moyank Giri's personal portfolio site, hosted at `moyankgiri.github.io` via GitHub Pages. It's a single scrolling page (Hero → About → Skills → Experience → Academics → Accomplishments → Projects → Publications → Contact) built with plain Jekyll (no theme gem, no framework, no build step beyond Jekyll itself). Visual design follows `DESIGN.md` (currently: a deep-space navy system with a single electric-cobalt accent, ultrathin weight-100 display type, and a card-based content model) — read that file before touching anything visual. `DESIGN.md` is user-edited and can change to a completely different system between sessions; always re-read it rather than assuming the previous palette/type/component set still applies.

GitHub Pages builds and deploys this site automatically from the `master` branch using its native Jekyll support — there is no explicit deploy workflow in `.github/workflows/`.

## The core architecture: data-driven content

**All content lives in `_data/*.yml`, not in templates.** This is the entire point of the site's structure: editing a YAML file is the only thing needed to change what's on the page — adding, editing, or removing a list entry automatically adds/edits/removes it from the rendered site, because every section loops over its data file with Liquid. Template changes are only needed when the *shape* of a section changes, never for routine content updates.

| File | Renders in | Controls |
|---|---|---|
| `_data/site.yml` | nav, hero, footer, contact | name, tagline, contact info, social links, résumé PDF path, hero subtitle, About paragraph, nav links |
| `_data/skills.yml` | `#skills` | skill groups (`category` + `items[]`, each item `{name, icon}` — `icon` is an optional [Simple Icons](https://simpleicons.org) slug rendered via `cdn.simpleicons.org`; leave `icon: ""` for concepts with no real brand mark) |
| `_data/experience.yml` | `#experience` | work history (`company`, `role`, `duration`, `location`, `mode`, `logo`, `bullets[]`) — `logo` is a path under `assets/img/`; leave `""` to fall back to an initials monogram |
| `_data/education.yml` | `#academics` | degrees/schools (`institution`, `degree`, `duration`, `grade`, `logo`, `highlights[]`, `courses[]`) |
| `_data/achievements.yml` | `#achievements` | flat list of scholarship/extracurricular strings — its own section, kept separate from Academics per DESIGN.md's "never merge two sections" rule |
| `_data/publications.yml` | `#publications` | `title`, `venue`, `date`, `summary`, `github` |
| `_data/projects.yml` | `#projects` | `title`, `date_range`, `org`, `summary`, `skills[]`, `github`, `featured: true/false` — `featured: true` entries render by default, the rest sit behind the "See more" toggle |

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

- `index.html` — front matter only; body is `_includes/sections/{hero,about,skills,experience,academics,achievements,projects,publications,contact}.html` in order, each pulling from its matching `_data/*.yml`.
- `_layouts/default.html` — the only layout. Wraps `head.html` + `header.html` (nav) + `{{ content }}` + `footer.html` + `main.js`.
- `_includes/icon.html` — inline SVG icon partial, called as `{% include icon.html name="github" %}`; add new icons here rather than hand-rolling SVGs inline elsewhere. (Real *brand/tool* logos on skill chips are the one exception — those load from `cdn.simpleicons.org` by slug, not from this partial.)
- `assets/css/tokens.css` — design tokens (colors, type scale, spacing, radii) transcribed verbatim from `DESIGN.md`.
- `assets/css/main.css` — every component (nav, hero, cards, chips, buttons, etc.), built only from those tokens. Includes an `[hidden] { display: none !important; }` override needed because several component classes set their own `display` and would otherwise beat the browser's default `[hidden]` rule at equal specificity.
- `assets/js/main.js` — vanilla JS: mobile nav toggle, `IntersectionObserver`-based scroll-spy, and a generic `[data-see-more]` card-grid expand/collapse handler (reused by Experience/Academics/Achievements/Projects). No animation/motion framework.
- `404.html` — uses the same `default` layout.

There is no blog (`_posts`, `_projects` collection, tags, comments, and search were removed as unused theme leftovers) and no other page — this is a one-page site by design, not an oversight.

## Design and visual changes

`DESIGN.md` is the binding style spec for this site — it overrides generic design instinct. When touching anything visual:

- **Re-read `DESIGN.md` before assuming anything about the current look.** It has already changed once (from a warm-black/gold system to the current deep-space/cobalt one) and is user-owned — never carry over colors, type, or component shapes from memory of a previous version.
- **Don't invent colors, fonts, spacing, or radii outside `assets/css/tokens.css`.** Every value in `main.css` should trace back to a token or a documented DESIGN.md component spec.
- **Fonts are substituted, not literal.** DESIGN.md names a paid font family ("Plain", at weights 100/300/400); this site uses DESIGN.md's own explicitly-listed free substitute, Inter, at matching weights, loaded via a Google Fonts `<link>` in `head.html`. If DESIGN.md's font names change again, re-check its own substitute recommendations before picking a replacement.
- **Card/logo/see-more rules are binding content rules, not styling.** The current DESIGN.md requires every list-like section (education, experience, projects, publications, accomplishments) to render as identical cards, never bare text; experience/education cards lead with a real org logo (`logo:` field, monogram fallback); skill chips show real tool logos where one exists. Check DESIGN.md's "Content & Card Rules" section (if present) before changing section structure, not just `assets/css/`.
- **One theme, dark only.** DESIGN.md defines only the dark palette — there is no light mode toggle. Don't add one without a reason to update DESIGN.md itself.
- **Preserve content when restyling.** Every experience/education/project/publication/achievement entry and every social/contact link must stay represented; a visual change re-skins, it doesn't drop content.
- **Verify against DESIGN.md's current Do's and Don'ts** before calling a visual change done, then confirm `bundle exec jekyll build` still succeeds.
