import Select from '@/components/Select';
import { MAPPER } from '@/utils/other/mapper';
import clsx from 'clsx';
import TrainerInput from '../../../../../../components/TrainerInput';
import { isWordPropertiesUsingSelectInput } from '@/utils/typeguards/isWordPropertiesUsingSelectInput';
import { WordProperty } from '@/types/appConstants';
import { compareValues } from '@/utils/word/compareValues';
import { Check } from 'lucide-react';
import { usePointState } from '@/hooks/usePointState';
import { generateSelectInputPropertyOptions } from '@/utils/helpers/generateSelectInputPropertyOptions';

type PropertyInputProps = {
  property: WordProperty;
  inputValue: string;
  handleChange: (key: WordProperty, value: string) => void;
  correctValue: string;
  stage: 'test' | 'review';
  addDifference: (difference: number) => void;
};

const PropertyInput = ({
  stage,
  correctValue,
  property,
  handleChange,
  inputValue,
  addDifference
}: PropertyInputProps) => {
  const options = isWordPropertiesUsingSelectInput(property) ? generateSelectInputPropertyOptions(property) : {};

  const inputIsCorrect = stage === 'review' && compareValues(inputValue, correctValue);

  const { handleSetCorrect } = usePointState(stage, !!inputIsCorrect, addDifference);

  return (
    <div className='flex items-end'>
      <div className='block w-full flex-grow'>
        {isWordPropertiesUsingSelectInput(property) ? (
          <Select
            label={MAPPER.extended.property.singular[property]}
            options={options}
            className={clsx('w-full opacity-100')}
            border={stage === 'test' ? 'default' : inputIsCorrect ? 'success' : 'danger'}
            value={inputValue}
            appendString={stage === 'review' && !inputIsCorrect ? options[correctValue] : undefined}
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
      {stage === 'review' && !inputIsCorrect && (
        <button
          type='button'
          className='m-1.5 w-5 flex-shrink'
          onClick={handleSetCorrect(() => handleChange(property, correctValue))}
        >
          <Check />
        </button>
      )}
    </div>
  );
};

export default PropertyInput;
