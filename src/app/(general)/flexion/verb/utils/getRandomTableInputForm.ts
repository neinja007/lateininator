import { Voice, Modus } from '@/types/wordConstants';
import { getRandomItem } from '@/utils/helpers/getRandomItem';

export const getRandomTableInputForm = (voices: Voice[], modi: Modus[]) => ({
  voice: getRandomItem(voices),
  modus: getRandomItem(modi)
});
