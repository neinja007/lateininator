import { Words } from '@/data/types';
export const words: Words = [
	{ id: 1, word: 'schola', type: 'noun', translation: ['schule'], genitive: 'scholae', gender: 'f', declension: 'a' },
	{ id: 2, word: 'et', type: 'other', translation: ['und'] },
	{ id: 3, word: 'amicus', type: 'noun', translation: ['freund'], genitive: 'amici', gender: 'm', declension: 'o' },
	{ id: 4, word: 'sed', type: 'other', translation: ['aber', 'sondern'] },
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
		comparison: 'a_o',
		femininum: 'mala',
		neutrum: 'malum'
	},
	{
		id: 7,
		word: 'laetus',
		type: 'adjective',
		translation: ['froh', 'fröhlich'],
		comparison: 'a_o',
		femininum: 'laeta',
		neutrum: 'laetum'
	},
	{ id: 8, word: 'saepe', type: 'adverb', translation: ['oft'] },
	{
		id: 9,
		word: 'ridere',
		type: 'verb',
		translation: ['lachen'],
		conjugation: 'e',
		present: 'rideo',
		perfect: 'risi',
		participle: 'risum'
	},
	{ id: 10, word: 'cur?', type: 'other', translation: ['warum', 'warum?'] },
	{ id: 11, word: 'nunc', type: 'adverb', translation: ['nun', 'jetzt'] },
	{ id: 12, word: 'hic', type: 'adverb', translation: ['hier'], info: 'Adverb' },
	{ id: 13, word: 'non', type: 'other', translation: ['nicht'] },
	{ id: 14, word: 'pensum', type: 'noun', translation: ['aufgabe'], genitive: 'pensi', gender: 'n', declension: 'o' },
	{
		id: 15,
		word: 'magnus',
		type: 'adjective',
		translation: ['groß'],
		comparison: 'a_o',
		femininum: 'magna',
		neutrum: 'magnum'
	},
	{ id: 16, word: 'itaque', type: 'other', translation: ['deshalb', 'daher'] },
	{
		id: 17,
		word: 'gaudere',
		type: 'verb',
		translation: ['freuen', 'sich freuen'],
		conjugation: 'e',
		present: 'gaudeo',
		perfect: '-',
		participle: '-'
	},
	{ id: 18, word: 'diu', type: 'adverb', translation: ['lang', 'lange'] },
	{
		id: 19,
		word: 'laborare',
		type: 'verb',
		translation: ['arbeiten'],
		conjugation: 'a',
		present: 'laboro',
		perfect: 'laboravi',
		participle: 'laboratum'
	},
	{ id: 20, word: 'libenter', type: 'adverb', translation: ['gern', 'gerne'] },
	{
		id: 21,
		word: 'interrogare',
		type: 'verb',
		translation: ['fragen'],
		conjugation: 'a',
		present: 'interrogo',
		perfect: 'interrogavi',
		participle: 'interrogatum'
	},
	{
		id: 22,
		word: 'respondere',
		type: 'verb',
		translation: ['antworten'],
		conjugation: 'e',
		present: 'respondeo',
		perfect: 'respondi',
		participle: 'responsum'
	},
	{
		id: 23,
		word: 'sedere',
		type: 'verb',
		translation: ['sitzen'],
		conjugation: 'e',
		present: 'sedeo',
		perfect: 'sedi',
		participle: 'sessum'
	},
	{ id: 24, word: 'tum', type: 'other', translation: ['dann', 'damals'], info: '= tunc' },
	{
		id: 25,
		word: 'clamare',
		type: 'verb',
		translation: ['rufen', 'schreien'],
		conjugation: 'a',
		present: 'clamo',
		perfect: 'clamavi',
		participle: 'clamatum'
	},
	{
		id: 26,
		word: 'laudare',
		type: 'verb',
		translation: ['loben'],
		conjugation: 'a',
		present: 'laudo',
		perfect: 'laudavi',
		participle: 'laudatum'
	},
	{ id: 27, word: 'amica', type: 'noun', translation: ['freundin'], genitive: 'amicae', gender: 'f', declension: 'a' },
	{ id: 28, word: 'meus/a/um', type: 'pronoun', translation: ['mein'] },
	{
		id: 29,
		word: 'esse',
		type: 'irregular_verb',
		translation: ['sein', 'zu sein'],
		info: 'irreguläres Verb',
		present: 'sum',
		perfect: 'fui',
		participle: '-'
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
		comparison: 'a_o',
		femininum: 'bona',
		neutrum: 'bonum'
	},
	{ id: 32, word: 'semper', type: 'adverb', translation: ['immer'] },
	{ id: 33, word: 'sunt', type: 'other', translation: ['sie sind'], derivative: 29 },
	{ id: 34, word: 'quid?', type: 'other', translation: ['was', 'was?'] },
	{
		id: 35,
		word: 'amare',
		type: 'verb',
		translation: ['lieben'],
		conjugation: 'a',
		present: 'amo',
		perfect: 'amavi',
		participle: 'amatum'
	},
	{ id: 36, word: 'non solum - sed etiam', type: 'other', translation: ['nicht nur sondern auch'] },
	{ id: 37, word: 'etiam', type: 'other', translation: ['auch', 'sogar'] },
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
		comparison: 'a_o',
		femininum: 'latina',
		neutrum: 'latinum'
	},
	{
		id: 40,
		word: 'graecus',
		type: 'adjective',
		translation: ['griechisch'],
		comparison: 'a_o',
		femininum: 'graeca',
		neutrum: 'graecum'
	},
	{ id: 41, word: 'liber', type: 'noun', translation: ['buch'], genitive: 'libri', gender: 'm', declension: 'o' },
	{ id: 42, word: 'quam', type: 'other', translation: ['wie'] },
	{
		id: 43,
		word: 'pulcher',
		type: 'adjective',
		translation: ['schön', 'hübsch'],
		comparison: 'a_o',
		femininum: 'pulchra',
		neutrum: 'pulchrum'
	},
	{ id: 44, word: 'verbum', type: 'noun', translation: ['wort'], genitive: 'verbi', gender: 'n', declension: 'o' },
	{
		id: 45,
		word: 'docere',
		type: 'verb',
		translation: ['lehren', 'unterrichten'],
		conjugation: 'e',
		present: 'doceo',
		perfect: 'docui',
		participle: 'doctum'
	},
	{ id: 46, word: 'secum', type: 'other', translation: ['mit sich', 'bei sich'] },
	{
		id: 47,
		word: 'cogitare',
		type: 'verb',
		translation: ['denken'],
		conjugation: 'a',
		present: 'cogito',
		perfect: 'cogitavi',
		participle: 'cogitatum'
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
	{ id: 49, word: 'puella', type: 'noun', translation: ['mädchen'], genitive: 'puellae', gender: 'f', declension: 'a' },
	{ id: 50, word: 'quod', type: 'other', translation: ['weil'], info: 'als Konjunktion' },
	{ id: 51, word: 'quis?', type: 'other', translation: ['wer', 'wer?'] },
	{
		id: 52,
		word: 'habere',
		type: 'verb',
		translation: ['haben'],
		conjugation: 'e',
		present: 'habeo',
		perfect: 'habui',
		participle: 'habitum'
	},
	{
		id: 53,
		word: 'spectare',
		type: 'verb',
		translation: ['anschauen', 'ansehen', 'betrachten'],
		conjugation: 'a',
		present: 'specto',
		perfect: 'spectavi',
		participle: 'spectatum'
	},
	{ id: 54, word: 'oculus', type: 'noun', translation: ['auge'], genitive: 'oculi', gender: 'm', declension: 'o' },
	{ id: 55, word: 'tuus/a/um', type: 'pronoun', translation: ['dein'] },
	{ id: 56, word: 'ubi?', type: 'other', translation: ['wo', 'wo?'] },
	{
		id: 57,
		word: 'monere',
		type: 'verb',
		translation: ['ermahnen', 'mahnen'],
		conjugation: 'e',
		present: 'moneo',
		perfect: 'monui',
		participle: 'monitum'
	},
	{
		id: 58,
		word: 'iratus',
		type: 'adjective',
		translation: ['zornig', 'erzürnt'],
		comparison: 'a_o',
		femininum: 'irata',
		neutrum: 'iratum'
	},
	{ id: 59, word: 'iam', type: 'other', translation: ['schon'] },
	{
		id: 60,
		word: 'exspectare',
		type: 'verb',
		translation: ['erwarten'],
		conjugation: 'a',
		present: 'exspecto',
		perfect: 'exspectavi',
		participle: 'exspectatum'
	},
	{
		id: 61,
		word: 'intrare',
		type: 'verb',
		translation: ['eintreten', 'betreten'],
		conjugation: 'a',
		present: 'intro',
		perfect: 'intravi',
		participle: 'intratum'
	},
	{ id: 62, word: 'salve!', type: 'other', translation: ['sei gegrüßt', 'sei gegrüßt!'] },
	{ id: 63, word: 'salvete!', type: 'other', translation: ['seid gegrüßt', 'seid gegrüßt!'] },
	{
		id: 64,
		word: 'magister',
		type: 'noun',
		translation: ['lehrer'],
		genitive: 'magistri',
		gender: 'm',
		declension: 'o'
	},
	{ id: 65, word: 'roma', type: 'noun', translation: ['rom'], genitive: 'romae', gender: 'f', declension: 'a' },
	{
		id: 66,
		word: 'clarus',
		type: 'adjective',
		translation: ['berühmt', 'hell'],
		comparison: 'a_o',
		femininum: 'clara',
		neutrum: 'clarum'
	},
	{
		id: 67,
		word: 'monstrare',
		type: 'verb',
		translation: ['zeigen'],
		conjugation: 'a',
		present: 'monstro',
		perfect: 'monstravi',
		participle: 'monstratum'
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
	{ id: 69, word: 'ibi', type: 'other', translation: ['dort'] },
	{ id: 70, word: 'statua', type: 'noun', translation: ['statue'], genitive: 'statuae', gender: 'f', declension: 'a' },
	{ id: 71, word: 'vir', type: 'noun', translation: ['mann'], genitive: 'viri', gender: 'm', declension: 'o' },
	{ id: 72, word: '-ne', type: 'other', info: 'Fragepartikel (wird an Wort angehängt; habesne = hast du?)' },
	{ id: 73, word: 'certe', type: 'adverb', translation: ['sicherlich', 'sicher'] },
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
		comparison: 'a_o',
		femininum: 'romana',
		neutrum: 'romanum'
	},
	{ id: 76, word: 'per', type: 'other', translation: ['durch'], info: 'mit Akkusativ' },
	{ id: 77, word: 'templum', type: 'noun', translation: ['tempel'], genitive: 'templi', gender: 'n', declension: 'o' },
	{ id: 78, word: 'tam', type: 'other', translation: ['so'] },
	{ id: 79, word: 'deus', type: 'noun', translation: ['gott'], genitive: 'dei', gender: 'm', declension: 'o' },
	{ id: 80, word: 'dea', type: 'noun', translation: ['göttin'], genitive: 'deae', gender: 'f', declension: 'a' },
	{ id: 81, word: 'ante', type: 'other', translation: ['vor'], info: 'mit Akkusativ' },
	{ id: 82, word: 'post', type: 'other', translation: ['nach', 'hinter'], info: 'mit Akkusativ' },
	{ id: 83, word: 'solum', type: 'adverb', translation: ['nur'] },
	{ id: 84, word: 'ad', type: 'other', translation: ['an', 'zu', 'bei'], info: 'mit Akkusativ' },
	{ id: 85, word: 'via', type: 'noun', translation: ['weg', 'straße'], genitive: 'viae', gender: 'f', declension: 'a' },
	{
		id: 86,
		word: 'ambulare',
		type: 'verb',
		translation: ['gehen', 'spazieren'],
		conjugation: 'a',
		present: 'ambulo',
		perfect: 'ambulavi',
		participle: 'ambulatum'
	},
	{ id: 87, word: 'multi/ae/a', type: 'other', translation: ['viele'], info: 'nur Plural' },
	{ id: 88, word: 'multum', type: 'other', translation: ['viel'], info: 'nur Neutrum Singular' },
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
		present: 'video',
		perfect: 'vidi',
		participle: 'visum'
	},
	{ id: 91, word: '-que', type: 'other', translation: ['und'], info: 'an wort angehängt (z.B. Gaiusque)' },
	{
		id: 92,
		word: 'de',
		type: 'other',
		translation: ['von', 'über'],
		info: 'Präposition mit Ablativ'
	},
	{
		id: 93,
		word: 'terra',
		type: 'noun',
		translation: ['erde', 'land'],
		genitive: 'terrae',
		gender: 'f',
		declension: 'a'
	},
	{
		id: 94,
		word: 'alienus',
		type: 'adjective',
		translation: ['fremd'],
		comparison: 'a_o',
		femininum: 'aliena',
		neutrum: 'alienum'
	},
	{
		id: 95,
		word: 'pugnare',
		type: 'verb',
		translation: ['kämpfen'],
		conjugation: 'a',
		present: 'pugno',
		perfect: 'pugnavi',
		participle: 'pugnatum'
	},
	{
		id: 96,
		word: 'necare',
		type: 'verb',
		translation: ['töten'],
		conjugation: 'a',
		present: 'neco',
		perfect: 'necavi',
		participle: 'necatum'
	},
	{
		id: 97,
		word: 'placere',
		type: 'verb',
		translation: ['gefallen'],
		conjugation: 'e',
		present: 'placeo',
		perfect: 'placui',
		participle: 'placitum'
	},
	{
		id: 98,
		word: 'novus',
		type: 'adjective',
		translation: ['neu'],
		comparison: 'a_o',
		femininum: 'nova',
		neutrum: 'novum'
	},
	{
		id: 99,
		word: 'alius/a/ud',
		type: 'other',
		translation: ['ein anderer']
	},
	{
		id: 100,
		word: 'alius - alius',
		type: 'other',
		translation: ['der eine - der andere', 'der eine der andere']
	},
	{
		id: 101,
		word: 'gladius',
		type: 'noun',
		translation: ['schwert'],
		genitive: 'gladii',
		gender: 'm',
		declension: 'o'
	},
	{
		id: 102,
		word: 'postremo',
		type: 'adverb',
		translation: ['schließlich', 'endlich']
	},
	{
		id: 103,
		word: 'cum',
		type: 'other',
		translation: ['mit'],
		info: 'Präposition mit Ablativ'
	},
	{
		id: 104,
		word: 'superare',
		type: 'verb',
		translation: ['besiegen', 'übertreffen'],
		conjugation: 'a',
		present: 'supero',
		perfect: 'superavi',
		participle: 'superatum'
	},
	{
		id: 105,
		word: 'si',
		type: 'other',
		translation: ['wenn', 'falls'],
		info: 'als Konjunktion'
	},
	{
		id: 106,
		word: 'bene',
		type: 'adverb',
		translation: ['gut']
	},
	{
		id: 107,
		word: 'vita',
		type: 'noun',
		translation: ['leben'],
		genitive: 'vitae',
		gender: 'f',
		declension: 'a'
	},
	{
		id: 108,

		word: 'donare',
		type: 'verb',
		translation: ['schenken'],
		conjugation: 'a',
		present: 'dono',
		perfect: 'donavi',
		participle: 'donatum'
	},
	{
		id: 109,

		word: 'pro',
		type: 'other',
		translation: ['für'],
		info: 'Präposition mit Ablativ'
	},
	{
		id: 110,
		word: 'suus/a/um',
		type: 'other',
		translation: ['sein', 'ihr']
	},
	{
		id: 111,
		word: 'a',
		type: 'other',
		translation: ['von'],
		info: 'Vor Vokal: ab; Präposition mit Ablativ'
	},
	{
		id: 112,
		word: 'prae',
		type: 'other',
		translation: ['vor'],
		info: 'Präposition mit Ablativ'
	},
	{
		id: 113,
		word: 'neque',
		type: 'other',
		translation: ['und nicht'],
		info: '= nec'
	},
	{
		id: 114,
		word: 'sine',
		type: 'other',
		translation: ['ohne'],
		info: 'Präposition mit Ablativ'
	},
	{
		id: 115,
		word: 'femina',
		type: 'noun',
		translation: ['frau'],
		genitive: 'feminae',
		gender: 'f',
		declension: 'a'
	},
	{
		id: 116,
		word: 'gaudium',
		type: 'noun',
		translation: ['freude'],
		genitive: 'gaudii',
		gender: 'n',
		declension: 'o'
	},
	{
		id: 117,
		word: 'narrare',
		type: 'verb',
		translation: ['erzählen'],
		conjugation: 'a',
		present: 'narro',
		perfect: 'narravi',
		participle: 'narratum'
	},
	{
		id: 118,
		word: 'romani',
		type: 'noun',
		pluralOnly: true,
		translation: ['die römer', 'römer'],
		info: 'nur Plural',
		genitive: 'romanorum',
		gender: 'm',
		declension: 'o'
	},
	{
		id: 119,
		word: 'copia',
		type: 'noun',
		translation: ['menge', 'vorrat'],
		info: 'nicht copiae; im Singular',
		genitive: 'copiae',
		gender: 'f',
		declension: 'a'
	},
	{
		id: 120,
		word: 'e',
		type: 'other',
		translation: ['aus', 'von'],
		info: 'Vor Vokal: ex; Präposition mit Ablativ'
	},
	{
		id: 121,
		word: 'mihi',
		type: 'other',
		translation: ['mir'],
		info: 'Dativ'
	},
	{
		id: 122,
		word: 'tu',
		type: 'other',
		translation: ['du']
	},
	{
		id: 123,
		word: 'graeci',
		type: 'noun',
		pluralOnly: true,
		translation: ['die griechen', 'griechen'],
		info: 'nur Plural',
		genitive: 'graecorum',
		gender: 'm',
		declension: 'o'
	},
	{
		id: 124,
		word: 'ita',
		type: 'other',
		translation: ['so']
	},
	{
		id: 125,
		word: 'inquit',
		type: 'other',
		translation: ['er sagt', 'sie sagt', 'sagt']
	},
	{
		id: 126,
		word: 'num?',
		type: 'other',
		translation: ['etwa', 'etwa?']
	},
	{
		id: 127,
		word: 'vester/tra/trum',
		type: 'other',
		translation: ['euer', 'eure']
	},
	{
		id: 128,
		word: 'quoque',
		type: 'other',
		translation: ['auch'],
		info: 'nachgestellt'
	},
	{
		id: 129,
		word: 'nobis',
		type: 'other',
		translation: ['uns'],
		info: 'Dativ'
	},
	{
		id: 130,
		word: 'vobis',
		type: 'other',
		translation: ['euch'],
		info: 'Dativ'
	},
	{
		id: 131,
		word: 'noster/tra/trum',
		type: 'other',
		translation: ['unser', 'unsere']
	},
	{
		id: 132,
		word: 'tibi',
		type: 'other',
		translation: ['dir'],
		info: 'Dativ'
	},
	{
		id: 133,
		word: 'in',
		type: 'other',
		translation: ['in', 'auf'],
		info: 'mit Ablativ, Frage WO?'
	},
	{
		id: 134,
		word: 'animus',
		type: 'noun',
		translation: ['sinn', 'geist', 'mut'],
		genitive: 'animi',
		gender: 'm',
		declension: 'o'
	},
	{
		id: 135,
		word: 'in animo habere',
		type: 'other',
		translation: ['vorhaben']
	},
	{
		id: 136,
		word: 'nos',
		type: 'other',
		translation: ['wir'],
		info: 'Nominativ'
	},
	{
		id: 137,
		word: 'nos',
		type: 'other',
		translation: ['uns'],
		info: 'Akkusativ'
	},
	{
		id: 138,
		word: 'vos',
		type: 'other',
		translation: ['ihr'],
		info: 'Nominativ'
	},
	{
		id: 139,
		word: 'vos',
		type: 'other',
		translation: ['euch'],
		info: 'Akkusativ'
	},
	{
		id: 140,
		word: 'quis nostrum',
		type: 'other',
		translation: ['wer von uns']
	},
	{
		id: 141,
		word: 'quis vestrum',
		type: 'other',
		translation: ['wer von euch']
	},
	{
		id: 142,
		word: 'nobiscum',
		type: 'other',
		translation: ['mit uns']
	},
	{
		id: 143,
		word: 'sibi',
		type: 'other',
		translation: ['sich'],
		info: 'Dativ'
	},
	{
		id: 144,
		word: 'vobiscum',
		type: 'other',
		translation: ['mit euch']
	},
	{
		id: 145,
		word: 'in',
		type: 'other',
		translation: ['in', 'nach', 'gegen'],
		info: 'mit Akkusativ, Frage WOHIN?'
	},
	{
		id: 146,
		word: 'manere',
		type: 'verb',
		translation: ['bleiben'],
		conjugation: 'e',
		present: 'maneo',
		perfect: 'mansi',
		participle: 'mansum'
	},
	{
		id: 147,
		word: 'properare',
		type: 'verb',
		translation: ['eilen'],
		conjugation: 'a',
		present: 'propero',
		perfect: 'properavi',
		participle: 'properatum'
	},
	{
		id: 148,
		word: 'aqua',
		type: 'noun',
		translation: ['wasser'],
		genitive: 'aquae',
		gender: 'f',
		declension: 'a'
	},
	{
		id: 149,
		word: 'iterum',
		type: 'adverb',
		translation: ['wieder', 'wiederum']
	},
	{
		id: 150,
		word: 'minime',
		type: 'adverb',
		translation: ['keineswegs', 'nein']
	},
	{
		id: 151,
		word: 'licet',
		type: 'verb',
		translation: ['es ist erlaubt', 'es ist möglich'],
		info: 'nur 3. Person Singular; deutsche Übersetzung auch in der 3. Person Singular',
		conjugation: '-',
		present: '-',
		perfect: 'licuit',
		participle: '-'
	},
	{
		id: 152,
		word: 'otium',
		type: 'noun',
		translation: ['freizeit', 'erholung', 'muße'],
		genitive: 'otii',
		gender: 'n',
		declension: 'o'
	},
	{
		id: 153,
		word: 'sub',
		type: 'other',
		translation: ['unter ... hin', 'unter hin', 'unter'],
		info: 'mit Akkusativ, Frage WOHIN?'
	},
	{
		id: 154,
		word: 'me',
		type: 'other',
		translation: ['mich'],
		info: 'Akkusativ'
	},
	{
		id: 155,
		word: 'sub',
		type: 'other',
		translation: ['unter'],
		info: 'mit Ablativ, Frage WO?'
	},
	{
		id: 156,
		word: 'terrere',
		type: 'verb',
		translation: ['jemanden erschrecken', 'erschrecken'],
		conjugation: 'e',
		present: 'terreo',
		perfect: 'terrui',
		participle: 'territum'
	},
	{
		id: 157,
		word: 'te',
		type: 'other',
		translation: ['dich'],
		info: 'Akkusativ'
	},
	{
		id: 158,
		word: 'se',
		type: 'other',
		translation: ['sich'],
		info: 'Akkusativ'
	},
	{
		id: 159,
		word: 'delectare',
		type: 'verb',
		translation: ['erfreuen', 'jemanden erfreuen'],
		conjugation: 'a',
		present: 'delecto',
		perfect: 'delectavi',
		participle: 'delectatum'
	},
	{
		id: 160,
		word: 'nonne?',
		type: 'other',
		translation: ['nicht', 'nicht?']
	},
	{
		id: 161,
		word: 'ego',
		type: 'other',
		translation: ['ich']
	},
	{
		id: 162,
		word: 'filia',
		type: 'noun',
		translation: ['tochter'],
		genitive: 'filiae',
		gender: 'f',
		declension: 'a'
	},
	{
		id: 163,
		word: 'appropinquare',
		type: 'verb',
		translation: ['sich nähern'],
		conjugation: 'a',
		present: 'appropinquo',
		perfect: 'appropinquavi',
		participle: 'appropinquatum'
	},
	{
		id: 164,
		word: 'liberi',
		type: 'noun',
		pluralOnly: true,
		translation: ['die kinder', 'kinder'],
		info: 'nur Plural',
		genitive: 'liberorum',
		gender: 'm',
		declension: 'o'
	},
	{
		id: 165,
		word: 'autem',
		type: 'other',
		translation: ['aber'],
		info: 'autem muss im lateinischen Satz immer an die zweite Stelle'
	},
	{
		id: 166,
		word: 'deinde',
		type: 'other',
		translation: ['dann']
	},
	{
		id: 167,
		word: 'portare',
		type: 'verb',
		translation: ['bringen', 'tragen'],
		conjugation: 'a',
		present: 'porto',
		perfect: 'portavi',
		participle: 'portatum'
	},
	{
		id: 168,
		word: 'annus',
		type: 'noun',
		translation: ['jahr'],
		genitive: 'anni',
		gender: 'm',
		declension: 'o'
	},
	{
		id: 169,
		word: 'oppidum',
		type: 'noun',
		translation: ['stadt'],
		genitive: 'oppidi',
		gender: 'n',
		declension: 'o'
	},
	{
		id: 170,
		word: 'aedificare',
		type: 'verb',
		translation: ['erbauen'],
		conjugation: 'a',
		present: 'aedifico',
		perfect: 'aedificavi',
		participle: 'aedificatum'
	},
	{
		id: 171,
		word: 'regnare',
		type: 'verb',
		translation: ['herrschen', 'regieren'],
		conjugation: 'a',
		present: 'regno',
		perfect: 'regnavi',
		participle: 'regnatum'
	},
	{
		id: 172,
		word: 'posse',
		type: 'irregular_verb',
		translation: ['können'],
		info: 'irreguläres Verb',
		present: 'possum',
		perfect: 'potui',
		participle: '-'
	},
	{
		id: 173,
		word: 'dis',
		type: 'other',
		translation: ['den göttern'],
		info: '= deis; 3./ 6. Fall Plural'
	},
	{
		id: 174,
		word: 'sex',
		type: 'other',
		translation: ['sechs']
	},
	{
		id: 175,
		word: 'duodecim',
		type: 'other',
		translation: ['zwölf']
	},
	{
		id: 176,
		word: 'gratus',
		type: 'adjective',
		translation: ['dankbar', 'lieb', 'angenehm'],
		comparison: 'a_o',
		femininum: 'grata',
		neutrum: 'gratum'
	},
	{
		id: 177,
		word: 'auxilium',
		type: 'noun',
		translation: ['hilfe'],
		genitive: 'auxilii',
		gender: 'n',
		declension: 'o'
	},
	{
		id: 178,
		word: 'magnificus',
		type: 'adjective',
		translation: ['großartig'],
		comparison: 'a_o',
		femininum: 'magnifica',
		neutrum: 'magnificum'
	},
	{
		id: 179,
		word: 'trans',
		type: 'other',
		translation: ['über', 'jenseits von'],
		info: 'Präposition mit Akkusativ'
	},
	{
		id: 180,
		word: 'di',
		type: 'other',
		translation: ['die götter', 'götter'],
		info: '= dei (= dii); 1. Fall Plural'
	},
	{
		id: 181,
		word: 'tamen',
		type: 'other',
		translation: ['dennoch', 'trotzdem']
	},
	{
		id: 182,
		word: 'duo/duae/duo',
		type: 'other',
		translation: ['zwei']
	},
	{
		id: 183,
		word: 'filius',
		type: 'noun',
		translation: ['sohn'],
		genitive: 'filii',
		gender: 'm',
		declension: 'o'
	},
	{
		id: 184,
		word: 'parvus',
		type: 'adjective',
		translation: ['klein'],
		comparison: 'a_o',
		femininum: 'parva',
		neutrum: 'parvum'
	},
	{
		id: 185,
		word: 'paulo post',
		type: 'other',
		translation: ['wenig später']
	},
	{
		id: 186,
		word: 'post',
		type: 'other',
		translation: ['später'],
		info: 'Präposition nach Ablativ'
	},
	{
		id: 187,
		word: 'venire',
		type: 'verb',
		translation: ['kommen'],
		conjugation: 'i',
		present: 'venio',
		perfect: 'veni',
		participle: 'ventum'
	},
	{
		id: 188,
		word: 'mittere',
		type: 'verb',
		translation: ['schicken'],
		conjugation: 'k',
		present: 'mitto',
		perfect: 'misi',
		participle: 'missum'
	},
	{
		id: 189,
		word: 'dicere',
		type: 'verb',
		translation: ['sagen', 'nennen'],
		info: 'Imperativ Plural: dic!',
		conjugation: 'k',
		present: 'dico',
		perfect: 'dixi',
		participle: 'dictum'
	},
	{
		id: 190,
		word: 'parare',
		type: 'verb',
		translation: ['erwerben', 'vorbereiten', 'bereiten'],
		conjugation: 'a',
		present: 'paro',
		perfect: 'paravi',
		participle: 'paratum'
	},
	{
		id: 191,
		word: 'audire',
		type: 'verb',
		translation: ['hören'],
		conjugation: 'i',
		present: 'audio',
		perfect: 'audivi',
		participle: 'audivitum'
	},
	{
		id: 192,
		word: 'nam',
		type: 'other',
		translation: ['denn', 'nämlich']
	},
	{
		id: 193,
		word: 'dum',
		type: 'other',
		translation: ['während'],
		info: 'erfordert Präsens'
	},
	{
		id: 194,
		word: 'subito',
		type: 'adverb',
		translation: ['plötzlich']
	},
	{
		id: 195,
		word: 'rapere',
		type: 'verb',
		translation: ['rauben'],
		conjugation: 'm',
		present: 'rapio',
		perfect: 'rapui',
		participle: 'raptum'
	},
	{
		id: 196,
		word: 'domum',
		type: 'other',
		translation: ['nach hause']
	},
	{
		id: 197,
		word: 'arma',
		type: 'noun',
		pluralOnly: true,
		translation: ['waffen'],
		info: 'nur Plural',
		genitive: 'armorum',
		gender: 'n',
		declension: 'o'
	},
	{
		id: 198,
		word: 'habitare',
		type: 'verb',
		translation: ['wohnen', 'bewohnen'],
		conjugation: 'a',
		present: 'habito',
		perfect: 'habitavi',
		participle: 'habitatum'
	},
	{
		id: 199,
		word: 'adiuvare',
		type: 'verb',
		translation: ['helfen', 'unterstützen'],
		conjugation: 'a',
		present: 'adiuvo',
		perfect: 'adiuvi',
		participle: 'adiutum'
	},
	{
		id: 200,
		word: 'relinquere',
		type: 'verb',
		translation: ['verlassen', 'zurücklassen'],
		conjugation: 'k',
		present: 'relinquo',
		perfect: 'reliqui',
		participle: 'relictum'
	},
	{
		id: 201,
		word: 'domi',
		type: 'other',
		translation: ['zu hause']
	},
	{
		id: 202,
		word: 'iniuria',
		type: 'noun',
		translation: ['unrecht'],
		genitive: 'iniuriae',
		gender: 'f',
		declension: 'a'
	},
	{
		id: 203,
		word: 'tolerare',
		type: 'verb',
		translation: ['ertragen'],
		conjugation: 'a',
		present: 'tolero',
		perfect: 'toleravi',
		participle: 'toleratum'
	},
	{
		id: 204,
		word: 'bellum',
		type: 'noun',
		translation: ['krieg'],
		genitive: 'belli',
		gender: 'n',
		declension: 'o'
	},
	{
		id: 205,
		word: 'bellum gerere',
		type: 'other',
		translation: ['krieg führen']
	},
	{
		id: 206,
		word: 'inter',
		type: 'other',
		translation: ['zwischen'],
		info: 'Präposition mit Akkusativ'
	},
	{
		id: 207,
		word: 'contendere',
		type: 'verb',
		translation: ['eilen', 'kämpfen'],
		conjugation: 'k',
		present: 'contendo',
		perfect: 'contendi',
		participle: 'contentum'
	},
	{
		id: 208,
		word: 'necesse est',
		type: 'other',
		translation: ['es ist notwendig']
	},
	{
		id: 209,
		word: 'ut',
		type: 'other',
		translation: ['wie', 'als']
	},
	{
		id: 210,
		word: 'apud',
		type: 'other',
		translation: ['bei'],
		info: 'Präposition mit Akkusativ'
	},
	{
		id: 211,
		word: 'legere',
		type: 'verb',
		translation: ['lesen'],
		conjugation: 'k',
		present: 'lego',
		perfect: 'legi',
		participle: 'lectum'
	},
	{
		id: 212,
		word: 'consilium',
		type: 'noun',
		translation: ['beschluss', 'plan', 'rat'],
		genitive: 'consilii',
		gender: 'n',
		declension: 'o'
	},
	{
		id: 213,
		word: 'capere',
		type: 'verb',
		translation: ['fassen', 'ergreifen', 'fangen', 'nehmen'],
		conjugation: 'm',
		present: 'capio',
		perfect: 'cepi',
		participle: 'captum'
	},
	{
		id: 214,
		word: 'nuntius',
		type: 'noun',
		translation: ['bote', 'nachricht'],
		genitive: 'nuntii',
		gender: 'm',
		declension: 'o'
	},
	{
		id: 215,
		word: 'populus',
		type: 'noun',
		translation: ['volk'],
		genitive: 'populi',
		gender: 'm',
		declension: 'o'
	},
	{
		id: 216,
		word: 'tres/tres/tria',
		type: 'other',
		translation: ['drei']
	},
	{
		id: 217,
		word: 'castra',
		type: 'noun',
		pluralOnly: true,
		translation: ['lager'],
		info: 'nur Plural, im Deutschen Singular',
		genitive: 'castrorum',
		gender: 'n',
		declension: 'o'
	},
	{
		id: 218,
		word: 'resistere',
		type: 'verb',
		translation: ['sich widersetzen', 'widerstand leisten'],
		conjugation: 'k',
		present: 'resisto',
		perfect: 'restiti',
		participle: '-'
	},
	{
		id: 219,
		word: 'committere',
		type: 'verb',
		translation: ['begehen', 'beginnen'],
		info: 'ein Verbrechen ... / einen Krieg ...',
		conjugation: 'k',
		present: 'committo',
		perfect: 'commisi',
		participle: 'commissum'
	},
	{
		id: 220,
		word: 'nisi',
		type: 'other',
		translation: ['wenn nicht', 'falls nicht']
	},
	{
		id: 221,
		word: 'parere',
		type: 'verb',
		translation: ['gehorchen'],
		conjugation: 'e',
		present: 'pareo',
		perfect: 'parui',
		participle: '-'
	},
	{
		id: 222,
		word: 'servus',
		type: 'noun',
		translation: ['sklave'],
		genitive: 'servi',
		gender: 'm',
		declension: 'o'
	},
	{
		id: 223,
		word: 'non iam',
		type: 'other',
		translation: ['nicht mehr']
	},
	{
		id: 224,
		word: 'culpa',
		type: 'noun',
		translation: ['schuld'],
		genitive: 'culpae',
		gender: 'f',
		declension: 'a'
	},
	{
		id: 225,
		word: 'nullus',
		type: 'adjective',
		translation: ['kein'],
		info: '2. Fall: nullius, 3. Fall: nulli',
		comparison: 'a_o',
		femininum: 'nulla',
		neutrum: 'nullum'
	},
	{
		id: 226,
		word: 'exemplum',
		type: 'noun',
		translation: ['beispiel'],
		genitive: 'exempli',
		gender: 'n',
		declension: 'o'
	},
	{
		id: 227,
		word: 'hora',
		type: 'noun',
		translation: ['stunde'],
		genitive: 'horae',
		gender: 'f',
		declension: 'a'
	},
	{
		id: 228,
		word: 'maxime',
		type: 'adverb',
		translation: ['sehr', 'am meisten']
	},
	{
		id: 229,
		word: 'familia',
		type: 'noun',
		translation: ['familie'],
		genitive: 'familiae',
		gender: 'f',
		declension: 'a'
	},
	{
		id: 230,
		word: 'expellere',
		type: 'verb',
		translation: ['vertreiben', 'verjagen'],
		conjugation: 'k',
		present: 'expello',
		perfect: 'expuli',
		participle: 'expulsum'
	},
	{
		id: 231,
		word: 'facere',
		type: 'verb',
		translation: ['tun', 'machen'],
		conjugation: 'm',
		present: 'facio',
		perfect: 'feci',
		participle: 'factum'
	},
	{
		id: 232,
		word: 'neque - neque',
		type: 'other',
		translation: ['weder - noch', 'weder noch'],
		info: '=nec - nec'
	},
	{
		id: 233,
		word: 'dormire',
		type: 'verb',
		translation: ['schlafen'],
		conjugation: 'i',
		present: 'dormio',
		perfect: 'dormivi',
		participle: 'dormitum'
	},
	{
		id: 234,
		word: 'solus',
		type: 'adjective',
		translation: ['allein'],
		info: '2. Fall: solius, 3. Fall: soli',
		comparison: 'a_o',
		femininum: 'sola',
		neutrum: 'solum'
	},
	{
		id: 235,
		word: 'unus/una/unum',
		type: 'other',
		translation: ['ein', 'einzig'],
		info: '2. Fall: unius, 3. Fall: uni'
	},
	{
		id: 236,
		word: 'duo/duae/duo',
		type: 'other',
		translation: ['zwei']
	},
	{
		id: 237,
		word: 'primus/a/um',
		type: 'other',
		translation: ['der erste', 'erster']
	},
	{
		id: 238,
		word: 'quem?',
		type: 'other',
		translation: ['wen', 'wen?']
	},
	{
		id: 239,
		word: 'expugnare',
		type: 'verb',
		translation: ['erobern'],
		conjugation: 'a',
		present: 'expugno',
		perfect: 'expugnavi',
		participle: 'expugnatum'
	},
	{
		id: 240,
		word: 'nox',
		type: 'noun',
		translation: ['nacht'],
		genitive: 'noctis',
		gender: 'f',
		declension: 'k'
	},
	{
		id: 241,
		word: 'constituere',
		type: 'verb',
		translation: ['beschließen', 'festsetzen'],
		conjugation: 'k',
		present: 'constituo',
		perfect: 'constitui',
		participle: 'constitutum'
	},
	{
		id: 242,
		word: 'clam',
		type: 'adverb',
		translation: ['heimlich']
	},
	{
		id: 243,
		word: 'ascendere',
		type: 'verb',
		translation: ['hinaufsteigen', 'besteigen'],
		conjugation: 'k',
		present: 'ascendo',
		perfect: 'ascendi',
		participle: 'ascensum'
	},
	{
		id: 244,
		word: 'homo',
		type: 'noun',
		translation: ['mensch'],
		genitive: 'hominis',
		gender: 'm',
		declension: 'k'
	},
	{
		id: 245,
		word: 'canis',
		type: 'noun',
		translation: ['hündin'],
		info: 'in diesem Fall: feminin (canis kann auch maskulin sein)',
		genitive: 'canis',
		gender: 'f',
		declension: 'k'
	},
	{
		id: 246,
		word: 'canis',
		type: 'noun',
		translation: ['hund'],
		info: 'in diesem Fall: maskulin (canis kann auch feminin sein)',
		genitive: 'canis',
		gender: 'm',
		declension: 'k'
	},
	{
		id: 247,
		word: 'iuno',
		type: 'noun',
		translation: ['juno'],
		info: 'griechisch: Hera',
		genitive: 'iunonis',
		gender: 'f',
		declension: 'k'
	},
	{
		id: 248,
		word: 'sacer',
		type: 'adjective',
		translation: ['heilig', 'geweiht'],
		comparison: 'a_o',
		femininum: 'sacra',
		neutrum: 'sacrum'
	},
	{
		id: 249,
		word: 'timere',
		type: 'verb',
		translation: ['fürchten', 'sich fürchten'],
		conjugation: 'e',
		present: 'timeo',
		perfect: 'timui',
		participle: '-'
	},
	{
		id: 250,
		word: 'quamquam',
		type: 'other',
		translation: ['obwohl']
	},
	{
		id: 251,
		word: 'carere',
		type: 'verb',
		translation: ['frei sein', 'frei sein von', 'nicht haben'],
		info: 'Immer mit Ablativ',
		conjugation: 'e',
		present: 'careo',
		perfect: 'carui',
		participle: '-'
	},
	{
		id: 252,
		word: 'vox',
		type: 'noun',
		translation: ['stimme'],
		genitive: 'vocis',
		gender: 'f',
		declension: 'k'
	},
	{
		id: 253,
		word: 'statim',
		type: 'adverb',
		translation: ['sofort', 'sogleich']
	},
	{
		id: 254,
		word: 'ceteri/ae/a',
		type: 'other',
		translation: ['die übrigen'],
		info: 'nur im Plural; keine genaue Zuordnung'
	},
	{
		id: 255,
		word: 'servare',
		type: 'verb',
		translation: ['retten', 'bewahren'],
		conjugation: 'a',
		present: 'servo',
		perfect: 'servavi',
		participle: 'servatum'
	},
	{
		id: 256,
		word: 'gloria',
		type: 'noun',
		translation: ['ruhm', 'ehre'],
		genitive: 'gloriae',
		gender: 'f',
		declension: 'a'
	},
	{
		id: 257,
		word: 'nomen',
		type: 'noun',
		translation: ['name'],
		genitive: 'nominis',
		gender: 'n',
		declension: 'k'
	},
	{
		id: 258,
		word: 'accipere',
		type: 'verb',
		translation: ['annehmen', 'aufnehmen', 'erhalten'],
		conjugation: 'm',
		present: 'accipio',
		perfect: 'accepi',
		participle: 'acceptum'
	},
	{
		id: 259,
		word: 'galli',
		type: 'noun',
		pluralOnly: true,
		translation: ['gallier', 'die gallier'],
		info: 'nur Plural',
		genitive: 'gallorum',
		gender: 'm',
		declension: 'o'
	},
	{
		id: 260,
		word: 'flumen',
		type: 'noun',
		translation: ['fluss'],
		genitive: 'fluminis',
		gender: 'n',
		declension: 'k'
	},
	{
		id: 261,
		word: 'miles',
		type: 'noun',
		translation: ['soldat'],
		genitive: 'militis',
		gender: 'm',
		declension: 'k'
	},
	{
		id: 262,
		word: 'fugere',
		type: 'verb',
		translation: ['flüchten', 'fliehen'],
		info: 'Nur mit Akkusativ',
		conjugation: 'm',
		present: 'fugio',
		perfect: 'fugi',
		participle: '-'
	},
	{
		id: 263,
		word: 'occupare',
		type: 'verb',
		translation: ['besetzen'],
		conjugation: 'a',
		present: 'occupo',
		perfect: 'occupavi',
		participle: 'occupatum'
	},
	{
		id: 264,
		word: 'delere',
		type: 'verb',
		translation: ['zerstören'],
		conjugation: 'e',
		present: 'deleo',
		perfect: 'delevi',
		participle: 'deletum'
	},
	{
		id: 265,
		word: 'oppugnare',
		type: 'verb',
		translation: ['bestürmen', 'belagern'],
		conjugation: 'a',
		present: 'oppugno',
		perfect: 'oppugnavi',
		participle: 'oppugnatum'
	}
];
