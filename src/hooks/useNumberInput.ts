import { useCallback, useEffect, useState } from 'react';

export const useNumberInput = (
  max: number
): { value: number; inputValue: string; updateValue: (arg: string) => void } => {
  const [value, setValue] = useState<number>(max);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    setValue(max);
    setInputValue(max.toString());
  }, [max]);

  const updateValue = useCallback(
    (value: string) => {
      if (isNaN(parseInt(value, 10)) || parseInt(value, 10).toString() !== value) {
        setValue(0);
        setInputValue('');
      } else {
        const newValue: number = parseInt(value, 10) > max ? max : parseInt(value, 10) < 0 ? 0 : parseInt(value, 10);
        setValue(newValue);
        setInputValue(newValue.toString());
      }
    },
    [max]
  );

  return { value, inputValue, updateValue };
};
