# Projects tab (portfolio content)

## Where it lives

- **Data:** [`src/lib/data/projects.js`](../src/lib/data/projects.js) — see **Project object shape** below.
- **UI:** [`src/lib/components/ProjectsSection.svelte`](../src/lib/components/ProjectsSection.svelte) — groups by `source`, cards with optional image or gradient monogram.
- **Copy:** [`src/lib/i18n.js`](../src/lib/i18n.js) — `projects.title`, `projects.demo`, `projects.sources.{cfdSupport|github|academic|ententee}`, `projects.links.{repository|cfdSupportSite|researchGroup|clientProduct}`.

## Project object shape (`projects.js`)

| Field | Required | Type | Notes |
|--------|----------|------|--------|
| `id` | yes | `string` | Stable key for `{#each ... (id)}` and gradients. |
| `source` | yes | `ProjectSource` | One of `cfdSupport`, `github`, `academic`, `ententee` (must appear in `PROJECT_SOURCE_ORDER`). |
| `title` | yes | `string` | Card heading. |
| `description` | yes | `string` | Card body (keep NDA-safe). |
| `technologies` | yes | `string[]` | May be empty; tags hidden when empty. |
| `link` | no | `{ href: string, labelKey: string }` | `labelKey` is a dotted i18n path under `projects.links.*`. Omit when there is no appropriate public URL. |
| `demo` | no | `string` (URL) | Optional second button; label is always `projects.demo`. |
| `image` | no | `string` (URL) | Optional hero image; otherwise gradient + monogram. |

Example:

```js
{
  id: 'example',
  source: 'github',
  title: 'Example',
  description: 'Short public summary.',
  technologies: ['TypeScript'],
  link: { href: 'https://github.com/...', labelKey: 'projects.links.repository' }
}
```

## Sources (`source` field)

| Value | Meaning |
|--------|---------|
| `cfdSupport` | Work on TCAE with CFD SuPPORT; public pointer is the company/product site, not proprietary code. |
| `github` | Public (or listed) GitHub repositories and this site itself. |
| `academic` | University / research (e.g. doctoral work, group homepages). |
| `ententee` | Client delivery; repositories are often private — add a `link` only when a public URL is accurate (e.g. healthcare product context), otherwise omit `link`. |

Order of groups is fixed in `PROJECT_SOURCE_ORDER` in `projects.js`.

## Inclusion rules (KUA-32)

1. **NDA / confidentiality:** Do not name unreleased client specifics, internal URLs, or proprietary filenames in **on-site card copy**. Prefer role-level descriptions and public links only.
2. **GitHub:** Only add repos you are willing to show; use the real `https://github.com/VojtechKubac/...` URL when the repo is public.
3. **CFD SuPPORT:** Public cards stay high-level. Longer drafts for wording live under [`CFDSUPPORT-projects/`](../CFDSUPPORT-projects/) (author reference); treat that folder as **non-marketing** technical notes — scrub or avoid publishing internal codenames on the live cards.
4. **ententee:** Use a public client/product link only when it matches the work (e.g. healthcare software context). Do not imply endorsement.
5. **Images:** Optional `image` URL per project; if omitted, the UI uses a deterministic gradient + monogram (no external placeholder services).

## Long-form notes

Refresh terse card text from the markdown drafts in [`CFDSUPPORT-projects/`](../CFDSUPPORT-projects/) when tightening public wording.
