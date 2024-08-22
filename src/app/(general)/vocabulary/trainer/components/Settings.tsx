import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import ListSelection from './settings/ListSelection';
import WordTypeSelection from './settings/WordTypeSelection';
import WordCountSelection from './settings/WordCountSelection';
import PropertySelection from './settings/PropertySelection';
import { useNumberInput } from '@/hooks/useNumberInput';
import ContinueButton from '@/components/ContinueButton';
import { WordProperty, WordType, MainWordType } from '@/types/appConstants';
import { Stage } from '@/types/other';
import { Word } from '@/types/word';
import { transformWordTypeToMainWordType } from '@/utils/word_utils/transformWordTypeToMainWordType';
import { APP_CONSTANTS } from '@/constants/appConstants';

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
  currentSettingsStage: number;
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
  remainingWords,
  currentSettingsStage
}: SettingsProps) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [validWords, setValidWords] = useState<Word[]>([]);

  const [typesToCheck, setTypesToCheck] = useState<WordType[]>([...APP_CONSTANTS.mainWordTypes, 'other']);

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

  const maximumValidWords = validWords.filter(
    (word) => !typesToExclude.includes(transformWordTypeToMainWordType(word.type))
  ).length;

  const { value, inputValue, updateValue } = useNumberInput(maximumValidWords);

  useEffect(() => {
    updateWords(
      validWords.filter((word) => !typesToExclude.includes(transformWordTypeToMainWordType(word.type))).slice(0, value)
    );
  }, [typesToExclude, updateWords, validWords, value]);

  const enableStart =
    (currentSettingsStage === 1 && selectedIds.length > 0) ||
    remainingWords > 0 ||
    (currentSettingsStage === 3 && (wordPropertiesToCheck.length > 0 || checkTranslation));

  return (
    <>
      {currentSettingsStage === 1 && <ListSelection selectedIds={selectedIds} setSelectedIds={setSelectedIds} />}
      {currentSettingsStage === 2 && (
        <WordTypeSelection
          validWords={validWords}
          setValidWords={setValidWords}
          selectedIds={selectedIds}
          typesToCheck={typesToCheck}
          setTypesToCheck={setTypesToCheck}
          typesToExclude={typesToExclude}
        />
      )}
      {currentSettingsStage === 3 && (
        <PropertySelection
          checkTranslation={checkTranslation}
          setCheckTranslation={setCheckTranslation}
          typesToCheck={typesToCheck}
          wordPropertiesToCheck={wordPropertiesToCheck}
          setWordPropertiesToCheck={setWordPropertiesToCheck}
        />
      )}
      {currentSettingsStage === 4 && (
        <WordCountSelection
          checkIncorrectWordsAgain={checkIncorrectWordsAgain}
          setCheckIncorrectWordsAgain={setCheckIncorrectWordsAgain}
          inputValue={inputValue}
          updateValue={updateValue}
          maxWords={maximumValidWords}
        />
      )}
      <ContinueButton enableStart={enableStart} handleContinue={handleContinue} />
    </>
  );
};

export default Settings;
