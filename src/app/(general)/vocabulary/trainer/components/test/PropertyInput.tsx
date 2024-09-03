import Select from '@/components/Select';
import { MAPPER } from '@/utils/other/mapper';
import clsx from 'clsx';
import ui from '@/styles/ui.module.css';
import TrainerInput from '../../../../../../components/TrainerInput';
import { isWordPropertiesUsingSelectInput } from '@/utils/typeguards/isWordPropertiesUsingSelectInput';
import { WordProperty } from '@/types/appConstants';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { compareValues } from '@/utils/word/compareValues';
import { Check } from 'lucide-react';

type PropertyInputProps = {
  property: WordProperty;
  inputValue: string;
  handleChange: (key: WordProperty, value: string) => void;
  correctValue: string;
  stage: 'test' | 'review';
};

const PropertyInput = ({ stage, correctValue, property, handleChange, inputValue }: PropertyInputProps) => {
  const options = isWordPropertiesUsingSelectInput(property)
    ? WORD_CONSTANTS.optional[property].reduce((object: { [key: string]: string }, element) => {
        object[element] = (MAPPER.extended[property] as { [key: string]: string })[element];
        return object;
      }, {})
    : {};
  let isInputCorrect = stage === 'review' ? compareValues(inputValue, correctValue) : undefined;
  const correctValueIndicatorClasses = isInputCorrect ? ui.correct : ui.incorrect;

  return (
    <div className='flex items-end'>
      <div className='block w-full flex-grow'>
        {isWordPropertiesUsingSelectInput(property) ? (
          <Select
            label={MAPPER.extended.property.singular[property]}
            options={options}
            className={clsx('w-full opacity-100', stage === 'review' && correctValueIndicatorClasses)}
            value={inputValue}
            appendString={stage === 'review' && !isInputCorrect ? options[correctValue] : undefined}
            handleChange={(value) => handleChange(property, value)}
            disabled={stage === 'review'}
          />
        ) : (
          <TrainerInput
            label={MAPPER.extended.property.singular[property]}
            correctValue={correctValue}
            value={inputValue}
            handleChange={(value) => handleChange(property, value)}
            stage={stage}
          />
        )}
      </div>
      {stage === 'review' && !isInputCorrect && (
        <button type='button' className='m-1.5 w-5 flex-shrink' onClick={() => handleChange(property, correctValue)}>
          <Check />
        </button>
      )}
    </div>
  );
};

export default PropertyInput;
