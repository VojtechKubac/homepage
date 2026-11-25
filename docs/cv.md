# CV / Resume PDF

The resume is a LaTeX document (`cv/main.tex`) compiled to PDF and served as a static file from `public/resume.pdf`.

## Dependencies

Requires a TeX distribution with:

- `moderncv` document class
- `sourcecodepro` package (Source Code Pro font)
- `fontawesome5`, `eso-pic`, `enumitem`, `xcolor`, `geometry`

On Debian/Ubuntu:

```bash
sudo apt install texlive-latex-extra texlive-fonts-extra
```

## Build

```bash
cd cv
pdflatex main.tex   # run twice if references change
cp main.pdf ../public/resume.pdf
```

Or with `latexmk`:

```bash
latexmk -pdf main.tex
cp main.pdf ../public/resume.pdf
```

## Structure

`main.tex` uses `moderncv` with the `casual` style. The visual theme is overridden to match the homepage:

- Font: Source Code Pro (monospace, echoes JetBrains Mono on the site)
- Accent color: emerald-700 (`#047857`)
- Body text: stone-600 (`#57534E`)
- Left sidebar: thin emerald stripe via `eso-pic`

Edit content directly in `main.tex` — `\cventry` for experience/education, `\cvitem` for skills.

**What to write and why** (screening model, keyword rules, tailoring order): see `cv/GUIDELINES.md` (gitignored, local only; may be absent in a fresh clone).

Content order: **Profile** (a short `\cvitem{}{…}` summary) → **Experience** → **Education** → **Skills**. Conventions:

- **One page.** After edits, run `pdflatex` twice (the second pass fixes the page-count footer) and check `pdfinfo main.pdf` reports `Pages: 1`. When something spills over, shorten text rather than shrinking fonts or margins.
- **Bold only for bullet titles**, written as plain descriptions (`\textbf{Finite element (FEA) module ·}`), not internal module codes. Never bold phrases inside the text.
- **Skills are grouped by area** (Languages, Build & CI, GUI, Web & data, Robotics, Simulation, AI tools; general-purpose groups first, simulation near the end), loosely following the skill groups on the site's About tab ([`src/lib/data/skills.js`](../src/lib/data/skills.js)).
- **Profile** is the part to rewrite first when tailoring a copy for an application.

## Tailored applications

Per-job variants live in `cv/applications/<company>/` (gitignored, local only). Each folder holds its own `main.tex` (a copy of `cv/main.tex` reweighted for the role) plus `photo.jpg`; build it with `pdflatex main.tex` inside that folder.

## Focused CV variants

Besides the main CV, focused variants can be published as unlisted static files under `public/cv/`
(served at `/cv/<name>.pdf`, not linked from the site). Their LaTeX sources are kept locally and are not
committed; only the compiled PDF is.

| File                         | Focus                                                           |
| ---------------------------- | --------------------------------------------------------------- |
| `public/cv/fullstack-ai.pdf` | Full-stack (TypeScript, React, GraphQL) with data & AI emphasis; source `cv/fullstack-ai/` |

Use neutral, role-type file names (not company names) so one link can be reused across applications.
