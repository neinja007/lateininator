import { getRandomItem } from '@/utils/helpers/getRandomItem';

import { Modus, Person, Tense } from '@/types/wordConstants';

export const getRandomPossibleTense = (person: Person, modus: Modus, tenses: Tense[]) => {
  return person === '4'
    ? 'pres'
    : modus === 'kon'
      ? getRandomItem(tenses.filter((tense) => tense !== 'fut1'))
      : getRandomItem(tenses);
};
