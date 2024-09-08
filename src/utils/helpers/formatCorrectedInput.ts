import { parseValue } from './parseValue';

export const formatCorrectedInput = (value: string, correctValue: string) => {
  return parseValue(value) ? correctValue + ' (' + parseValue(value) + ')' : correctValue;
};
