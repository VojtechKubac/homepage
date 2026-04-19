# Contact form

[`src/lib/components/ContactSection.svelte`](../src/lib/components/ContactSection.svelte) submits the form with `fetch` to:

`https://formspree.io/f/${VITE_FORMSPREE_ID}`

The Formspree form id is read from the `VITE_FORMSPREE_ID` build-time env variable (Vite exposes any `VITE_*` variable to client code via `import.meta.env`). Set it in a local `.env` file — see [`.env.example`](../.env.example) for the expected name.

If the variable is missing the submit handler short-circuits to the error state instead of POSTing to a 404 URL.

There is **no** server in this repo; delivery depends on Formspree (or another endpoint) accepting JSON `POST`. The `.env` file is gitignored — do not commit production secrets.
