# Agent instructions

This repository is a **single-page portfolio** built with **Svelte 4**, **Vite 5**, and **Tailwind CSS 3**. Use this file for orientation; deeper architecture and operations live under [`docs/agents.md`](docs/agents.md).

## Commands

| Command | Purpose |
|--------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server (default: port 5173) |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run check` | `svelte-check` (TypeScript/Svelte diagnostics) |

## Project layout (conventions)

- **Entry:** Vite loads [`index.html`](index.html), which runs [`src/main.js`](src/main.js) and mounts the root Svelte app ([`src/app.svelte`](src/app.svelte)) on `document.body`.
- **UI:** Section components live in [`src/lib/components/`](src/lib/components/).
- **Content data:** JSON-like modules in [`src/lib/data/`](src/lib/data/) (experience, education, projects, skills, social links). Prefer editing data files over hard-coding copy in components when adding entries.
- **i18n:** Strings and languages are defined in [`src/lib/i18n.js`](src/lib/i18n.js). The active locale is a Svelte store in [`src/lib/store.js`](src/lib/store.js).
- **Styles:** Global styles in [`src/styles.css`](src/styles.css); Tailwind via [`tailwind.config.js`](tailwind.config.js) and PostCSS.

There is also [`src/routes/+page.svelte`](src/routes/+page.svelte) and [`src/app.html`](src/app.html); they are **not** the Vite app entry. The live UI is driven by `app.svelte` (see [`docs/agents.md`](docs/agents.md)).

## Deployment

- **Static hosting:** Run `npm run build` and deploy the **`dist/`** directory.
- **Docker:** [`Dockerfile`](Dockerfile) multi-stage build → `serve` on port **3000**. See [`docs/agents.md`](docs/agents.md) for health check and compose notes.

## What to avoid without explicit direction

- Replacing the **Vite + client-only Svelte** setup with SvelteKit or another framework without agreement.
- Large **visual or UX redesigns** (navigation, tab model, theme behavior) without confirmation.
- **Removing or renaming** locales (`en`, `de`, `cs`) or changing i18n key shapes without updating every consumer.
- Committing **secrets** (API keys, real Formspree endpoints beyond placeholders). The contact form expects a Formspree form ID in code or a documented env strategy (see [`docs/agents.md`](docs/agents.md)).

For tab vs. section behavior, Formspree setup, Docker health checks, and SvelteKit vs. Vite context, read **[`docs/agents.md`](docs/agents.md)**.
