import { describe, expect, it } from 'vitest';

import { getExperienceCopy } from './experienceLocales.js';
import { experiences } from './experience.js';
import experienceEn from '../../locales/en/experience.json';

describe('getExperienceCopy', () => {
  it('returns English copy for English locale', () => {
    const copy = getExperienceCopy('ententee', 'en');
    expect(copy.role).toBe('Software engineer');
    expect(copy.description).toContain('Full-stack product delivery');
    expect(copy.highlights?.length).toBeGreaterThan(0);
  });

  it('falls back to English when locale file has no entry', () => {
    const fixture = {
      en: {
        'cfd-support': {
          role: 'C++ software engineer',
          company: 'CFD Support s.r.o.',
          period: '2019 — present',
          description: 'English default description',
        },
      },
      de: {},
      cs: {},
    };

    const copy = getExperienceCopy('cfd-support', 'de', fixture);
    expect(copy.role).toBe('C++ software engineer');
    expect(copy.company).toContain('CFD Support');
  });

  it('applies field-level fallback when a locale entry is partial', () => {
    const fixture = {
      en: {
        'cfd-support': {
          role: 'C++ software engineer',
          company: 'CFD Support s.r.o.',
          period: '2019 — present',
          description: 'English default description',
        },
      },
      de: {
        'cfd-support': {
          company: 'CFD Support GmbH',
        },
      },
      cs: {},
    };

    const copy = getExperienceCopy('cfd-support', 'de', fixture);
    expect(copy.company).toBe('CFD Support GmbH');
    expect(copy.role).toBe('C++ software engineer');
    expect(copy.period).toBe('2019 — present');
    expect(copy.description).toBe('English default description');
  });

  it('returns an empty object for unknown ids', () => {
    expect(getExperienceCopy('unknown-id', 'en')).toEqual({});
  });

  it('falls back to English when locale code is unsupported', () => {
    const copy = getExperienceCopy('ententee', 'xx');
    expect(copy.role).toBe('Software engineer');
  });

  it('ensures every experience id has required English copy fields', () => {
    const requiredFields = ['role', 'company', 'period', 'description'];

    for (const experience of experiences) {
      const englishEntry = experienceEn[experience.id];
      expect(englishEntry, `Missing English locale entry for "${experience.id}"`).toBeDefined();

      const copy = getExperienceCopy(experience.id, 'en');
      for (const field of requiredFields) {
        expect(
          englishEntry?.[field],
          `Missing English "${field}" for "${experience.id}" in locale JSON`,
        ).toBeTypeOf('string');
        expect(
          englishEntry?.[field]?.trim(),
          `Empty English "${field}" for "${experience.id}" in locale JSON`,
        ).not.toBe('');
        expect(
          copy[field],
          `Missing "${field}" from getExperienceCopy("${experience.id}", "en")`,
        ).toBe(englishEntry[field]);
      }
    }
  });
});
