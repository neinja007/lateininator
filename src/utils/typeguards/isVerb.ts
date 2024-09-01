import { Verb, Word } from '@/types/word';

export const isVerb = (word: Word | Verb): word is Verb => {
  return word.type === 'VERB';
};
