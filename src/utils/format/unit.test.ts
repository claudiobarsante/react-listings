import { formatDate, formatPrice } from '.';

/**
 * Formats a price as a string.
 *
 * @param price - the price to format
 * @returns the formatted price, or an empty string if the price is falsy
 */
describe('formatPrice', () => {
  it('should return an empty string if price is falsy', () => {
    expect(formatPrice(0)).toEqual('');
  });

  it('should return formatted price for various lengths', () => {
    expect(formatPrice(123)).toEqual('$ 123');
    expect(formatPrice(1234)).toEqual('$ 1 234');
    expect(formatPrice(12345)).toEqual('$ 12 345');
    expect(formatPrice(123456)).toEqual('$ 123 456');
    expect(formatPrice(1234567)).toEqual('$ 1,234 567');
    expect(formatPrice(12345678)).toEqual('$ 12,345 678');
    expect(formatPrice(123456789)).toEqual('$ 123,456 789');
  });
});

/**
 * Formats a date as a string.
 *
 * @param date - the date to format
 * @returns the formatted date, or "error" if the date is invalid
 */
describe('formatDate', () => {
  it('should format a valid date correctly', () => {
    expect(formatDate('2023-01-01 07:41:13')).toEqual('Jan 01, 2023');
    expect(formatDate('2023-02-02 12:30:00')).toEqual('Feb 02, 2023');
    expect(formatDate('2023-03-03 18:15:45')).toEqual('Mar 03, 2023');
    expect(formatDate('2023-04-04 22:05:00')).toEqual('Abr 04, 2023');
    expect(formatDate('2023-05-05 04:00:01')).toEqual('May 05, 2023');
    expect(formatDate('2023-06-06 10:20:30')).toEqual('Jun 06, 2023');
    expect(formatDate('2023-07-07 15:50:20')).toEqual('Jul 07, 2023');
    expect(formatDate('2023-08-08 09:12:11')).toEqual('Aug 08, 2023');
    expect(formatDate('2023-09-09 14:33:55')).toEqual('Sep 09, 2023');
    expect(formatDate('2023-10-10 16:45:59')).toEqual('Oct 10, 2023');
    expect(formatDate('2023-11-11 11:55:25')).toEqual('Nov 11, 2023');
    expect(formatDate('2023-12-12 20:02:40')).toEqual('Dec 12, 2023');
  });

  it('should return "#error#" for an invalid date', () => {
    expect(formatDate('invalid date')).toEqual('#error#');
  });
});
