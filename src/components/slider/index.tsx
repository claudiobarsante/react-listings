import { forwardRef, useRef } from 'react';
import mergeRefs from 'merge-refs';

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
// -- input element and display it in a <span> element next to the slider
const SliderComponent: React.ForwardRefRenderFunction<HTMLInputElement, SliderProps> = (
  { id, label, maxValue, onSliderValueChange },
  ref
) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    onSliderValueChange(id, value);
  }

  return (
    <article className="relative flex w-96 items-center justify-start gap-2 border border-black py-6">
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
      <span className="absolute right-2 top-2 text-sm text-zinc-700">{inputRef.current && inputRef.current.value}</span>
    </article>
  );
};

export const Slider = forwardRef(SliderComponent);
