import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './';

describe('App component', () => {
  test('Should render', () => {
    render(<App />)
  });
});
