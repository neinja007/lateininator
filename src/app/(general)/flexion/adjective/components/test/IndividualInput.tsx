import TrainerInput from '@/components/TrainerInput';
import { Adjective, Comparison, ComparisonDegree, Gender, Numerus, Word, WordCase } from '@/types';
import { MAPPER } from '@/utils/mapper';
import { getForm } from '@/utils/wordUtils';
import { IndividualInputForm } from '../../types';

type IndividualInputProps = {
  individualInputForm: IndividualInputForm;
  individualInputValue: string;
  setIndividualInputValue: (value: string) => void;
  stage: 'test' | 'review';
  activeWord: Adjective;
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
      label={
        !individualInputForm.adverb
          ? `
                  ${MAPPER.extended.gender[individualInputForm.gender]};
                  ${MAPPER.extended.comparisonDegree[individualInputForm.comparisonDegree]}
                  ${activeWord.comparison !== '-' ? MAPPER.extended.comparison[activeWord.comparison] : '-'}
                  ${MAPPER.extended.numerus[individualInputForm.numerus]}
                  ${MAPPER.extended.wordCase[individualInputForm.wordCase]}
                  `
          : `Adverb ${MAPPER.extended.comparisonDegree[individualInputForm.comparisonDegree]} ${activeWord.comparison !== '-' ? MAPPER.extended.comparison[activeWord.comparison] : '-'}`
      }
      handleChange={setIndividualInputValue}
      value={individualInputValue}
      correctValue={stage === 'review' ? getForm(activeWord, individualInputForm) : undefined}
    />
  );
};

export default IndividualInput;
