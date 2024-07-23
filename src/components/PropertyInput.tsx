import { WordProperty } from '@/types';
import Select from '@/components/Select';
import { WORD_CONSTANTS } from '@/constants';
import { MAPPER } from '@/utils/mapper';
import { isWordPropertiesUsingSelectInput } from '@/utils/typeguards';
import clsx from 'clsx';
import ui from '@/styles/ui.module.css';
import TrainerInput from './TrainerInput';

type PropertyInputProps = {
  property: WordProperty;
  value: string;
  appendedString?: string;
  handleChange: (key: WordProperty, value: string) => void;
  correct?: boolean;
};

const PropertyInput = ({ correct, property, handleChange, value, appendedString }: PropertyInputProps) => {
  const options = isWordPropertiesUsingSelectInput(property)
    ? WORD_CONSTANTS[property].reduce((object: { [key: string]: string }, element) => {
        object[element] = (MAPPER.extended[property] as { [key: string]: string })[element];
        return object;
      }, {})
    : {};
  const correctValueIndicator = correct !== undefined && (correct ? ui.correct : ui.incorrect);

  if (isWordPropertiesUsingSelectInput(property)) {
    return (
      <Select
        label={MAPPER.extended.property[property]}
        options={options}
        className={clsx('w-full', correctValueIndicator)}
        value={value}
        appendString={appendedString}
        handleChange={(value) => handleChange(property, value)}
        disabled={correct !== undefined}
      />
    );
  } else {
    return (
      <TrainerInput
        label={MAPPER.extended.property[property]}
        correctValue={appendedString}
        value={value}
        handleChange={(value) => handleChange(property, value)}
      />
    );
  }
};

export default PropertyInput;
