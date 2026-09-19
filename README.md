# moyankgiri.github.io

Personal portfolio site for Moyank Giri, built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages. The whole site is one scrolling page, styled per `DESIGN.md`.

## Updating your info

**All content lives in `_data/*.yml`.** Edit the relevant file, commit, and push — GitHub Pages rebuilds the site automatically. You never need to touch the HTML/Liquid templates to add, remove, or change content; every list is looped over, so adding a YAML entry adds a card/row, and deleting one removes it.

| File | Controls |
|---|---|
| `_data/site.yml` | Name, tagline, contact info, social links, résumé PDF path, hero subtitle, About paragraph, nav links (each `{label, href}`; a nav link to `#journey` can also carry `tab:` to switch to that tab on click — see Education/Achievements below) |
| `_data/stats.yml` | The 4-up quick-facts row below the hero — each entry is `{icon, number, label}`; `icon` must be a name defined in `_includes/icon.html` |
| `_data/companies.yml` | The grayscale auto-scrolling logo strip in the hero's left column — a list of `{name, logo}` |
| `_data/skills.yml` | Skill groups — category + list of `{name, icon, months}`. `icon` is an optional [Simple Icons](https://simpleicons.org) slug (e.g. `python`, `docker`); leave it `""` for anything without a real logo. `months` is total hands-on experience in months — the top skills per category render as a horizontal bar chart sized by this number; leave `months: 0` for anything you don't have a real figure for and it renders as a plain chip instead |
| `_data/experience.yml` | Work experience (company, role, duration, location, mode, `logo` path under `assets/img/`, bullets) — leave `logo: ""` to fall back to an initials monogram. Renders in the Experience tab of the Journey timeline. |
| `_data/education.yml` | Degrees/schools (institution, degree, duration, grade, `logo`, highlights, courses). Renders in the Education tab. |
| `_data/achievements.yml` | Scholarships, extracurriculars — a list of `{title, description}` objects. Renders in the Achievements tab. |
| `_data/timeline.yml` | The compact career Gantt chart above the Journey tabs — `span_start`/`span_end` (`YYYY-MM` or `"present"`) and `lanes[]` (Academics/Experience), each with `segments[]` of `{label, start, end}` |
| `_data/publications.yml` | Publications (title, venue, date, summary, GitHub link) |
| `_data/projects.yml` | Projects (title, dates, org, `category`, summary, skills, GitHub link) — `category` and `skills` populate the project gallery's filter sidebar |

Experience, Education, and Achievements share one **tabbed timeline** ("Journey" section) instead of three separate sections — switching tabs swaps the entries shown, and the nav's Experience/Education/Achievements links each scroll there and select the right tab. Above the tabs, a compact 2-lane **Gantt chart** gives a bird's-eye view of Academics vs. Experience over time. Projects render as a **filterable gallery**: a search box, a sort toggle, a grid/list view toggle, and a sidebar with Category and Tech Stack filters (built automatically from your data, no extra config needed). Any tab or grid with more entries than the default visible count shows a "See more" link/toggle for the rest.

To update your résumé PDF, drop the new file in `assets/pdfs/` and update `resume_pdf` in `_data/site.yml`.

## Local development

```bash
bundle install                      # install gems (Jekyll, jekyll-sitemap)
bundle exec jekyll serve            # dev server with live reload at http://localhost:4000
bundle exec jekyll build            # build the static site into _site/
```

No Node.js, npm, or build step is involved — GitHub Pages builds this Jekyll site natively on every push to `master`.

## Structure

- `index.html` — the entire page, assembled from `_includes/sections/*.html` (hero, stats, about, skills, journey, projects, publications, contact), each looping its matching `_data/*.yml` file.
- `_includes/head.html`, `header.html`, `footer.html` — page chrome (nav, meta tags, footer).
- `_layouts/default.html` — the single page layout.
- `assets/css/tokens.css` — design tokens (colors, type scale, spacing, radii, shadows) transcribed from `DESIGN.md`.
- `assets/css/main.css` — component and layout styles built on those tokens.
- `assets/js/main.js` — mobile nav toggle, scroll-spy, tab switching, the "see more" toggles, the project gallery controller, and the Gantt chart layout (vanilla JS, no framework).
- `DESIGN.md` — the style reference this site is built to. Any visual change should follow it.
