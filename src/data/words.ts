import { Words } from '@/data/types';

export const words: Words = [
	{
		id: 1,
		word: 'schola',
		type: 'noun',
		translation: ['schule'],

		genitive: 'scholae',
		gender: 'f',
		declension: 'a'
	},
	{
		id: 2,
		word: 'et',
		type: 'other',
		translation: ['und']
	},
	{
		id: 3,
		word: 'amicus',
		type: 'noun',
		translation: ['freund'],

		genitive: 'amici',
		gender: 'm',
		declension: 'o'
	},
	{
		id: 4,
		word: 'sed',
		type: 'other',
		translation: ['aber', 'sondern']
	},
	{
		id: 5,
		word: 'discipulus',
		type: 'noun',
		translation: ['schüler'],

		genitive: 'discipuli',
		gender: 'm',
		declension: 'o'
	},
	{
		id: 6,
		word: 'malus',
		type: 'adjective',
		translation: ['schlecht'],

		declension: 'a_o',
		forms: {
			femininum: 'mala',
			neutrum: 'malum'
		}
	},
	{
		id: 7,
		word: 'laetus',
		type: 'adjective',
		translation: ['froh', 'fröhlich'],

		declension: 'a_o',
		forms: {
			femininum: 'laeta',
			neutrum: 'laetum'
		}
	},
	{
		id: 8,
		word: 'saepe',
		type: 'adverb',
		translation: ['oft']
	},
	{
		id: 9,
		word: 'ridere',
		type: 'verb',
		translation: ['lachen'],

		conjugation: 'e',
		forms: {
			present: 'rideo',
			perfect: 'risi',
			participle: 'risum'
		}
	},
	{
		id: 10,
		word: 'cur?',
		type: 'other',
		translation: ['warum', 'warum?']
	},
	{
		id: 11,
		word: 'nunc',
		type: 'adverb',
		translation: ['nun', 'jetzt']
	},
	{
		id: 12,
		word: 'hic',
		type: 'adverb',
		translation: ['hier'],
		info: 'Adverb'
	},
	{
		id: 13,
		word: 'non',
		type: 'other',
		translation: ['nicht']
	},
	{
		id: 14,
		word: 'pensum',
		type: 'noun',
		translation: ['aufgabe'],

		genitive: 'pensi',
		gender: 'n',
		declension: 'o'
	},
	{
		id: 15,
		word: 'magnus',
		type: 'adjective',
		translation: ['groß'],

		declension: 'a_o',
		forms: {
			femininum: 'magna',
			neutrum: 'magnum'
		}
	},
	{
		id: 16,
		word: 'itaque',
		type: 'other',
		translation: ['deshalb', 'daher']
	},
	{
		id: 17,
		word: 'gaudere',
		type: 'verb',
		translation: ['freuen', 'sich freuen'],

		conjugation: 'e',
		forms: {
			present: 'gaudeo',
			perfect: '-',
			participle: '-'
		}
	},
	{
		id: 18,
		word: 'diu',
		type: 'adverb',
		translation: ['lang', 'lange']
	},
	{
		id: 19,
		word: 'laborare',
		type: 'verb',
		translation: ['arbeiten'],

		conjugation: 'a',
		forms: {
			present: 'laboro',
			perfect: 'laboravi',
			participle: 'laboratum'
		}
	},
	{
		id: 20,
		word: 'libenter',
		type: 'adverb',
		translation: ['gern', 'gerne']
	},
	{
		id: 21,
		word: 'interrogare',
		type: 'verb',
		translation: ['fragen'],

		conjugation: 'a',
		forms: {
			present: 'interrogo',
			perfect: 'interrogavi',
			participle: 'interrogatum'
		}
	},
	{
		id: 22,
		word: 'respondere',
		type: 'verb',
		translation: ['antworten'],

		conjugation: 'e',
		forms: {
			present: 'respondeo',
			perfect: 'respondi',
			participle: 'responsum'
		}
	},
	{
		id: 23,
		word: 'sedere',
		type: 'verb',
		translation: ['sitzen'],

		conjugation: 'e',
		forms: {
			present: 'sedeo',
			perfect: 'sedi',
			participle: 'sessum'
		}
	},
	{
		id: 24,
		word: 'tum',
		type: 'other',
		translation: ['dann', 'damals'],
		info: '= tunc'
	},
	{
		id: 25,
		word: 'clamare',
		type: 'verb',
		translation: ['rufen', 'schreien'],

		conjugation: 'a',
		forms: {
			present: 'clamo',
			perfect: 'clamavi',
			participle: 'clamatum'
		}
	},
	{
		id: 26,
		word: 'laudare',
		type: 'verb',
		translation: ['loben'],

		conjugation: 'a',
		forms: {
			present: 'laudo',
			perfect: 'laudavi',
			participle: 'laudatum'
		}
	},
	{
		id: 27,
		word: 'amica',
		type: 'noun',
		translation: ['freundin'],

		genitive: 'amicae',
		gender: 'f',
		declension: 'a'
	},
	{
		id: 28,
		word: 'meus/a/um',
		type: 'pronoun',
		translation: ['mein']
	},
	{
		id: 29,
		word: 'esse',
		type: 'irregular_verb',
		translation: ['sein', 'zu sein'],
		info: 'irreguläres Verb',
		forms: {
			present: 'sum',
			perfect: 'fui',
			participle: '-'
		}
	},
	{
		id: 30,
		word: 'discipula',
		type: 'noun',
		translation: ['schülerin'],

		genitive: 'discipulae',
		gender: 'f',
		declension: 'a'
	},
	{
		id: 31,
		word: 'bonus',
		type: 'adjective',
		translation: ['gut'],

		declension: 'a_o',
		forms: {
			femininum: 'bona',
			neutrum: 'bonum'
		}
	},
	{
		id: 32,
		word: 'semper',
		type: 'adverb',
		translation: ['immer']
	},
	{
		id: 33,
		word: 'sunt',
		type: 'other',
		translation: ['sie sind'],
		derivative: 29
	},
	{
		id: 34,
		word: 'quid?',
		type: 'other',
		translation: ['was', 'was?']
	},
	{
		id: 35,
		word: 'amare',
		type: 'verb',
		translation: ['lieben'],
		conjugation: 'a',
		forms: {
			present: 'amo',
			perfect: 'amavi',
			participle: 'amatum'
		}
	},
	{
		id: 36,
		word: 'non solum - sed etiam',
		type: 'other',
		translation: ['nicht nur sondern auch']
	},
	{
		id: 37,
		word: 'etiam',
		type: 'other',
		translation: ['auch', 'sogar']
	},
	{
		id: 38,
		word: 'lingua',
		type: 'noun',
		translation: ['sprache', 'zunge'],
		genitive: 'linguae',
		gender: 'f',
		declension: 'a'
	},
	{
		id: 39,
		word: 'latinus',
		type: 'adjective',
		translation: ['lateinisch'],
		declension: 'a_o',
		forms: {
			femininum: 'latina',
			neutrum: 'latinum'
		}
	},
	{
		id: 40,
		word: 'graecus',
		type: 'adjective',
		translation: ['griechisch'],
		declension: 'a_o',
		forms: {
			femininum: 'graeca',
			neutrum: 'graecum'
		}
	},
	{
		id: 41,
		word: 'liber',
		type: 'noun',
		translation: ['buch'],
		genitive: 'libri',
		gender: 'm',
		declension: 'o'
	},
	{
		id: 42,
		word: 'quam',
		type: 'other',
		translation: ['wie']
	},
	{
		id: 43,
		word: 'pulcher',
		type: 'adjective',
		translation: ['schön', 'hübsch'],
		declension: 'a_o',
		forms: {
			femininum: 'pulchra',
			neutrum: 'pulchrum'
		}
	},
	{
		id: 44,
		word: 'verbum',
		type: 'noun',
		translation: ['wort'],
		genitive: 'verbi',
		gender: 'n',
		declension: 'o'
	},
	{
		id: 45,
		word: 'docere',
		type: 'verb',
		translation: ['lehren', 'unterrichten'],
		conjugation: 'e',
		forms: {
			present: 'doceo',
			perfect: 'docui',
			participle: 'doctum'
		}
	},
	{
		id: 46,
		word: 'secum',
		type: 'other',
		translation: ['mit sich', 'bei sich']
	},
	{
		id: 47,
		word: 'cogitare',
		type: 'verb',
		translation: ['denken'],
		conjugation: 'a',
		forms: {
			present: 'cogito',
			perfect: 'cogitavi',
			participle: 'cogitatum'
		}
	},
	{
		id: 48,
		word: 'puer',
		type: 'noun',
		translation: ['bub', 'junge'],
		genitive: 'pueri',
		gender: 'm',
		declension: 'o'
	},
	{
		id: 49,
		word: 'puella',
		type: 'noun',
		translation: ['mädchen'],
		genitive: 'puellae',
		gender: 'f',
		declension: 'a'
	},
	{
		id: 50,
		word: 'quod',
		type: 'other',
		translation: ['weil'],
		info: 'als <Konjunktion>'
	},
	{
		id: 51,
		word: 'quis?',
		type: 'other',
		translation: ['wer', 'wer?']
	},
	{
		id: 52,
		word: 'habere',
		type: 'verb',
		translation: ['haben'],
		conjugation: 'e',
		forms: {
			present: 'habeo',
			perfect: 'habui',
			participle: 'habitum'
		}
	},
	{
		id: 53,
		word: 'spectare',
		type: 'verb',
		translation: ['anschauen', 'ansehen', 'betrachten'],
		conjugation: 'a',
		forms: {
			present: 'specto',
			perfect: 'spectavi',
			participle: 'spectatum'
		}
	},
	{
		id: 54,
		word: 'oculus',
		type: 'noun',
		translation: ['auge'],
		genitive: 'oculi',
		gender: 'm',
		declension: 'o'
	},
	{
		id: 55,
		word: 'tuus/a/um',
		type: 'pronoun',
		translation: ['dein']
	},
	{
		id: 56,
		word: 'ubi?',
		type: 'other',
		translation: ['wo', 'wo?']
	},
	{
		id: 57,
		word: 'monere',
		type: 'verb',
		translation: ['ermahnen', 'mahnen'],
		conjugation: 'e',
		forms: {
			present: 'moneo',
			perfect: 'monui',
			participle: 'monitum'
		}
	},
	{
		id: 58,
		word: 'iratus',
		type: 'adjective',
		translation: ['zornig', 'erzürnt'],
		declension: 'a_o',
		forms: {
			femininum: 'irata',
			neutrum: 'iratum'
		}
	},
	{
		id: 59,
		word: 'iam',
		type: 'other',
		translation: ['schon']
	},
	{
		id: 60,
		word: 'exspectare',
		type: 'verb',
		translation: ['erwarten'],
		conjugation: 'a',
		forms: {
			present: 'exspecto',
			perfect: 'exspectavi',
			participle: 'exspectatum'
		}
	},
	{
		id: 61,
		word: 'intrare',
		type: 'verb',
		translation: ['eintreten', 'betreten'],
		conjugation: 'a',
		forms: {
			present: 'intro',
			perfect: 'intravi',
			participle: 'intratum'
		}
	},
	{
		id: 62,
		word: 'salve!',
		type: 'other',
		translation: ['sei gegrüßt', 'sei gegrüßt!']
	},
	{
		id: 63,
		word: 'salvete!',
		type: 'other',
		translation: ['seid gegrüßt', 'seid gegrüßt!']
	},
	{
		id: 64,
		word: 'magister',
		type: 'noun',
		translation: ['lehrer'],
		genitive: 'magistri',
		gender: 'm',
		declension: 'o'
	},
	{
		id: 65,
		word: 'roma',
		type: 'noun',
		translation: ['rom'],
		genitive: 'romae',
		gender: 'f',
		declension: 'a'
	},
	{
		id: 66,
		word: 'clarus',
		type: 'adjective',
		translation: ['berühmt', 'hell'],
		declension: 'a_o',
		forms: {
			femininum: 'clara',
			neutrum: 'clarum'
		}
	},
	{
		id: 67,
		word: 'monstrare',
		type: 'verb',
		translation: ['zeigen'],
		conjugation: 'a',
		forms: {
			present: 'monstro',
			perfect: 'monstravi',
			participle: 'monstratum'
		}
	},
	{
		id: 68,
		word: 'spectaculum',
		type: 'noun',
		translation: ['schauspiel'],
		genitive: 'spectaculi',
		gender: 'n',
		declension: 'o'
	},
	{
		id: 69,
		word: 'ibi',
		type: 'other',
		translation: ['dort']
	},
	{
		id: 70,
		word: 'statua',
		type: 'noun',
		translation: ['statue'],
		genitive: 'statuae',
		gender: 'f',
		declension: 'a'
	},
	{
		id: 71,
		word: 'vir',
		type: 'noun',
		translation: ['mann'],
		genitive: 'viri',
		gender: 'm',
		declension: 'o'
	},
	{
		id: 72,
		word: '-ne',
		type: 'other',
		info: 'Fragepartikel (wird an Wort <angehängt>; habes<ne> = hast du?)'
	},
	{
		id: 73,
		word: 'certe',
		type: 'adverb',
		translation: ['sicherlich', 'sicher']
	},
	{
		id: 74,
		word: 'forum',
		type: 'noun',
		translation: ['forum', 'marktplatz'],
		genitive: 'fori',
		gender: 'n',
		declension: 'o'
	},
	{
		id: 75,
		word: 'romanus',
		type: 'adjective',
		translation: ['römisch'],
		declension: 'a_o',
		forms: {
			femininum: 'romana',
			neutrum: 'romanum'
		}
	},
	{
		id: 76,
		word: 'per',
		type: 'other',
		translation: ['durch'],
		info: 'mit <Akkusativ>'
	},
	{
		id: 77,
		word: 'templum',
		type: 'noun',
		translation: ['tempel'],
		genitive: 'templi',
		gender: 'n',
		declension: 'o'
	},
	{
		id: 78,
		word: 'tam',
		type: 'other',
		translation: ['so']
	},
	{
		id: 79,
		word: 'deus',
		type: 'noun',
		translation: ['gott'],
		genitive: 'dei',
		gender: 'm',
		declension: 'o'
	},
	{
		id: 80,
		word: 'dea',
		type: 'noun',
		translation: ['göttin'],
		genitive: 'deae',
		gender: 'f',
		declension: 'a'
	},
	{
		id: 81,
		word: 'ante',
		type: 'other',
		translation: ['vor'],
		info: 'mit <Akkusativ>'
	},
	{
		id: 82,
		word: 'post',
		type: 'other',
		translation: ['nach', 'hinter'],
		info: 'mit <Akkusativ>'
	},
	{
		id: 83,
		word: 'solum',
		type: 'adverb',
		translation: ['nur']
	},
	{
		id: 84,
		word: 'ad',
		type: 'other',
		translation: ['an', 'zu', 'bei'],
		info: 'mit <Akkusativ>'
	},
	{
		id: 85,
		word: 'via',
		type: 'noun',
		translation: ['weg', 'straße'],
		genitive: 'viae',
		gender: 'f',
		declension: 'a'
	},
	{
		id: 86,
		word: 'ambulare',
		type: 'verb',
		translation: ['gehen', 'spazieren'],
		conjugation: 'a',
		forms: {
			present: 'ambulo',
			perfect: 'ambulavi',
			participle: 'ambulatum'
		}
	},
	{
		id: 87,
		word: 'multi/ae/a',
		type: 'other',
		translation: ['viele'],
		info: 'nur <Plural>'
	},
	{
		id: 88,
		word: 'multum',
		type: 'other',
		translation: ['viel'],
		info: 'nur <Neutrum Singular>'
	},
	{
		id: 89,
		word: 'aedificium',
		type: 'noun',
		translation: ['gebäude'],
		genitive: 'aedificii',
		gender: 'n',
		declension: 'o'
	},
	{
		id: 90,
		word: 'videre',
		type: 'verb',
		translation: ['sehen'],
		conjugation: 'e',
		forms: {
			present: 'video',
			perfect: 'vidi',
			participle: 'visum'
		}
	},
	{
		id: 91,
		word: '-que',
		type: 'other',
		translation: ['und'],
		info: 'an wort <angehängt> (z.B. Gaius<que>)'
	}
];
