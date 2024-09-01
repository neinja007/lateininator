import { Adjective, Word } from '@/types/word';

export const isAdjective = (word: Word | Adjective): word is Adjective => {
  return word.type === 'ADJECTIVE';
};
