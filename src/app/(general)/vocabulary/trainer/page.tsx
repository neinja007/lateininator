'use client';

import { APP_CONSTANTS } from '@/constants';
import { Word, WordProperty } from '@/types';
import { useCallback, useMemo, useState } from 'react';
import Heading from '@/components/Heading';
import Settings from './components/Settings';
import Test from './components/Test';
import { compareValues } from '@/utils/inputUtils';
import Results from '@/components/Results';
import { useGame } from '@/hooks/useGame';

const initialInputValues = {
  conjugation: '',
  declension: '',
  comparison: '',
  femininum: '',
  gender: '',
  genitive: '',
  neutrum: '',
  participle: '',
  perfect: '',
  present: '',
  translation: ''
};

const Page = () => {
  const [inputValues, setInputValues] = useState<Record<WordProperty | 'translation', string>>(initialInputValues);
  const [checkIncorrectWordsAgain, setCheckIncorrectWordsAgain] = useState<boolean>(false);

  const [wordPropertiesToCheck, setWordPropertiesToCheck] = useState<WordProperty[]>([
    ...APP_CONSTANTS.allWordProperties
  ]);

  const [checkTranslation, setCheckTranslation] = useState<boolean>(true);
  const canContinue: (word: Word) => boolean = useCallback(
    (word) =>
      (word &&
        !APP_CONSTANTS.wordProperties[word.type]
          .filter((key) => wordPropertiesToCheck.includes(key) && key in word && (word as any)[key] !== '-')
          .some((key) => {
            const originalInput = (inputValues as any)[key] || '';
            const correctInput = (word as any)[key];

            return !compareValues(originalInput, correctInput);
          }) &&
        (!word.translation || compareValues(inputValues.translation, word.translation, true))) ||
      !checkIncorrectWordsAgain,
    [inputValues, checkIncorrectWordsAgain, wordPropertiesToCheck]
  );

  const { stage, activeWord, remainingWords, maxWords, updateWords, handleContinue, currentSettingsStage } = useGame(
    false,
    () => setInputValues(initialInputValues),
    4,
    canContinue
  );

  const validKeysToCheck: WordProperty[] = useMemo(
    () =>
      activeWord
        ? APP_CONSTANTS.wordProperties[activeWord.type].filter(
            (key) => wordPropertiesToCheck.includes(key) && key in activeWord && (activeWord as any)[key] !== '-'
          )
        : [],
    [activeWord, wordPropertiesToCheck]
  );

  return (
    <div className='space-y-5'>
      <Heading>Vokabeltrainer</Heading>
      {stage === 'settings' && (
        <Settings
          currentSettingsStage={currentSettingsStage}
          checkTranslation={checkTranslation}
          setCheckTranslation={setCheckTranslation}
          wordPropertiesToCheck={wordPropertiesToCheck}
          setWordPropertiesToCheck={setWordPropertiesToCheck}
          checkIncorrectWordsAgain={checkIncorrectWordsAgain}
          setCheckIncorrectWordsAgain={setCheckIncorrectWordsAgain}
          handleContinue={handleContinue}
          updateWords={updateWords}
          remainingWords={remainingWords}
        />
      )}
      {(stage === 'test' || stage === 'review') && activeWord && (
        <Test
          handleContinue={handleContinue}
          progressPercentage={((maxWords - remainingWords) / maxWords) * 100}
          activeWord={activeWord}
          validKeysToCheck={validKeysToCheck}
          inputValues={inputValues}
          setInputValues={setInputValues}
          stage={stage}
          checkTranslation={checkTranslation}
        />
      )}
      {stage === 'results' && <Results handleContinue={handleContinue} />}
    </div>
  );
};

export default Page;
