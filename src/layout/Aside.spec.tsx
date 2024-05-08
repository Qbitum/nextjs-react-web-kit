import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AsideHead, AsideBody, AsideFoot } from './Aside';

describe('AsideHead', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<AsideHead>Hello World</AsideHead>);
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  it('has correct class', () => {
    const { container } = render(<AsideHead>Content</AsideHead>);
    expect(container.firstChild).toHaveClass('aside-head');
  });
});

describe('AsideBody', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<AsideBody>Hello World</AsideBody>);
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  it('has correct class', () => {
    const { container } = render(<AsideBody>Content</AsideBody>);
    expect(container.firstChild).toHaveClass('aside-body');
  });
});

describe('AsideFoot', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<AsideFoot>Hello World</AsideFoot>);
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  it('has correct class', () => {
    const { container } = render(<AsideFoot>Content</AsideFoot >);
    expect(container.firstChild).toHaveClass('aside-foot');
  });
});
//