import {
	AdjectiveDeclension,
	Case,
	Conjugation,
	Gender,
	Modus,
	NounDeclension,
	Numerus,
	Person,
	Tense,
	Type,
	Voice,
	WordInputKey
} from './types';

type MapperKeys = {
	type: Record<Type, string>;
	nounDeclension: Record<NounDeclension, string>;
	adjectiveDeclension: Record<AdjectiveDeclension, string>;
	case: Record<Case, string>;
	gender: Record<Gender, string>;
	numerus: Record<Numerus, string>;
	conjugation: Record<Conjugation, string>;
	tense: Record<Tense, string>;
	person: Record<Person, string>;
	modus: Record<Modus, string>;
	voice: Record<Voice, string>;
	wordKey: Record<WordInputKey, string>;
};

export const mapper: {
	extended: MapperKeys;
	short: MapperKeys;
} = {
	extended: {
		type: {
			noun: 'Nomen',
			verb: 'Verb',
			adjective: 'Adjektiv',
			other: 'Sonstiges',
			adverb: 'Adverb',
			irregular_verb: 'Irreguläres Verb',
			pronoun: 'Pronomen'
		},
		nounDeclension: {
			a: 'A Deklination',
			o: 'O Deklination',
			k: 'konsonantische Deklination',
			i: 'konsonantische Deklination (I-Stämme)',
			m: 'konsonantische Deklination (Mischstämme)',
			e: 'E Deklination',
			u: 'U Deklination'
		},
		adjectiveDeclension: {
			a_o: 'A/O Deklination',
			e_u: 'E/U Deklination'
		},
		case: {
			1: 'Nominativ',
			2: 'Genitiv',
			3: 'Dativ',
			4: 'Akkusativ',
			5: 'Ablativ',
			6: 'Vokativ'
		},
		gender: {
			m: 'maskulin',
			f: 'feminin',
			n: 'neutrum'
		},
		numerus: {
			sin: 'Singular',
			plu: 'Plural'
		},
		conjugation: {
			a: 'A Konjugation',
			e: 'E Konjugation',
			k: 'konsonantische Konjugation',
			i: 'I Konjugation',
			m: 'Mischkonjugation'
		},
		tense: {
			pres: 'Präsens',
			perf: 'Perfekt',
			plus: 'Plusquamperfekt',
			fut1: 'Futur 1',
			impe: 'Imperfekt'
		},
		person: {
			1: '1. Person',
			2: '2. Person',
			3: '3. Person'
		},
		modus: {
			ind: 'Indikativ',
			kon: 'Konjunktiv'
		},
		voice: { act: 'Aktiv', pas: 'Passiv' },
		wordKey: {
			conjugation: 'Konjugation',
			declension: 'Deklination',
			gender: 'Geschlecht',
			femininum: 'Nominativ Feminin',
			neutrum: 'Nominativ Neutrum',
			genitive: 'Genitiv Singular',
			participle: 'Partizip Perfekt Passiv',
			perfect: '1. Person Singular Perfekt',
			present: '1. Person Singular Präsens'
		}
	},
	short: {
		type: {
			noun: 'Nomen',
			verb: 'Verb',
			adjective: 'Adj.',
			other: 'Sonst.',
			adverb: 'Adv.',
			irregular_verb: 'Irr. Verb',
			pronoun: 'Pron.'
		},
		nounDeclension: {
			a: 'A Dekl.',
			o: 'O Dekl.',
			k: 'kons. Dekl.',
			i: 'kons. Dekl. I',
			m: 'kons. Dekl. Misch.',
			e: 'E Dekl.',
			u: 'U Dekl.'
		},
		adjectiveDeclension: {
			a_o: 'A/O Dekl.',
			e_u: 'E/U Dekl.'
		},
		case: {
			1: 'Nom.',
			2: 'Gen.',
			3: 'Dat.',
			4: 'Akk.',
			5: 'Abl.',
			6: 'Vok.'
		},
		gender: {
			m: 'm.',
			f: 'f.',
			n: 'n.'
		},
		numerus: {
			sin: 'Sg.',
			plu: 'Pl.'
		},
		conjugation: {
			a: 'A Konj.',
			e: 'E Konj.',
			k: 'kons. Konj.',
			i: 'I Konj.',
			m: 'Mischkonj.'
		},
		tense: {
			pres: 'Präs.',
			perf: 'Perf.',
			plus: 'Plus.',
			fut1: 'Fut1.',
			impe: 'Imp.'
		},
		person: {
			1: '1. P.',
			2: '2. P.',
			3: '3. P.'
		},
		modus: {
			ind: 'Ind.',
			kon: 'Konj.'
		},
		voice: { act: 'Akt.', pas: 'Pas.' },
		wordKey: {
			conjugation: 'Konj.',
			declension: 'Dekl.',
			gender: 'Geschl.',
			femininum: 'Nom. F.',
			neutrum: 'Nom. N.',
			genitive: 'Gen.',
			participle: 'PPP',
			perfect: 'Perf.',
			present: 'Präs.'
		}
	}
};
