import WordDisplay from '@/components/WordDisplay';
import { Dispatch, SetStateAction } from 'react';
import TranslationInput from './test/TranslationInput';
import PropertyInputs from './test/PropertyInputs';
import ActionBar from '@/components/ActionBar';
import { useTestForm } from '@/hooks/useTestForm';
import Hr from '@/components/Hr';
import { WordProperty } from '@/types/app_constants';
import { Stage } from '@/types/other';
import { Word } from '@/types/word';

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
  const { submit } = useTestForm(handleContinue);

  return (
    activeWord && (
      <>
        <WordDisplay word={activeWord} />
        <Hr />
        <form onSubmit={submit} className='space-y-5'>
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
          <ActionBar form handleContinue={handleContinue} progressPercentage={progressPercentage} />
        </form>
      </>
    )
  );
};

export default Test;
