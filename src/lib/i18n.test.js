import { describe, expect, it } from 'vitest';

import { getTranslation, t } from './i18n.js';

describe('getTranslation', () => {
  it('returns nested English strings for dotted keys', () => {
    expect(getTranslation('en', 'hero.title')).toBe("Hi, I'm a Developer");
    expect(getTranslation('en', 'nav.about')).toBe('About');
    expect(getTranslation('en', 'contact.send')).toBe('Send Message');
  });

  it('returns the key when the path is missing', () => {
    expect(getTranslation('en', 'no.such.key')).toBe('no.such.key');
  });

  it('returns the key when the locale is unknown', () => {
    expect(getTranslation('xx', 'hero.title')).toBe('hero.title');
  });
});

describe('t', () => {
  it('returns a function that resolves keys for the given locale', () => {
    const en = t('en');
    expect(en('skills.title')).toBe('Skills');
    expect(en('projects.links.repository')).toBe('View repository');
    expect(en('projects.sources.github')).toBe('GitHub & personal');
  });

  it('keeps projects i18n keys aligned across en, de, and cs', () => {
    expect(t('de')('projects.links.repository')).toBe('Repository ansehen');
    expect(t('de')('projects.sources.github')).toBe('GitHub & persönlich');
    expect(t('cs')('projects.links.repository')).toBe('Zobrazit repozitář');
    expect(t('cs')('projects.sources.github')).toBe('GitHub a osobní');
  });

  it('returns German copy for de', () => {
    expect(t('de')('nav.contact')).toBe('Kontakt');
  });
});
