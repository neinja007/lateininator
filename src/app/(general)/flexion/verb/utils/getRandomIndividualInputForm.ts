import { getRandomItem } from '@/utils/helpers/getRandomItem';
import { getRandomPossiblePerson } from './getRandomPossiblePerson';
import { getRandomPossibleTense } from './getRandomPossibleTense';
import { getRandomPossibleVoice } from './getRandomPossibleVoice';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { Modus, Tense, Voice } from '@/types/wordConstants';
export const getRandomIndividualInputForm = (
  checkImperative: boolean,
  modi: Modus[],
  tenses: Tense[],
  voices: Voice[]
) => {
  const person = getRandomPossiblePerson(checkImperative);
  const modus = person === '4' ? 'ind' : getRandomItem(modi);
  const tense = getRandomPossibleTense(person, modus, tenses);

  return {
    person: person,
    voice: getRandomPossibleVoice(person, voices),
    modus: modus,
    tense: tense,
    numerus: getRandomItem([...WORD_CONSTANTS.numerus])
  };
};
