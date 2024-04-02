import { useState, useEffect, useId, memo, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { loadSelectOptions } from 'utils/select/load-select-options';

type SelectProps = {
  id: 'bedrooms' | 'bathrooms' | 'parking';
  label: string;
  maxValue: number;
  onSelectValueChange: (id: string, selectedValue: string) => void;
};

export type Option = {
  key: string;
  value: string;
  text: string;
};

/*About using forwardRef */
// -- use forwardRef, beacause in the <ListingsPage/> there's a function
// -- 'handleButtonResetClick()' that uses a ref to this component in order
// -- to reset(set value='') the value of the <Select/> component

const SelectComponent: React.ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { id, label, maxValue, onSelectValueChange },
  ref
) => {
  const [option, setOption] = useState<Option[]>([]);
  const initialKey = useId();

  useEffect(() => {
    // -- use the function loadSelectOptions to populate the select with options from 1 to the maxValue
    // -- the initial value will be empty, no option selected
    const options: Option[] = loadSelectOptions(initialKey, maxValue);
    setOption(options);
  }, [initialKey, maxValue]);

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;
    onSelectValueChange(id, value);
  }

  return (
    <article className="flex items-center justify-between gap-2">
      <label className="text-md font-medium text-zinc-700" aria-label={`${label.toLowerCase()}`}>
        {label}
      </label>
      <select
        ref={ref}
        aria-label={`${label.toLowerCase()}`}
        className={twMerge(
          'h-[35px] rounded-sm border border-zinc-300 bg-gray-200 font-medium outline-none',
          'mr-3 p-1 text-sm text-zinc-700',
          'focus:border-zinc-400 focus:ring-4 focus:ring-zinc-200'
        )}
        onChange={(e) => handleChange(e)}
      >
        {option.length > 0 &&
          option.map((o) => (
            <option key={o.key} value={o.value}>
              {o.text}
            </option>
          ))}
      </select>
    </article>
  );
};

export const Select = forwardRef(SelectComponent);
