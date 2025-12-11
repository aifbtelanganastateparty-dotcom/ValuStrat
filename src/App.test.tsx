import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero headline and contact CTA', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /transforming businesses with/i,
    })
  ).toBeInTheDocument();

  expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument();
});
