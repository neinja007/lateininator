import WordDisplay from '@/components/WordDisplay';
import { Dispatch, SetStateAction } from 'react';
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
};

const Test = ({
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

  return (
    activeWord && (
      <>
        <WordDisplay word={activeWord} />
        <Hr />
        <form onSubmit={submit} className='space-y-5'>
          {checkTranslation && (
            <TranslationInput
              correctTranslations={activeWord.translation}
              stage={stage}
              inputValues={inputValues}
              setInputValues={setInputValues}
            />
          )}
          {wordPropertiesToCheck.length > 0 && (
            <PropertyInputs
              wordPropertiesToCheck={wordPropertiesToCheck}
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
