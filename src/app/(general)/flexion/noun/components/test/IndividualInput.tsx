import TrainerInput from '@/components/TrainerInput';
import { Numerus, Word, WordCase } from '@/types';
import { MAPPER } from '@/utils/mapper';
import { getForm } from '@/utils/wordUtils';

type IndividualInputProps = {
  individualInputForm: {
    numerus: Numerus;
    wordCase: WordCase;
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
      label={`${MAPPER.extended.wordCase[individualInputForm.wordCase]} ${MAPPER.extended.numerus[individualInputForm.numerus]}`}
      handleChange={setIndividualInputValue}
      value={individualInputValue}
      correctValue={stage === 'review' ? getForm(activeWord, individualInputForm) : undefined}
    />
  );
};

export default IndividualInput;
