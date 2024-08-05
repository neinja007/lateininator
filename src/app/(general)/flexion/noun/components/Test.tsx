import ActionBar from '@/components/ActionBar';
import WordDisplay from '@/components/WordDisplay';
import { Noun, WordCase } from '@/types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import TableInput from './test/TableInput';
import { getRandomItem } from '@/utils/propertyUtils';
import { IndividualInputForm, SetTableInputValues, TableInputValues } from '../types';
import TrainerInput from '@/components/TrainerInput';
import { MAPPER } from '@/utils/mapper';
import { getForm } from '@/utils/wordUtils';
import { useTestForm } from '@/hooks/useTestForm';
import Hr from '@/components/Hr';

type TestProps = {
  activeWord: Noun;
  testingType: 'table' | 'individual';
  stage: 'test' | 'review';
  tableInputValues: TableInputValues;
  setTableInputValues: SetTableInputValues;
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
  const [individualInputForm, setIndividualInputForm] = useState<IndividualInputForm>({
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

  const { submit } = useTestForm(handleContinue);

  return (
    <>
      <WordDisplay word={activeWord} />
      <Hr />
      <form onSubmit={submit} className='space-y-8'>
        {individualInputForm && testingType === 'individual' ? (
          <TrainerInput
            label={`${activeWord.declension !== '-' ? MAPPER.extended.declension[activeWord.declension] : '-'} ${MAPPER.extended.wordCase[individualInputForm.wordCase]} ${MAPPER.extended.numerus[individualInputForm.numerus]}`}
            handleChange={setIndividualInputValue}
            value={individualInputValue}
            correctValue={stage === 'review' ? getForm(activeWord, individualInputForm) : undefined}
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
        <ActionBar
          form
          handleContinue={handleContinue}
          progressPercentage={((maxWords - remainingWords) / maxWords) * 100}
        />
      </form>
    </>
  );
};

export default Test;
