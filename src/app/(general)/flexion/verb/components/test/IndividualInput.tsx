import TrainerInput from '@/components/TrainerInput';
import { Conjugation, Modus, Numerus, Person, Tense, Voice, Word } from '@/types';
import { MAPPER } from '@/utils/mapper';
import { getForm } from '@/utils/wordUtils';

type IndividualInputProps = {
  individualInputForm: {
    tense: Tense;
    numerus: Numerus;
    person: Person;
    conjugation: Conjugation;
    voice: Voice;
    modus: Modus;
  };
  individualInputValue: string;
  setIndividualInputValue: (value: string) => void;
  stage: 'test' | 'review';
  activeWord: Word;
};

const IndividualInput = ({
  individualInputForm,
  individualInputValue,
  setIndividualInputValue,
  stage,
  activeWord
}: IndividualInputProps) => {
  return (
    <TrainerInput
      label={`${MAPPER.extended.person[individualInputForm.person]} ${MAPPER.extended.numerus[individualInputForm.numerus]}; ${MAPPER.extended.modus[individualInputForm.modus]} ${MAPPER.extended.tense[individualInputForm.tense]} ${MAPPER.extended.voice[individualInputForm.voice]}`}
      handleChange={setIndividualInputValue}
      value={individualInputValue}
      correctValue={stage === 'review' ? getForm(activeWord, individualInputForm) : undefined}
    />
  );
};

export default IndividualInput;
