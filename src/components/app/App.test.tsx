import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Working Calendar 2021', () => {
  render(<App />);
  const linkElement = screen.getByText(/Working Calendar 2021/i);
  expect(linkElement).toBeInTheDocument();
});
