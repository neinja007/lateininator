import { endings } from '@/data/endings';
import { Word, Person, Numerus, Tense, Voice, Modus, Case } from '@/data/types';

export function getLexicalForm(word: Word) {
	if (word.type === 'noun') {
		return `-${endings.noun[word.declension][word.gender].sin[2]}, ${word.gender}.`;
	} else if (word.type === 'verb') {
		return `-${endings.verb[word.conjugation].ind.act.pres.sin[1]}, ${word.conjugation}.`;
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
	} else if (word.type === 'verb') {
		base = word.word.substring(0, word.word.length - 3);
	}
	return base;
}

export function getForm(
	word: Word,
	info:
		| {
				modus: Modus;
				voice: Voice;
				tense: Tense;
				numerus: Numerus;
				person: Person;
		  }
		| {
				numerus: Numerus;
				wordCase: Case;
		  }
): string {
	let ending: string | undefined = undefined;
	if (word.type === 'noun') {
		if ('numerus' in info && 'wordCase' in info) {
			ending = endings.noun[word.declension][word.gender][info.numerus][info.wordCase];
		}
	} else if (word.type === 'verb') {
		if ('modus' in info && 'voice' in info && 'tense' in info && 'numerus' in info && 'person' in info) {
			if (info.modus === 'kon' && info.tense !== 'fut1') {
				ending = endings.verb[word.conjugation][info.modus][info.voice][info.tense][info.numerus][info.person];
			} else if (info.modus === 'ind') {
				ending = endings.verb[word.conjugation][info.modus][info.voice][info.tense][info.numerus][info.person];
			}
		}
	}

	if (ending === undefined) throw new Error('Error: Ending from getForm() is undefined!!!');
	if (ending === '-') {
		return word.word;
	}
	return getBase(word) + ending;
}
