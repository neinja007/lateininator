import ActionBar from '@/components/ActionBar';
import WordDisplay from '@/components/WordDisplay';
import { Adjective, Comparison, ComparisonDegree, Gender, Numerus, WordCase } from '@/types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import IndividualInput from './test/IndividualInput';
import TableInput from './test/TableInput';
import { isAdjective } from '@/utils/typeguards';
import { getRandomItem } from '@/utils/propertyUtils';
import { IndividualInputForm, SetTableInputValues, TableInputValues } from '../types';

type TestProps = {
  activeWord: Adjective;
  testingType: 'table' | 'individual';
  stage: 'test' | 'review';
  tableInputValues: TableInputValues;
  setTableInputValues: SetTableInputValues;
  maxWords: number;
  remainingWords: number;
  handleContinue: () => void;
  genders: Gender[];
  comparisonDegrees: ComparisonDegree[];
  individualInputValue: string;
  setIndividualInputValue: Dispatch<SetStateAction<string>>;
  checkAdverb: boolean;
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
  genders,
  comparisonDegrees,
  individualInputValue,
  setIndividualInputValue,
  checkAdverb
}: TestProps) => {
  const [individualInputForm, setIndividualInputForm] = useState<IndividualInputForm>({
    adverb: Math.random() < 0.04,
    comparisonDegree: getRandomItem(comparisonDegrees),
    numerus: getRandomItem(['sin', 'plu']),
    wordCase: getRandomItem(['1', '2', '3', '4', '5']) as WordCase,
    gender: getRandomItem(genders)
  });

  const [tableInputForm, setTableInputForm] = useState<{
    comparison: Comparison;
    comparisonDegree: ComparisonDegree;
  }>({
    comparison: activeWord.comparison as Comparison,
    comparisonDegree: getRandomItem(comparisonDegrees)
  });

  useEffect(() => {
    if (!activeWord || !isAdjective(activeWord)) return;
    if (testingType === 'individual') {
      setIndividualInputForm({
        adverb: Math.random() < 0.04,
        comparisonDegree: getRandomItem(comparisonDegrees),
        numerus: getRandomItem(['sin', 'plu']),
        wordCase: getRandomItem(['1', '2', '3', '4', '5']) as WordCase,
        gender: getRandomItem(genders)
      });
    } else {
      setTableInputForm({
        comparison: activeWord.comparison as Comparison,
        comparisonDegree: getRandomItem(comparisonDegrees)
      });
    }
  }, [activeWord, comparisonDegrees, genders, testingType]);

  return (
    <>
      <WordDisplay word={activeWord} />
      <hr className='dark:border-gray-500' />
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
          tableInputForm &&
          testingType === 'table' && (
            <TableInput
              checkAdverb={checkAdverb}
              genders={genders}
              tableInputForm={tableInputForm}
              tableInputValues={tableInputValues}
              setTableInputValues={setTableInputValues}
              stage={stage}
              activeWord={activeWord}
            />
          )
        )}
      </div>
      <hr className='dark:border-gray-500' />
      <ActionBar handleContinue={handleContinue} progressPercentage={((maxWords - remainingWords) / maxWords) * 100} />
    </>
  );
};

export default Test;
