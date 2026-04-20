import { describe, expect, it } from 'vitest';

import { getProjectCopy } from './projectLocales.js';

describe('getProjectCopy', () => {
  it('returns English project copy for English locale', () => {
    const copy = getProjectCopy('tfea', 'en');
    expect(copy.title).toBe('TFEA — Finite element analysis (TCAE)');
    expect(copy.description).toContain('Structural and thermal FEA');
    expect(copy.team?.note).toContain('Cross-functional CAE team');
  });

  it('falls back to English when locale copy is missing', () => {
    const copy = getProjectCopy('tfea', 'de');
    expect(copy.title).toBe('TFEA — Finite element analysis (TCAE)');
    expect(copy.achievements?.length).toBeGreaterThan(0);
  });

  it('returns an empty object for unknown project ids', () => {
    expect(getProjectCopy('unknown-project-id', 'en')).toEqual({});
    expect(getProjectCopy('unknown-project-id', 'de')).toEqual({});
  });
});
