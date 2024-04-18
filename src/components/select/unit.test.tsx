import { render, screen, fireEvent } from 'utils/tests/test-utils';

import { Select } from '.';

// Mock onSelectValueChange function
const onSelectValueChange = jest.fn();
describe('Select', () => {
  it('should render the component', () => {
    render(<Select id="bedrooms" label="Bedrooms" maxValue={5} onSelectValueChange={onSelectValueChange} />);

    const selectElement = screen.getByRole('combobox');
    // Check option text
    expect(selectElement.children[0].textContent).toBe(' '); // empty option text
    expect(selectElement.children[1].textContent).toBe('1');
    expect(selectElement.children[2].textContent).toBe('2');
    expect(selectElement.children[3].textContent).toBe('3');
    expect(selectElement.children[4].textContent).toBe('4');
    expect(selectElement.children[5].textContent).toBe('5');
  });

  it('should call onSelectValueChange with the right parameters when an option is selected', () => {
    render(<Select id="bedrooms" label="Bedrooms" maxValue={5} onSelectValueChange={onSelectValueChange} />);

    const selectElement = screen.getByRole('combobox');

    fireEvent.change(selectElement, { target: { value: '5' } });

    expect(onSelectValueChange).toHaveBeenCalledTimes(1);
    expect(onSelectValueChange).toHaveBeenCalledWith('bedrooms', '5');
  });
});
