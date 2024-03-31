import { forwardRef, useState, useRef } from 'react';
import mergeRefs from 'merge-refs';
import { formatPrice } from 'utils/format';

type SliderProps = {
  id: string;
  label: string;
  maxValue: number;
  onSliderValueChange: (id: string, selectedValue: string) => void;
};

/*About using forwardRef */
// -- use forwardRef, beacause in the <ListingsPage/> there's a function
// -- 'handleButtonResetClick()' that uses a ref to this component in order
// -- to reset(set value='0') the value of the <Slider/> component
/*About using another ref to the same component*/
// -- the primary purpose of inputRef here is to access the current value of the
// -- input element and update the sliderValue to display it in a <span> element next to the slider
const SliderComponent: React.ForwardRefRenderFunction<HTMLInputElement, SliderProps> = (
  { id, label, maxValue, onSliderValueChange },
  ref
) => {
  const [sliderValue, setSliderValue] = useState('0');
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setSliderValue(value);
    onSliderValueChange(id, value);
  }
  //todo: check why is not hidding the slider price
  const showSliderPrice: boolean = inputRef.current !== null && inputRef.current.value !== '0';

  return (
    <article className="relative flex w-full items-center justify-between gap-2 py-6 lg:w-96 lg:px-5">
      <label htmlFor={id} className="text-md text-nowrap font-medium text-zinc-700" aria-labelledby={id}>
        {label}
      </label>

      <input
        ref={mergeRefs(ref, inputRef)}
        aria-label={`${label.toLowerCase()}`}
        type="range"
        min="0"
        max={maxValue.toString()}
        step="100000"
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
        onChange={(e) => handleChange(e)}
      />
      <span hidden={!showSliderPrice} className="absolute right-2 top-2 text-sm text-zinc-700 lg:right-5">
        {formatPrice(Number(sliderValue))}
      </span>
    </article>
  );
};

export const Slider = forwardRef(SliderComponent);
