import { Comparison, ComparisonDegree, Gender, Numerus, WordCase } from '@/types';
import { Dispatch, SetStateAction } from 'react';

export type TableInputValues = Record<Gender, Record<Numerus, Record<Exclude<WordCase, '6'>, string>>> & {
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
