import { Word } from '@/data/types';

export function getLexicalForm(word: Word) {
	return word;
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
