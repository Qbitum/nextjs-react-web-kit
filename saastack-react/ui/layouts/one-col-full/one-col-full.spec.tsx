import React from 'react';
import { render } from '@testing-library/react';
import { BasicOneColFull } from './one-col-full.composition';

it('renders with the correct text', () => {
  const { getByTestId } = render(<BasicOneColFull />);
  const rendered = getByTestId('oc-wrapper');
  expect(rendered).toBeTruthy();
});
