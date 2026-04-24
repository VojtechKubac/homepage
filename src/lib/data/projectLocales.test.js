import { describe, expect, it } from 'vitest';

import { getProjectCopy, normalizeProjectLocale } from './projectLocales.js';
import { projects } from './projects.js';
import projectsEn from '../../locales/en/projects.json';
import projectsDe from '../../locales/de/projects.json';
import projectsCs from '../../locales/cs/projects.json';

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

  it('ensures every project id has an English locale entry', () => {
    for (const project of projects) {
      const englishEntry = projectsEn[project.id];
      expect(englishEntry, `Missing English locale entry for "${project.id}"`).toBeDefined();

      const copy = getProjectCopy(project.id, 'en');
      expect(copy.title, `Missing English title for "${project.id}"`).toBeTypeOf('string');
      expect(copy.description, `Missing English description for "${project.id}"`).toBeTypeOf(
        'string',
      );
    }
  });

  it('keeps DE/CS locale project IDs aligned with English project IDs', () => {
    const projectIds = new Set(projects.map((project) => project.id));

    for (const id of projectIds) {
      expect(projectsDe[id], `Missing German locale entry for "${id}"`).toBeDefined();
      expect(projectsCs[id], `Missing Czech locale entry for "${id}"`).toBeDefined();
    }

    for (const id of Object.keys(projectsDe)) {
      expect(projectIds.has(id), `German locale has unknown project id "${id}"`).toBe(true);
    }

    for (const id of Object.keys(projectsCs)) {
      expect(projectIds.has(id), `Czech locale has unknown project id "${id}"`).toBe(true);
    }
  });
});
