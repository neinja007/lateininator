import { WordType, WordProperty, OtherProperty } from './app_constants';
import {
  Declension,
  Comparison,
  WordCase,
  Gender,
  Numerus,
  Conjugation,
  Tense,
  Person,
  Modus,
  Voice,
  ComparisonDegree
} from './word_constants';

export type MapperKeys = {
  type: Record<WordType, string>;
  declension: Record<Declension, string>;
  comparison: Record<Comparison, string>;
  wordCase: Record<WordCase, string>;
  gender: Record<Gender, string>;
  numerus: Record<Numerus, string>;
  conjugation: Record<Conjugation, string>;
  tense: Record<Tense, string>;
  person: Record<Person, string>;
  modus: Record<Modus, string>;
  voice: Record<Voice, string>;
  property: Record<WordProperty | OtherProperty, string>;
  comparisonDegree: Record<ComparisonDegree, string>;
};

export type MapperType = { short: MapperKeys; extended: MapperKeys };
