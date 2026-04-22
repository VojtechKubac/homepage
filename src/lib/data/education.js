import { getEducationCopy } from './educationLocales.js';

/**
 * Education rows for the Background tab. Copy is merged from locale JSON by `id`.
 *
 * @typedef {{
 *   id: string
 * }} EducationBase
 * @typedef {{
 *   degree?: string,
 *   field?: string,
 *   school?: string,
 *   location?: string,
 *   period?: string,
 *   focus?: string,
 *   thesis?: {
 *     title?: string,
 *     supervisor?: string
 *   }
 * }} EducationCopy
 * @typedef {EducationBase & EducationCopy} Education
 */

/** @type {EducationBase[]} */
export const education = [
  { id: 'msc-charles-university' },
  { id: 'erasmus-tum' },
  { id: 'bsc-charles-university' },
];

/**
 * @param {string} lang
 * @returns {Education[]}
 */
export function getEducationForLocale(lang = 'en') {
  return education.map((row) => ({
    ...row,
    ...getEducationCopy(row.id, lang),
  }));
}
