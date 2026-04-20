import { describe, expect, it } from 'vitest';

import { getTranslation, t } from './i18n.js';

describe('getTranslation', () => {
  const partialTranslations = {
    en: {
      nav: {
        about: 'About',
      },
      hero: {
        title: 'English hero title',
      },
    },
    de: {
      nav: {},
    },
    cs: {},
  };

  it('returns nested English strings for dotted keys', () => {
    expect(getTranslation('en', 'hero.title')).toBe(
      'Software engineer — CFD simulation, scientific computing, full-stack web.',
    );
    expect(getTranslation('en', 'nav.about')).toBe('About');
    expect(getTranslation('en', 'contact.send')).toBe('Send Message');
  });

  it('returns the key when the path is missing', () => {
    expect(getTranslation('en', 'no.such.key')).toBe('no.such.key');
  });

  it('returns the key when the locale is unknown', () => {
    expect(getTranslation('xx', 'hero.title')).toBe('hero.title');
  });

  it('falls back to English for missing keys in German', () => {
    expect(getTranslation('de', 'nav.about', partialTranslations)).toBe('About');
    expect(getTranslation('de', 'hero.title', partialTranslations)).toBe('English hero title');
  });

  it('falls back to English for missing keys in Czech', () => {
    expect(getTranslation('cs', 'nav.about', partialTranslations)).toBe('About');
    expect(getTranslation('cs', 'hero.title', partialTranslations)).toBe('English hero title');
  });

  it('still returns the key if missing in both locale and English', () => {
    expect(getTranslation('de', 'contact.send', partialTranslations)).toBe('contact.send');
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

  it('uses English fallback through translator function for missing locale keys', () => {
    const fixture = {
      en: {
        nav: {
          contact: 'Contact',
        },
      },
      de: {
        nav: {},
      },
    };

    expect(t('de', fixture)('nav.contact')).toBe('Contact');
  });

  it('returns stable translator references for the same inputs', () => {
    const fixture = {
      en: {
        nav: {
          contact: 'Contact',
        },
      },
      de: {
        nav: {},
      },
    };

    expect(t('de')).toBe(t('de'));
    expect(t('de', fixture)).toBe(t('de', fixture));
    expect(t('de')).not.toBe(t('cs'));
    expect(t('de')).not.toBe(t('de', fixture));
  });
});
