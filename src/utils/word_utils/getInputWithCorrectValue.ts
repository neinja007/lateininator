import { capitalizeFirstLetter } from '../helpers/capitalizeFirstLetter';
import { compareValues } from './compareValues';

export const getInputWithCorrectValue = (
  input: string,
  correctValue: string | string[],
  translation?: true
): string => {
  if (translation && typeof correctValue === 'object') {
    correctValue = correctValue.map((value) => capitalizeFirstLetter(value));
  }
  const formattedValue = typeof correctValue === 'object' ? correctValue.join(', ') : correctValue;
  if (compareValues(input, correctValue, translation) && !translation && typeof correctValue === 'string') {
    return correctValue;
  } else if (input.trim() === '') {
    return `(${formattedValue})`;
  } else {
    return `${input} (${formattedValue})`;
  }
};
