/**
 * Portfolio projects shown on the site. Each entry includes a `source` for grouping.
 * @typedef {'cfdSupport' | 'github' | 'academic' | 'ententee'} ProjectSource
 * @typedef {{ href: string, labelKey: string }} ProjectLink
 * @typedef {{
 *   id: string,
 *   source: ProjectSource,
 *   title: string,
 *   description: string,
 *   technologies: string[],
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
    technologies: ['C++23', 'CalculiX', 'ParaView', 'VTK', 'Qt'],
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
    technologies: ['C++', 'OpenFOAM', 'ParaView', 'DSP'],
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
    technologies: ['C++', 'SQLite', 'IPC', 'ParaView'],
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
    technologies: ['C++', 'NetGen', 'Gmsh', 'ParaView'],
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
    technologies: ['C++', 'OpenFOAM', 'Python', 'ParaView'],
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
    technologies: ['GitLab CI', 'CMake', 'CTest', 'Qt'],
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
    technologies: ['C++', 'ParaView', 'LLM', 'RAG'],
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
    technologies: ['Python'],
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
    technologies: ['Svelte 4', 'Vite', 'Tailwind CSS'],
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
    technologies: [],
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
    technologies: ['Research', 'Molecular modeling'],
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
    technologies: []
  },
  {
    id: 'ententee-hub',
    source: 'ententee',
    title: 'Ententee Hub',
    description:
      'Internal hub application for ententee workflows; repository is private.',
    technologies: [],
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
