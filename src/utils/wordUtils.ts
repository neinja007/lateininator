/* eslint-disable no-unused-vars */
import { endings } from '@/data/endings';
import { Word, Conjugation, Person, Numerus, Tense, Voice, Modus, Declension, Gender, Case } from '@/data/types';

export function getLexicalForm(word: Word) {
	if (word.type === 'noun') {
		return `-${getEnding.noun(word.declension, word.gender, 'sin', 2)}, ${word.gender}`;
	} else if (word.type === 'verb') {
		return `-${getEnding.verb(word.conjugation, 'ind', 'act', 'pres', 'sin', 2)}, ${word.conjugation}`;
	}
}

export function getBase(word: Word): string {
	let base = '';
	if (word.type === 'noun') {
		if (word.declension === 'a' || word.declension === 'o') {
			base = word.word.substring(0, word.word.length - 1);
		} else {
			base = word.word.substring(0, word.word.length - 2);
		}
	}
	return base;
}

export const getEnding: {
	noun: (declension: Declension, gender: Gender, numerus: Numerus, wordCase: Case) => string;
	verb: (
		conjugation: Conjugation,
		modus: Modus,
		voice: Voice,
		tense: Tense,
		numerus: Numerus,
		person: Person
	) => string | undefined;
	adjective: () => string;
} = {
	noun(declension, gender, numerus, wordCase) {
		return endings.noun[declension][gender][numerus][wordCase];
	},
	verb(conjugation, modus, voice, tense, numerus, person) {
		return endings.verb[conjugation][modus][voice][tense]![numerus][person];
	},
	adjective() {
		return 'siadh';
	}
};
