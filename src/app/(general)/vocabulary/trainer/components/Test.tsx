import WordDisplay from '@/components/WordDisplay';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import TranslationInput from './test/TranslationInput';
import PropertyInputs from './test/PropertyInputs';
import ActionBar from '@/components/ActionBar';
import { useTestForm } from '@/hooks/useTestForm';
import Hr from '@/components/Hr';
import { WordProperty } from '@/types/appConstants';
import { Stage } from '@/types/other';
import { Word } from '@/types/word';

type TestProps = {
  stage: 'test' | 'review';
  activeWord: Word;
  inputValues: Record<WordProperty | 'translation', string>;
  setInputValues: Dispatch<SetStateAction<Record<WordProperty | 'translation', string>>>;
  wordPropertiesToCheck: WordProperty[];
  handleContinue: (newStage?: Stage) => void;
  progressPercentage: number;
  checkTranslation: boolean;
  points: number;
  setPoints: Dispatch<SetStateAction<number>>;
};

const Test = ({
  points,
  setPoints,
  stage,
  activeWord,
  inputValues,
  setInputValues,
  wordPropertiesToCheck,
  handleContinue,
  progressPercentage,
  checkTranslation
}: TestProps) => {
  const { submit } = useTestForm(handleContinue);
  const [difference, setDifference] = useState(0);

  useEffect(() => {
    if (difference !== 0 && stage === 'test') {
      setPoints((prev) => prev + difference);
      setDifference(0);
    }
  }, [difference, setPoints, stage]);

  return (
    activeWord && (
      <>
        <WordDisplay word={activeWord} />
        <Hr />
        <form onSubmit={submit}>
          {checkTranslation && (
            <TranslationInput
              setPoints={setDifference}
              correctTranslations={activeWord.translation}
              stage={stage}
              inputValues={inputValues}
              setInputValues={setInputValues}
            />
          )}
          {wordPropertiesToCheck.length > 0 && (
            <PropertyInputs
              setPoints={setDifference}
              wordPropertiesToCheck={wordPropertiesToCheck}
              activeWord={activeWord}
              inputValues={inputValues}
              setInputValues={setInputValues}
              stage={stage}
            />
          )}
          <ActionBar
            form
            handleContinue={handleContinue}
            points={points}
            progressPercentage={progressPercentage}
            difference={difference}
          />
        </form>
      </>
    )
  );
};

export default Test;
