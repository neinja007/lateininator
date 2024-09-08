import { Gender, Numerus, WordCase, ComparisonDegree, Comparison } from '@/types/wordConstants';
import { Dispatch, SetStateAction } from 'react';

export type TableInputValues = Record<Gender, Record<Numerus, Record<WordCase, string>>> & {
  adverb: string;
};
export type SetTableInputValues = Dispatch<SetStateAction<TableInputValues>>;
export type IndividualInputForm = {
  adverb: boolean;
  comparisonDegree: ComparisonDegree;
  gender: Gender;
  numerus: Numerus;
  wordCase: WordCase;
};
export type TableInputForm = {
  comparison: Comparison;
  comparisonDegree: ComparisonDegree;
};
