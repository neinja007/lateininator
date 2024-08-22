import Select from '@/components/Select';
import { MAPPER } from '@/utils/other/mapper';
import clsx from 'clsx';
import ui from '@/styles/ui.module.css';
import TrainerInput from '../../../../../../components/TrainerInput';
import { isWordPropertiesUsingSelectInput } from '@/utils/typeguards/isWordPropertiesUsingSelectInput';
import { WordProperty } from '@/types/appConstants';
import { WORD_CONSTANTS } from '@/constants/wordConstants';

type PropertyInputProps = {
  property: WordProperty;
  inputValue: string;
  handleChange: (key: WordProperty, value: string) => void;
  correctValue: string;
  isInputCorrect: boolean;
  stage: 'test' | 'review';
};

const PropertyInput = ({
  stage,
  correctValue,
  property,
  handleChange,
  inputValue,
  isInputCorrect
}: PropertyInputProps) => {
  const options = isWordPropertiesUsingSelectInput(property)
    ? WORD_CONSTANTS.optional[property].reduce((object: { [key: string]: string }, element) => {
        object[element] = (MAPPER.extended[property] as { [key: string]: string })[element];
        return object;
      }, {})
    : {};
  const correctValueIndicatorClasses = isInputCorrect ? ui.correct : ui.incorrect;

  if (isWordPropertiesUsingSelectInput(property)) {
    return (
      <Select
        label={MAPPER.extended.property[property]}
        options={options}
        className={clsx('w-full', stage === 'review' && correctValueIndicatorClasses)}
        value={inputValue}
        appendString={stage === 'review' && !isInputCorrect ? correctValue : undefined}
        handleChange={(value) => handleChange(property, value)}
        disabled={stage === 'review'}
      />
    );
  } else {
    return (
      <TrainerInput
        label={MAPPER.extended.property[property]}
        correctValue={correctValue}
        value={inputValue}
        handleChange={(value) => handleChange(property, value)}
        stage={stage}
      />
    );
  }
};

export default PropertyInput;
