# Agent instructions

**Keep instruction docs current:** When you change the stack, entrypoints, routing/UI model, i18n, contact integration, or deployment, update the relevant file under [`docs/`](docs/) and adjust this summary if needed.

Single-page **Svelte 4** + **Vite 5** + **Tailwind CSS 3** portfolio. Details are split by topic:

| Topic | Doc |
|--------|-----|
| Entry, build, tabs, Vite vs SvelteKit leftovers | [`docs/architecture.md`](docs/architecture.md) |
| Locales and strings | [`docs/internationalization.md`](docs/internationalization.md) |
| Contact form / Formspree | [`docs/contact-form.md`](docs/contact-form.md) |
| Docker and compose | [`docs/docker.md`](docs/docker.md) |

## Commands

`npm install` · `npm run dev` (5173) · `npm run build` → `dist/` · `npm run preview` · `npm run check`

## Conventions (short)

Components: [`src/lib/components/`](src/lib/components/). Content data: [`src/lib/data/`](src/lib/data/). Global styles: [`src/styles.css`](src/styles.css). Live app: [`src/app.svelte`](src/app.svelte) (not [`src/routes/+page.svelte`](src/routes/+page.svelte)).

## Avoid without explicit direction

Framework migration (e.g. to SvelteKit), large UX/navigation redesigns, breaking i18n keys or removing locales, committing secrets or real third-party endpoint IDs.
