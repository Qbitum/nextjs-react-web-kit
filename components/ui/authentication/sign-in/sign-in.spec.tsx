import React from 'react';
import { render } from '@testing-library/react';
import { BasicSignIn } from './sign-in.composition';

it('should render with the correct text', () => {
  const { getAllByRole } = render(<BasicSignIn />);
  const rendered = getAllByRole('textbox');
  expect(rendered).toHaveLength(1);
});
