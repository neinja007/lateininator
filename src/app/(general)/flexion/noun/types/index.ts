import { Numerus, WordCase } from '@/types/wordConstants';
import { Dispatch, SetStateAction } from 'react';

export type TableInputValues = Record<Numerus, Record<WordCase, string>>;
export type SetTableInputValues = Dispatch<SetStateAction<TableInputValues>>;
export type IndividualInputForm = {
  numerus: Numerus;
  wordCase: WordCase;
};
