const wordCase = ['1', '2', '3', '4', '5', '6'] as const;
const person = ['1', '2', '3', '4'] as const;
const numerus = ['sin', 'plu'] as const;
const modus = ['ind', 'kon'] as const;
const voice = ['act', 'pas'] as const;
const tense = ['pres', 'perf', 'plus', 'fut1', 'impe'] as const;
const comparisonDegree = ['pos', 'comp', 'sup'] as const;

const declension = ['A', 'E', 'I', 'K', 'M', 'O', 'U'] as const;
const gender = ['M', 'F', 'N'] as const;
const conjugation = ['A', 'E', 'I', 'K', 'M'] as const;
const comparison = ['A_O', 'K'] as const;

const optionalDeclension = ['NONE', ...declension] as const;
const optionalGender = ['NONE', ...gender] as const;
const optionalConjugation = ['NONE', ...conjugation] as const;
const optionalComparison = ['NONE', ...comparison] as const;

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
