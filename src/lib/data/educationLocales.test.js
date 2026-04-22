import { describe, expect, it } from 'vitest';

import { getEducationCopy } from './educationLocales.js';
import { education } from './education.js';
import educationEn from '../../locales/en/education.json';

describe('getEducationCopy', () => {
  it('returns English copy for English locale', () => {
    const copy = getEducationCopy('msc-charles-university', 'en');
    expect(copy.degree).toBe('Master of Science');
    expect(copy.field).toContain('Mathematical Modeling');
    expect(copy.thesis?.supervisor).toContain('Jaroslav Hron');
  });

  it('falls back to English when locale file has no entry', () => {
    const copy = getEducationCopy('bsc-charles-university', 'de', {
      en: {
        'bsc-charles-university': {
          degree: 'Bachelor of Science',
          school: 'Charles University',
        },
      },
      de: {},
      cs: {},
    });

    expect(copy.degree).toBe('Bachelor of Science');
    expect(copy.school).toBe('Charles University');
  });

  it('applies field-level fallback when a locale entry is partial', () => {
    const fixture = {
      en: {
        'erasmus-tum': {
          degree: 'Erasmus Exchange',
          field: 'Faculty of Mathematics',
          school: 'Technical University of Munich',
          focus: 'Machine learning and HPC.',
        },
      },
      de: {
        'erasmus-tum': {
          degree: 'Erasmus-Austausch',
        },
      },
      cs: {},
    };

    const copy = getEducationCopy('erasmus-tum', 'de', fixture);
    expect(copy.degree).toBe('Erasmus-Austausch');
    expect(copy.field).toBe('Faculty of Mathematics');
    expect(copy.school).toBe('Technical University of Munich');
    expect(copy.focus).toBe('Machine learning and HPC.');
  });

  it('falls back to English when localized fields are blank strings', () => {
    const fixture = {
      en: {
        'msc-charles-university': {
          degree: 'Master of Science',
          field: 'Mathematical Modeling in Physics and Technology',
          thesis: {
            title: 'English thesis title',
          },
        },
      },
      de: {
        'msc-charles-university': {
          degree: '   ',
          field: '',
          thesis: {
            title: ' ',
          },
        },
      },
      cs: {},
    };

    const copy = getEducationCopy('msc-charles-university', 'de', fixture);
    expect(copy.degree).toBe('Master of Science');
    expect(copy.field).toBe('Mathematical Modeling in Physics and Technology');
    expect(copy.thesis?.title).toBe('English thesis title');
  });

  it('returns an empty object for unknown ids', () => {
    expect(getEducationCopy('unknown-id', 'en')).toEqual({});
  });

  it('falls back to English when locale code is unsupported', () => {
    const copy = getEducationCopy('msc-charles-university', 'xx');
    expect(copy.degree).toBe('Master of Science');
  });

  it('ensures every education id has required English copy fields', () => {
    const requiredFields = ['degree', 'field', 'school', 'location', 'period'];

    for (const row of education) {
      const englishEntry = educationEn[row.id];
      expect(englishEntry, `Missing English locale entry for "${row.id}"`).toBeDefined();

      const copy = getEducationCopy(row.id, 'en');
      for (const field of requiredFields) {
        expect(
          englishEntry?.[field],
          `Missing English "${field}" for "${row.id}" in locale JSON`,
        ).toBeTypeOf('string');
        expect(
          englishEntry?.[field]?.trim(),
          `Empty English "${field}" for "${row.id}" in locale JSON`,
        ).not.toBe('');
        expect(copy[field], `Missing "${field}" from getEducationCopy("${row.id}", "en")`).toBe(
          englishEntry[field],
        );
      }
    }
  });
});
