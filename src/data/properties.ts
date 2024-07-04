// import {
// 	Comparison,
// 	Case,
// 	Conjugation,
// 	Gender,
// 	Modus,
// 	Declension,
// 	Numerus,
// 	Person,
// 	Tense,
// 	Voice,
// 	ComparisonDegree,
// 	Type
// } from './types';

// export const properties: {
// 	case: Array<Case>;
// 	person: Array<Person>;
// 	numerus: Array<Numerus>;
// 	declension: Array<Declension>;
// 	gender: Array<Gender>;
// 	modus: Array<Modus>;
// 	voice: Array<Voice>;
// 	indTense: Array<Tense>;
// 	konTense: Array<Exclude<Tense, 'fut1'>>;
// 	wordKeys: {
// 		noun: ['declension', 'genitive', 'gender'];
// 		verb: ['conjugation', 'present', 'perfect', 'participle'];
// 		irregular_verb: ['present', 'participle', 'perfect'];
// 		adjective: ['comparison', 'femininum', 'neutrum'];
// 		other: [];
// 		adverb: [];
// 		pronoun: [];
// 	};
// 	conjugation: Array<Conjugation>;
// 	adjectiveDeclension: Array<Comparison>;
// 	types: Array<Type>;
// 	comparisonDegree: Array<ComparisonDegree>;
// } = {

export const properties = {
	case: ['1', '2', '3', '4', '5', '6'],
	person: ['1', '2', '3'],
	numerus: ['sin', 'plu'],
	modus: ['ind', 'kon'],
	voice: ['act', 'pas'],
	indTense: ['pres', 'perf', 'plus', 'fut1', 'impe'],
	konTense: ['pres', 'perf', 'plus', 'impe'],
	declension: ['a', 'e', 'i', 'k', 'm', 'o', 'u'],
	gender: ['m', 'f', 'n'],
	wordKeys: {
		noun: ['declension', 'genitive', 'gender'],
		verb: ['conjugation', 'present', 'perfect', 'participle'],
		irregular_verb: ['present', 'participle', 'perfect'],
		adjective: ['comparison', 'femininum', 'neutrum'],
		other: [],
		adverb: [],
		pronoun: []
	},
	conjugation: ['a', 'e', 'i', 'k', 'm'],
	adjectiveDeclension: ['a_o', 'e_u'],
	types: ['noun', 'verb', 'adjective', 'other', 'adverb', 'pronoun'],
	comparisonDegree: ['pos', 'comp', 'sup']
};
