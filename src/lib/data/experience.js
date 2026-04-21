/**
 * Work experience rows for the Background tab. Copy is merged from locale JSON by `id`.
 *
 * @typedef {{
 *   id: string,
 *   technologies: string[]
 * }} ExperienceBase
 * @typedef {{
 *   role?: string,
 *   company?: string,
 *   location?: string,
 *   period?: string,
 *   description?: string,
 *   highlights?: string[]
 * }} ExperienceCopy
 * @typedef {ExperienceBase & ExperienceCopy} Experience
 */

import { getExperienceCopy } from './experienceLocales.js';

/** @type {ExperienceBase[]} */
export const experiences = [
  {
    id: 'ententee',
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
    id: 'cfd-support',
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
    id: 'charles-mff-research',
    technologies: ['C++', 'GROMACS', 'FEniCS', 'Python'],
  },
];

/**
 * @param {string} lang
 * @returns {Experience[]}
 */
export function getExperiencesForLocale(lang = 'en') {
  return experiences.map((exp) => {
    const copy = getExperienceCopy(exp.id, lang);
    return {
      ...exp,
      ...copy,
    };
  });
}
