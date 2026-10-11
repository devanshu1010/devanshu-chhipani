import { render, screen, fireEvent } from '@testing-library/react';
import { PersonaProvider, usePersona } from './PersonaContext';
import { expect, test, describe } from 'vitest';

const TestComponent = () => {
  const { persona, togglePersona } = usePersona();
  return (
    <div>
      <span data-testid="persona-value">{persona}</span>
      <button onClick={togglePersona} data-testid="toggle-btn">Toggle</button>
    </div>
  );
};

describe('PersonaContext', () => {
  test('provides default persona "se" and allows toggling to "ai"', () => {
    render(
      <PersonaProvider>
        <TestComponent />
      </PersonaProvider>
    );

    // Initial state
    expect(screen.getByTestId('persona-value')).toHaveTextContent('se');

    // Toggle to ai
    fireEvent.click(screen.getByTestId('toggle-btn'));
    expect(screen.getByTestId('persona-value')).toHaveTextContent('ai');

    // Toggle back to se
    fireEvent.click(screen.getByTestId('toggle-btn'));
    expect(screen.getByTestId('persona-value')).toHaveTextContent('se');
  });
});

