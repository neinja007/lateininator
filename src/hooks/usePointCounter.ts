import { useCallback, useState } from 'react';

export const usePointCounter = () => {
  const [points, setPoints] = useState<number>(0);
  const [difference, setDifference] = useState<number>(0);

  const addPoints = useCallback(
    (difference: number) => {
      setPoints((prev) => prev + difference);
    },
    [setPoints]
  );

  const addDifference = useCallback(
    (difference: number) => {
      setDifference((prev) => prev + difference);
    },
    [setDifference]
  );

  const addDifferenceToPoints = useCallback(() => {
    setPoints((prev) => prev + difference);
    setDifference(0);
  }, [difference, setPoints, setDifference]);

  return { points, addPoints, difference, addDifference, addDifferenceToPoints };
};
