# moyankgiri.github.io

Personal portfolio site for Moyank Giri, built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages. The whole site is one scrolling page, styled per `DESIGN.md`.

## Updating your info

**All content lives in `_data/*.yml`.** Edit the relevant file, commit, and push — GitHub Pages rebuilds the site automatically. You never need to touch the HTML/Liquid templates to add, remove, or change content; every list is looped over, so adding a YAML entry adds a card/row, and deleting one removes it.

| File | Controls |
|---|---|
| `_data/site.yml` | Name, tagline, contact info, social links, résumé PDF path, hero subtitle, About paragraph, nav links |
| `_data/skills.yml` | Skill tag groups (category + list of items) |
| `_data/experience.yml` | Work experience timeline (company, role, duration, location, bullets) |
| `_data/education.yml` | Degrees/schools (institution, degree, duration, grade, highlights, courses) |
| `_data/achievements.yml` | Scholarships, extracurriculars — a flat list of strings |
| `_data/publications.yml` | Publications (title, venue, date, summary, GitHub link) |
| `_data/projects.yml` | Projects (title, dates, org, summary, skills, GitHub link, `featured: true/false`) |

`featured: true` projects render as full cards in the main grid; everything else renders in the compact "More projects" list below it.

To update your résumé PDF, drop the new file in `assets/pdfs/` and update `resume_pdf` in `_data/site.yml`.

## Local development

```bash
bundle install                      # install gems (Jekyll, jekyll-sitemap)
bundle exec jekyll serve            # dev server with live reload at http://localhost:4000
bundle exec jekyll build            # build the static site into _site/
```

No Node.js, npm, or build step is involved — GitHub Pages builds this Jekyll site natively on every push to `master`.

## Structure

- `index.html` — the entire page, assembled from `_includes/sections/*.html`, each looping its matching `_data/*.yml` file.
- `_includes/head.html`, `header.html`, `footer.html` — page chrome (nav, meta tags, footer).
- `_layouts/default.html` — the single page layout.
- `assets/css/tokens.css` — design tokens (colors, type scale, spacing, radii, shadows) transcribed from `DESIGN.md`.
- `assets/css/main.css` — component and layout styles built on those tokens.
- `assets/js/main.js` — mobile nav toggle and scroll-spy (vanilla JS, no framework).
- `DESIGN.md` — the style reference this site is built to. Any visual change should follow it.
