import TrainerInput from '@/components/TrainerInput';
import { MAPPER } from '@/utils/mapper';
import { getForm } from '@/utils/wordUtils';
import { IndividualInputForm } from '../../types';
import { Verb } from '@/types';

type IndividualInputProps = {
  individualInputForm: IndividualInputForm;
  individualInputValue: string;
  setIndividualInputValue: (value: string) => void;
  stage: 'test' | 'review';
  activeWord: Verb;
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
