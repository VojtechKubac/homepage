import { describe, expect, it } from 'vitest';

import { getExperienceCopy } from './experienceLocales.js';

describe('getExperienceCopy', () => {
  it('returns English copy for English locale', () => {
    const copy = getExperienceCopy('ententee', 'en');
    expect(copy.role).toBe('Software engineer');
    expect(copy.description).toContain('Full-stack product delivery');
    expect(copy.highlights?.length).toBeGreaterThan(0);
  });

  it('falls back to English when locale file has no entry', () => {
    const copy = getExperienceCopy('cfd-support', 'de');
    expect(copy.role).toBe('C++ software engineer');
    expect(copy.company).toContain('CFD Support');
  });

  it('returns an empty object for unknown ids', () => {
    expect(getExperienceCopy('unknown-id', 'en')).toEqual({});
  });

  it('falls back to English when locale code is unsupported', () => {
    const copy = getExperienceCopy('ententee', 'xx');
    expect(copy.role).toBe('Software engineer');
  });
});
