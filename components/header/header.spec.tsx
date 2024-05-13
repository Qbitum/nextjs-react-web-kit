import React from 'react';
import { render,screen } from '@testing-library/react';
import { BasicHeader } from './header.composition';

it('renders with the text material tailwind', () => {
  const { getByText } = render(<BasicHeader />);
  const rendered = getByText('Material Tailwind');
  expect(rendered).toBeTruthy();
});

it('renders with the text search', () => {
  const { getByText } = render(<BasicHeader />);
  const rendered = getByText('Search');
  expect(rendered).toBeTruthy();
});
