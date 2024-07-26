import ActionBar from '@/components/ActionBar';
import WordDisplay from '@/components/WordDisplay';
import { Modus, Tense, Verb, Voice } from '@/types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import TableInput from './test/TableInput';
import { getRandomItem } from '@/utils/propertyUtils';
import { WORD_CONSTANTS } from '@/constants';
import { IndividualInputForm, SetTableInputValues, TableInputForm, TableInputValues } from '../types';
import TrainerInput from '@/components/TrainerInput';
import { MAPPER } from '@/utils/mapper';
import { getForm } from '@/utils/wordUtils';

type TestProps = {
  activeWord: Verb;
  testingType: 'table' | 'individual';
  stage: 'test' | 'review';
  tableInputValues: TableInputValues;
  setTableInputValues: SetTableInputValues;
  maxWords: number;
  remainingWords: number;
  handleContinue: () => void;
  modi: Modus[];
  voices: Voice[];
  tenses: Tense[];
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
  modi,
  voices,
  tenses,
  individualInputValue,
  setIndividualInputValue
}: TestProps) => {
  const modus = getRandomItem(modi);
  const tense = modus === 'kon' ? getRandomItem(tenses.filter((tense) => tense !== 'fut1')) : getRandomItem(tenses);
  const [individualInputForm, setIndividualInputForm] = useState<IndividualInputForm>({
    voice: getRandomItem(voices),
    modus: modus,
    tense: tense,
    numerus: getRandomItem([...WORD_CONSTANTS.numerus]),
    person: getRandomItem([...WORD_CONSTANTS.person])
  });

  const [tableInputForm, setTableInputForm] = useState<TableInputForm>({
    voice: getRandomItem(voices),
    modus: getRandomItem(modi)
  });

  useEffect(() => {
    if (!activeWord || activeWord.type !== 'verb') return;
    if (testingType === 'individual') {
      const person =
        Math.random() < 0.04 ? '4' : getRandomItem([...WORD_CONSTANTS.person.filter((person) => person !== '4')]);
      const modus = person === '4' ? 'ind' : getRandomItem(modi);
      const tense =
        person === '4'
          ? 'pres'
          : modus === 'kon'
            ? getRandomItem(tenses.filter((tense) => tense !== 'fut1'))
            : getRandomItem(tenses);

      setIndividualInputForm({
        person: person,
        voice: person !== '4' ? getRandomItem(voices) : 'act',
        modus: modus,
        tense: tense,
        numerus: getRandomItem([...WORD_CONSTANTS.numerus])
      });
    } else {
      setTableInputForm({
        voice: getRandomItem(voices),
        modus: getRandomItem(modi)
      });
    }
  }, [activeWord, modi, tenses, testingType, voices]);

  return (
    <>
      <WordDisplay word={activeWord} />
      <hr className='dark:border-gray-500' />
      <div>
        {testingType === 'individual' ? (
          <TrainerInput
            label={`${MAPPER.extended.person[individualInputForm.person]} ${MAPPER.extended.numerus[individualInputForm.numerus]}; ${MAPPER.extended.modus[individualInputForm.modus]} ${MAPPER.extended.tense[individualInputForm.tense]} ${MAPPER.extended.voice[individualInputForm.voice]}`}
            handleChange={setIndividualInputValue}
            value={individualInputValue}
            correctValue={stage === 'review' ? getForm(activeWord, individualInputForm) : undefined}
          />
        ) : (
          <TableInput
            tenses={tenses}
            tableInputForm={tableInputForm}
            tableInputValues={tableInputValues}
            setTableInputValues={setTableInputValues}
            stage={stage}
            activeWord={activeWord}
          />
        )}
      </div>
      <hr className='dark:border-gray-500' />
      <ActionBar handleContinue={handleContinue} progressPercentage={((maxWords - remainingWords) / maxWords) * 100} />
    </>
  );
};

export default Test;
