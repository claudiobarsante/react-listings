import { render, screen, fireEvent } from 'utils/tests/test-utils';
import { Slider, SliderProps } from '.';

describe('Slider component', () => {
  const onSliderValueChangeMock = jest.fn();
  const sliderProps: SliderProps = {
    id: 'price',
    label: 'Price',
    maxValue: 1000000,
    onSliderValueChange: onSliderValueChangeMock
  };

  it('renders the slider', () => {
    render(<Slider {...sliderProps} />);
    const labelElement = screen.getByText(/price/i);
    const inputElement = screen.getByRole('slider');

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it('calls onSliderValueChange handler when slider value changes', () => {
    render(<Slider {...sliderProps} />);
    const inputElement = screen.getByRole('slider');

    fireEvent.change(inputElement, { target: { value: '500000' } });

    expect(onSliderValueChangeMock).toHaveBeenCalledTimes(1);
    expect(onSliderValueChangeMock).toHaveBeenCalledWith('price', '500000');
  });
});
