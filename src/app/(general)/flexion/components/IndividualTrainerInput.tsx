import TrainerInput from '@/components/TrainerInput';
import { usePointState } from '@/hooks/usePointState';
import { compareValues } from '@/utils/word/compareValues';
import { Check } from 'lucide-react';

type IndividualTrainerInputProps = {
  label: string;
  correctValue: string;
  stage: 'review' | 'test';
  value: string;
  setValue: (value: string) => void;
  addDifference: (difference: number) => void;
};

export const IndividualTrainerInput = ({
  label,
  correctValue,
  stage,
  value,
  setValue,
  addDifference
}: IndividualTrainerInputProps) => {
  const isInputCorrect = stage === 'review' ? compareValues(value, correctValue) : undefined;

  const { handleSetCorrect } = usePointState(stage, !!isInputCorrect, addDifference);

  return (
    <div className='mx-auto flex w-full max-w-96 items-end'>
      <div className='block w-full'>
        <TrainerInput label={label} handleChange={setValue} value={value} correctValue={correctValue} stage={stage} />
      </div>
      {stage === 'review' && !isInputCorrect && (
        <button type='button' className='m-1.5' onClick={handleSetCorrect(() => setValue(correctValue))}>
          <Check />
        </button>
      )}
    </div>
  );
};
