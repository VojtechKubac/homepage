# Personal Homepage

Svelte 4 + Vite 5 + Tailwind CSS 3 portfolio. Three languages (EN / DE / CS), dark mode, Docker support.

## Quick start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # output → dist/
npm run preview
npm test
```

Docker: `docker-compose up --build` → `http://localhost:3000`

## Project layout

```
src/
  app.svelte              # root UI (tabs, hero, sections)
  main.js                 # Vite entry
  styles.css              # global styles
  lib/
    components/           # section components
    data/                 # content loaders (experience, projects, skills, …)
  locales/{en,de,cs}/     # translated content JSON
public/
  resume.pdf              # served for the CV download link
cv/
  main.tex                # LaTeX source → see docs/cv.md
docs/                     # per-topic documentation
```

## Customization

- **Content / copy** — edit files in `src/lib/data/` and `src/locales/`
- **Skills, social links** — `src/lib/data/skills.js`, `src/lib/data/social.js`
- **Contact form** — Formspree; set `FORMSPREE_ID` in `src/lib/components/ContactSection.svelte`
- **CV / resume** — see [`docs/cv.md`](docs/cv.md)
- **Colors / theme** — emerald + warm stone palette in `tailwind.config.js` and `src/styles.css`

## Docs

| Topic                     | File                                                           |
| ------------------------- | -------------------------------------------------------------- |
| Architecture, tabs, stack | [`docs/architecture.md`](docs/architecture.md)                 |
| Internationalization      | [`docs/internationalization.md`](docs/internationalization.md) |
| Contact form              | [`docs/contact-form.md`](docs/contact-form.md)                 |
| CV / resume PDF           | [`docs/cv.md`](docs/cv.md)                                     |
| Docker                    | [`docs/docker.md`](docs/docker.md)                             |
| Linear (issue tracking)   | [`docs/linear.md`](docs/linear.md)                             |
| Projects tab              | [`docs/projects.md`](docs/projects.md)                         |

## License

MIT
