import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { TableInputValues } from '../types';

export const getAllTableInputValues = (value: string = '') => ({
  ...(WORD_CONSTANTS.gender.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: WORD_CONSTANTS.numerus.reduce(
        (acc, cur) => ({ ...acc, [cur]: WORD_CONSTANTS.wordCase.reduce((acc, cur) => ({ ...acc, [cur]: value }), {}) }),
        {}
      )
    }),
    {}
  ) as TableInputValues),
  adverb: ''
});
