import Button from '@/components/Button';
import { APP_CONSTANTS } from '@/constants/appConstants';
import { COLORS } from '@/constants/other';
import { usePrimaryColor } from '@/hooks/database/queries/usePrimaryColor';
import { MainWordType, MainWordTypeWithOther, WordType } from '@/types/appConstants';
import { Word } from '@/types/word';
import { MAPPER } from '@/utils/other/mapper';
import { Dispatch, SetStateAction, useEffect } from 'react';

type WordTypeSelectionProps = {
  validWords: Word[];
  setValidWords: Dispatch<SetStateAction<Word[]>>;
  selectedWords: Word[];
  typesToCheck: WordType[];
  setTypesToCheck: Dispatch<SetStateAction<WordType[]>>;
  typesToExclude: MainWordTypeWithOther[];
};

const WordTypeSelection = ({
  validWords,
  setValidWords,
  selectedWords,
  typesToCheck,
  setTypesToCheck,
  typesToExclude
}: WordTypeSelectionProps) => {
  useEffect(() => {
    const possibleWords = selectedWords.filter(
      (word) =>
        typesToCheck.includes(word.type) ||
        (typesToCheck.includes('OTHER') && !APP_CONSTANTS.mainWordTypes.includes(word.type as MainWordType))
    );
    setValidWords(possibleWords);
  }, [selectedWords, setValidWords, typesToCheck]);

  const primaryColor = usePrimaryColor(true);

  return (
    <>
      <div className='mb-3 grid-cols-2 items-baseline sm:grid lg:grid-cols-3'>
        <p className='mb-2 mr-5 lg:col-span-2'>Wählen Sie aus, welche Wortarten abgefragt werden sollen:</p>
        <div className='grid flex-grow grid-cols-2 gap-x-4'>
          <Button
            color={
              APP_CONSTANTS.mainWordTypesWithOther.every((type) => typesToCheck.includes(type)) ? 'primary' : 'default'
            }
            onClick={() => setTypesToCheck([...APP_CONSTANTS.mainWordTypesWithOther])}
          >
            Alle auswählen
          </Button>
          <Button onClick={() => setTypesToCheck([])} color={typesToCheck.length === 0 ? 'primary' : 'default'}>
            Alle abwählen
          </Button>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
        {APP_CONSTANTS.mainWordTypesWithOther.map((type, i) => (
          <Button
            key={i}
            color={
              typesToCheck.includes(type)
                ? typesToExclude.includes(type as MainWordTypeWithOther)
                  ? 'orange'
                  : 'primary'
                : 'default'
            }
            onClick={() =>
              setTypesToCheck((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
            }
          >
            {MAPPER.extended.type.singular[type]}
          </Button>
        ))}
      </div>
      <p>
        <b className={COLORS[primaryColor()].text}>
          {validWords.length} von {selectedWords.length} Wörtern
        </b>{' '}
        stimmen mit den Wortarten überein.
      </p>
    </>
  );
};

export default WordTypeSelection;
