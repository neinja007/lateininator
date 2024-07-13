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
