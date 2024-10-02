import React from 'react';
import Input from '@/components/Input';
import clsx from 'clsx';
import ui from '@/styles/ui.module.css';
import { compareValues } from '@/utils/word/compareValues';
import { formatCorrectedInput } from '@/utils/helpers/formatCorrectedInput';
import { parseValue } from '@/utils/helpers/parseValue';

type TrainerInputProps = {
  customStyle?: React.CSSProperties & string;
  label?: string;
  value: string;
  correctValue: string;
  handleChange: (...args: any[]) => void;
  stage: 'test' | 'review';
};

const TrainerInput = ({ customStyle, label, handleChange, value, correctValue, stage }: TrainerInputProps) => {
  const inputIsCorrect = stage === 'review' && compareValues(value, correctValue);
  const correctValueIndicator = stage === 'review' ? (inputIsCorrect ? ui.correct : ui.incorrect) : '';

  return (
    <Input
      autoComplete='off'
      unstyled={!!customStyle}
      label={label}
      className={clsx('w-full', correctValueIndicator, customStyle)}
      value={stage === 'test' || inputIsCorrect ? parseValue(value) : formatCorrectedInput(value, correctValue)}
      handleChange={handleChange}
      disabled={stage === 'review'}
    />
  );
};

export default TrainerInput;
