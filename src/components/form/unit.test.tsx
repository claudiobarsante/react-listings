import { render, screen } from 'utils/tests/test-utils';
import userEvent from '@testing-library/user-event';
import { Form } from '.';
import { Toaster } from 'sonner';

describe('Form component', () => {
  const renderToaster = () => {
    render(
      <>
        <Toaster richColors />
        <Form />;
      </>
    );

    return {
      fullNameElement: screen.getByPlaceholderText('Full Name *'),
      emailElement: screen.getByPlaceholderText('Email *'),
      phoneNumberElement: screen.getByPlaceholderText('Phone Number *'),
      commentsElement: screen.getByPlaceholderText('Comments *'),
      buttonElement: screen.getByRole('button', { name: /contact now/i }),
      user: userEvent.setup()
    };
  };

  it('should render form elements, show toast message after submit button click and reset inputs', async () => {
    const { fullNameElement, emailElement, phoneNumberElement, commentsElement, buttonElement, user } = renderToaster();

    await user.type(fullNameElement, 'John Doe');
    await user.type(emailElement, 'test@email.com');
    await user.type(phoneNumberElement, '0123456789');
    await user.type(commentsElement, 'This is a comment test');

    expect(fullNameElement).toHaveValue('John Doe');
    expect(emailElement).toHaveValue('test@email.com');
    expect(phoneNumberElement).toHaveValue(123456789); // -- input for the phone number is a number
    expect(commentsElement).toHaveValue('This is a comment test');

    // Submit form
    await user.click(buttonElement);

    // -- show toast message
    const message = await screen.findByText(/Message sent successfully/i);
    expect(message).toBeInTheDocument();

    // Expect the form to be reset after submission
    expect(fullNameElement).toHaveValue('');
    expect(emailElement).toHaveValue('');
    expect(phoneNumberElement).toHaveValue(null);
    expect(commentsElement).toHaveValue('');
  });

  it('displays validation errors for invalid form data', async () => {
    const { fullNameElement, emailElement, phoneNumberElement, commentsElement, buttonElement, user } = renderToaster();

    await user.type(fullNameElement, ' ');
    await user.type(emailElement, ' ');
    await user.type(phoneNumberElement, ' ');
    await user.type(commentsElement, ' ');

    // Submit form without filling any fields
    await user.click(buttonElement);
    // -- 4 is the length of the array with all the <span> elements with the error messages for(fullname,email,phonenumber and comments)
    expect(await screen.findAllByRole('alert')).toHaveLength(4);
  });
});
