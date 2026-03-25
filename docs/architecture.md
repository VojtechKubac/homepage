# Architecture

## Entry and build

1. **Vite** uses project-root [`index.html`](../index.html) as the HTML entry.
2. [`src/main.js`](../src/main.js) imports [`src/app.svelte`](../src/app.svelte) and mounts with `target: document.body`.
3. The `<div id="app">` in `index.html` is **not** the mount target today; changing that requires an intentional `main.js` change.

`npm run build` produces a **static** site in **`dist/`**.

## Tab model

[`src/app.svelte`](../src/app.svelte) shows **one main tab** at a time (`about`, `experience`, `education`, `skills`, `projects`, `contact`) via `activeTab` and `{#if}` branches. The **hero** stays above the tab bar.

**Persistence:** `localStorage` keys `activeTab`, `language`, `theme`.

## Not SvelteKit

This repo is a **Vite Svelte SPA** only: there is **no** `src/routes/`, no `@sveltejs/kit`, and no SvelteKit app template. Routing is in-app state (`activeTab` in [`src/app.svelte`](../src/app.svelte)), not filesystem routes. Adopting SvelteKit would be a deliberate migration.

## Config reference

| Area | Files |
|------|--------|
| Vite, `$lib` | [`vite.config.js`](../vite.config.js) |
| Svelte compiler | [`svelte.config.js`](../svelte.config.js) |
| Tailwind / PostCSS | [`tailwind.config.js`](../tailwind.config.js), [`postcss.config.js`](../postcss.config.js) |
