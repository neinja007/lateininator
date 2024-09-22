import { Dispatch, SetStateAction } from 'react';

export type PointProps = {
  points: number;
  difference: number;
  addDifference: (arg: number) => void;
  addDifferenceToPoints: () => void;
};

export type BaseProps = {
  testingType: 'table' | 'individual';
  stage: 'test' | 'review';
  maxWords: number;
  remainingWords: number;
  handleContinue: () => void;
  individualInputValue: string;
  setIndividualInputValue: Dispatch<SetStateAction<string>>;
};
