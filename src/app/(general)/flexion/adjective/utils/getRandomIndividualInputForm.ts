import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { ComparisonDegree, Gender, WordCase } from '@/types/wordConstants';
import { getRandomItem } from '@/utils/helpers/getRandomItem';
import { IndividualInputForm } from '../types';

export const getRandomIndividualInputForm = (
  genders: Gender[],
  comparisonDegrees: ComparisonDegree[],
  enabledWordCases: WordCase[]
): IndividualInputForm => ({
  adverb: genders.length === 0 || Math.random() < 0.04,
  comparisonDegree: getRandomItem(comparisonDegrees),
  numerus: getRandomItem([...WORD_CONSTANTS.numerus]),
  wordCase: getRandomItem([...enabledWordCases]),
  gender: getRandomItem(genders)
});
