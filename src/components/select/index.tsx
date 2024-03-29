import { useState, useEffect, useId, memo, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { loadSelectOptions } from 'utils/select/load-select-options';

type SelectProps = {
  id: 'bedrooms' | 'bathrooms' | 'parking';
  label: string;
  maxValue: number;
  handleSelectChange: (id: string, selectedValue: string) => void;
};

export type Option = {
  key: string;
  value: string;
  text: string;
};
const SelectComponent: React.ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { id, label, maxValue, handleSelectChange },
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
    handleSelectChange(id, value);
  }

  console.log('---rederizou---', id);

  return (
    <article>
      <label>
        {label}
        <select
          ref={ref}
          aria-label={`select ${label.toLowerCase()}`}
          className={twMerge(
            'rounded-lg border border-gray-300 bg-gray-50',
            'p-2.5 text-sm text-gray-900',
            'focus:border-blue-500 focus:ring-blue-500'
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
      </label>
    </article>
  );
};

//todo: check why is rerendering if the props didn't change, something to do with refs
export const Select = memo(forwardRef(SelectComponent), (prevProps, nextProps) => {
  return Object.is(prevProps.maxValue, nextProps.maxValue);
});
