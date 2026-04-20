# Internationalization

UI copy lives in the `translations` object in [`src/lib/i18n.js`](../src/lib/i18n.js), keyed by **`en`**, **`de`**, **`cs`**.

- `getTranslation(lang, key)` walks dot paths (e.g. `contact.title`).
- Missing keys in `de` / `cs` fall back to `en`; if no English key exists, the raw key is returned.
- `t(lang)` returns `translate`, passed into section components as a prop.
- Active locale: writable `language` in [`src/lib/store.js`](../src/lib/store.js), synced with `localStorage` in [`src/app.svelte`](../src/app.svelte).
- App shell copy is localized via `app.*` (navigation brand, chrome aria labels) and `meta.*` (document title + description).
- `src/app.svelte` keeps `document.documentElement.lang` in sync with the selected locale and uses localized `<svelte:head>` metadata.
- Project card long-form copy is stored separately in locale JSON files: [`src/locales/en/projects.json`](../src/locales/en/projects.json), [`src/locales/de/projects.json`](../src/locales/de/projects.json), [`src/locales/cs/projects.json`](../src/locales/cs/projects.json).
- [`src/lib/data/projectLocales.js`](../src/lib/data/projectLocales.js) resolves project copy by `id` and applies field-level fallback to English for missing locales/fields.

## Adding a language

1. Add a top-level key in `translations` mirroring the structure of `en`.
2. Add a language control in `app.svelte` (same pattern as EN / DE / CS).
3. Keep `localStorage` / store defaults consistent.

If you rename keys or locales, update every component that uses those strings.

Project cards still use `projects.sources.{cfdSupport|github|academic|ententee}` for group titles and `projects.links.*` for primary buttons (see [`docs/projects.md`](projects.md)).
