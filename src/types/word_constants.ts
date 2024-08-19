import { WORD_CONSTANTS } from '@/constants';

export type WordCase = (typeof WORD_CONSTANTS.wordCase)[number];
export type Person = (typeof WORD_CONSTANTS.person)[number];
export type Numerus = (typeof WORD_CONSTANTS.numerus)[number];
export type Modus = (typeof WORD_CONSTANTS.modus)[number];
export type Voice = (typeof WORD_CONSTANTS.voice)[number];
export type Tense = (typeof WORD_CONSTANTS.tense)[number];
export type ComparisonDegree = (typeof WORD_CONSTANTS.comparisonDegree)[number];

export type Declension = (typeof WORD_CONSTANTS.declension)[number];
export type Gender = (typeof WORD_CONSTANTS.gender)[number];
export type Conjugation = (typeof WORD_CONSTANTS.conjugation)[number];
export type Comparison = (typeof WORD_CONSTANTS.comparison)[number];

export type OptionalDeclension = (typeof WORD_CONSTANTS.optionalDeclension)[number];
export type OptionalGender = (typeof WORD_CONSTANTS.optionalGender)[number];
export type OptionalConjugation = (typeof WORD_CONSTANTS.optionalConjugation)[number];
export type OptionalComparison = (typeof WORD_CONSTANTS.optionalComparison)[number];
