import ActionBar from '@/components/ActionBar';
import WordDisplay from '@/components/WordDisplay';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import TableInput from './test/TableInput';
import { IndividualInputForm, SetTableInputValues, TableInputForm, TableInputValues } from '../types';
import TrainerInput from '@/components/TrainerInput';
import { MAPPER } from '@/utils/other/mapper';
import { useTestForm } from '@/hooks/useTestForm';
import Hr from '@/components/Hr';
import { Verb } from '@/types/word';
import { Modus, Voice, Tense } from '@/types/wordConstants';
import { getRandomItem } from '@/utils/helpers/getRandomItem';
import { getForm } from '@/utils/word/getForm';
import { WORD_CONSTANTS } from '@/constants/wordConstants';

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
  checkImperative: boolean;
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
  setIndividualInputValue,
  checkImperative
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
    if (!activeWord || activeWord.type !== 'VERB') return;
    if (testingType === 'individual') {
      const person =
        checkImperative && Math.random() < 0.04
          ? '4'
          : getRandomItem([...WORD_CONSTANTS.person.filter((person) => person !== '4')]);
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
  }, [activeWord, checkImperative, modi, tenses, testingType, voices]);

  const { submit } = useTestForm(handleContinue);

  return (
    <>
      <WordDisplay word={activeWord} />
      <Hr />
      <form onSubmit={submit} className='space-y-8'>
        {testingType === 'individual' ? (
          <TrainerInput
            label={`${MAPPER.extended.person[individualInputForm.person]} ${MAPPER.extended.numerus[individualInputForm.numerus]}; ${MAPPER.extended.modus[individualInputForm.modus]} ${MAPPER.extended.tense[individualInputForm.tense]} ${MAPPER.extended.voice[individualInputForm.voice]}`}
            handleChange={setIndividualInputValue}
            value={individualInputValue}
            correctValue={getForm(activeWord, individualInputForm)}
            stage={stage}
          />
        ) : (
          <TableInput
            checkImperative={checkImperative}
            tenses={tenses}
            tableInputForm={tableInputForm}
            tableInputValues={tableInputValues}
            setTableInputValues={setTableInputValues}
            stage={stage}
            activeWord={activeWord}
          />
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
