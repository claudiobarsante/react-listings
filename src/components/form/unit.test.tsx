import { render, screen, waitFor, fireEvent } from 'utils/tests/test-utils';
import userEvent from '@testing-library/user-event';
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

  it('should render form elements', async () => {
    render(<Form />);
    const user = userEvent.setup();

    const fullNameElement = screen.getByPlaceholderText('Full Name *');
    await user.type(fullNameElement, 'John Doe');

    const emailElement = screen.getByPlaceholderText('Email *');
    await user.type(emailElement, 'test@email.com');

    const phoneNumberElement = screen.getByPlaceholderText('Phone Number *');
    await user.type(phoneNumberElement, '0123456789');

    const commentsElement = screen.getByPlaceholderText('Comments *');
    await user.type(commentsElement, 'This is a comment test');

    await waitFor(() => {
      expect(fullNameElement).toHaveValue('John Doe');
      expect(emailElement).toHaveValue('test@email.com');
      expect(phoneNumberElement).toHaveValue(123456789); // -- input for the phone number is a number
      expect(commentsElement).toHaveValue('This is a comment test');
    });

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /contact now/i }));

    await waitFor(() => {
      expect(screen.queryByRole('button', { name: /contact now/i })).toBeDisabled(); // Button should be disabled while submitting
    });

    // Expect the form to be reset after submission
    expect(fullNameElement).toHaveValue('');
    expect(emailElement).toHaveValue('');
    expect(phoneNumberElement).toHaveValue(null);
    expect(commentsElement).toHaveValue('');
  });

  it('displays validation errors for invalid form data', async () => {
    render(<Form />);

    const user = userEvent.setup();

    const fullNameElement = screen.getByPlaceholderText('Full Name *');
    await user.type(fullNameElement, ' ');

    const emailElement = screen.getByPlaceholderText('Email *');
    await user.type(emailElement, ' ');

    const phoneNumberElement = screen.getByPlaceholderText('Phone Number *');
    await user.type(phoneNumberElement, ' ');

    const commentsElement = screen.getByPlaceholderText('Comments *');
    await user.type(commentsElement, ' ');

    // Submit form without filling any fields
    fireEvent.click(screen.getByRole('button', { name: /contact now/i }));
    // -- 4 is the length of the array with all the <span> elements with the error messages for(fullname,email,phonenumber and comments)
    expect(await screen.findAllByRole('alert')).toHaveLength(4);
  });
});
