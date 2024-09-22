import { useEffect, useState } from 'react';

export const usePointState = (
  stage: 'review' | 'test',
  inputIsCorrect: boolean,
  addDifference: (value: number) => void,
  amount: number = 1
) => {
  const [disablePoints, setDisablePoints] = useState<boolean>(false);

  useEffect(() => {
    if (stage === 'review' && inputIsCorrect && !disablePoints) {
      addDifference(amount);
      setDisablePoints(true);
    }
  }, [disablePoints, inputIsCorrect, stage, addDifference, amount]);

  useEffect(() => {
    if (stage === 'test' && disablePoints) {
      setDisablePoints(false);
    }
  }, [disablePoints, stage]);

  const handleSetCorrect = (setCorrect: () => void) => () => {
    setCorrect();
    setDisablePoints(true);
  };

  return { handleSetCorrect };
};
