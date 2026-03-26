/**
 * Portfolio projects shown on the site. Each entry includes a `source` for grouping.
 * @typedef {'cfdSupport' | 'github' | 'academic' | 'ententee'} ProjectSource
 * @typedef {{ href: string, labelKey: string }} ProjectLink
 * @typedef {{ start: string, end: string }} ProjectPeriod
 * @typedef {{ size: number, note?: string }} ProjectTeam
 * @typedef {{
 *   id: string,
 *   source: ProjectSource,
 *   title: string,
 *   description: string,
 *   longDescription?: string,
 *   technologies: string[],
 *   period?: ProjectPeriod,
 *   periodNote?: string,
 *   achievements?: string[],
 *   team?: ProjectTeam,
 *   link?: ProjectLink,
 *   demo?: string,
 *   image?: string
 * }} Project
 */

/** Display order for source group headings in the Projects section */
export const PROJECT_SOURCE_ORDER = /** @type {const} */ ([
  'cfdSupport',
  'github',
  'academic',
  'ententee'
]);

/** @type {Project[]} */
export const projects = [
  // --- CFD SUPPORT / TCAE (commercial CAE desktop platform; public product link only)
  {
    id: 'tfea',
    source: 'cfdSupport',
    title: 'TFEA — Finite element analysis (TCAE)',
    description:
      'Structural and thermal FEA inside TCAE: CalculiX integration, CFD-to-FEA loads (FSI mapping), modal analysis, and ParaView-based workflow UI.',
    longDescription:
      'I’m building and maintaining the FEA module inside TCAE, focused on a pragmatic workflow: import/prep, meshing, solver setup, post-processing, and reporting. The work is actively evolving alongside other platform modules (CFD, meshing, optimization), so the design emphasizes interoperability and robust failure modes over “perfect” one-off scripts.',
    technologies: ['C++23', 'CalculiX', 'ParaView', 'VTK', 'Qt'],
    period: { start: '2023', end: 'present' },
    periodNote:
      'Developed in parallel with other TCAE modules (meshing/CFD/optimization); features ship incrementally.',
    achievements: [
      'Integrated CalculiX runs into a ParaView-centric desktop workflow (setup → solve → post-process).',
      'Implemented CFD-to-FEA load mapping to support FSI-style pipelines without bespoke user scripting.',
      'Added modal analysis and tooling around model preparation and inspection.'
    ],
    team: { size: 10, note: 'Cross-functional CAE team; tight coupling with platform/visualization work.' },
    link: {
      href: 'https://www.cfdsupport.com/',
      labelKey: 'projects.links.cfdSupportSite'
    }
  },
  {
    id: 'tcaa',
    source: 'cfdSupport',
    title: 'TCAA — Computational aeroacoustics (TCAE)',
    description:
      'Far-field noise from CFD surfaces via FW–H / Farassat 1A, signal processing (SPL, octaves), directivity, and optional WAV export.',
    longDescription:
      'This module turns CFD surface data into actionable aeroacoustic outputs: far-field pressure, SPL spectra, octave bands, and directivity. It’s built to be used by engineers who already live in the CFD workflow — the goal is consistent results with minimal “academic ceremony”. Actively iterated as real-world cases reveal edge conditions.',
    technologies: ['C++', 'OpenFOAM', 'ParaView', 'DSP'],
    period: { start: '2024', end: 'present' },
    periodNote:
      'Developed alongside CFD and post-processing tooling; validation happens case-by-case as customer examples come in.',
    achievements: [
      'Implemented FW–H / Farassat 1A pipelines for far-field acoustics from CFD surfaces.',
      'Added signal processing outputs (SPL, octave bands) and directivity visualizations.',
      'Enabled optional WAV export for quick qualitative assessment and stakeholder communication.'
    ],
    team: { size: 10, note: 'Close collaboration with CFD and visualization contributors.' },
    link: {
      href: 'https://www.cfdsupport.com/',
      labelKey: 'projects.links.cfdSupportSite'
    }
  },
  {
    id: 'tbase',
    source: 'cfdSupport',
    title: 'TBASE — Simulation database (TCAE)',
    description:
      'SQLite-backed parametric design database: simulation CRUD, geometry archive, IPC to ParaView, statistics over design spaces, surrogate modeling groundwork.',
    longDescription:
      'TBASE is the “memory” of the platform: it tracks simulations, parameters, geometry artifacts, and result metadata so users can iterate reliably. The core design goal is reproducibility across runs while keeping the UI responsive. It’s an active area because the database model grows with new solvers and workflows.',
    technologies: ['C++', 'SQLite', 'IPC', 'ParaView'],
    period: { start: '2023', end: 'present' },
    periodNote:
      'Evolves as new modules (FEA/acoustics/optimization) require richer metadata and artifact handling.',
    achievements: [
      'Designed a SQLite-backed store for simulations, parameter sets, and geometry/result artifacts.',
      'Built IPC integration to drive ParaView sessions directly from stored simulations.',
      'Laid groundwork for statistics and surrogate modeling over parametric design spaces.'
    ],
    team: { size: 10 },
    link: {
      href: 'https://www.cfdsupport.com/',
      labelKey: 'projects.links.cfdSupportSite'
    }
  },
  {
    id: 'tmesh-fea',
    source: 'cfdSupport',
    title: 'TMESH — FEA meshing (TCAE)',
    description:
      'Volume meshing for structural/thermal analysis from STL/STEP via NetGen and Gmsh, with quality controls and multi-component assemblies.',
    longDescription:
      'TMESH focuses on producing robust FEA-ready volume meshes from practical CAD inputs. The work is a mix of geometry handling, meshing backends, and UX: users need safe defaults, predictable outcomes, and clear diagnostics when geometry is messy. It’s under active development as new geometry types and assemblies appear.',
    technologies: ['C++', 'NetGen', 'Gmsh', 'ParaView'],
    period: { start: '2023', end: 'present' },
    periodNote: 'Runs in parallel with solver integration (FEA) and platform-level geometry workflows.',
    achievements: [
      'Integrated NetGen and Gmsh meshing backends for STL/STEP sources.',
      'Added mesh quality controls and diagnostics for common failure modes.',
      'Supported multi-component assemblies with practical UX for selection and inspection.'
    ],
    team: { size: 10 },
    link: {
      href: 'https://www.cfdsupport.com/',
      labelKey: 'projects.links.cfdSupportSite'
    }
  },
  {
    id: 'tmesh-tcfd-topt',
    source: 'cfdSupport',
    title: 'TMESH, TCFD, TOPT — Ongoing work (TCAE)',
    description:
      'Continuous development on meshing, OpenFOAM-based CFD setup/solve, and optimization (DoE, DIRECT, EGO) integrated with the wider platform.',
    longDescription:
      'Beyond the named modules above, I contribute across the platform where needed — primarily meshing, CFD orchestration around OpenFOAM, and optimization workflows. This is intentionally described as “ongoing” because the work overlaps across releases and teams; priorities shift based on customer needs and platform readiness.',
    technologies: ['C++', 'OpenFOAM', 'Python', 'ParaView'],
    period: { start: '2023', end: 'present' },
    periodNote: 'Represents continuous cross-module contributions rather than a single fixed feature set.',
    achievements: [
      'Improved CFD setup/solve ergonomics around OpenFOAM within a desktop workflow.',
      'Extended optimization workflows (DoE/DIRECT/EGO-style) integrated with platform data management.',
      'Shipped incremental usability and stability improvements across meshing and post-processing.'
    ],
    team: { size: 10, note: 'Multiple subteams; work often spans boundaries between modules.' },
    link: {
      href: 'https://www.cfdsupport.com/',
      labelKey: 'projects.links.cfdSupportSite'
    }
  },
  {
    id: 'devops-tcae',
    source: 'cfdSupport',
    title: 'DevOps — CI, packaging, testing (TCAE)',
    description:
      'GitLab CI for backend and ParaView plugins, Linux/Windows installers, sparse checkouts, and automated tests (CTest, headless Qt).',
    longDescription:
      'I maintain parts of the build/release pipeline so the desktop platform stays shippable. The focus is practical developer velocity: CI that catches regressions early, packaging that works on user machines, and tests that can run headless (including UI-facing components where feasible).',
    technologies: ['GitLab CI', 'CMake', 'CTest', 'Qt'],
    period: { start: '2023', end: 'present' },
    periodNote:
      'Continuous maintenance alongside feature development; CI/packaging evolve with ParaView/Qt and toolchain changes.',
    achievements: [
      'Built CI pipelines for backend components and ParaView plugins with a focus on fast feedback.',
      'Maintained Linux/Windows packaging workflows suitable for desktop distribution.',
      'Added automated tests (CTest + headless Qt where appropriate) to prevent regressions.'
    ],
    team: { size: 10 },
    link: {
      href: 'https://www.cfdsupport.com/',
      labelKey: 'projects.links.cfdSupportSite'
    }
  },
  {
    id: 'tbrain',
    source: 'cfdSupport',
    title: 'TBRAIN — AI-assisted simulation (TCAE)',
    description:
      'TAIGENT / TBRAIN: in-app assistant for TCAE (RAG over docs, tool calling, LLM integration). Mainly architecture and product direction on my side so far.',
    longDescription:
      'TBRAIN/TAIGENT explores an in-product assistant that helps engineers navigate documentation and workflows. My contribution so far is primarily architecture and product direction: defining safe tool boundaries, retrieval strategies over internal docs, and how to integrate assistant UX into an existing desktop app without disrupting core workflows.',
    technologies: ['C++', 'ParaView', 'LLM', 'RAG'],
    period: { start: '2025', end: 'present' },
    periodNote: 'Early-stage exploration; developed in parallel with the core platform roadmap.',
    achievements: [
      'Defined initial architecture for retrieval-augmented assistance over internal documentation.',
      'Explored tool-calling boundaries appropriate for a simulation desktop application.',
      'Shaped product direction: assistant UX that complements (not replaces) established workflows.'
    ],
    team: { size: 6, note: 'Small exploratory effort within the larger platform team.' },
    link: {
      href: 'https://www.cfdsupport.com/',
      labelKey: 'projects.links.cfdSupportSite'
    }
  },

  // --- GitHub & meta
  {
    id: 'ibkr-trading-bot',
    source: 'github',
    title: 'IBKR trading bot',
    description:
      'Automation and tooling around Interactive Brokers (algorithmic / operational workflows; details in the repository).',
    longDescription:
      'A personal automation project around Interactive Brokers to reduce manual operational work: data pulls, strategy execution scaffolding, and guardrails. It’s actively iterated when I need new capabilities, and the repository serves as the source of truth for the current scope and behavior.',
    technologies: ['Python'],
    period: { start: '2022', end: 'present' },
    periodNote: 'Maintained opportunistically; expanded when new automation needs appear.',
    achievements: [
      'Built a modular automation setup around Interactive Brokers workflows.',
      'Focused on operational safety: repeatable runs, logging, and failure visibility.',
      'Kept the scope practical and maintainable rather than “one giant bot”.'
    ],
    team: { size: 1 },
    link: {
      href: 'https://github.com/VojtechKubac/ibkr-trading-bot',
      labelKey: 'projects.links.repository'
    }
  },
  {
    id: 'homepage-site',
    source: 'github',
    title: 'This portfolio site',
    description:
      'Single-page portfolio: Svelte 4, Vite 5, Tailwind, i18n (EN / DE / CS), contact form integration.',
    longDescription:
      'This site is a small but intentional front-end project: a fast single-page portfolio with a clean content model, internationalization, and a lightweight contact flow. It’s actively refined as I iterate on copy and presentation — the goal is to keep it simple, maintainable, and pleasant to browse.',
    technologies: ['Svelte 4', 'Vite', 'Tailwind CSS'],
    period: { start: '2026', end: 'present' },
    periodNote: 'Iterated in small PRs as content and UI evolve; designed to stay easy to maintain long-term.',
    achievements: [
      'Shipped a Svelte + Vite + Tailwind single-page structure with a clear component/data split.',
      'Added i18n across EN/DE/CS without bringing in heavy frameworks.',
      'Integrated a contact form flow appropriate for a static deployment model.'
    ],
    team: { size: 1 },
    link: {
      href: 'https://github.com/VojtechKubac/homepage',
      labelKey: 'projects.links.repository'
    }
  },
  {
    id: 'master-thesis',
    source: 'github',
    title: "Master's thesis (code)",
    description:
      'Thesis-related code and artifacts published on GitHub; on-site summary can be expanded when copy is finalized.',
    longDescription:
      'A public repository containing code and artifacts created during my master’s thesis work. The on-site card stays intentionally high-level; the repository contains the authoritative context and implementation details.',
    technologies: [],
    period: { start: '2021', end: '2022' },
    periodNote: 'Completed as part of master’s thesis work; the repository is kept for reference and reproducibility.',
    achievements: [
      'Published thesis code/artifacts in a reproducible form.',
      'Documented usage sufficiently for reviewers and future reference.',
      'Kept the on-site summary focused on public material.'
    ],
    team: { size: 1 },
    link: {
      href: 'https://github.com/VojtechKubac/MasterThesis',
      labelKey: 'projects.links.repository'
    }
  },

  // --- Academic
  {
    id: 'biomembrane',
    source: 'academic',
    title: 'Biomembrane remodeling (doctoral studies)',
    description:
      'Roughly one year in the computational biophysics / membrane modeling space at MFF UK (Charles University); group work under the Allolio lab.',
    longDescription:
      'During doctoral studies I worked within a research group focused on computational biophysics and membrane modeling. The work was collaborative and exploratory by nature, spanning literature review, model setup, and iterative experimentation — with progress communicated through group discussions and internal reporting rather than “product milestones”.',
    technologies: ['Research', 'Molecular modeling'],
    period: { start: '2022', end: '2023' },
    periodNote:
      'Research work overlapped with other commitments and evolved with the group’s direction and available compute resources.',
    achievements: [
      'Contributed to group research efforts in computational membrane modeling.',
      'Built and iterated simulation/model setups with an emphasis on reproducibility.',
      'Collaborated closely with the lab through ongoing discussions and review cycles.'
    ],
    team: { size: 6, note: 'Research group context; collaboration varied per sub-topic.' },
    link: {
      href: 'https://www.karlin.mff.cuni.cz/~allolio/',
      labelKey: 'projects.links.researchGroup'
    }
  },

  // --- ententee (client: EverHealth / DrChrono ecosystem; repos private)
  {
    id: 'alf',
    source: 'ententee',
    title: 'ALF — Medical faculty application',
    description:
      'Application for a medical faculty (ententee / healthcare software context). Repository is private; no public demo link.',
    technologies: [],
    period: { start: '2020', end: '2021' },
    periodNote:
      'Developed alongside other client initiatives; scope and priorities shifted with stakeholder feedback.',
    longDescription:
      'Client delivery in a healthcare software context: a web application supporting a medical faculty workflow. The work involved typical full-stack product engineering under real constraints (privacy, stakeholder feedback, and timelines). The repository is private, so the card links only to public product/company context.',
    achievements: [
      'Delivered a production web application aligned with stakeholder-driven workflow requirements.',
      'Worked within domain constraints (privacy, operational reliability, careful rollout).',
      'Kept a professional public footprint by linking to product context rather than private code.'
    ],
    team: { size: 5, note: 'Small product team; responsibilities shifted across delivery phases.' },
    link: {
      href: 'https://www.drchrono.com/',
      labelKey: 'projects.links.clientProduct'
    }
  },
  {
    id: 'uav-thk',
    source: 'ententee',
    title: 'THK drones / UAV',
    description:
      'UAV-related software (THK drones) with ententee; repository is private. No public product page — card has no external link.',
    technologies: [],
    period: { start: '2021', end: '2022' },
    periodNote: 'Work overlapped with other client efforts; limited public references available.',
    longDescription:
      'Work related to UAV software where public disclosure is limited. The project is listed to reflect the breadth of domains I’ve worked in, but the details and repository remain private. Status and scope are best conveyed through the narrative here rather than a simplistic badge.',
    achievements: [
      'Contributed to UAV-adjacent software development within client constraints.',
      'Balanced delivery needs with careful handling of non-public details.',
      'Kept the on-site description intentionally high-level and professional.'
    ],
    team: { size: 4 }
  },
  {
    id: 'ententee-hub',
    source: 'ententee',
    title: 'Ententee Hub',
    description:
      'Internal hub application for ententee workflows; repository is private.',
    technologies: [],
    period: { start: '2021', end: '2022' },
    periodNote: 'Evolved over time as internal processes changed and new workflow needs emerged.',
    longDescription:
      'An internal hub application supporting ententee workflows. This kind of system lives in the “glue layer” between people and tools: lots of integrations, pragmatic UX, and incremental improvements. The repository is private; the public link points to product context only.',
    achievements: [
      'Built internal tooling to streamline operational workflows.',
      'Iterated rapidly based on feedback from day-to-day users.',
      'Kept external linking professional: product context only, no private code exposure.'
    ],
    team: { size: 5, note: 'Internal product with close feedback loops from users.' },
    link: {
      href: 'https://www.drchrono.com/',
      labelKey: 'projects.links.clientProduct'
    }
  }
];

/**
 * @returns {{ source: ProjectSource, items: Project[] }[]}
 */
export function getProjectsGroupedBySource() {
  /** @type {Map<ProjectSource, Project[]>} */
  const map = new Map(PROJECT_SOURCE_ORDER.map((s) => [s, []]));
  for (const p of projects) {
    const bucket = map.get(p.source);
    if (bucket === undefined) {
      throw new Error(`Unknown project source "${p.source}" (project id: ${p.id})`);
    }
    bucket.push(p);
  }
  return PROJECT_SOURCE_ORDER.filter((s) => (map.get(s)?.length ?? 0) > 0).map((source) => ({
    source,
    items: /** @type {Project[]} */ (map.get(source))
  }));
}
