import { endings } from '@/constants/endings';
import { Word } from '@/types/word';
import { isNoun } from '../typeguards/isNoun';
import { isVerb } from '../typeguards/isVerb';
import { isAdjective } from '../typeguards/isAdjective';

export const getLexicalForm = (word: Word) => {
  console.log(word);
  if (isNoun(word)) {
    if (word.noun.declension === 'NONE' || word.noun.gender === 'NONE') return;
    return `-${endings.noun[word.noun.declension][word.noun.gender].sin[2]}, ${word.noun.gender}.`;
  } else if (isVerb(word)) {
    if (word.verb.conjugation === 'NONE') return;
    return `-${endings.verb[word.verb.conjugation].ind.act.pres.sin[1]}, ${word.verb.conjugation}.`;
  } else if (isAdjective(word)) {
    if (word.adjective.comparison === 'NONE') return;
    return `-${endings.adjective[word.adjective.comparison].M.pos.sin[2]}, ${word.adjective.comparison}.`;
  }
};
