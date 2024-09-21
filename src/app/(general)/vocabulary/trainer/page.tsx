'use client';

import { useCallback, useState } from 'react';
import Heading from '@/components/Heading';
import Settings from './components/Settings';
import Test from './components/Test';
import Results from '@/components/Results';
import { useGame } from '@/hooks/useGame';
import { compareValues } from '@/utils/word/compareValues';
import { WordProperty } from '@/types/appConstants';
import { Word } from '@/types/word';
import { APP_CONSTANTS } from '@/constants/appConstants';
import { AuthConditionalLock } from '@/components/AuthConditionalLock';
import { usePointCounter } from '@/hooks/usePointCounter';

const initialInputValues = [...APP_CONSTANTS.allWordProperties, 'translation'].reduce(
  (acc, key) => {
    acc[key as WordProperty | 'translation'] = '';
    return acc;
  },
  {} as Record<WordProperty | 'translation', string>
);

const Page = () => {
  const [inputValues, setInputValues] = useState<Record<WordProperty | 'translation', string>>(initialInputValues);
  const [checkIncorrectWordsAgain, setCheckIncorrectWordsAgain] = useState<boolean>(false);

  const [wordPropertiesToCheck, setWordPropertiesToCheck] = useState<WordProperty[]>([
    ...APP_CONSTANTS.allWordProperties
  ]);

  const [checkTranslation, setCheckTranslation] = useState<boolean>(true);
  const canContinue: (word: Word) => boolean = useCallback(
    (word) =>
      (word && !checkIncorrectWordsAgain) ||
      (APP_CONSTANTS.wordProperties[word.type]
        .filter((key) => wordPropertiesToCheck.includes(key) && key in word && (word as any)[key] !== '-')
        .every((key) => {
          const originalInput = (inputValues as any)[key] || '';
          const correctInput = (word as any)[key];

          return compareValues(originalInput, correctInput);
        }) &&
        (!word.translation || compareValues(inputValues.translation, word.translation, true))),
    [inputValues, checkIncorrectWordsAgain, wordPropertiesToCheck]
  );

  const { stage, activeWord, remainingWords, maxWords, updateWords, handleContinue, currentSettingsStage } = useGame(
    false,
    () => setInputValues(initialInputValues),
    4,
    canContinue
  );

  const { points, difference, addDifference, addDifferenceToPoints } = usePointCounter(stage);

  return (
    <AuthConditionalLock>
      <div className='space-y-5'>
        <Heading heading='Vokabeltrainer'>
          Hier kannst du Wörter lernen und üben. Die Wörter können nach verschiedenen Kriterien ausgewählt und nach
          spezifischen Eigenschaften abgefragt werden.
        </Heading>
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
            points={points}
            difference={difference}
            addDifference={addDifference}
            addDifferenceToPoints={addDifferenceToPoints}
            handleContinue={handleContinue}
            progressPercentage={((maxWords - remainingWords) / maxWords) * 100}
            activeWord={activeWord}
            wordPropertiesToCheck={APP_CONSTANTS.wordProperties[activeWord.type].filter((key) =>
              wordPropertiesToCheck.includes(key)
            )}
            inputValues={inputValues}
            setInputValues={setInputValues}
            stage={stage}
            checkTranslation={checkTranslation}
          />
        )}
        {stage === 'results' && <Results handleContinue={handleContinue} points={points} />}
      </div>
    </AuthConditionalLock>
  );
};

export default Page;
