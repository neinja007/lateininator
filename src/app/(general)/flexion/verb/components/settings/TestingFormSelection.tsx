import CheckboxList from '@/components/CheckboxList';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { Verb } from '@/types/word';
import { Voice, Modus, Tense, Conjugation } from '@/types/wordConstants';
import { MAPPER } from '@/utils/other/mapper';
import { Dispatch, SetStateAction } from 'react';
import FormSelectionWrapper from '../../../components/FormSelectionWrapper';

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
  validWords: Verb[];
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
  setCheckImperative,
  validWords
}: TestingFormSelectionProps) => {
  const conjugationsNotToCheck = conjugations.filter(
    (conjugation) => !validWords.some((word) => word.conjugation === conjugation)
  );

  const disableImperative = !modi.includes('ind') || !voices.includes('act') || !tenses.includes('pres');

  return (
    <FormSelectionWrapper
      titleOption={{
        checked: checkImperative && !disableImperative,
        handleChange: () => setCheckImperative((prev) => !prev),
        disabled: disableImperative,
        label: 'Imperativ'
      }}
      selectAll={() => {
        setConjugations([...WORD_CONSTANTS.conjugation]);
        setModi([...WORD_CONSTANTS.modus]);
        setTenses([...WORD_CONSTANTS.tense]);
        setVoices([...WORD_CONSTANTS.voice]);
        setCheckImperative(true);
      }}
      selectAllActive={
        conjugations.length === WORD_CONSTANTS.conjugation.length &&
        modi.length === WORD_CONSTANTS.modus.length &&
        tenses.length === WORD_CONSTANTS.tense.length &&
        voices.length === WORD_CONSTANTS.voice.length &&
        checkImperative
      }
      selectNone={() => {
        setConjugations([]);
        setModi([]);
        setTenses([]);
        setVoices([]);
        setCheckImperative(false);
      }}
      selectNoneActive={
        conjugations.length === 0 && modi.length === 0 && tenses.length === 0 && voices.length === 0 && !checkImperative
      }
    >
      <CheckboxList
        options={[...WORD_CONSTANTS.conjugation]}
        disabledOptions={conjugationsNotToCheck}
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
    </FormSelectionWrapper>
  );
};

export default TestingFormSelection;
