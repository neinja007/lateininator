import { ComparisonDegree } from '@/types/wordConstants';
import { getRandomItem } from '@/utils/helpers/getRandomItem';
import { TableInputForm } from '../types';
import { WORD_CONSTANTS } from '@/constants/wordConstants';

export const getRandomTableInputForm = (comparisonDegrees: ComparisonDegree[]): TableInputForm => ({
  comparison: getRandomItem(WORD_CONSTANTS.comparison),
  comparisonDegree: getRandomItem(comparisonDegrees)
});
