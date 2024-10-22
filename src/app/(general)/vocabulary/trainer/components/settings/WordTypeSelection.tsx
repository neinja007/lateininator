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
      <p>Wählen Sie aus, welche Wortarten abgefragt werden sollen:</p>
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
