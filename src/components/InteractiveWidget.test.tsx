import { render, screen } from '@testing-library/react';
import InteractiveWidget from './InteractiveWidget';
import { PersonaProvider } from '../context/PersonaContext';
import { expect, test } from 'vitest';

test('InteractiveWidget renders correct widget based on persona', () => {
  render(
    <PersonaProvider>
      <InteractiveWidget />
    </PersonaProvider>
  );

  // Default is 'se', should render CLI
  expect(screen.getByTestId('cli-widget')).toBeInTheDocument();
});

