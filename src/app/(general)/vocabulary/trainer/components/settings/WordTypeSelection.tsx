import Button from '@/components/Button';
import { APP_CONSTANTS } from '@/constants/appConstants';
import { words } from '@/data/words';
import { MainWordType, WordType } from '@/types/appConstants';
import { Word } from '@/types/word';
import { MAPPER } from '@/utils/other/mapper';
import { Dispatch, SetStateAction, useEffect } from 'react';

type WordTypeSelectionProps = {
  validWords: Word[];
  setValidWords: Dispatch<SetStateAction<Word[]>>;
  selectedIds: number[];
  typesToCheck: WordType[];
  setTypesToCheck: Dispatch<SetStateAction<WordType[]>>;
  typesToExclude: (MainWordType | 'other')[];
};

const WordTypeSelection = ({
  validWords,
  setValidWords,
  selectedIds,
  typesToCheck,
  setTypesToCheck,
  typesToExclude
}: WordTypeSelectionProps) => {
  useEffect(() => {
    const possibleWords = words.filter(
      (word) =>
        selectedIds.includes(word.id) &&
        (typesToCheck.includes(word.type) ||
          (typesToCheck.includes('other') && !APP_CONSTANTS.mainWordTypes.includes(word.type as any)))
    );
    setValidWords(possibleWords);
  }, [selectedIds, setValidWords, typesToCheck]);

  return (
    <>
      <p>Wähle aus, welche Wortarten abgefragt werden sollen:</p>
      <div className='grid grid-cols-4 gap-4'>
        {([...APP_CONSTANTS.mainWordTypes, 'other'] as WordType[]).map((type, i) => (
          <Button
            key={i}
            color={
              typesToCheck.includes(type)
                ? typesToExclude.includes(type as MainWordType | 'other')
                  ? 'orange'
                  : 'blue'
                : 'default'
            }
            onClick={() =>
              setTypesToCheck((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
            }
          >
            {MAPPER.extended.type[type]}
          </Button>
        ))}
      </div>
      <p>
        <b className='text-blue-500'>
          {validWords.length} von {selectedIds.length} Wörtern
        </b>{' '}
        stimmen mit den Wortarten überein.
      </p>
    </>
  );
};

export default WordTypeSelection;
