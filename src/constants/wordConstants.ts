import { Comparison, Conjugation, Declension, Gender } from '@prisma/client';

const wordCase = ['1', '2', '3', '4', '5', '6'] as const;
const person = ['1', '2', '3', '4'] as const;
const numerus = ['sin', 'plu'] as const;
const modus = ['ind', 'kon'] as const;
const voice = ['act', 'pas'] as const;
const tense = ['pres', 'perf', 'plus', 'fut1', 'impe'] as const;
const comparisonDegree = ['pos', 'comp', 'sup'] as const;

const declension = ['A', 'E', 'I', 'K', 'M', 'O', 'U'] satisfies Declension[];
const gender = ['M', 'F', 'N'] satisfies Gender[];
const conjugation = ['A', 'E', 'I', 'K', 'M'] satisfies Conjugation[];
const comparison = ['A_O', 'K'] satisfies Comparison[];

const optionalDeclension = ['NONE', ...declension] as Declension[];
const optionalGender = ['NONE', ...gender] as Gender[];
const optionalConjugation = ['NONE', ...conjugation] as Conjugation[];
const optionalComparison = ['NONE', ...comparison] as Comparison[];

export const WORD_CONSTANTS = {
  wordCase,
  person,
  numerus,
  modus,
  voice,
  tense,
  declension,
  gender,
  conjugation,
  comparison,
  comparisonDegree,
  optional: {
    declension: optionalDeclension,
    gender: optionalGender,
    conjugation: optionalConjugation,
    comparison: optionalComparison
  }
} as const;
