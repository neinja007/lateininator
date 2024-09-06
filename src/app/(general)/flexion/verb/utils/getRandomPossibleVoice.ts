import { getRandomItem } from '@/utils/helpers/getRandomItem';
import { Voice } from '@/types/wordConstants';

export const getRandomPossibleVoice = (person: string, voices: Voice[]): Voice => {
  return person === '4' ? 'act' : getRandomItem(voices);
};
