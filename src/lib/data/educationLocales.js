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
 * @param {unknown} value
 * @returns {boolean}
 */
function hasEducationValue(value) {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return value !== undefined;
}

/**
 * @param {unknown} localizedValue
 * @param {unknown} englishValue
 * @returns {unknown}
 */
function educationValue(localizedValue, englishValue) {
  return hasEducationValue(localizedValue) ? localizedValue : englishValue;
}

/**
 * @param {Record<string, unknown> | undefined} localized
 * @param {Record<string, unknown> | undefined} english
 * @returns {Record<string, unknown>}
 */
function mergeEducationCopy(localized, english) {
  const copy = {};

  for (const key of ['degree', 'field', 'school', 'location', 'period', 'focus']) {
    const value = educationValue(localized?.[key], english?.[key]);
    if (hasEducationValue(value)) copy[key] = value;
  }

  const thesisTitle = educationValue(localized?.thesis?.title, english?.thesis?.title);
  const thesisSupervisor = educationValue(localized?.thesis?.supervisor, english?.thesis?.supervisor);
  if (hasEducationValue(thesisTitle) || hasEducationValue(thesisSupervisor)) {
    copy.thesis = {};
    if (hasEducationValue(thesisTitle)) copy.thesis.title = thesisTitle;
    if (hasEducationValue(thesisSupervisor)) copy.thesis.supervisor = thesisSupervisor;
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
