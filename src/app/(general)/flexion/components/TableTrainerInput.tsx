import TrainerInput from '@/components/TrainerInput';
import { usePointState } from '@/hooks/usePointState';
import { compareValues } from '@/utils/word/compareValues';
import clsx from 'clsx';
import { Check } from 'lucide-react';

type TableTrainerInputProps = {
  value: string;
  correctValue: string;
  handleChange: (value: string) => void;
  stage: 'test' | 'review';
  label?: string;
  addDifference: (difference: number) => void;
};

const TableTrainerInput = ({
  label,
  correctValue,
  handleChange,
  stage,
  value,
  addDifference
}: TableTrainerInputProps) => {
  const isInputCorrect = stage === 'review' ? compareValues(value, correctValue) : undefined;

  const { handleSetCorrect } = usePointState(stage, !!isInputCorrect, addDifference);

  const Component = (
    <div
      className={clsx(
        'flex w-full items-end outline outline-1 -outline-offset-1',
        stage === 'test' ? 'outline-none' : isInputCorrect ? 'outline-green-500' : 'outline-red-500'
      )}
    >
      <div className='block w-full flex-grow'>
        <TrainerInput
          label={label}
          customStyle={label ? undefined : 'w-full m-0 h-8 px-1 bg-inherit focus:outline-none !border-none'}
          value={value}
          correctValue={correctValue}
          handleChange={handleChange}
          stage={stage}
        />
      </div>
      {stage === 'review' && !compareValues(value, correctValue) && (
        <button
          type='button'
          className={label ? 'm-1.5' : 'm-1 w-7 flex-shrink'}
          onClick={handleSetCorrect(() => handleChange(correctValue))}
        >
          <Check />
        </button>
      )}
    </div>
  );

  return label ? Component : <td className='border p-0 dark:border-gray-500'>{Component}</td>;
};

export default TableTrainerInput;
