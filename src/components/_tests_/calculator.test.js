import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../Calculator';
import 'mutationobserver-shim';

describe('Calculator', () => {
  test('renders App component', () => {
    render(<Calculator />);
  });
});
