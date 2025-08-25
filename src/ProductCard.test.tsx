// Write Vitest + React Testing Library tests for the ProductCard component.
// - It should render product name, price, and image correctly
// - It should display formatted price with "$"
// - It should match snapshot


import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('ProductCard', () => {
  const name = 'Test Product';
  const price = 19.99;
  const image = 'test-image.jpg';

  it('renders product name, price, and image correctly', () => {
    render(<ProductCard name={name} price={price} image={image} />);
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText('$19.99')).toBeInTheDocument();
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', image);
    expect(img).toHaveAttribute('alt', name);
  });

  it('displays formatted price with "$"', () => {
    render(<ProductCard name={name} price={price} image={image} />);
    expect(screen.getByText('$19.99')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ProductCard name={name} price={price} image={image} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

