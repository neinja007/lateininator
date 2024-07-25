import ActionBar from '@/components/ActionBar';
import WordDisplay from '@/components/WordDisplay';
import { Conjugation, Modus, Numerus, Person, Tense, Verb, Voice } from '@/types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import IndividualInput from './test/IndividualInput';
import TableInput from './test/TableInput';
import { getRandomItem } from '@/utils/propertyUtils';
import { WORD_CONSTANTS } from '@/constants';
import { IndividualInputForm, SetTableInputValues, TableInputForm, TableInputValues } from '../types';

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
      const modus = getRandomItem(modi);
      const tense = modus === 'kon' ? getRandomItem(tenses.filter((tense) => tense !== 'fut1')) : getRandomItem(tenses);
      setIndividualInputForm({
        voice: getRandomItem(voices),
        modus: modus,
        tense: tense,
        numerus: getRandomItem([...WORD_CONSTANTS.numerus]),
        person: getRandomItem([...WORD_CONSTANTS.person.filter((person) => person !== '4')])
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
              tenses={tenses}
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
