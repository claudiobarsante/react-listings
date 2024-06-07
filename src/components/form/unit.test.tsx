import { faker } from '@faker-js/faker';
import userEvent from '@testing-library/user-event';
import { Toaster } from 'sonner';
import { fireEvent, render, screen } from 'utils/tests/test-utils';
import { Form } from '.';

type User = {
  fullName: string;
  email: string;
  phoneNumber: string;
  comments: string;
};

const createRandomUser = (): User => {
  return {
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    phoneNumber: '987-90-123', //faker.phone.number(),
    comments: faker.lorem.sentence()
  };
};
describe('Form component', () => {
  const user = userEvent.setup();

  const renderComponent = () => {
    render(
      <>
        <Toaster richColors />
        <Form />;
      </>
    );

    return {
      waitForFormToLoad: async () => {
        await screen.findByRole('form');
        const fullNameInput = screen.getByPlaceholderText('Full Name *');
        const emailInput = screen.getByPlaceholderText('Email *');
        const phoneNumberInput = screen.getByPlaceholderText('Phone Number *');
        const commentsInput = screen.getByPlaceholderText('Comments *');
        const button = screen.getByRole('button', { name: /contact now/i });

        const fillFormFields = async (randomUser: User) => {
          await user.type(fullNameInput, randomUser.fullName || '{tab}'); //--type a TAB character if the given string was empty
          await user.type(emailInput, randomUser.email || '{tab}');
          await user.type(phoneNumberInput, randomUser.phoneNumber || '{tab}');
          await user.type(commentsInput, randomUser.comments || '{tab}');
        };

        return {
          fullNameInput,
          emailInput,
          phoneNumberInput,
          commentsInput,
          button,
          fillFormFields
        };
      }
    };
  };

  it('should render form fields', async () => {
    const { waitForFormToLoad } = renderComponent();
    const { fullNameInput, emailInput, phoneNumberInput, commentsInput } = await waitForFormToLoad();

    expect(fullNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneNumberInput).toBeInTheDocument();
    expect(commentsInput).toBeInTheDocument();
  });

  it('should populate form fields', async () => {
    const { waitForFormToLoad } = renderComponent();
    const { fullNameInput, emailInput, phoneNumberInput, commentsInput, fillFormFields } = await waitForFormToLoad();

    const randomUser = createRandomUser();

    await fillFormFields(randomUser);
    expect(fullNameInput).toHaveValue(randomUser.fullName);
    expect(emailInput).toHaveValue(randomUser.email);
    expect(phoneNumberInput).toHaveValue(randomUser.phoneNumber);
    expect(commentsInput).toHaveValue(randomUser.comments);
  });

  it.each([
    {
      scenario: 'is empty',
      fullName: '',
      errorMessage: 'Full name is required'
    },
    {
      scenario: 'is less than 5 characters',
      fullName: 'Joe',
      errorMessage: 'Full name must be at least 5 characters'
    },
    {
      scenario: 'is more than 80 characters',
      fullName: faker.string.alpha({ length: 81 }),
      errorMessage: 'Full name must be less than 80 characters'
    }
  ])('should display an error if name $scenario', async ({ fullName, errorMessage }) => {
    const { waitForFormToLoad } = renderComponent();
    const { button, fillFormFields } = await waitForFormToLoad();

    const randomUser = createRandomUser();
    const updatedUser = { ...randomUser, fullName };
    await fillFormFields(updatedUser);

    await user.click(button);
    expect(await screen.findByText(errorMessage)).toBeInTheDocument();
  });

  it.each([
    {
      scenario: 'is empty',
      email: '',
      errorMessage: 'E-mail is required'
    },
    {
      scenario: 'is an invalid email address',
      email: 'Joe1234',
      errorMessage: 'Invalid email address'
    }
  ])('should display an error if email $scenario', async ({ email, errorMessage }) => {
    const { waitForFormToLoad } = renderComponent();
    const { button, fillFormFields } = await waitForFormToLoad();

    const randomUser = createRandomUser();
    const updatedUser = { ...randomUser, email };
    await fillFormFields(updatedUser);

    await user.click(button);
    expect(await screen.findByText(errorMessage)).toBeInTheDocument();
  });

  it.each([
    {
      scenario: 'is empty',
      phoneNumber: '',
      errorMessage: 'Phone number is required'
    },
    {
      scenario: 'is an invalid phoneNumber',
      phoneNumber: 'Joe1234',
      errorMessage: 'Only numbers, spaces, and hyphens are allowed'
    }
  ])('should display an error if phone number $scenario', async ({ phoneNumber, errorMessage }) => {
    const { waitForFormToLoad } = renderComponent();
    const { button, fillFormFields } = await waitForFormToLoad();

    const randomUser = createRandomUser();
    const updatedUser = { ...randomUser, phoneNumber };
    await fillFormFields(updatedUser);

    await user.click(button);
    expect(await screen.findByText(errorMessage)).toBeInTheDocument();
  });

  it.each([
    {
      scenario: 'are empty',
      comments: '',
      errorMessage: 'Comments are required'
    },
    {
      scenario: 'are less than 5 characters',
      comments: 'abc',
      errorMessage: 'Comments must be at least 5 characters'
    }
  ])('should display an error if comments $scenario', async ({ comments, errorMessage }) => {
    const { waitForFormToLoad } = renderComponent();
    const { button, fillFormFields } = await waitForFormToLoad();

    const randomUser = createRandomUser();
    const updatedUser = { ...randomUser, comments };
    await fillFormFields(updatedUser);

    await user.click(button);
    expect(await screen.findByText(errorMessage)).toBeInTheDocument();
  });

  it('should display a toast notification for correct submission', async () => {
    const { waitForFormToLoad } = renderComponent();
    const { fillFormFields, button } = await waitForFormToLoad();

    const randomUser = createRandomUser();
    await fillFormFields(randomUser);

    await user.click(button);

    expect(await screen.findByText(/Message sent successfully/i)).toBeInTheDocument();
  });

  it('should reset the form after submission', async () => {
    const { waitForFormToLoad } = renderComponent();

    const { fullNameInput, emailInput, phoneNumberInput, commentsInput, fillFormFields, button } =
      await waitForFormToLoad();
    const randomUser = createRandomUser();
    await fillFormFields(randomUser);

    await user.click(button);

    expect(fullNameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(phoneNumberInput).toHaveValue('');
    expect(commentsInput).toHaveValue('');
  });

  it('should disable the submit button upon submission', async () => {
    const { waitForFormToLoad } = renderComponent();

    const { fillFormFields, button } = await waitForFormToLoad();
    const randomUser = createRandomUser();
    await fillFormFields(randomUser);

    fireEvent.submit(screen.getByRole('form'));

    expect(button).toBeDisabled();
  });
});
