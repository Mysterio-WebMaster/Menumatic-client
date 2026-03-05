import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Menu from '../../components/menu';

describe('Menu Component', () => {
  it('renders the initial state correctly', () => {
    render(<Menu />);
    expect(screen.getByText(/Menu List/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Fetch Menu/i })).toBeInTheDocument();
  });

  it('fetches and displays menu items when button is clicked', async () => {
    render(<Menu />);

    const fetchButton = screen.getByRole('button', { name: /Fetch Menu/i });
    fireEvent.click(fetchButton);

    // Wait for the mocked data to appear in the document
    await waitFor(() => {
      expect(screen.getByText(/Test Category/i)).toBeInTheDocument();
      expect(screen.getByText(/Price:/i)).toBeInTheDocument();
    });
  });
});