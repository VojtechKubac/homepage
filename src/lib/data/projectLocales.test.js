import { describe, expect, it } from 'vitest';

import { getProjectCopy, normalizeProjectLocale } from './projectLocales.js';

describe('normalizeProjectLocale', () => {
  it('maps supported locales through unchanged', () => {
    expect(normalizeProjectLocale('en')).toBe('en');
    expect(normalizeProjectLocale('de')).toBe('de');
    expect(normalizeProjectLocale('cs')).toBe('cs');
  });

  it('falls back to English for unknown, empty, or non-string codes', () => {
    expect(normalizeProjectLocale('xx')).toBe('en');
    expect(normalizeProjectLocale('')).toBe('en');
    expect(normalizeProjectLocale(undefined)).toBe('en');
    expect(normalizeProjectLocale(null)).toBe('en');
  });
});

describe('getProjectCopy', () => {
  it('returns English project copy for English locale', () => {
    const copy = getProjectCopy('tfea', 'en');
    expect(copy.title).toBe('TFEA — Finite element analysis (TCAE)');
    expect(copy.description).toContain('Structural and thermal FEA');
    expect(copy.team?.note).toContain('Cross-functional CAE team');
  });

  it('returns German project copy for German locale', () => {
    const copy = getProjectCopy('tfea', 'de');
    expect(copy.title).toBe('TFEA — Finite-Elemente-Analyse (TCAE)');
    expect(copy.description).toContain('Struktur- und thermische FEA');
    expect(copy.achievements?.length).toBeGreaterThan(0);
  });

  it('returns an empty object for unknown project ids', () => {
    expect(getProjectCopy('unknown-project-id', 'en')).toEqual({});
    expect(getProjectCopy('unknown-project-id', 'de')).toEqual({});
  });

  it('falls back to English project copy when locale code is unsupported', () => {
    const copy = getProjectCopy('tfea', 'xx');
    expect(copy.title).toBe('TFEA — Finite element analysis (TCAE)');
  });
});
