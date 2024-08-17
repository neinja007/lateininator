import { endings } from '@/data/endings';
import { Word } from '@/types/word';

export const getLexicalForm = (word: Word) => {
  if (word.type === 'noun') {
    if (word.declension === '-' || word.gender === '-') return;
    return `-${endings.noun[word.declension][word.gender].sin[2]}, ${word.gender}.`;
  } else if (word.type === 'verb') {
    if (word.conjugation === '-') return;
    return `-${endings.verb[word.conjugation].ind.act.pres.sin[1]}, ${word.conjugation}.`;
  }
};
