// -- Types
import { Option } from 'components/select';

export const loadSelectOptions = (initialKey: string, maxValue: number): Option[] => {
  // -- starts with default value: no option selected
  const options: Option[] = [{ key: initialKey, value: '', text: '' }];

  for (let i = 1; i <= maxValue; i++) {
    const val = i.toString();
    options.push({ key: val, value: val, text: val });
  }

  return options;
};
