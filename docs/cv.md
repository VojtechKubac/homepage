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
