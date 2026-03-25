import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

import HeroSection from './HeroSection.svelte';

describe('HeroSection', () => {
  it('renders copy from a mocked translate function', () => {
    const translate = (key) =>
      ({
        'hero.title': 'Mock hero title',
        'hero.subtitle': 'Mock subtitle line',
        'contact.title': 'Mock contact',
        'projects.title': 'Mock projects',
      })[key] ?? key;

    render(HeroSection, { props: { translate } });

    expect(
      screen.getByRole('heading', { level: 1, name: 'Mock hero title' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Mock subtitle line')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Mock contact' })).toHaveAttribute(
      'href',
      '#contact',
    );
    expect(screen.getByRole('link', { name: 'Mock projects' })).toHaveAttribute(
      'href',
      '#projects',
    );
  });
});
