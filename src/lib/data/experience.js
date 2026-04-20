/**
 * @typedef {{
 *   role: string,
 *   company: string,
 *   location?: string,
 *   period: string,
 *   description: string,
 *   highlights?: string[],
 *   technologies: string[]
 * }} Experience
 */

/** @type {Experience[]} */
export const experiences = [
  {
    role: 'Software engineer',
    company: 'Ententee',
    period: '2024 — present',
    description:
      'Full-stack product delivery across healthcare and robotics engagements, developed alongside my role at CFD Support.',
    highlights: [
      'THK UAV — greenfield drone stack: perception, mission autonomy, GPS-denied navigation.',
      'DrChrono (2024–2025) — uplift of a US medical web app: Django/GraphQL backend, full React/TypeScript frontend rewrite.',
      'ALF — application for a medical faculty managing attestations and trunk exams (Spring Boot, React/TS, PostgreSQL).',
      'Ententee Hub — internal tooling for project tracking, hiring, and ops (FastAPI, React/TS, PostgreSQL).',
    ],
    technologies: [
      'Python',
      'Java',
      'Spring Boot',
      'Django',
      'FastAPI',
      'React',
      'TypeScript',
      'PostgreSQL',
      'GraphQL',
      'ROS',
      'Gazebo',
      'C++',
    ],
  },
  {
    role: 'C++ software engineer',
    company: 'CFD Support s.r.o.',
    location: 'Prague',
    period: '2019 — present',
    description:
      'Owning multiple modules of TCAE — a cross-platform CAE desktop application built around ParaView/VTK and OpenFOAM.',
    highlights: [
      'TFEA — FEA module: CalculiX integration, CFD-to-FEA load mapping (FSI), modal analysis, ParaView-based UI.',
      'TCAA — aeroacoustics: FW–H / Farassat 1A far-field, SPL/octaves, optional WAV export.',
      'TBASE — SQLite simulation database: reproducible archive, ParaView IPC, surrogate-modelling groundwork.',
      'TMESH — FEA volume meshing from STL/STEP via NetGen and Gmsh, with assembly support.',
      'TCFD / TOPT — OpenFOAM orchestration, custom solver code, optimization workflows (DoE/DIRECT/EGO).',
      'TCAE DevOps — GitLab CI, CTest with headless Qt, automated Linux/Windows installer pipelines.',
    ],
    technologies: [
      'C++23',
      'OpenFOAM',
      'CalculiX',
      'ParaView',
      'VTK',
      'Qt',
      'CMake',
      'CTest',
      'GitLab CI',
      'NSIS',
      'SQLite',
      'Python',
    ],
  },
  {
    role: 'Research (doctoral studies)',
    company: 'Charles University, MFF UK',
    location: 'Prague',
    period: '2019 — 2020',
    description:
      'Computational biophysics and membrane modelling in the group of Christoph Allolio: continuum modelling of lipid membranes.',
    highlights: [
      'Conducted molecular dynamics simulations of lipid membranes (GROMACS).',
      'Implemented a continuum mechanics solver in C++ for membrane remodelling.',
    ],
    technologies: ['C++', 'GROMACS', 'FEniCS', 'Python'],
  },
];
