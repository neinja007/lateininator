const wordCase = ['1', '2', '3', '4', '5', '6'] as const;
const person = ['1', '2', '3', '4'] as const;
const numerus = ['sin', 'plu'] as const;
const modus = ['ind', 'kon'] as const;
const voice = ['act', 'pas'] as const;
const tense = ['pres', 'perf', 'plus', 'fut1', 'impe'] as const;
const comparisonDegree = ['pos', 'comp', 'sup'] as const;

const declension = ['a', 'e', 'i', 'k', 'm', 'o', 'u'] as const;
const gender = ['m', 'f', 'n'] as const;
const conjugation = ['a', 'e', 'i', 'k', 'm'] as const;
const comparison = ['a_o', 'kon'] as const;

const optionalDeclension = ['-', ...declension] as const;
const optionalGender = ['-', ...gender] as const;
const optionalConjugation = ['-', ...conjugation] as const;
const optionalComparison = ['-', ...comparison] as const;

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
