import experienceEn from '../../locales/en/experience.json';
import experienceDe from '../../locales/de/experience.json';
import experienceCs from '../../locales/cs/experience.json';
import { ENGLISH_LOCALE } from '../i18n.js';
import { normalizeProjectLocale } from './projectLocales.js';

/** @type {Record<string, Record<string, unknown>>} */
const experienceLocales = {
  en: experienceEn,
  de: experienceDe,
  cs: experienceCs,
};

/**
 * @param {Record<string, unknown> | undefined} localized
 * @param {Record<string, unknown> | undefined} english
 * @returns {Record<string, unknown>}
 */
function mergeExperienceCopy(localized, english) {
  const copy = {};

  for (const key of ['role', 'company', 'location', 'period', 'description']) {
    const value = localized?.[key] ?? english?.[key];
    if (value !== undefined) copy[key] = value;
  }

  const highlights = localized?.highlights ?? english?.highlights;
  if (highlights !== undefined) copy.highlights = highlights;

  return copy;
}

/**
 * Localized experience row copy with field-level fallback to English.
 *
 * @param {string} id
 * @param {string} lang
 * @returns {{
 *   role?: string,
 *   company?: string,
 *   location?: string,
 *   period?: string,
 *   description?: string,
 *   highlights?: string[]
 * }}
 */
export function getExperienceCopy(id, lang) {
  const safeLang = normalizeProjectLocale(lang);
  const localized = experienceLocales[safeLang]?.[id];
  const english = experienceLocales[ENGLISH_LOCALE]?.[id];

  if (localized !== undefined) {
    return mergeExperienceCopy(localized, english);
  }

  if (english === undefined) {
    return {};
  }

  return mergeExperienceCopy(undefined, english);
}
