import { WordType, WordProperty, OtherProperty } from './app_constants';
import {
  WordCase,
  Numerus,
  Tense,
  Person,
  Modus,
  Voice,
  ComparisonDegree,
  OptionalDeclension,
  OptionalComparison,
  OptionalGender,
  OptionalConjugation
} from './word_constants';

export type MapperKeys = {
  type: Record<WordType, string>;
  declension: Record<OptionalDeclension, string>;
  comparison: Record<OptionalComparison, string>;
  wordCase: Record<WordCase, string>;
  gender: Record<OptionalGender, string>;
  numerus: Record<Numerus, string>;
  conjugation: Record<OptionalConjugation, string>;
  tense: Record<Tense, string>;
  person: Record<Person, string>;
  modus: Record<Modus, string>;
  voice: Record<Voice, string>;
  property: Record<WordProperty | OtherProperty, string>;
  comparisonDegree: Record<ComparisonDegree, string>;
};

export type MapperType = { short: MapperKeys; extended: MapperKeys };
