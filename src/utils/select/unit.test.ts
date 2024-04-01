import { Option } from 'components/select';
import { loadSelectOptions } from './load-select-options';

/**
 * Returns an array of options for the Select component, with the specified initial key and maximum number of options.
 *
 * @param initialKey - the key of the initial option
 * @param maxValue - the maximum number of options to return
 * @returns an array of options, with each option containing a key, value, and text property
 */
describe('loadSelectOptions', () => {
  it('should return an array of options with correct key, value, and text', () => {
    const initialKey = '0';
    const maxValue = 5;
    const expectedOptions: Option[] = [
      { key: initialKey, value: ' ', text: ' ' },
      { key: '1', value: '1', text: '1' },
      { key: '2', value: '2', text: '2' },
      { key: '3', value: '3', text: '3' },
      { key: '4', value: '4', text: '4' },
      { key: '5', value: '5', text: '5' }
    ];

    expect(loadSelectOptions(initialKey, maxValue)).toEqual(expectedOptions);
  });

  it('should return an empty array if maxValue is less than 1', () => {
    const initialKey = '0';
    const maxValue = 0;

    expect(loadSelectOptions(initialKey, maxValue)).toEqual([{ key: '0', value: ' ', text: ' ' }]);
  });
});
