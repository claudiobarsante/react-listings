import { render, screen } from 'utils/tests/test-utils';

import { Form } from '.';

// Mock the toast module
jest.mock('sonner', () => ({
  toast: {
    success: jest.fn()
  }
}));

describe('Form component', () => {
  it('should render form elements', () => {
    render(<Form />);

    expect(screen.getByPlaceholderText('Full Name *')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email *')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Phone Number *')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Comments *')).toBeInTheDocument();
    expect(screen.getByText('Contact Now')).toBeInTheDocument();
  });
});
