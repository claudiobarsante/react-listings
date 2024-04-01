import { render, screen, waitFor } from 'utils/tests/test-utils';
import userEvent from '@testing-library/user-event';
import { FormTextArea } from '.';

describe('FormTextArea component', () => {
  it('renders with placeholder', () => {
    render(<FormTextArea error="" placeholder="hey you" />);
    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument();
  });

  it('changes its value when typing', async () => {
    const onInput = jest.fn();
    render(<FormTextArea error="" onChange={onInput} />);

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });
    // retrieves the first argument passed to the onInput mock function during its first call
    const eventObject = onInput.mock.calls[0][0];
    const receivedValue = eventObject.target.value;

    expect(receivedValue).toBe(text);
  });

  it('renders with error prop', () => {
    render(<FormTextArea error="Error message" />);

    expect(screen.getByText('Error message')).toBeInTheDocument();
  });
});
