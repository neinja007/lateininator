import React from 'react';
import Input from '@/components/Input';
import clsx from 'clsx';
import ui from '@/styles/ui.module.css';
import { compareValues } from '@/utils/word/compareValues';

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

  const valueWithCorrectValue = !inputIsCorrect
    ? value.trim()
      ? value + ' (' + correctValue + ')'
      : '(' + correctValue + ')'
    : correctValue;

  return (
    <Input
      unstyled={!!customStyle}
      label={label}
      className={clsx('w-full', correctValueIndicator, customStyle)}
      value={stage === 'test' ? value : valueWithCorrectValue}
      onChange={handleChange}
      disabled={stage === 'review'}
    />
  );
};

export default TrainerInput;
