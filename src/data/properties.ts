import { Case, Gender, Modus, NounDeclension, Numerus, Person, Tense, Voice } from './types';

export const properties: {
	case: Array<Case>;
	person: Array<Person>;
	numerus: Array<Numerus>;
	nounDeclension: Array<NounDeclension>;
	gender: Array<Gender>;
	modus: Array<Modus>;
	voice: Array<Voice>;
	indTense: Array<Tense>;
	konTense: Array<Exclude<Tense, 'fut1'>>;
} = {
	case: ['1', '2', '3', '4', '5', '6'],
	person: ['1', '2', '3'],
	numerus: ['sin', 'plu'],
	modus: ['ind', 'kon'],
	voice: ['act', 'pas'],
	indTense: ['pres', 'perf', 'plus', 'fut1', 'impe'],
	konTense: ['pres', 'perf', 'plus', 'impe'],
	nounDeclension: ['a', 'e', 'i', 'k', 'm', 'o', 'u'],
	gender: ['m', 'f', 'n']
};
