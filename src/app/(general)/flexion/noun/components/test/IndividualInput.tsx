import TrainerInput from '@/components/TrainerInput';
import { Noun, Numerus, Word, WordCase } from '@/types';
import { MAPPER } from '@/utils/mapper';
import { getForm } from '@/utils/wordUtils';
import { IndividualInputForm } from '../../types';

type IndividualInputProps = {
  individualInputForm: IndividualInputForm;
  individualInputValue: string;
  setIndividualInputValue: (value: string) => void;
  stage: 'test' | 'review';
  activeWord: Noun;
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
      label={`${activeWord.declension !== '-' ? MAPPER.extended.declension[activeWord.declension] : '-'} ${MAPPER.extended.wordCase[individualInputForm.wordCase]} ${MAPPER.extended.numerus[individualInputForm.numerus]}`}
      handleChange={setIndividualInputValue}
      value={individualInputValue}
      correctValue={stage === 'review' ? getForm(activeWord, individualInputForm) : undefined}
    />
  );
};

export default IndividualInput;
