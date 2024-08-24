import { Word } from '@/types/word';

export const getBase = (
  word: Word,
  info: { baseType?: 'word' | 'present' | 'perfect' | 'participle'; superlative?: boolean }
): string => {
  const { baseType, superlative } = info;
  let base = '';

  if (word.type === 'noun') {
    if (word.declension === 'o') {
      base = word.genitive.substring(0, word.genitive.length - (word.pluralOnly ? 4 : 1));
    } else {
      base = word.genitive.substring(0, word.genitive.length - 2);
    }
  } else if (word.type === 'verb') {
    if (baseType === 'present' || baseType === 'word') {
      base = word.word.substring(0, word.word.length - 3);
    } else if (baseType === 'perfect') {
      base = word.perfect.substring(0, word.perfect.length - 1);
    } else if (baseType === 'participle') {
      base = word.participle.substring(0, word.participle.length - 2);
    }
  } else if (word.type === 'adjective') {
    if (superlative) {
      base = word.word.substring(0, word.word.length - 2);
      if (word.word.endsWith('er')) {
        base += 'errim';
      } else if (word.word.endsWith('ilis')) {
        base += 'illim';
      } else {
        base += 'issim';
      }
    } else {
      base = word.femininum.substring(0, word.femininum.length - (word.comparison === 'a_o' ? 1 : 2));
    }
  }
  return base;
};
