import Skeleton from '@/components/Skeleton';
import { Word } from '@/types/word';
import { MAPPER } from '@/utils/other/mapper';
import { isAdjective } from '@/utils/typeguards/isAdjective';
import { isNoun } from '@/utils/typeguards/isNoun';
import { isVerb } from '@/utils/typeguards/isVerb';

type TableInformationProps = { word: Word; loading?: false };
type TableInformationLoadingProps = { word?: undefined; loading: true };

const TableInformation = ({ word, loading }: TableInformationProps | TableInformationLoadingProps) => {
  let info = '';
  if (loading) {
    return (
      <div className='mb-2'>
        <div className='flex justify-center'>
          <Skeleton pulse customSize className='h-6 w-40' />
        </div>
      </div>
    );
  }
  if (isNoun(word)) {
    info = `${word.noun.declension === 'NONE' ? 'Keine Deklination' : MAPPER.extended.declension[word.noun.declension]} - ${
      word.noun.gender === 'NONE' ? 'Kein Geschlecht' : MAPPER.extended.gender[word.noun.gender]
    }`;
  } else if (isVerb(word)) {
    info = word.verb.conjugation === 'NONE' ? 'Keine Konjugation' : MAPPER.extended.conjugation[word.verb.conjugation];
  } else if (isAdjective(word)) {
    info =
      word.adjective.comparison === 'NONE'
        ? 'Keine Komparation'
        : MAPPER.extended.comparison[word.adjective.comparison];
  }

  return (
    <div className='mb-2'>
      <p className='text-center font-bold'>{info}</p>
    </div>
  );
};

export default TableInformation;
