import ActionBar from '@/components/ActionBar';
import WordDisplay from '@/components/WordDisplay';
import { Numerus, Word, WordCase } from '@/types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import IndividualInput from './test/IndividualInput';
import TableInput from './test/TableInput';
import { getRandomItem } from '@/utils/propertyUtils';

type TestProps = {
  activeWord: Word;
  testingType: 'table' | 'individual';
  stage: 'test' | 'review';
  tableInputValues: Record<Numerus, Record<Exclude<WordCase, '6'>, string>>;
  setTableInputValues: Dispatch<SetStateAction<Record<Numerus, Record<Exclude<WordCase, '6'>, string>>>>;
  maxWords: number;
  remainingWords: number;
  handleContinue: () => void;
  individualInputValue: string;
  setIndividualInputValue: Dispatch<SetStateAction<string>>;
};

const Test = ({
  activeWord,
  testingType,
  stage,
  tableInputValues,
  setTableInputValues,
  maxWords,
  remainingWords,
  handleContinue,
  individualInputValue,
  setIndividualInputValue
}: TestProps) => {
  const [individualInputForm, setIndividualInputForm] = useState<{
    numerus: Numerus;
    wordCase: WordCase;
  }>({
    numerus: getRandomItem(['sin', 'plu']),
    wordCase: getRandomItem(['1', '2', '3', '4', '5']) as WordCase
  });

  useEffect(() => {
    if (!activeWord || activeWord.type !== 'noun') return;
    if (testingType === 'individual') {
      setIndividualInputForm({
        numerus: getRandomItem(['sin', 'plu']),
        wordCase: getRandomItem(['1', '2', '3', '4', '5']) as WordCase
      });
    }
  }, [activeWord, testingType]);

  return (
    <>
      <WordDisplay word={activeWord} />
      <hr className='border-gray-500' />
      <div>
        {individualInputForm && testingType === 'individual' ? (
          <IndividualInput
            individualInputForm={individualInputForm}
            individualInputValue={individualInputValue}
            setIndividualInputValue={setIndividualInputValue}
            stage={stage}
            activeWord={activeWord}
          />
        ) : (
          testingType === 'table' && (
            <TableInput
              tableInputValues={tableInputValues}
              setTableInputValues={setTableInputValues}
              stage={stage}
              activeWord={activeWord}
            />
          )
        )}
      </div>
      <hr className='border-gray-500' />
      <ActionBar handleContinue={handleContinue} progressPercentage={((maxWords - remainingWords) / maxWords) * 100} />
    </>
  );
};

export default Test;
