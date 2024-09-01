import { Word } from '@/types/word';
import { MAPPER } from '@/utils/other/mapper';
import { isAdjective } from '@/utils/typeguards/isAdjective';
import { isNoun } from '@/utils/typeguards/isNoun';
import { isVerb } from '@/utils/typeguards/isVerb';

type ComponentNameProps = { word: Word };

const ComponentName = ({ word }: ComponentNameProps) => {
  let info = '';
  if (isNoun(word)) {
    info = `${word.noun.declension === 'NONE' ? 'Keine Deklination' : MAPPER.extended.declension[word.noun.declension]} - ${
      word.noun.gender === 'NONE' ? 'Kein Geschlecht' : MAPPER.extended.gender[word.noun.gender]
    }`;
  } else if (isVerb(word)) {
    info = word.verb.conjugation === 'NONE' ? 'Keine Konjugation' : MAPPER.extended.conjugation[word.verb.conjugation];
  } else if (isAdjective(word)) {
    info =
      word.adjective.comparison === 'NONE'
        ? 'Keine Deklination'
        : MAPPER.extended.comparison[word.adjective.comparison];
  }

  return (
    <div className='mb-2'>
      <p className='text-center font-bold'>{info}</p>
    </div>
  );
};

export default ComponentName;
