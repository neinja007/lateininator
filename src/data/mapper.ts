//TODO: full mapper typing

export const mapper: { [key: string]: { [key: string]: string } } = {
	type: {
		noun: 'Nomen',
		verb: 'Verb',
		adjective: 'Adjektiv',
		other: 'Sonstiges'
	},
	declension: {
		a: 'A Deklination',
		o: 'O Deklination',
		k: 'konsonantische Deklination',
		i: 'konsonantische Deklination (I-Stämme)',
		m: 'konsonantische Deklination (Mischstämme)',
		e: 'E Deklination',
		u: 'U Deklination',
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
		m: 'männlich',
		f: 'weiblich',
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
	}
};
