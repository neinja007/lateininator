import { Numerus, WordCase } from '@/types';
import { Dispatch, SetStateAction } from 'react';

export type TableInputValues = Record<Numerus, Record<Exclude<WordCase, '6'>, string>>;
export type SetTableInputValues = Dispatch<SetStateAction<TableInputValues>>;
export type IndividualInputForm = {
  numerus: Numerus;
  wordCase: WordCase;
};
