import { render, screen } from 'utils/tests/test-utils';
import { Button } from 'components/button';

describe('Button component', () => {
  it('renders with default "primary" variant', () => {
    render(<Button>Hello</Button>);
    const buttonElement = screen.getByRole('button', { name: /Hello/i });
    expect(buttonElement).toHaveClass('bg-zinc-600 text-white hover:bg-zinc-700');
  });

  it('renders with "outline" variant', () => {
    render(<Button variant="outline">Hello</Button>);
    const buttonElement = screen.getByRole('button', { name: /Hello/i });
    expect(buttonElement).toHaveClass('border border-zinc-300 text-zinc-700 hover:bg-zinc-50');
  });

  it('renders with custom class', () => {
    render(<Button className="custom-class">Hello</Button>);
    const buttonElement = screen.getByRole('button', { name: /Hello/i });
    expect(buttonElement).toHaveClass('custom-class');
  });

  it('renders with additional props', () => {
    render(<Button id="custom-id">Hello</Button>);
    const buttonElement = screen.getByRole('button', { name: /Hello/i });
    expect(buttonElement).toHaveAttribute('id', 'custom-id');
  });
});
