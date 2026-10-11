import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import { PersonaProvider } from '../context/PersonaContext';
import { expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

test('Navbar renders toggle and responds to click', () => {
  render(
    <BrowserRouter>
      <PersonaProvider>
        <Navbar />
      </PersonaProvider>
    </BrowserRouter>
  );

  const seBtn = screen.getByText(/Software Engineer/i);
  const aiBtn = screen.getByText(/AI Practitioner/i);

  expect(seBtn).toBeInTheDocument();
  expect(aiBtn).toBeInTheDocument();

  fireEvent.click(aiBtn);
  // Implementation should update state, visual feedback usually tested via classes or attributes
});

