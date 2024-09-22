import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { TableInputValues } from '../types';

export const getAllTableInputValues = (value: string = '') =>
  WORD_CONSTANTS.numerus.reduce(
    (acc, curr) => ({ ...acc, [curr]: WORD_CONSTANTS.wordCase.reduce((acc, curr) => ({ ...acc, [curr]: value }), {}) }),
    {} as TableInputValues
  );
