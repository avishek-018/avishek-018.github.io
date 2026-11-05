# avishekdas.net

Personal academic website of Avishek Das, built with [al-folio](https://github.com/alshedivat/al-folio) (Jekyll) and hosted on GitHub Pages.

## Preview locally

The easiest route is Docker (install Docker Desktop first):

```bash
docker compose up
```

Then open <http://localhost:8080>. Edits to content files reload automatically. Restart the command after changing `_config.yml`.

Without Docker, you need Ruby 3.3 and ImageMagick:

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Where things live

| What                  | File                              |
| --------------------- | --------------------------------- |
| Bio, photo, subtitle  | `_pages/about.md`, `assets/img/prof_pic.jpg` |
| News items            | `_news/*.md` (one file per item)  |
| Publications          | `_bibliography/papers.bib`. Paste BibTeX, and add `selected = {true}` to feature a paper on the home page |
| Projects              | `_projects/*.md`                  |
| Teaching              | `_pages/teaching.md`              |
| CV PDF                | `assets/pdf/Avishek_Das_CV.pdf`   |
| Social links          | `_data/socials.yml`               |
| Site settings         | `_config.yml`                     |

## Editing in the browser (Pages CMS)

Sign in at <https://app.pagescms.org> with GitHub and open this repository. The editor's forms are defined in `.pages.yml`, and every save is a normal commit.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`. The workflow builds the site and publishes it to the `gh-pages` branch. GitHub Pages must be set to serve from that branch: **Settings → Pages → Source: Deploy from a branch → `gh-pages`**.
