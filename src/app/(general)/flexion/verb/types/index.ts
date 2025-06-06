import { Tense, Numerus, Person, Voice, Modus } from '@/types/wordConstants';
import { Dispatch, SetStateAction } from 'react';

export type TableInputValues = Record<Tense, Record<Numerus, Record<Person, string>>>;
export type SetTableInputValues = Dispatch<SetStateAction<TableInputValues>>;
export type IndividualInputForm = {
  tense: Tense;
  numerus: Numerus;
  person: Person;
  voice: Voice;
  modus: Modus;
};
export type TableInputForm = {
  voice: Voice;
  modus: Modus;
};
