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
