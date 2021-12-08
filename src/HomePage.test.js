import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './containers/HomePage/HomePage.jsx';

test('renders top artists', () => {
  render(<HomePage />);

  screen.debug();
});
