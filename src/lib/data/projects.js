/**
 * Portfolio projects shown on the site. Each entry includes a `source` for grouping.
 *
 * Localized copy (title/description/details) lives in locale JSON files under `src/locales/<lang>/projects.json`.
 * This file stores only structural and metadata fields.
 *
 * @typedef {'cfdSupport' | 'github' | 'academic' | 'ententee'} ProjectSource
 * @typedef {{ href: string, labelKey: string }} ProjectLink
 * @typedef {{ start: string, end: string }} ProjectPeriod
 * @typedef {{ size: number }} ProjectTeam
 * @typedef {{ note?: string }} LocalizedProjectTeam
 * @typedef {{
 *   title?: string,
 *   description?: string,
 *   longDescription?: string,
 *   periodNote?: string,
 *   achievements?: string[],
 *   team?: LocalizedProjectTeam
 * }} LocalizedProjectCopy
 * @typedef {{
 *   id: string,
 *   source: ProjectSource,
 *   technologies: string[],
 *   period?: ProjectPeriod,
 *   team?: ProjectTeam,
 *   link?: ProjectLink,
 *   demo?: string,
 *   image?: string
 * }} ProjectBase
 * @typedef {ProjectBase & LocalizedProjectCopy} Project
 */

import { getProjectCopy } from './projectLocales.js';

/** Display order for source group headings in the Projects section */
export const PROJECT_SOURCE_ORDER = /** @type {const} */ ([
  'cfdSupport',
  'github',
  'academic',
  'ententee',
]);

/** @type {ProjectBase[]} */
export const projects = [
  {
    id: 'tfea',
    source: 'cfdSupport',
    technologies: ['C++23', 'CalculiX', 'ParaView', 'VTK', 'Qt'],
    period: {
      start: '2020',
      end: 'present',
    },
    team: {
      size: 4,
    },
    image: '/images/projects/tfea.png',
    link: {
      href: 'https://www.cfdsupport.com/tfea/',
      labelKey: 'projects.links.cfdSupportSite',
    },
  },
  {
    id: 'tcaa',
    source: 'cfdSupport',
    technologies: ['C++23', 'OpenFOAM', 'ParaView', 'VTK', 'Qt'],
    period: {
      start: '2024',
      end: 'present',
    },
    team: {
      size: 4,
    },
    image: '/images/projects/tcaa.png',
    link: {
      href: 'https://www.cfdsupport.com/',
      labelKey: 'projects.links.cfdSupportSite',
    },
  },
  {
    id: 'tbase',
    source: 'cfdSupport',
    technologies: ['C++23', 'SQLite', 'ParaView', 'VTK', 'Qt'],
    period: {
      start: '2023',
      end: 'present',
    },
    team: {
      size: 1,
    },
    image: '/images/projects/tbase.png',
    link: {
      href: 'https://www.cfdsupport.com/',
      labelKey: 'projects.links.cfdSupportSite',
    },
  },
  {
    id: 'tmesh-fea',
    source: 'cfdSupport',
    technologies: ['C++23', 'NetGen', 'Gmsh', 'ParaView', 'VTK', 'Qt'],
    period: {
      start: '2020',
      end: 'present',
    },
    team: {
      size: 1,
    },
    image: '/images/projects/tmesh.png',
    link: {
      href: 'https://www.cfdsupport.com/tmesh/',
      labelKey: 'projects.links.cfdSupportSite',
    },
  },
  {
    id: 'tmesh-tcfd-topt',
    source: 'cfdSupport',
    technologies: ['C++23', 'OpenFOAM', 'Python', 'ParaView', 'VTK', 'Qt'],
    period: {
      start: '2019',
      end: 'present',
    },
    team: {
      size: 8,
    },
    image: '/images/projects/tcfd.png',
    link: {
      href: 'https://www.cfdsupport.com/tcfd/',
      labelKey: 'projects.links.cfdSupportSite',
    },
  },
  {
    id: 'devops-tcae',
    source: 'cfdSupport',
    technologies: ['GitLab CI', 'CMake', 'CTest', 'Qt', 'NSIS', 'VirtualBox'],
    period: {
      start: '2023',
      end: 'present',
    },
    team: {
      size: 1,
    },
    image: '/images/projects/tcae.png',
    link: {
      href: 'https://www.cfdsupport.com/',
      labelKey: 'projects.links.cfdSupportSite',
    },
  },
  {
    id: 'ibkr-trading-bot',
    source: 'github',
    technologies: ['Python'],
    period: {
      start: '2022',
      end: 'present',
    },
    image: '/images/projects/snp.png',
    team: {
      size: 1,
    },
    link: {
      href: 'https://github.com/VojtechKubac/ibkr-trading-bot',
      labelKey: 'projects.links.repository',
    },
  },
  {
    id: 'homepage-site',
    source: 'github',
    technologies: ['Svelte 4', 'Vite', 'Tailwind CSS'],
    period: {
      start: '2026',
      end: 'present',
    },
    team: {
      size: 1,
    },
    image: '/images/projects/portfolio.png',
    link: {
      href: 'https://github.com/VojtechKubac/homepage',
      labelKey: 'projects.links.repository',
    },
  },
  {
    id: 'master-thesis',
    source: 'github',
    technologies: ['Python', 'FEniCS'],
    period: {
      start: '2021',
      end: '2022',
    },
    team: {
      size: 1,
    },
    image: '/images/projects/vain.jpg',
    link: {
      href: 'https://github.com/VojtechKubac/MasterThesis',
      labelKey: 'projects.links.repository',
    },
  },
  {
    id: 'biomembrane',
    source: 'academic',
    technologies: ['Research', 'Molecular modeling', 'GROMACS', 'C++'],
    period: {
      start: '2019',
      end: '2020',
    },
    team: {
      size: 6,
    },
    image: '/images/projects/lipids.webp',
    link: {
      href: 'https://www.karlin.mff.cuni.cz/~allolio/',
      labelKey: 'projects.links.researchGroup',
    },
  },
  {
    id: 'alf',
    source: 'ententee',
    period: {
      start: '2026',
      end: '2026',
    },
    technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL'],
    team: {
      size: 3,
    },
    image: '/images/projects/uk.png',
  },
  {
    id: 'uav-thk',
    source: 'ententee',
    technologies: ['Python', 'ROS', 'Gazebo', 'C++'],
    period: {
      start: '2026',
      end: 'present',
    },
    team: {
      size: 6,
    },
    image: '/images/projects/thk.png',
    link: {
      href: 'https://www.thk.com/',
      labelKey: 'projects.links.thkSite',
    },
  },
  {
    id: 'ententee-hub',
    source: 'ententee',
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL'],
    period: {
      start: '2026',
      end: '2026',
    },
    team: {
      size: 5,
    },
    image: '/images/projects/ententee.png',
    link: {
      href: 'https://ententee.com/',
      labelKey: 'projects.links.ententeeSite',
    },
  },
  {
    id: 'drchrono-app',
    source: 'ententee',
    technologies: ['Django', 'React', 'TypeScript', 'PostgreSQL', 'GraphQL'],
    period: {
      start: '2024',
      end: '2025',
    },
    team: {
      size: 15,
    },
    image: '/images/projects/drchrono.png',
    link: {
      href: 'https://www.drchrono.com/',
      labelKey: 'projects.links.drChronoSite',
    },
  },
];

/**
 * @param {string} lang
 * @returns {{ source: ProjectSource, items: Project[] }[]}
 */
export function getProjectsGroupedBySource(lang = 'en') {
  /** @type {Map<ProjectSource, Project[]>} */
  const map = new Map(PROJECT_SOURCE_ORDER.map((s) => [s, []]));

  for (const project of projects) {
    const bucket = map.get(project.source);
    if (bucket === undefined) {
      throw new Error(
        'Unknown project source "' + project.source + '" (project id: ' + project.id + ')',
      );
    }

    const copy = getProjectCopy(project.id, lang);
    const mergedProject = {
      ...project,
      ...copy,
      team: project.team
        ? {
            ...project.team,
            ...(copy.team ?? {}),
          }
        : undefined,
    };

    bucket.push(mergedProject);
  }

  return PROJECT_SOURCE_ORDER.filter((source) => (map.get(source)?.length ?? 0) > 0).map(
    (source) => ({
      source,
      items: /** @type {Project[]} */ (map.get(source)),
    }),
  );
}
