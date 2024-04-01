type FormatType = {
  [key: number]: string;
};

export const formatPrice = (price: number): string => {
  if (!price) return '';

  const converted: string = price.toString();
  const length: number = converted.length;
  // -- edge case for larger prices
  if (length > 9) return `$ ${converted}`;

  const format: FormatType = {
    3: `$ ${converted}`,
    4: `$ ${converted[0]} ${converted.slice(1)}`,
    5: `$ ${converted.slice(0, 2)} ${converted.slice(2)}`,
    6: `$ ${converted.slice(0, 3)} ${converted.slice(3)}`,
    7: `$ ${converted[0]},${converted.slice(1, 4)} ${converted.slice(4)}`,
    8: `$ ${converted.slice(0, 2)},${converted.slice(2, 5)} ${converted.slice(5)}`,
    9: `$ ${converted.slice(0, 3)},${converted.slice(3, 6)} ${converted.slice(6)}`
  };

  return format[length];
};

const MONTHS_ABBREVIATIONS = ['Jan', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const formatDate = (date: string): string => {
  const parsed = Date.parse(date);
  if (isNaN(parsed)) return '#error#';

  let output = '';

  try {
    const currentDate: Date = new Date(date);
    const month: number = currentDate.getMonth();
    const monthAbbreviation = MONTHS_ABBREVIATIONS[month];
    const day = String(currentDate.getDate()).padStart(2, '0');

    const year = currentDate.getFullYear();

    output = `${monthAbbreviation} ${day}, ${year}`;
  } catch (error) {
    output = '#error#';
  }

  return output;
};
