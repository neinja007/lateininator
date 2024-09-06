import ActionBar from '@/components/ActionBar';
import WordDisplay from '@/components/WordDisplay';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import TableInput from './test/TableInput';
import { IndividualInputForm, SetTableInputValues, TableInputForm, TableInputValues } from '../types';
import { MAPPER } from '@/utils/other/mapper';
import { useTestForm } from '@/hooks/useTestForm';
import Hr from '@/components/Hr';
import { Verb } from '@/types/word';
import { Modus, Voice, Tense } from '@/types/wordConstants';
import { getRandomItem } from '@/utils/helpers/getRandomItem';
import { getForm } from '@/utils/word/getForm';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { IndividualTrainerInput } from '../../components/IndividualTrainerInput';
import { getRandomPossibleTense } from '../utils/getRandomPossibleTense';
import { getRandomPossibleVoice } from '../utils/getRandomPossibleVoice';
import { getRandomPossiblePerson } from '../utils/getRandomPossiblePerson';

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
  const person = getRandomPossiblePerson(checkImperative);
  const modus = person === '4' ? 'ind' : getRandomItem(modi);
  const tense = getRandomPossibleTense(person, modus, tenses);
  const [individualInputForm, setIndividualInputForm] = useState<IndividualInputForm>({
    voice: getRandomPossibleVoice(person, voices),
    modus: modus,
    tense: tense,
    numerus: getRandomItem([...WORD_CONSTANTS.numerus]),
    person: person
  });

  const [tableInputForm, setTableInputForm] = useState<TableInputForm>({
    voice: getRandomItem(voices),
    modus: getRandomItem(modi)
  });

  useEffect(() => {
    if (!activeWord || activeWord.type !== 'VERB') return;
    if (testingType === 'individual') {
      const person = getRandomPossiblePerson(checkImperative);
      const modus = person === '4' ? 'ind' : getRandomItem(modi);
      const tense = getRandomPossibleTense(person, modus, tenses);

      setIndividualInputForm({
        person: person,
        voice: getRandomPossibleVoice(person, voices),
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
          <IndividualTrainerInput
            label={`${MAPPER.extended.person[individualInputForm.person]} ${MAPPER.extended.numerus[individualInputForm.numerus]}; ${MAPPER.extended.modus[individualInputForm.modus]} ${MAPPER.extended.tense[individualInputForm.tense]} ${MAPPER.extended.voice[individualInputForm.voice]}`}
            value={individualInputValue}
            correctValue={getForm(activeWord, individualInputForm)}
            stage={stage}
            setValue={setIndividualInputValue}
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
