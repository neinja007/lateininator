import { getRandomItem } from '@/utils/helpers/getRandomItem';
import { Person } from '@/types/wordConstants';
import { WORD_CONSTANTS } from '@/constants/wordConstants';

export const getRandomPossiblePerson = (checkImperative: boolean): Person => {
  return checkImperative && Math.random() < 0.04
    ? '4'
    : getRandomItem(WORD_CONSTANTS.person.filter((person) => person !== '4'));
};
