import { Type } from '@prisma/client';

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
const wordTypes = ['NOUN', 'VERB', 'ADJECTIVE', 'OTHER', 'ADVERB', 'PRONOUN'] as Type[];
const mainWordTypes = ['NOUN', 'VERB', 'ADJECTIVE'] satisfies Type[];
const wordPropertiesUsingSelectInput = ['declension', 'conjugation', 'comparison', 'gender'] as const;

export const APP_CONSTANTS = {
  allWordProperties,
  wordProperties,
  otherProperties,
  wordPropertiesUsingSelectInput,
  wordTypes,
  mainWordTypes
} as const;
