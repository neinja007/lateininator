import { Color } from '@/types/other';

const wordCase = ['1', '2', '3', '4', '5', '6'] as const;
const person = ['1', '2', '3', '4'] as const;
const numerus = ['sin', 'plu'] as const;
const modus = ['ind', 'kon'] as const;
const voice = ['act', 'pas'] as const;
const tense = ['pres', 'perf', 'plus', 'fut1', 'impe'] as const;
const declension = ['a', 'e', 'i', 'k', 'm', 'o', 'u'] as const;
const gender = ['m', 'f', 'n'] as const;
const conjugation = ['a', 'e', 'i', 'k', 'm'] as const;
const comparison = ['a_o', 'kon'] as const;
const comparisonDegree = ['pos', 'comp', 'sup'] as const;

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
  comparisonDegree
} as const;

const wordProperties = {
  noun: ['declension', 'genitive', 'gender'],
  verb: ['conjugation', 'present', 'perfect', 'participle'],
  irregularVerb: ['present', 'participle', 'perfect'],
  adjective: ['comparison', 'femininum', 'neutrum'],
  other: [],
  adverb: [],
  pronoun: []
} as const;
const allWordProperties = [
  'declension',
  'genitive',
  'gender',
  'conjugation',
  'present',
  'perfect',
  'participle',
  'comparison',
  'femininum',
  'neutrum'
] as const;
const otherProperties = ['comparisonDegree', 'wordCase', 'person', 'numerus', 'modus', 'voice', 'tense'] as const;
const wordTypes = ['noun', 'verb', 'adjective', 'other', 'adverb', 'pronoun', 'irregularVerb'] as const;
const mainWordTypes = ['noun', 'verb', 'adjective'] as const;
const wordPropertiesUsingSelectInput = ['declension', 'conjugation', 'comparison', 'gender'] as const;

export const APP_CONSTANTS = {
  allWordProperties,
  wordProperties,
  otherProperties,
  wordPropertiesUsingSelectInput,
  wordTypes,
  mainWordTypes
} as const;

export const COLORS: { [C in Color]: React.CSSProperties & string } = {
  gray: 'bg-gray-500 text-white border-none hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600',
  red: 'bg-red-500 text-white border-none hover:bg-red-400 dark:bg-red-700 dark:hover:bg-red-600',
  orange: 'bg-orange-500 text-white border-none hover:bg-orange-400 dark:bg-orange-700 dark:hover:bg-orange-600',
  yellow: 'bg-yellow-500 text-white border-none hover:bg-yellow-400 dark:bg-yellow-700 dark:hover:bg-yellow-600',
  green: 'bg-green-500 text-white border-none hover:bg-green-400 dark:bg-green-700 dark:hover:bg-green-600',
  blue: 'bg-blue-500 text-white border-none hover:bg-blue-400 dark:bg-blue-700 dark:hover:bg-blue-600',
  purple: 'bg-purple-500 text-white border-none hover:bg-purple-400 dark:bg-purple-700 dark:hover:bg-purple-600',
  default: 'bg-white text-black hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800'
};
