import Select from '@/components/Select';
import { WORD_CONSTANTS } from '@/constants';
import { MAPPER } from '@/utils/other/mapper';
import clsx from 'clsx';
import ui from '@/styles/ui.module.css';
import TrainerInput from './TrainerInput';
import { isWordPropertiesUsingSelectInput } from '@/utils/typeguards/isWordPropertiesUsingSelectInput';
import { WordProperty } from '@/types/app_constants';

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
        appendString={correct === false ? appendedString : undefined}
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
