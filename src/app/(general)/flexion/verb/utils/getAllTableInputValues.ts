import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { TableInputValues } from '../types';
import { Tense } from '@/types/wordConstants';

export const getAllTableInputValues = (getValue: (tense: Tense) => string = () => '') =>
  WORD_CONSTANTS.tense.reduce(
    (acc, currTense) => ({
      ...acc,
      [currTense]: WORD_CONSTANTS.numerus.reduce(
        (acc, curr) => ({
          ...acc,
          [curr]: WORD_CONSTANTS.person.reduce((acc, curr) => ({ ...acc, [curr]: getValue(currTense) }), {})
        }),
        {}
      )
    }),
    {} as TableInputValues
  );
