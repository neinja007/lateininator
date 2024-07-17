import ActionBar from '@/components/ActionBar';
import WordDisplay from '@/components/WordDisplay';
import { Stage, Word, WordProperty } from '@/types';
import { Dispatch, SetStateAction } from 'react';
import TranslationInput from './test/TranslationInput';
import PropertyInputs from './test/PropertyInputs';

type TestProps = {
  stage: Stage;
  activeWord: Word;
  inputValues: Record<WordProperty | 'translation', string>;
  setInputValues: Dispatch<SetStateAction<Record<WordProperty | 'translation', string>>>;
  checkTranslation: boolean;
  validKeysToCheck: WordProperty[];
  handleContinue: (newStage?: Stage) => void;
  progressPercentage: number;
};

const Test = ({
  stage,
  activeWord,
  inputValues,
  checkTranslation,
  setInputValues,
  validKeysToCheck,
  handleContinue,
  progressPercentage
}: TestProps) => {
  return (
    activeWord && (
      <>
        <WordDisplay word={activeWord} />
        <hr className='border-gray-500' />
        <TranslationInput
          checkTranslation={checkTranslation}
          activeWord={activeWord}
          stage={stage}
          inputValues={inputValues}
          setInputValues={setInputValues}
        />
        {validKeysToCheck.length > 0 && (
          <PropertyInputs
            validKeysToCheck={validKeysToCheck}
            activeWord={activeWord}
            inputValues={inputValues}
            setInputValues={setInputValues}
            stage={stage}
          />
        )}
        <hr className='border-gray-500' />
        <ActionBar handleContinue={handleContinue} progressPercentage={progressPercentage} />
      </>
    )
  );
};

export default Test;
