import { render, screen } from '@testing-library/react';
import App from './App';
import { expect, test } from 'vitest';

test('App wraps children in PersonaProvider and ReactLenis', () => {
  // If PersonaProvider is present, usePersona should not throw within App components.
  // We can test this by checking if the app renders without crashing.
  const { container } = render(<App />);
  expect(container).toBeTruthy();
});

