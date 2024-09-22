import TrainerInput from '@/components/TrainerInput';
import { compareValues } from '@/utils/word/compareValues';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';

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

  return (
    <div className='mx-auto flex w-full max-w-96 items-end'>
      <div className='block w-full'>
        <TrainerInput label={label} handleChange={setValue} value={value} correctValue={correctValue} stage={stage} />
      </div>
      {stage === 'review' && !isInputCorrect && (
        <button
          type='button'
          className='m-1.5'
          onClick={() => {
            setValue(correctValue);
            setDisablePoints(true);
          }}
        >
          <Check />
        </button>
      )}
    </div>
  );
};
