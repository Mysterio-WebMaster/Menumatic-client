import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from '../App';


describe('App Component', () => {
  it('renders the title and sub-components', () => {
    render(<App />);
    expect(screen.getByText('Menumatic Vite App')).toBeInTheDocument();
    expect(screen.getByText('Test Connection')).toBeInTheDocument();
    expect(screen.getByText('Menu List')).toBeInTheDocument();
  });
});