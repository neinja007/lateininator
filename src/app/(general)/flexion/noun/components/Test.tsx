import ActionBar from '@/components/ActionBar';
import WordDisplay from '@/components/WordDisplay';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import TableInput from './test/TableInput';
import { IndividualInputForm, SetTableInputValues, TableInputValues } from '../types';
import { MAPPER } from '@/utils/other/mapper';
import { useTestForm } from '@/hooks/useTestForm';
import Hr from '@/components/Hr';
import { Noun } from '@/types/word';
import { getForm } from '@/utils/word/getForm';
import { IndividualTrainerInput } from '../../components/IndividualTrainerInput';
import { useSettings } from '@/hooks/database/useSettings';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { getRandomIndividualInputForm } from '../utils/getRandomIndividualInputForm';

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
  const { settings } = useSettings();

  const enabledWordCases =
    settings && settings.TESTING_VOCATIVE === 'true' ? WORD_CONSTANTS.wordCase : WORD_CONSTANTS.wordCaseWithoutVocative;

  const [individualInputForm, setIndividualInputForm] = useState<IndividualInputForm>();

  useEffect(() => {
    if (testingType === 'individual') {
      setIndividualInputForm(getRandomIndividualInputForm([...enabledWordCases]));
    }
  }, [activeWord, enabledWordCases, testingType]);

  const { submit } = useTestForm(handleContinue);

  const correctIndividualInputValue = individualInputForm ? getForm(activeWord, individualInputForm) : '';

  return (
    <>
      <WordDisplay word={activeWord} />
      <Hr />
      <form onSubmit={submit} className='space-y-8'>
        {individualInputForm && testingType === 'individual' ? (
          <IndividualTrainerInput
            label={`${MAPPER.extended.wordCase[individualInputForm.wordCase]} ${MAPPER.extended.numerus[individualInputForm.numerus]}`}
            correctValue={correctIndividualInputValue}
            stage={stage}
            value={individualInputValue}
            setValue={setIndividualInputValue}
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
