import React from 'react';
import Input from '@/components/Input';
import clsx from 'clsx';
import ui from '@/styles/ui.module.css';

type TrainerInputProps = {
  customStyle?: React.CSSProperties & string;
  label?: string;
  value: string;
  correctValue?: string;
  handleChange: (...args: any[]) => void;
};

const TrainerInput = ({ customStyle, label, handleChange, value, correctValue }: TrainerInputProps) => {
  const correct = correctValue !== undefined ? value === correctValue : undefined;
  const correctValueIndicator = correctValue !== undefined && (correct ? ui.correct : ui.incorrect);

  const showValue = correctValue !== undefined && !correct;
  const transformedValue = value.trim()
    ? value + ((showValue && ' (' + correctValue + ')') || '')
    : (showValue && '(' + correctValue + ')') || '';

  return (
    <Input
      unstyled={!!customStyle}
      label={label}
      className={clsx('w-full', correctValueIndicator, customStyle)}
      value={transformedValue}
      onChange={handleChange}
      disabled={correct !== undefined}
    />
  );
};

export default TrainerInput;
