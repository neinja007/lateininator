import TrainerInput from '@/components/TrainerInput';
import { compareValues } from '@/utils/word/compareValues';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';

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
  const [disablePoints, setDisablePoints] = useState<boolean>(false);

  const isInputCorrect = stage === 'review' ? compareValues(value, correctValue) : undefined;

  useEffect(() => {
    if (stage === 'review' && isInputCorrect && !disablePoints) {
      addDifference(1);
      setDisablePoints(true);
    }
  }, [isInputCorrect, stage, disablePoints, addDifference]);

  useEffect(() => {
    if (stage === 'test' && disablePoints) {
      setDisablePoints(false);
    }
  }, [disablePoints, stage]);

  const Component = (
    <div className='flex w-full items-end'>
      <div className='block w-full flex-grow'>
        <TrainerInput
          label={label}
          customStyle={label ? undefined : 'w-full m-0 h-8 px-1 bg-inherit focus:outline-none'}
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
          onClick={() => {
            handleChange(correctValue);
            setDisablePoints(true);
          }}
        >
          <Check />
        </button>
      )}
    </div>
  );

  return label ? Component : <td className='border p-0 dark:border-gray-500'>{Component}</td>;
};

export default TableTrainerInput;
