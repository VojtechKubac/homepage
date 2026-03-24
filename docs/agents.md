# Agent guide — architecture and operations

Companion to the root [AGENTS.md](../AGENTS.md). This document goes into structure, i18n, contact form integration, Docker, and how this repo relates to SvelteKit-style paths.

## Application entry and build

1. **Vite** uses the project-root [`index.html`](../index.html) as the HTML entry.
2. [`src/main.js`](../src/main.js) imports [`src/app.svelte`](../src/app.svelte) and instantiates it with `target: document.body`.
3. The `<div id="app">` in `index.html` is **not** the mount target in current code; the root component attaches to `document.body`. Changing the mount target would be a deliberate `main.js` change.

The production bundle is a **static site**: `npm run build` outputs to **`dist/`**, suitable for any static host or the Docker image described below.

## Tab vs. section model

[`src/app.svelte`](../src/app.svelte) implements a **single visible “tab”** at a time:

- A `tabs` array defines ids: `about`, `experience`, `education`, `skills`, `projects`, `contact`.
- `activeTab` controls which `{#if}` branch renders the corresponding section component.
- **Persistence:** `activeTab`, `language`, and theme are stored in **`localStorage`** (`activeTab`, `language`, `theme`).

The **hero** block is always shown above the tab bar; only the main content area switches by tab.

[`src/routes/+page.svelte`](../src/routes/+page.svelte) renders **all sections in one long page** (no tabs). That file is **not** wired into the Vite entry chain for this project; treat it as legacy or alternate layout unless the project explicitly migrates to SvelteKit.

## Internationalization

- All user-facing strings for the main app flow live in the `translations` object in [`src/lib/i18n.js`](../src/lib/i18n.js), keyed by language code: **`en`**, **`de`**, **`cs`**.
- `getTranslation(lang, key)` resolves dot paths (e.g. `contact.title`).
- `t(lang)` returns a function `translate` passed into section components as a prop.
- To **add a language:** add a top-level key to `translations` mirroring the structure of `en`, extend the language buttons in `app.svelte`, and ensure `localStorage` / store defaults remain consistent.

## Contact form and Formspree

[`src/lib/components/ContactSection.svelte`](../src/lib/components/ContactSection.svelte) POSTs JSON to:

`https://formspree.io/f/YOUR_FORM_ID`

**Expectations:**

1. Create a form at [formspree.io](https://formspree.io) and replace `YOUR_FORM_ID` with the real id (or introduce a build-time env variable if the project standardizes on that — today the id is inline in source).
2. There is **no** server-side handler in this repo; submission depends on Formspree (or a swapped endpoint) accepting JSON `POST`.

## Docker

**Image ([`Dockerfile`](../Dockerfile)):**

- **Build stage:** `npm ci`, `npm run build`, artifacts in `/app/dist`.
- **Runtime:** `node:20-alpine`, global `serve`, `CMD` serves `dist` on **port 3000**.
- **HEALTHCHECK:** Uses **Node’s built-in `http` module** to `GET http://localhost:3000` and expects status **200**.

**Compose ([`docker-compose.yml`](../docker-compose.yml)):**

- Overrides health check with **`curl -f http://localhost:3000`**.
- **Gotcha:** The production image is based on **Alpine** and may **not** include `curl`. If the compose health check fails, either install `curl` in the image, switch the compose test to match the Dockerfile’s Node-based check, or use a image layer that provides `curl`.

## SvelteKit vs. Vite (current choice)

This project is a **Vite-powered Svelte SPA**, not a full SvelteKit application:

- No `@sveltejs/kit` in [`package.json`](../package.json); routing is in-app state (`activeTab`), not the filesystem.
- `src/routes/` and `src/app.html` look like **SvelteKit leftovers** or a future migration sketch; they are not part of the current Vite entry.

Migrating to SvelteKit would mean new dependencies, adapter configuration, and reconciling the tabbed UI with Kit’s routing — do that only as an explicit product decision.

## Related files (quick reference)

| Area | Files |
|------|--------|
| Vite / aliases | [`vite.config.js`](../vite.config.js) (`$lib` → `src/lib`) |
| Svelte compiler | [`svelte.config.js`](../svelte.config.js) |
| Tailwind | [`tailwind.config.js`](../tailwind.config.js), [`postcss.config.js`](../postcss.config.js) |
| Data | [`src/lib/data/*.js`](../src/lib/data/) |
