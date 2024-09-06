import TrainerInput from '@/components/TrainerInput';
import { compareValues } from '@/utils/word/compareValues';
import { Check } from 'lucide-react';

type IndividualTrainerInputProps = {
  label: string;
  correctValue: string;
  stage: 'review' | 'test';
  value: string;
  setValue: (value: string) => void;
};

export const IndividualTrainerInput = ({
  label,
  correctValue,
  stage,
  value,
  setValue
}: IndividualTrainerInputProps) => {
  return (
    <div className='flex items-end'>
      <div className='block w-full'>
        <TrainerInput label={label} handleChange={setValue} value={value} correctValue={correctValue} stage={stage} />
      </div>
      {stage === 'review' && !compareValues(value, correctValue) && (
        <button type='button' className='m-1.5' onClick={() => setValue(correctValue)}>
          <Check />
        </button>
      )}
    </div>
  );
};
