import CheckboxList from '@/components/CheckboxList';
import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import { WORD_CONSTANTS } from '@/constants';
import { Conjugation, Modus, Tense, Voice } from '@/types';
import { MAPPER } from '@/utils/mapper';
import { Dispatch, SetStateAction } from 'react';

type TestingFormSelectionProps = {
  voices: Voice[];
  setVoices: Dispatch<SetStateAction<Voice[]>>;
  modi: Modus[];
  setModi: Dispatch<SetStateAction<Modus[]>>;
  tenses: Tense[];
  setTenses: Dispatch<SetStateAction<Tense[]>>;
  conjugations: Conjugation[];
  setConjugations: Dispatch<SetStateAction<Conjugation[]>>;
  checkImperative: boolean;
  setCheckImperative: Dispatch<SetStateAction<boolean>>;
};

const TestingFormSelection = ({
  modi,
  setModi,
  setTenses,
  setVoices,
  tenses,
  voices,
  conjugations,
  setConjugations,
  checkImperative,
  setCheckImperative
}: TestingFormSelectionProps) => {
  return (
    <>
      <div className='grid grid-cols-3'>
        <p>Wähle aus, was abgefragt werden soll:</p>

        <CheckboxWithLabel
          checked={checkImperative}
          handleChange={() => setCheckImperative((prev) => !prev)}
          label={'Imperative'}
        />
      </div>
      <div className='grid grid-cols-4'>
        <CheckboxList
          options={[...WORD_CONSTANTS.conjugation]}
          selected={conjugations}
          setSelected={setConjugations}
          label='Konjugation'
          mapper={MAPPER.extended.conjugation}
        />
        <CheckboxList
          options={[...WORD_CONSTANTS.modus]}
          selected={modi}
          setSelected={setModi}
          label='Modus'
          mapper={MAPPER.extended.modus}
        />
        <CheckboxList
          options={[...WORD_CONSTANTS.tense]}
          selected={tenses}
          setSelected={setTenses}
          label='Zeitformen'
          mapper={MAPPER.extended.tense}
        />
        <CheckboxList
          options={[...WORD_CONSTANTS.voice]}
          selected={voices}
          setSelected={setVoices}
          label='Aktiv / Passiv'
          mapper={MAPPER.extended.voice}
        />
      </div>
    </>
  );
};

export default TestingFormSelection;
