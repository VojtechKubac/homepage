# Contact form

[`src/lib/components/ContactSection.svelte`](../src/lib/components/ContactSection.svelte) submits the form with `fetch` to:

`https://formspree.io/f/YOUR_FORM_ID`

Replace `YOUR_FORM_ID` with a real Formspree form id from [formspree.io](https://formspree.io), or introduce a build-time env variable if the project standardizes on that (today the id is inline).

There is **no** server in this repo; delivery depends on Formspree (or another endpoint) accepting JSON `POST`. Do not commit production secrets in plain text without team agreement.
