import projectsEn from '../../locales/en/projects.json';
import projectsDe from '../../locales/de/projects.json';
import projectsCs from '../../locales/cs/projects.json';
import { ENGLISH_LOCALE, FALLBACK_TO_ENGLISH_LOCALES } from '../i18n.js';

/** @type {Record<string, Record<string, unknown>>} */
const projectLocales = {
  en: projectsEn,
  de: projectsDe,
  cs: projectsCs,
};

/** Locales that have project JSON files and match UI locale support (see `i18n.js`). */
const SUPPORTED_PROJECT_LOCALES = new Set([ENGLISH_LOCALE, ...FALLBACK_TO_ENGLISH_LOCALES]);

/**
 * Coerce unknown or empty locale codes (e.g. stale `localStorage`) so project copy
 * still resolves from imported locale JSON.
 *
 * @param {unknown} lang
 * @returns {string}
 */
export function normalizeProjectLocale(lang) {
  if (typeof lang !== 'string' || lang.length === 0) {
    return ENGLISH_LOCALE;
  }
  return SUPPORTED_PROJECT_LOCALES.has(lang) ? lang : ENGLISH_LOCALE;
}

/**
 * @param {Record<string, unknown> | undefined} localized
 * @param {Record<string, unknown> | undefined} english
 * @returns {Record<string, unknown>}
 */
function mergeProjectCopy(localized, english) {
  const copy = {};

  const title = localized?.title ?? english?.title;
  if (title !== undefined) copy.title = title;

  const description = localized?.description ?? english?.description;
  if (description !== undefined) copy.description = description;

  const longDescription = localized?.longDescription ?? english?.longDescription;
  if (longDescription !== undefined) copy.longDescription = longDescription;

  const periodNote = localized?.periodNote ?? english?.periodNote;
  if (periodNote !== undefined) copy.periodNote = periodNote;

  const achievements = localized?.achievements ?? english?.achievements;
  if (achievements !== undefined) copy.achievements = achievements;

  const teamNote = localized?.team?.note ?? english?.team?.note;
  if (teamNote !== undefined) {
    copy.team = { note: teamNote };
  }

  return copy;
}

/**
 * Returns localized project copy with field-level fallback to English.
 *
 * @param {string} id
 * @param {string} lang
 * @returns {{
 *   title?: string,
 *   description?: string,
 *   longDescription?: string,
 *   periodNote?: string,
 *   achievements?: string[],
 *   team?: { note?: string }
 * }}
 */
export function getProjectCopy(id, lang) {
  const safeLang = normalizeProjectLocale(lang);
  const localized = projectLocales[safeLang]?.[id];
  const english = projectLocales[ENGLISH_LOCALE]?.[id];

  if (localized !== undefined) {
    return mergeProjectCopy(localized, english);
  }

  if (english === undefined) {
    return {};
  }

  return mergeProjectCopy(undefined, english);
}
