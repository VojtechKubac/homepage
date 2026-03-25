# Internationalization

Copy lives in the `translations` object in [`src/lib/i18n.js`](../src/lib/i18n.js), keyed by **`en`**, **`de`**, **`cs`**.

- `getTranslation(lang, key)` walks dot paths (e.g. `contact.title`).
- `t(lang)` returns `translate`, passed into section components as a prop.
- Active locale: writable `language` in [`src/lib/store.js`](../src/lib/store.js), synced with `localStorage` in [`src/app.svelte`](../src/app.svelte).

## Adding a language

1. Add a top-level key in `translations` mirroring the structure of `en`.
2. Add a language control in `app.svelte` (same pattern as EN / DE / CS).
3. Keep `localStorage` / store defaults consistent.

If you rename keys or locales, update every component that uses those strings.

Project cards use `projects.sources.{cfdSupport|github|academic|ententee}` for group titles and `projects.links.*` for primary buttons (see [`docs/projects.md`](projects.md)).
