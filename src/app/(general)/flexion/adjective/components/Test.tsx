import ActionBar from '@/components/ActionBar';
import TrainerInput from '@/components/TrainerInput';
import WordDisplay from '@/components/WordDisplay';
import { WORD_CONSTANTS } from '@/constants';
import { Comparison, ComparisonDegree, Gender, Numerus, Stage, Word, WordCase } from '@/types';
import { MAPPER } from '@/utils/mapper';
import { getForm } from '@/utils/wordUtils';
import { Dispatch, Fragment, SetStateAction } from 'react';
import table from '@/styles/table.module.css';
import IndividualInput from './test/IndividualInput';
import TableInput from './test/TableInput';

type TestProps = {
  activeWord: Word;
  testingType: 'table' | 'individual';
  individualInputForm:
    | {
        comparison: Comparison;
        comparisonDegree: ComparisonDegree;
        gender: Gender;
        numerus: Numerus;
        wordCase: WordCase;
      }
    | undefined;
  individualInputValue: string;
  setIndividualInputValue: (value: string) => void;
  stage: 'test' | 'review';
  tableInputForm:
    | {
        comparison: Comparison;
        comparisonDegree: ComparisonDegree;
      }
    | undefined;
  tableInputValues: Record<Gender, Record<Numerus, Record<Exclude<WordCase, '6'>, string>>>;
  setTableInputValues: Dispatch<
    SetStateAction<Record<Gender, Record<Numerus, Record<Exclude<WordCase, '6'>, string>>>>
  >;
  maxWords: number;
  remainingWords: number;
  handleContinue: () => void;
};

const Test = ({
  activeWord,
  testingType,
  individualInputForm,
  individualInputValue,
  setIndividualInputValue,
  stage,
  tableInputForm,
  tableInputValues,
  setTableInputValues,
  maxWords,
  remainingWords,
  handleContinue
}: TestProps) => {
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
          tableInputForm &&
          testingType === 'table' && (
            <TableInput
              tableInputForm={tableInputForm}
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
