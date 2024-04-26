import React from 'react';
import { render } from '@testing-library/react';
import { BasicPageWithHeader } from './page-with-header.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicPageWithHeader />);
  const rendered = getByText('Composition');
  expect(rendered).toBeTruthy();
});
