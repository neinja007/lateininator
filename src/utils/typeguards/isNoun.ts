import { Noun, Word } from '@/types/word';

export const isNoun = (word: Word | Noun): word is Noun => {
  return word.type === 'NOUN';
};
