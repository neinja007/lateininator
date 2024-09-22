import { Stage } from '@/types/other';
import { useCallback, useState, useEffect } from 'react';
import { useAddPoints } from './database/mutations/useAddPoints';

export const usePointCounter = (stage: Stage) => {
  const [points, setPoints] = useState<number>(0);
  const [difference, setDifference] = useState<number>(0);

  const { mutate: addDbPoints } = useAddPoints('increment');

  const addPoints = useCallback(
    (difference: number) => {
      setPoints((prev) => prev + difference);
      addDbPoints(difference);
    },
    [setPoints, addDbPoints]
  );

  const addDifference = useCallback(
    (difference: number) => {
      setDifference((prev) => prev + difference);
    },
    [setDifference]
  );

  const addDifferenceToPoints = useCallback(() => {
    addPoints(difference);
    setDifference(0);
  }, [difference, addPoints, setDifference]);

  useEffect(() => {
    if (stage === 'test' && difference !== 0) {
      addDifferenceToPoints();
    }
  }, [stage, addDifferenceToPoints, difference]);

  return { points, addPoints, difference, addDifference, addDifferenceToPoints };
};
