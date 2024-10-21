import { getRandomItem } from '@/utils/helpers/getRandomItem';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { WordCase } from '@/types/wordConstants';
import { IndividualInputForm } from '../types';

export const getRandomIndividualInputForm = (
  enabledWordCases: WordCase[],
  pluralOnly: boolean
): IndividualInputForm => ({
  numerus: pluralOnly ? 'plu' : getRandomItem([...WORD_CONSTANTS.numerus]),
  wordCase: getRandomItem([...enabledWordCases])
});
