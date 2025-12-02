import { Word } from '@/types/word';
import { isNoun } from '../typeguards/isNoun';
import { isVerb } from '../typeguards/isVerb';
import { isAdjective } from '../typeguards/isAdjective';
import { ComparisonDegree } from '@/types/wordConstants';

export const getBase = (
  word: Word,
  info: { baseType?: 'word' | 'present' | 'perfect' | 'participle'; comparisonDegree?: ComparisonDegree }
): string => {
  const { baseType, comparisonDegree } = info;
  let base = '';

  if (isNoun(word)) {
    if (word.noun.declension === 'O') {
      base = word.noun.genitive.substring(0, word.noun.genitive.length - (word.noun.pluralOnly ? 4 : 1));
    } else {
      base = word.noun.genitive.substring(0, word.noun.genitive.length - (word.noun.pluralOnly ? 4 : 2));
    }
  } else if (isVerb(word)) {
    if (baseType === 'present' || baseType === 'word') {
      base = word.name.substring(0, word.name.length - 3);
    } else if (baseType === 'perfect') {
      base = word.verb.perfect.substring(0, word.verb.perfect.length - 1);
    } else if (baseType === 'participle') {
      base = word.verb.participle.substring(0, word.verb.participle.length - 2);
    }
  } else if (isAdjective(word)) {
    if (!comparisonDegree) {
      throw new Error('Error: Invalid word properties were passed to getBase()');
    }
    const customBase = word.exception[comparisonDegree]?.base;
    if (customBase) return customBase;
    if (comparisonDegree === 'sup') {
      base = word.name.substring(0, word.name.length - 2);
      if (word.name.endsWith('er')) {
        base += 'errim';
      } else if (word.name.endsWith('ilis')) {
        base += 'illim';
      } else {
        base += 'issim';
      }
    } else {
      base = word.adjective.femininum.substring(
        0,
        word.adjective.femininum.length - (word.adjective.comparison === 'A_O' ? 1 : 2)
      );
    }
  }
  return base;
};
