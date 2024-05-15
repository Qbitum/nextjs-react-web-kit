import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import { BasicSidebar } from './sidebar.composition';

it('renders the header in the sidebar', () => {
  const { getByText } = render(<BasicSidebar />);
  const rendered = getByText('Next React template');
  expect(rendered).toBeTruthy();
});

it('renders the item dashboard', () => {
  const { getByText } = render(<BasicSidebar />);
  const rendered = getByText('Dashboard');
  expect(rendered).toBeTruthy();
});

it('renders the item e-comerce', () => {
  const { getByText } = render(<BasicSidebar />);
  const rendered = getByText('E-Commerce');
  expect(rendered).toBeTruthy();
});


it('renders the item inbox', () => {
  const { getByText } = render(<BasicSidebar />);
  const rendered = getByText('Inbox');
  expect(rendered).toBeTruthy();
});


it('renders the item user', () => {
  const { getByText } = render(<BasicSidebar />);
  const rendered = getByText('User');
  expect(rendered).toBeTruthy();
});


it('renders the item settings', () => {
  const { getByText } = render(<BasicSidebar />);
  const rendered = getByText('Settings');
  expect(rendered).toBeTruthy();
});


it('renders the item sign out', () => {
  const { getByText } = render(<BasicSidebar />);
  const rendered = getByText('Sign Out');
  expect(rendered).toBeTruthy();
});

it('renders the shoppig cart icon', () => {
  const { getByTestId } = render(<BasicSidebar />);
  const rendered = getByTestId('icon-shoppingCart');
  expect(rendered).toBeTruthy();
});

it('renders the inbox icon', () => {
  const { getByTestId } = render(<BasicSidebar />);
  const rendered = getByTestId('icon-inbox');
  expect(rendered).toBeTruthy();
});
