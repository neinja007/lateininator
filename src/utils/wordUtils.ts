import { endings } from '@/data/endings';
import { Word, Person, Numerus, Tense, Voice, Modus, Case, ComparisonDegree, Gender } from '@/data/types';

export const getLexicalForm = (word: Word) => {
	if (word.type === 'noun') {
		if (word.declension === '-' || word.gender === '-') return;
		return `-${endings.noun[word.declension][word.gender].sin[2]}, ${word.gender}.`;
	} else if (word.type === 'verb') {
		if (word.conjugation === '-') return;
		return `-${endings.verb[word.conjugation].ind.act.pres.sin[1]}, ${word.conjugation}.`;
	}
};

export const getBase = (
	word: Word,
	info: { baseType?: 'word' | 'present' | 'perfect' | 'participle'; superlative?: boolean }
): string => {
	const { baseType, superlative } = info;
	let base = '';
	if (word.type === 'noun') {
		if (word.declension === 'a') {
			base = word.word.substring(0, word.word.length - 1);
		} else {
			base = word.word.substring(0, word.word.length - 2);
		}
	} else if (word.type === 'verb') {
		if (baseType === 'present' || baseType === 'word') {
			base = word.word.substring(0, word.present.length - 2);
		} else if (baseType === 'perfect') {
			base = word.perfect.substring(0, word.perfect.length - 1);
		} else if (baseType === 'participle') {
			base = word.participle.substring(0, word.participle.length - 2);
		}
	} else if (word.type === 'adjective') {
		base = word.word.substring(0, word.word.length - 2);
		if (superlative) {
			if (word.word.endsWith('er')) {
				base += 'errim';
			} else if (word.word.endsWith('ilis')) {
				base += 'illim';
			} else {
				base += 'issim';
			}
		}
	}
	return base;
};

export const getForm = (
	word: Word,
	info:
		| {
				imperative?: boolean;
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
		| {
				comparisonDegree: ComparisonDegree;
				gender: Gender;
				adverb?: boolean;
				numerus: Numerus;
				wordCase: Case;
		  }
): string => {
	let ending: string | undefined = undefined;

	if (word.type === 'noun') {
		if (word.declension === '-' || word.gender === '-')
			throw new Error('Error: Empty word properties were passed to getForm()');
		if ('numerus' in info && 'wordCase' in info) {
			if (info.wordCase === '6') {
				ending = endings.noun[word.declension][word.gender][info.numerus][1];

				if (word.declension === 'o' && word.gender === 'm') {
					if (ending.endsWith('us')) ending = ending.substring(0, ending.length - 2) + 'e';
					else if (ending.endsWith('ius')) ending = ending.substring(0, ending.length - 3) + 'i';
				}
			} else {
				ending = endings.noun[word.declension][word.gender][info.numerus][info.wordCase];
			}
		}
	} else if (word.type === 'verb') {
		if (word.conjugation === '-') throw new Error('Error: Empty word properties were passed to getForm()');
		if ('modus' in info && 'voice' in info && 'tense' in info && 'numerus' in info && 'person' in info) {
			if (info.modus === 'kon' && info.tense !== 'fut1') {
				ending = endings.verb[word.conjugation][info.modus][info.voice][info.tense][info.numerus][info.person];
			} else if (info.modus === 'ind') {
				ending = endings.verb[word.conjugation][info.modus][info.voice][info.tense][info.numerus][info.person];
			}
		}
	} else if (word.type === 'adjective') {
		if (word.comparison === '-') throw new Error('Error: Empty word properties were passed to getForm()');
		if ('comparisonDegree' in info && 'numerus' in info && 'wordCase' in info) {
			if (info.adverb) {
				ending = endings.adverb[info.comparisonDegree][word.word.endsWith('ns') ? '_ns' : word.comparison];
			} else {
				if (info.wordCase === '6') {
					ending = endings.adjective[word.comparison][info.gender][info.comparisonDegree][info.numerus][1];

					if (word.comparison === 'a_o' && info.gender === 'm') {
						if (ending.endsWith('us')) ending = ending.substring(0, ending.length - 2) + 'e';
						else if (ending.endsWith('ius')) ending = ending.substring(0, ending.length - 3) + 'i';
					}
				} else {
					ending = endings.adjective[word.comparison][info.gender][info.comparisonDegree][info.numerus][info.wordCase];
				}
			}
		}
	}

	if (ending === undefined) throw new Error('Error: Ending from getForm() is undefined: ' + word + info);
	if (ending === '-') {
		return word.word;
	}

	let baseType: 'word' | 'present' | 'perfect' | 'participle' = 'word';
	let superlative = false;

	if (word.type === 'verb' && 'tense' in info) {
		if (info.tense === 'pres') {
			baseType = 'present';
		} else if (info.voice === 'pas' && (info.tense === 'perf' || info.tense === 'plus')) {
			baseType = 'participle';
		} else if (info.tense === 'perf' || info.tense === 'plus') {
			baseType = 'perfect';
		}
	} else if (word.type === 'adjective' && 'comparisonDegree' in info) {
		if (info.comparisonDegree === 'sup') {
			superlative = true;
		}
	}

	const base = getBase(word, { baseType, superlative });
	if (base === '') return '-';
	else return base + ending;
};
