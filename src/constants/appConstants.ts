import { Type } from '@prisma/client';

// directly related properties grouped by word type
const wordProperties = {
  NOUN: ['declension', 'genitive', 'gender'],
  VERB: ['conjugation', 'present', 'perfect', 'participle'],
  ADJECTIVE: ['comparison', 'femininum', 'neutrum'],
  OTHER: [],
  ADVERB: [],
  PRONOUN: []
} as const;

// Properties directly related to the word type
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

// Properties that are not directly related to the word type
const otherProperties = [
  'comparisonDegree',
  'wordCase',
  'person',
  'numerus',
  'modus',
  'voice',
  'tense',
  'gender' // adjectives can have all genders
] as const;
const wordTypes = ['NOUN', 'VERB', 'ADJECTIVE', 'OTHER', 'ADVERB', 'PRONOUN'] as Type[];
const mainWordTypes = ['NOUN', 'VERB', 'ADJECTIVE'] satisfies Type[];
const mainWordTypesWithOther = ['NOUN', 'VERB', 'ADJECTIVE', 'OTHER'] satisfies Type[];
const wordPropertiesUsingSelectInput = ['declension', 'conjugation', 'comparison', 'gender'] as const;

export const APP_CONSTANTS = {
  allWordProperties,
  wordProperties,
  otherProperties,
  wordPropertiesUsingSelectInput,
  wordTypes,
  mainWordTypes,
  mainWordTypesWithOther
} as const;
