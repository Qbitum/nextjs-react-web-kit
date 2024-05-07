import React from 'react';
import { render } from '@testing-library/react';
import { BasicBreadcrumb } from './breadcrumb.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicBreadcrumb />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
