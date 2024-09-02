import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import ListSelection from './settings/ListSelection';
import WordTypeSelection from './settings/WordTypeSelection';
import WordCountSelection from './settings/WordCountSelection';
import PropertySelection from './settings/PropertySelection';
import { useNumberInput } from '@/hooks/useNumberInput';
import ContinueButton from '@/components/ContinueButton';
import { WordProperty, WordType, MainWordTypeWithOther } from '@/types/appConstants';
import { Stage } from '@/types/other';
import { Word } from '@/types/word';
import { APP_CONSTANTS } from '@/constants/appConstants';
import { transformTypeToMainType } from '@/utils/word/transformTypeToMainType';

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
  const [selectedWords, setSelectedWords] = useState<Word[]>([]);
  const [validWords, setValidWords] = useState<Word[]>([]);

  const [typesToCheck, setTypesToCheck] = useState<WordType[]>([...APP_CONSTANTS.mainWordTypes, 'OTHER']);

  const typesToExclude: MainWordTypeWithOther[] = useMemo(() => {
    const newTypesToExclude: MainWordTypeWithOther[] = APP_CONSTANTS.mainWordTypes.filter(
      (type) =>
        !APP_CONSTANTS.wordProperties[type].some((type) => wordPropertiesToCheck.includes(type)) && !checkTranslation
    );
    if (!checkTranslation) {
      newTypesToExclude.push('OTHER');
    }
    return newTypesToExclude;
  }, [checkTranslation, wordPropertiesToCheck]);

  const maximumValidWords = validWords.filter(
    (word) => !typesToExclude.includes(transformTypeToMainType(word.type))
  ).length;

  const { value, inputValue, updateValue } = useNumberInput(maximumValidWords);

  useEffect(() => {
    updateWords(
      validWords.filter((word) => !typesToExclude.includes(transformTypeToMainType(word.type))).slice(0, value)
    );
  }, [typesToExclude, updateWords, validWords, value]);

  const enableStart =
    (currentSettingsStage === 1 && selectedWords.length > 0) ||
    remainingWords > 0 ||
    (currentSettingsStage === 3 && (wordPropertiesToCheck.length > 0 || checkTranslation));

  return (
    <>
      {currentSettingsStage === 1 && (
        <ListSelection selectedWords={selectedWords} setSelectedWords={setSelectedWords} />
      )}
      {currentSettingsStage === 2 && (
        <WordTypeSelection
          validWords={validWords}
          setValidWords={setValidWords}
          selectedWords={selectedWords}
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
