import Button from '@/components/Button';
import { APP_CONSTANTS } from '@/constants';
import { MainWordType, Word, WordProperty, WordType } from '@/types';
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import ListSelection from './settings/ListSelection';
import WordTypeSelection from './settings/WordTypeSelection';
import WordCountSelection from './settings/WordCountSelection';
import PropertySelection from './settings/PropertySelection';
import { Stage } from '@/types';
import Hr from '@/components/Hr';
import { useNumberInput } from '@/hooks/useNumberInput';
import { transformWordTypeToMainWordType } from '@/utils/wordUtils';

type SettingsProps = {
  checkTranslation: boolean;
  setCheckTranslation: Dispatch<SetStateAction<boolean>>;
  wordPropertiesToCheck: WordProperty[];
  setWordPropertiesToCheck: Dispatch<SetStateAction<WordProperty[]>>;
  checkIncorrectWordsAgain: boolean;
  setCheckIncorrectWordsAgain: Dispatch<SetStateAction<boolean>>;
  updateWords: (arg?: Word[]) => void;
  handleContinue: (arg?: Stage) => void;
  remainingWords: number;
};

const Settings = ({
  checkTranslation,
  setCheckTranslation,
  wordPropertiesToCheck,
  setWordPropertiesToCheck,
  checkIncorrectWordsAgain,
  handleContinue,
  setCheckIncorrectWordsAgain,
  updateWords,
  remainingWords
}: SettingsProps) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [validWords, setValidWords] = useState<Word[]>([]);

  const [typesToCheck, setTypesToCheck] = useState<WordType[]>([...APP_CONSTANTS.mainWordTypes, 'other']);

  const { value, inputValue, updateValue } = useNumberInput(validWords.length);

  const typesToExclude: (MainWordType | 'other')[] = useMemo(() => {
    const newTypesToExclude: (MainWordType | 'other')[] = APP_CONSTANTS.mainWordTypes.filter(
      (type) =>
        !APP_CONSTANTS.wordProperties[type].some((type) => wordPropertiesToCheck.includes(type)) && !checkTranslation
    );
    if (!checkTranslation) {
      newTypesToExclude.push('other');
    }
    return newTypesToExclude;
  }, [checkTranslation, wordPropertiesToCheck]);

  useEffect(() => {
    updateWords(
      validWords.slice(0, value).filter((word) => !typesToExclude.includes(transformWordTypeToMainWordType(word.type)))
    );
  }, [typesToExclude, updateWords, validWords, value]);

  const enableStart = remainingWords > 0 && (wordPropertiesToCheck.length > 0 || checkTranslation);

  return (
    <>
      <ListSelection selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
      <Hr />
      <WordTypeSelection
        validWords={validWords}
        setValidWords={setValidWords}
        selectedIds={selectedIds}
        typesToCheck={typesToCheck}
        setTypesToCheck={setTypesToCheck}
        typesToExclude={typesToExclude}
      />
      <Hr />
      <PropertySelection
        checkTranslation={checkTranslation}
        setCheckTranslation={setCheckTranslation}
        typesToCheck={typesToCheck}
        wordPropertiesToCheck={wordPropertiesToCheck}
        setWordPropertiesToCheck={setWordPropertiesToCheck}
      />
      <Hr />
      <WordCountSelection
        checkIncorrectWordsAgain={checkIncorrectWordsAgain}
        setCheckIncorrectWordsAgain={setCheckIncorrectWordsAgain}
        remainingWords={remainingWords}
        inputValue={inputValue}
        updateValue={updateValue}
      />
      <Button
        onClick={() => {
          handleContinue();
        }}
        className='w-full'
        disabled={!enableStart}
        color={enableStart ? 'green' : 'default'}
      >
        <span>{!enableStart ? 'Trainer kann nicht gestartet werden.' : 'Start'}</span>
      </Button>
    </>
  );
};

export default Settings;
