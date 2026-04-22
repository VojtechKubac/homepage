import educationEn from '../../locales/en/education.json';
import educationDe from '../../locales/de/education.json';
import educationCs from '../../locales/cs/education.json';
import { ENGLISH_LOCALE, FALLBACK_TO_ENGLISH_LOCALES } from '../i18n.js';

/** @type {Record<string, Record<string, unknown>>} */
const educationLocales = {
  en: educationEn,
  de: educationDe,
  cs: educationCs,
};

/**
 * @param {unknown} lang
 * @returns {string}
 */
function normalizeEducationLocale(lang) {
  if (typeof lang !== 'string' || lang.length === 0) {
    return ENGLISH_LOCALE;
  }
  if (lang === ENGLISH_LOCALE || FALLBACK_TO_ENGLISH_LOCALES.has(lang)) {
    return lang;
  }
  return ENGLISH_LOCALE;
}

/**
 * @param {Record<string, unknown> | undefined} localized
 * @param {Record<string, unknown> | undefined} english
 * @returns {Record<string, unknown>}
 */
function mergeEducationCopy(localized, english) {
  const copy = {};

  for (const key of ['degree', 'field', 'school', 'location', 'period', 'focus']) {
    const value = localized?.[key] ?? english?.[key];
    if (value !== undefined) copy[key] = value;
  }

  const thesisTitle = localized?.thesis?.title ?? english?.thesis?.title;
  const thesisSupervisor = localized?.thesis?.supervisor ?? english?.thesis?.supervisor;
  if (thesisTitle !== undefined || thesisSupervisor !== undefined) {
    copy.thesis = {};
    if (thesisTitle !== undefined) copy.thesis.title = thesisTitle;
    if (thesisSupervisor !== undefined) copy.thesis.supervisor = thesisSupervisor;
  }

  return copy;
}

/**
 * Localized education row copy with field-level fallback to English.
 *
 * @param {string} id
 * @param {string} lang
 * @param {Record<string, Record<string, unknown>>} [localeTable]
 * @returns {{
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
 * }}
 */
export function getEducationCopy(id, lang, localeTable = educationLocales) {
  const safeLang = normalizeEducationLocale(lang);
  const localized = localeTable[safeLang]?.[id];
  const english = localeTable[ENGLISH_LOCALE]?.[id];

  if (localized !== undefined) {
    return mergeEducationCopy(localized, english);
  }

  if (english === undefined) {
    return {};
  }

  return mergeEducationCopy(undefined, english);
}
