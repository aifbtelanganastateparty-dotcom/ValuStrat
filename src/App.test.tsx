import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar', () => {
  render(<App />);
  // Check that the app renders without crashing and contains the navbar
  const navElement = screen.getByRole('navigation');
  expect(navElement).toBeInTheDocument();
});
