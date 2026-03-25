# Projects tab (portfolio content)

## Where it lives

- **Data:** [`src/lib/data/projects.js`](../src/lib/data/projects.js) — list of projects, each with `source`, `title`, `description`, `technologies`, optional `link` / `demo` / `image`.
- **UI:** [`src/lib/components/ProjectsSection.svelte`](../src/lib/components/ProjectsSection.svelte) — groups by `source`, cards with optional image or gradient monogram.
- **Copy for section headings and link buttons:** [`src/lib/i18n.js`](../src/lib/i18n.js) under `projects.sources.*` and `projects.links.*`.

## Sources (`source` field)

| Value | Meaning |
|--------|---------|
| `cfdSupport` | Work on TCAE with CFD SuPPORT; public pointer is the company/product site, not proprietary code. |
| `github` | Public (or listed) GitHub repositories and this site itself. |
| `academic` | University / research (e.g. doctoral work, group homepages). |
| `ententee` | Client delivery; repositories are private — link text points to public **product context** (DrChrono / EverHealth), not the closed repo. |

Order of groups is fixed in `PROJECT_SOURCE_ORDER` in `projects.js`.

## Inclusion rules (KUA-32)

1. **NDA / confidentiality:** Do not name unreleased client specifics, internal URLs, or proprietary filenames. Prefer role-level descriptions and public links only.
2. **GitHub:** Only add repos you are willing to show; use the real `https://github.com/VojtechKubac/...` URL when the repo is public.
3. **CFD SuPPORT:** Module blurbs are high-level and aligned with internal write-ups under [`CFDSUPPORT-projects/`](../CFDSUPPORT-projects/); the site does not duplicate those docs verbatim.
4. **ententee:** Keep DrChrono as contextual link for healthcare-software background; do not imply endorsement or disclose non-public scope.
5. **Images:** Optional `image` URL per project; if omitted, the UI uses a deterministic gradient + monogram (no external placeholder services).

## Long-form notes

Detailed bullets for CFD SuPPORT modules live in markdown files in [`CFDSUPPORT-projects/`](../CFDSUPPORT-projects/). Refresh card copy from there when you tighten public wording.
