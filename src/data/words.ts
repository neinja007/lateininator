import { Word } from '@/types/word';

export const words: Word[] = [
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
    neutrum: 'malum',
    exception: 1
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
    type: 'irregularVerb',
    translation: ['sein', 'zu sein'],
    info: 'irreguläres Verb'
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
    type: 'irregularVerb',
    translation: ['können'],
    info: 'irreguläres Verb'
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
  },
  {
    id: 266,
    word: 'imperator',
    type: 'noun',
    translation: ['feldherr', 'kaiser'],
    genitive: 'imperatoris',
    gender: 'm',
    declension: 'k'
  },
  {
    id: 267,
    word: 'vincere',
    type: 'verb',
    translation: ['siegen', 'besiegen'],
    conjugation: 'k',
    present: 'vinco',
    perfect: 'vici',
    participle: 'victum'
  },
  {
    id: 268,
    word: 'pars',
    type: 'noun',
    translation: ['teil'],
    genitive: 'partis',
    gender: 'f',
    declension: 'm'
  },
  {
    id: 269,
    word: 'timor',
    type: 'noun',
    translation: ['furcht', 'angst'],
    genitive: 'timoris',
    gender: 'm',
    declension: 'k'
  },
  {
    id: 270,
    word: 'ne ... quidem',
    type: 'other',
    translation: ['nicht einmal ...', 'nicht einmal']
  },
  {
    id: 271,
    word: 'prohibere',
    type: 'verb',
    translation: ['abhalten', 'fernhalten', 'hindern', 'verhindern'],
    conjugation: 'e',
    present: 'prohibeo',
    perfect: 'prohibui',
    participle: 'prohibitum'
  },
  {
    id: 272,
    word: 'occidere',
    type: 'verb',
    translation: ['töten'],
    conjugation: 'k',
    present: 'occido',
    perfect: 'occidi',
    participle: 'occisum'
  },
  {
    id: 273,
    word: 'porta',
    type: 'noun',
    translation: ['tor', 'tür'],
    genitive: 'portae',
    gender: 'f',
    declension: 'a'
  },
  {
    id: 274,
    word: 'urbs',
    type: 'noun',
    translation: ['stadt'],
    genitive: 'urbis',
    gender: 'f',
    declension: 'm'
  },
  {
    id: 275,
    word: 'summus',
    type: 'adjective',
    translation: ['der höchste', 'sehr hoch'],
    comparison: 'a_o',
    femininum: 'summa',
    neutrum: 'summum'
  },
  {
    id: 276,
    word: 'honor',
    type: 'noun',
    translation: ['ehre', 'ansehen'],
    genitive: 'honoris',
    gender: 'm',
    declension: 'k'
  },
  {
    id: 277,
    word: 'virtus',
    type: 'noun',
    translation: ['tapferkeit', 'tugend'],
    genitive: 'virtutis',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 278,
    word: 'facere',
    type: 'other',
    translation: ['zu etwas machen'],
    info: 'mit doppeltem Akkusativ'
  },
  {
    id: 279,
    word: 'patria',
    type: 'noun',
    translation: ['heimat'],
    genitive: 'patriae',
    gender: 'f',
    declension: 'a'
  },
  {
    id: 280,

    word: 'pax',
    type: 'noun',
    translation: ['friede'],
    genitive: 'pacis',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 281,
    word: 'hostis',
    type: 'noun',
    translation: ['feind'],
    genitive: 'hostis',
    gender: 'm',
    declension: 'm'
  },
  {
    id: 282,
    word: 'liberare',
    type: 'verb',
    translation: ['befreien von', 'befreien'],
    info: 'mit Ablativ',
    conjugation: 'a',
    present: 'libero',
    perfect: 'liberavi',
    participle: 'liberatum'
  },
  {
    id: 283,
    word: 'copiae',
    type: 'noun',
    pluralOnly: true,
    translation: ['truppen'],
    info: 'nicht copia; im Plural',
    genitive: 'copiarum',
    gender: 'f',
    declension: 'a'
  },
  {
    id: 284,
    word: 'ducere',
    type: 'verb',
    translation: ['führen'],
    info: 'Imperativ Plural: duc!',
    conjugation: 'k',
    present: 'duco',
    perfect: 'duxi',
    participle: 'ductum'
  },
  {
    id: 285,
    word: 'navis',
    type: 'noun',
    translation: ['schiff'],
    genitive: 'navis',
    gender: 'f',
    declension: 'm'
  },
  {
    id: 286,
    word: 'mare',
    type: 'noun',
    translation: ['meer'],
    genitive: 'maris',
    gender: 'n',
    declension: 'i'
  },
  {
    id: 287,
    word: 'audere',
    type: 'verb',
    translation: ['wagen'],
    conjugation: 'e',
    present: 'audeo',
    perfect: '-',
    participle: '-'
  },
  {
    id: 288,
    word: 'amittere',
    type: 'verb',
    translation: ['verlieren'],
    conjugation: 'k',
    present: 'amitto',
    perfect: 'amisi',
    participle: 'amissum'
  },
  {
    id: 289,
    word: 'pugna',
    type: 'noun',
    translation: ['kampf'],
    genitive: 'pugnae',
    gender: 'f',
    declension: 'a'
  },
  {
    id: 290,
    word: 'iuppiter',
    type: 'noun',
    translation: ['jupiter'],
    info: 'griechisch: Zeus',
    genitive: 'iovis',
    gender: 'm',
    declension: 'k'
  },
  {
    id: 291,
    word: 'litus',
    type: 'noun',
    translation: ['küste', 'strand'],
    genitive: 'litoris',
    gender: 'n',
    declension: 'k'
  },
  {
    id: 292,
    word: 'eius',
    type: 'other',
    translation: ['dessen', 'deren'],
    info: '2. Fall Singular'
  },
  {
    id: 293,
    word: 'eorum',
    type: 'other',
    translation: ['deren'],
    info: '2. Fall Singular'
  },
  {
    id: 294,
    word: 'earum',
    type: 'other',
    translation: ['deren'],
    info: '2. Fall Singular'
  },
  {
    id: 295,
    word: 'iussum',
    type: 'noun',
    translation: ['befehl'],
    genitive: 'iussi',
    gender: 'n',
    declension: 'o'
  },
  {
    id: 296,
    word: 'conficere',
    type: 'verb',
    translation: ['ausführen', 'anfertigen', 'beenden'],
    conjugation: 'm',
    present: 'conficio',
    perfect: 'confeci',
    participle: 'confectum'
  },
  {
    id: 297,
    word: 'solere',
    type: 'verb',
    translation: ['gewohnt sein', 'pflegen'],
    conjugation: 'e',
    present: 'soleo',
    perfect: '-',
    participle: '-'
  },
  {
    id: 298,
    word: 'idem',
    type: 'other',
    translation: ['derselbe', 'dasselbe']
  },
  {
    id: 299,
    word: 'eadem',
    type: 'other',
    translation: ['dieselbe']
  },
  {
    id: 300,
    word: 'locus',
    type: 'noun',
    translation: ['ort', 'stelle', 'platz'],
    genitive: 'loci',
    gender: 'm',
    declension: 'o'
  },
  {
    id: 301,
    word: 'scire',
    type: 'verb',
    translation: ['wissen'],
    conjugation: 'i',
    present: 'scio',
    perfect: 'scivi',
    participle: 'scitum'
  },
  {
    id: 302,
    word: 'virgo',
    type: 'noun',
    translation: ['mädchen', 'jungfrau'],
    genitive: 'virginis',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 303,
    word: 'ludere',
    type: 'verb',
    translation: ['spielen'],
    conjugation: 'k',
    present: 'ludo',
    perfect: 'lusi',
    participle: 'lusum'
  },
  {
    id: 304,
    word: 'taurus',
    type: 'noun',
    translation: ['stier'],
    genitive: 'tauri',
    gender: 'm',
    declension: 'o'
  },
  {
    id: 305,
    word: 'multitudo',
    type: 'noun',
    translation: ['menge'],
    genitive: 'multitudinis',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 306,
    word: 'conspicere',
    type: 'verb',
    translation: ['erblicken'],
    conjugation: 'm',
    present: 'conspicio',
    perfect: 'conspexi',
    participle: 'conspectum'
  },
  {
    id: 307,
    word: 'pulchritudo',
    type: 'noun',
    translation: ['schönheit'],
    genitive: 'pulchritudinis',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 308,
    word: 'primo',
    type: 'adverb',
    translation: ['zuerst']
  },
  {
    id: 309,
    word: 'tangere',
    type: 'verb',
    translation: ['berühren'],
    conjugation: 'k',
    present: 'tango',
    perfect: 'tetigi',
    participle: 'tactum'
  },
  {
    id: 310,
    word: 'corpus',
    type: 'noun',
    translation: ['körper'],
    genitive: 'corporis',
    gender: 'n',
    declension: 'k'
  },
  {
    id: 311,
    word: 'mox',
    type: 'adverb',
    translation: ['bald']
  },
  {
    id: 312,
    word: 'is',
    type: 'other',
    translation: ['dieser', 'er']
  },
  {
    id: 313,
    word: 'insula',
    type: 'noun',
    translation: ['insel'],
    genitive: 'insulae',
    gender: 'f',
    declension: 'a'
  },
  {
    id: 314,
    word: 'ea',
    type: 'other',
    translation: ['diese', 'sie']
  },
  {
    id: 315,
    word: 'id',
    type: 'other',
    translation: ['dieses', 'es']
  },
  {
    id: 316,
    word: 'vocare',
    type: 'verb',
    translation: ['rufen', 'nennen'],
    conjugation: 'a',
    present: 'voco',
    perfect: 'vocavi',
    participle: 'vocatum'
  },
  {
    id: 317,
    word: 'imperare',
    type: 'verb',
    translation: ['befehlen'],
    conjugation: 'a',
    present: 'impero',
    perfect: 'imperavi',
    participle: 'imperatum'
  },
  {
    id: 318,
    word: 'mons',
    type: 'noun',
    translation: ['berg'],
    genitive: 'montis',
    gender: 'm',
    declension: 'm'
  },
  {
    id: 319,
    word: 'rex',
    type: 'noun',
    translation: ['könig'],
    genitive: 'regis',
    gender: 'm',
    declension: 'k'
  },
  {
    id: 320,
    word: 'pater',
    type: 'noun',
    translation: ['vater'],
    genitive: 'patris',
    gender: 'm',
    declension: 'k'
  },
  {
    id: 321,
    word: 'debere',
    type: 'verb',
    translation: ['müssen'],
    info: 'mit Infinitiv',
    conjugation: 'e',
    present: 'debeo',
    perfect: 'debui',
    participle: 'debitum'
  },
  {
    id: 322,
    word: 'caput',
    type: 'noun',
    translation: ['kopf', 'haupt'],
    genitive: 'capitis',
    gender: 'n',
    declension: 'k'
  },
  {
    id: 323,
    word: 'periculum',
    type: 'noun',
    translation: ['gefahr'],
    genitive: 'periculi',
    gender: 'n',
    declension: 'o'
  },
  {
    id: 324,
    word: 'interficere',
    type: 'verb',
    translation: ['töten'],
    conjugation: 'm',
    present: 'interficio',
    perfect: 'interfeci',
    participle: 'interfectum'
  },
  {
    id: 325,
    word: 'miser',
    type: 'adjective',
    translation: ['arm', 'elend', 'unglücklich'],
    comparison: 'a_o',
    femininum: 'misera',
    neutrum: 'miserum'
  },
  {
    id: 326,
    word: 'navigare',
    type: 'verb',
    translation: ['segeln', 'mit dem schiff fahren'],
    conjugation: 'a',
    present: 'navigo',
    perfect: 'navigavi',
    participle: 'navigatum'
  },
  {
    id: 327,
    word: 'adulescens',
    type: 'noun',
    translation: ['junger mann'],
    genitive: 'adulescentis',
    gender: 'm',
    declension: 'm'
  },
  {
    id: 328,
    word: 'iuvare',
    type: 'verb',
    translation: ['unterstützen', 'helfen'],
    conjugation: 'a',
    present: 'iuvo',
    perfect: 'iuvi',
    participle: 'iutum'
  },
  {
    id: 329,
    word: 'nemo',
    type: 'other',
    translation: ['niemand']
  },
  {
    id: 330,
    word: 'invenire',
    type: 'verb',
    translation: ['finden', 'erfinden'],
    conjugation: 'i',
    present: 'invenio',
    perfect: 'inveni',
    participle: 'inventum'
  },
  {
    id: 331,
    word: 'quaerere',
    type: 'verb',
    translation: ['suchen'],
    info: 'mit Akkusativ',
    conjugation: 'k',
    present: 'quaero',
    perfect: 'quaesivi',
    participle: 'quaesitum'
  },
  {
    id: 332,
    word: 'cura',
    type: 'noun',
    translation: ['sorge'],
    genitive: 'curae',
    gender: 'f',
    declension: 'a'
  },
  {
    id: 333,
    word: 'quomodo',
    type: 'other',
    translation: ['wie']
  },
  {
    id: 334,
    word: 'modus',
    type: 'noun',
    translation: ['art', 'weise'],
    genitive: 'modi',
    gender: 'm',
    declension: 'o'
  },
  {
    id: 335,
    word: 'dare',
    type: 'verb',
    translation: ['geben'],
    conjugation: 'a',
    present: 'do',
    perfect: 'dedi',
    participle: 'datum'
  },
  {
    id: 336,
    word: 'medius/a/um',
    type: 'other',
    translation: ['der mittlere', 'in der mitte']
  },
  {
    id: 337,
    word: 'medio in labyrintho',
    type: 'other',
    translation: ['mitten im labyrinth']
  },
  {
    id: 338,
    word: 'paratus/a/um',
    type: 'other',
    translation: ['bereit']
  },
  {
    id: 339,
    word: 'atque',
    type: 'other',
    translation: ['und'],
    info: '= ac'
  },
  {
    id: 340,
    word: 'quaerere',
    type: 'verb',
    translation: ['fragen'],
    info: 'mit ab/ex',
    conjugation: 'k',
    present: 'quaero',
    perfect: 'quaesivi',
    participle: 'quaesitum'
  },
  {
    id: 341,
    word: 'parentes',
    type: 'noun',
    pluralOnly: true,
    translation: ['eltern'],
    info: 'nur Plural',
    genitive: 'parentium',
    gender: 'm',
    declension: 'm'
  },
  {
    id: 342,
    word: 'qui',
    type: 'other',
    translation: ['welcher', 'der']
  },
  {
    id: 343,
    word: 'quae',
    type: 'other',
    translation: ['welche', 'die']
  },
  {
    id: 344,
    word: 'quod',
    type: 'other',
    translation: ['welches', 'das'],
    info: 'als Pronomen'
  },
  {
    id: 345,
    word: 'nihil',
    type: 'other',
    translation: ['nichts']
  },
  {
    id: 346,
    word: 'nihil nisi',
    type: 'other',
    translation: ['nichts außer', 'nur']
  },
  {
    id: 347,
    word: 'amor',
    type: 'noun',
    translation: ['liebe'],
    genitive: 'amoris',
    gender: 'm',
    declension: 'k'
  },
  {
    id: 348,
    word: 'coniungere',
    type: 'verb',
    translation: ['verbinden', 'vereinigen'],
    conjugation: 'k',
    present: 'coniungo',
    perfect: 'coniunxi',
    participle: 'coniunctum'
  },
  {
    id: 349,
    word: 'dies',
    type: 'noun',
    translation: ['tag'],
    info: 'in diesem Fall: maskulin (dies kann auch feminin sein)',
    genitive: 'diei',
    gender: 'm',
    declension: 'e'
  },
  {
    id: 350,
    word: 'opus',
    type: 'noun',
    translation: ['werk'],
    genitive: 'operis',
    gender: 'n',
    declension: 'k'
  },
  {
    id: 351,
    word: 'meridies',
    type: 'noun',
    translation: ['mittag'],
    genitive: 'meridiei',
    gender: 'm',
    declension: 'e'
  },
  {
    id: 352,
    word: 'sol',
    type: 'noun',
    translation: ['sonne'],
    genitive: 'solis',
    gender: 'm',
    declension: 'k'
  },
  {
    id: 353,
    word: 'caelum',
    type: 'noun',
    translation: ['himmel'],
    genitive: 'caeli',
    gender: 'n',
    declension: 'o'
  },
  {
    id: 354,
    word: 'metus',
    type: 'noun',
    translation: ['furcht', 'angst'],
    genitive: 'metus',
    gender: 'm',
    declension: 'u'
  },
  {
    id: 355,
    word: 'denique',
    type: 'adverb',
    translation: ['schließlich', 'endlich']
  },
  {
    id: 356,
    word: 'neglegere',
    type: 'verb',
    translation: ['missachten', 'ignorieren'],
    conjugation: 'k',
    present: 'neglego',
    perfect: 'neglexi',
    participle: 'neglectum'
  },
  {
    id: 357,
    word: 'solvere',
    type: 'verb',
    translation: ['auflösen', 'lösen'],
    conjugation: 'k',
    present: 'solvo',
    perfect: 'solvi',
    participle: 'solutum'
  },
  {
    id: 358,
    word: 'cupere',
    type: 'verb',
    translation: ['wünschen', 'begehren'],
    conjugation: 'm',
    present: 'cupio',
    perfect: 'cupivi',
    participle: 'cupitum'
  },
  {
    id: 359,
    word: 'cadere',
    type: 'verb',
    translation: ['fallen'],
    conjugation: 'k',
    present: 'cado',
    perfect: 'cecidi',
    participle: '-'
  },
  {
    id: 360,
    word: 'mortuus',
    type: 'adjective',
    translation: ['tot', 'gestorben'],
    comparison: 'a_o',
    femininum: 'mortua',
    neutrum: 'mortuum'
  },
  {
    id: 361,
    word: 'petere',
    type: 'verb',
    translation: ['anstreben'],
    info: 'ohne a/ab',
    conjugation: 'k',
    present: 'peto',
    perfect: 'petivi',
    participle: 'petitum'
  },
  {
    id: 362,
    word: 'petere',
    type: 'verb',
    translation: ['bitten', 'erbitten'],
    info: 'mit a/ab',
    conjugation: 'k',
    present: 'peto',
    perfect: 'petivi',
    participle: 'petitum'
  },
  {
    id: 363,
    word: 'manus',
    type: 'noun',
    translation: ['hand'],
    genitive: 'manus',
    gender: 'f',
    declension: 'u'
  },
  {
    id: 364,
    word: 'artificium',
    type: 'noun',
    translation: ['kunstwerk'],
    genitive: 'artificii',
    gender: 'n',
    declension: 'o'
  },
  {
    id: 365,
    word: 'res',
    type: 'noun',
    translation: ['sache'],
    genitive: 'rei',
    gender: 'f',
    declension: 'e'
  },
  {
    id: 366,
    word: 'ars',
    type: 'noun',
    translation: ['kunst', 'technik'],
    genitive: 'artis',
    gender: 'f',
    declension: 'm'
  },
  {
    id: 367,
    word: 'casus',
    type: 'noun',
    translation: ['fall', 'zufall', 'unglücksfall'],
    genitive: 'casus',
    gender: 'm',
    declension: 'u'
  },
  {
    id: 368,
    word: 'fuit',
    type: 'other',
    translation: ['er war', 'sie war', 'es war'],
    info: 'Perfekt von est, irreguläres Verb'
  },
  {
    id: 369,
    word: 'prudentia',
    type: 'noun',
    translation: ['klugheit'],
    genitive: 'prudentiae',
    gender: 'f',
    declension: 'a'
  },
  {
    id: 370,
    word: 'intellegere',
    type: 'verb',
    translation: ['erkennen', 'einsehen'],
    conjugation: 'k',
    present: 'intellego',
    perfect: 'intellexi',
    participle: 'intellectum'
  },
  {
    id: 371,
    word: 'reddere',
    type: 'verb',
    translation: ['zurückgeben'],
    conjugation: 'k',
    present: 'reddo',
    perfect: 'reddidi',
    participle: 'redditum'
  },
  {
    id: 372,
    word: 'poena',
    type: 'noun',
    translation: ['strafe'],
    genitive: 'poenae',
    gender: 'f',
    declension: 'a'
  },
  {
    id: 373,
    word: 'poenas solvere',
    type: 'other',
    translation: ['eine strafe verbüßen', 'strafe verbüßen']
  },
  {
    id: 374,
    word: 'stare',
    type: 'verb',
    translation: ['stehen'],
    conjugation: 'a',
    present: 'sto',
    perfect: 'steti',
    participle: 'statum'
  },
  {
    id: 375,
    word: 'arbor',
    type: 'noun',
    translation: ['baum'],
    genitive: 'arboris',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 376,
    word: 'sitis',
    type: 'noun',
    translation: ['durst'],
    genitive: 'sitis',
    gender: 'f',
    declension: 'i'
  },
  {
    id: 377,
    word: 'fames',
    type: 'noun',
    translation: ['hunger'],
    genitive: 'famis',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 378,
    word: 'cum',
    type: 'other',
    translation: ['wenn', 'sooft', 'als'],
    info: 'als Konjunktion'
  },
  {
    id: 379,
    word: 'hic',
    type: 'other',
    translation: ['dieser'],
    info: 'als Pronomen'
  },
  {
    id: 380,
    word: 'bibere',
    type: 'verb',
    translation: ['trinken'],
    conjugation: 'k',
    present: 'bibo',
    perfect: 'bibi',
    participle: '-'
  },
  {
    id: 381,
    word: 'improbus',
    type: 'adjective',
    translation: ['schlecht', 'böse'],
    comparison: 'a_o',
    femininum: 'improba',
    neutrum: 'improbum'
  },
  {
    id: 382,
    word: 'scelus',
    type: 'noun',
    translation: ['verbrechen'],
    genitive: 'sceleris',
    gender: 'n',
    declension: 'k'
  },
  {
    id: 383,
    word: 'mors',
    type: 'noun',
    translation: ['tod'],
    genitive: 'mortis',
    gender: 'f',
    declension: 'm'
  },
  {
    id: 384,
    word: 'contra',
    type: 'other',
    translation: ['gegen'],
    info: 'mit Akkusativ'
  },
  {
    id: 385,
    word: 'natura',
    type: 'noun',
    translation: ['natur'],
    genitive: 'naturae',
    gender: 'f',
    declension: 'a'
  },
  {
    id: 386,
    word: 'genus',
    type: 'noun',
    translation: ['art', 'geschlecht'],
    genitive: 'generis',
    gender: 'n',
    declension: 'k'
  },
  {
    id: 387,
    word: 'punire',
    type: 'verb',
    translation: ['bestrafen'],
    conjugation: 'i',
    present: 'punio',
    perfect: 'punivi',
    participle: 'punitum'
  },
  {
    id: 388,
    word: 'saxum',
    type: 'noun',
    translation: ['fels'],
    genitive: 'saxi',
    gender: 'n',
    declension: 'o'
  },
  {
    id: 389,
    word: 'vis',
    type: 'noun',
    translation: ['kraft', 'gewalt'],
    info: 'Singular von vires, ohne Genitiv und Dativ',
    genitive: '-',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 390,
    word: 'haec',
    type: 'other',
    translation: ['diese']
  },
  {
    id: 391,
    word: 'vires',
    type: 'noun',
    pluralOnly: true,
    translation: ['die kräfte', 'kräfte'],
    info: 'Plural von vis',
    genitive: 'virium',
    gender: 'f',
    declension: 'm'
  },
  {
    id: 392,
    word: 'paene',
    type: 'adverb',
    translation: ['fast', 'beinahe']
  },
  {
    id: 393,
    word: 'hoc',
    type: 'other',
    translation: ['dieses']
  },
  {
    id: 394,
    word: 'cena',
    type: 'noun',
    translation: ['mahlzeit', 'mahl'],
    genitive: 'cenae',
    gender: 'f',
    declension: 'a'
  },
  {
    id: 395,
    word: 'invitare',
    type: 'verb',
    translation: ['einladen'],
    conjugation: 'a',
    present: 'invito',
    perfect: 'invitavi',
    participle: 'invitatum'
  },
  {
    id: 396,
    word: 'quidam/quaedam/quoddam',
    type: 'other',
    translation: ['ein', 'ein gewisser'],
    info: 'als Singular; 2. Fall: cuiusdam, 3. Fall: cuidam'
  },
  {
    id: 397,
    word: 'quidam/quaedam/quoddam',
    type: 'other',
    translation: ['einige'],
    info: 'als Plural; 2. Fall: cuiusdam, 3. Fall: cuidam'
  },
  {
    id: 398,
    word: 'facinus',
    type: 'noun',
    translation: ['tat', 'untat'],
    genitive: 'facinoris',
    gender: 'n',
    declension: 'k'
  },
  {
    id: 399,
    word: 'ille',
    type: 'other',
    translation: ['jener']
  },
  {
    id: 400,
    word: 'in matrimonium ducere',
    type: 'other',
    translation: ['heiraten'],
    info: 'vom Mann aus'
  },
  {
    id: 401,
    word: 'dolor',
    type: 'noun',
    translation: ['schmerz'],
    genitive: 'doloris',
    gender: 'm',
    declension: 'k'
  },
  {
    id: 402,
    word: 'flere',
    type: 'verb',
    translation: ['weinen'],
    conjugation: 'e',
    present: 'fleo',
    perfect: 'flevi',
    participle: 'fletum'
  },
  {
    id: 403,
    word: 'dolere',
    type: 'verb',
    translation: ['trauern', 'schmerz empfinden'],
    conjugation: 'e',
    present: 'doleo',
    perfect: 'dolui',
    participle: '-'
  },
  {
    id: 404,
    word: 'ipse/ipsa/ipsum',
    type: 'other',
    translation: ['selbst']
  },
  {
    id: 405,
    word: 'regina',
    type: 'noun',
    translation: ['königin'],
    genitive: 'reginae',
    gender: 'f',
    declension: 'a'
  },
  {
    id: 406,
    word: 'movere',
    type: 'verb',
    translation: ['bewegen', 'beeindrucken'],
    conjugation: 'e',
    present: 'moveo',
    perfect: 'movi',
    participle: 'motum'
  },
  {
    id: 407,
    word: 'postquam',
    type: 'other',
    translation: ['nachdem'],
    info: 'mit Perfekt'
  },
  {
    id: 408,
    word: 'cuncti/cunctae',
    type: 'other',
    translation: ['alle'],
    info: 'maskulin / feminin; im Plural'
  },
  {
    id: 409,
    word: 'cuncta',
    type: 'other',
    translation: ['alles'],
    info: 'im Plural'
  },
  {
    id: 410,
    word: 'illa',
    type: 'other',
    translation: ['jene']
  },
  {
    id: 411,
    word: 'frustra',
    type: 'adverb',
    translation: ['vergeblich']
  },
  {
    id: 412,
    word: 'desinere',
    type: 'verb',
    translation: ['aufhören', 'ablassen'],
    conjugation: 'k',
    present: 'desino',
    perfect: 'desii',
    participle: '-'
  },
  {
    id: 413,
    word: 'considere',
    type: 'verb',
    translation: ['niedersetzen', 'sich niedersetzen'],
    conjugation: 'k',
    present: 'consido',
    perfect: 'consedi',
    participle: '-'
  },
  {
    id: 414,
    word: 'ignotus',
    type: 'adjective',
    translation: ['unbekannt'],
    comparison: 'a_o',
    femininum: 'ignota',
    neutrum: 'ignotum'
  },
  {
    id: 415,
    word: 'eram',
    type: 'other',
    translation: ['ich war'],
    info: 'Imperfekt von sum (esse); irreguläres Verb'
  },
  {
    id: 416,
    word: 'eras',
    type: 'other',
    translation: ['du warst'],
    info: 'Imperfekt von es (esse); irreguläres Verb'
  },
  {
    id: 417,
    word: 'condicio',
    type: 'noun',
    translation: ['bedingung'],
    genitive: 'condicionis',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 418,
    word: 'uxor',
    type: 'noun',
    translation: ['gattin', 'ehefrau'],
    genitive: 'uxoris',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 419,
    word: 'iter',
    type: 'noun',
    translation: ['weg', 'reise'],
    genitive: 'itineris',
    gender: 'n',
    declension: 'k'
  },
  {
    id: 420,
    word: 'iter facere',
    type: 'other',
    translation: ['reisen', 'marschieren']
  },
  {
    id: 421,
    word: 'illud',
    type: 'other',
    translation: ['jenes']
  },
  {
    id: 422,
    word: 'vertere',
    type: 'verb',
    translation: ['wenden', 'drehen'],
    conjugation: 'k',
    present: 'verto',
    perfect: 'verti',
    participle: 'versum'
  },
  {
    id: 423,
    word: 'domus',
    type: 'noun',
    translation: ['haus'],
    genitive: 'domus',
    gender: 'f',
    declension: 'u'
  },
  {
    id: 424,
    word: 'longus',
    type: 'adjective',
    translation: ['lang'],
    comparison: 'a_o',
    femininum: 'longa',
    neutrum: 'longum'
  },
  {
    id: 425,
    word: 'lux',
    type: 'noun',
    translation: ['licht'],
    genitive: 'lucis',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 426,
    word: 'et ... et',
    type: 'other',
    translation: ['sowohl als auch', 'sowohl ... als auch']
  },
  {
    id: 427,
    word: 'animal',
    type: 'noun',
    translation: ['tier', 'lebewesen'],
    genitive: 'animalis',
    gender: 'n',
    declension: 'i'
  },
  {
    id: 428,
    word: 'carmen',
    type: 'noun',
    translation: ['lied'],
    genitive: 'carminis',
    gender: 'n',
    declension: 'k'
  },
  {
    id: 429,
    word: 'canere',
    type: 'verb',
    translation: ['singen', 'besingen'],
    conjugation: 'k',
    present: 'cano',
    perfect: 'cecini',
    participle: '-'
  },
  {
    id: 430,
    word: 'olim',
    type: 'adverb',
    translation: ['einst']
  },
  {
    id: 431,
    word: 'matrimonium',
    type: 'noun',
    translation: ['ehe'],
    genitive: 'matrimonii',
    gender: 'n',
    declension: 'o'
  },
  {
    id: 432,
    word: 'natio',
    type: 'noun',
    translation: ['volk'],
    genitive: 'nationis',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 433,
    word: 'exercitus',
    type: 'noun',
    translation: ['heer'],
    genitive: 'exercitus',
    gender: 'm',
    declension: 'u'
  },
  {
    id: 434,
    word: 'brevis',
    type: 'adjective',
    translation: ['kurz'],
    comparison: 'kon',
    femininum: 'brevis',
    neutrum: 'breve'
  },
  {
    id: 435,
    word: 'tempus',
    type: 'noun',
    translation: ['zeit'],
    genitive: 'temporis',
    gender: 'n',
    declension: 'k'
  },
  {
    id: 436,
    word: 'agere',
    type: 'verb',
    translation: ['tun', 'verbringen'],
    conjugation: 'k',
    present: 'ago',
    perfect: 'egi',
    participle: 'actum'
  },
  {
    id: 437,
    word: 'vitam agere',
    type: 'other',
    translation: ['das leben verbringen']
  },
  {
    id: 438,
    word: 'exercere',
    type: 'verb',
    translation: ['trainieren', 'üben'],
    conjugation: 'e',
    present: 'exerceo',
    perfect: 'exercui',
    participle: 'exercitum'
  },
  {
    id: 439,
    word: 'celer',
    type: 'adjective',
    translation: ['schnell'],
    comparison: 'kon',
    femininum: 'celeris',
    neutrum: 'celere'
  },
  {
    id: 440,
    word: 'ager',
    type: 'noun',
    translation: ['feld'],
    info: 'im Plural: Gebiet(e)',
    genitive: 'agri',
    gender: 'm',
    declension: 'o'
  },
  {
    id: 441,
    word: 'latus',
    type: 'adjective',
    translation: ['weit', 'breit'],
    comparison: 'a_o',
    femininum: 'lata',
    neutrum: 'latum'
  },
  {
    id: 442,
    word: 'recipere',
    type: 'verb',
    translation: ['aufnehmen'],
    conjugation: 'm',
    present: 'recipio',
    perfect: 'recepi',
    participle: 'receptum'
  },
  {
    id: 443,
    word: 'nobilis',
    type: 'adjective',
    translation: ['vornehm', 'adelig'],
    comparison: 'kon',
    femininum: 'nobilis',
    neutrum: 'nobile'
  },
  {
    id: 444,
    word: 'se recipere',
    type: 'other',
    translation: ['sich zurückziehen', 'zurückziehen']
  },
  {
    id: 445,
    word: 'continere',
    type: 'verb',
    translation: ['zusammenhalten', 'enthalten'],
    conjugation: 'e',
    present: 'contineo',
    perfect: 'continui',
    participle: '-'
  },
  {
    id: 446,
    word: 'cupiditas',
    type: 'noun',
    translation: ['begierde', 'gier'],
    genitive: 'cupiditatis',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 447,
    word: 'adductus',
    type: 'adjective',
    translation: ['veranlasst'],
    comparison: 'a_o',
    femininum: 'adducta',
    neutrum: 'adductum'
  },
  {
    id: 448,
    word: 'senatus',
    type: 'noun',
    translation: ['senat'],
    genitive: 'senatus',
    gender: 'm',
    declension: 'u'
  },
  {
    id: 449,
    word: 'cognoscere',
    type: 'verb',
    translation: ['erkennen', 'erfahren', 'kennenlernen'],
    conjugation: 'k',
    present: 'cognosco',
    perfect: 'cognovi',
    participle: 'cognitum'
  },
  {
    id: 450,
    word: 'atrox',
    type: 'adjective',
    translation: ['wild', 'grässlich'],
    comparison: 'kon',
    femininum: 'atrox',
    neutrum: 'atrox'
  },
  {
    id: 451,
    word: 'crux',
    type: 'noun',
    translation: ['kreuz'],
    genitive: 'crucis',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 452,
    word: 'natus',
    type: 'adjective',
    translation: ['geboren', 'abstammend'],
    comparison: 'a_o',
    femininum: 'nata',
    neutrum: 'natum'
  },
  {
    id: 453,
    word: 'fortis',
    type: 'adjective',
    translation: ['tapfer'],
    comparison: 'kon',
    femininum: 'fortis',
    neutrum: 'forte'
  },
  {
    id: 454,
    word: 'gladiator',
    type: 'noun',
    translation: ['gladiator'],
    genitive: 'gladiatoris',
    gender: 'm',
    declension: 'k'
  },
  {
    id: 455,
    word: 'crudelis',
    type: 'adjective',
    translation: ['grausam'],
    comparison: 'kon',
    femininum: 'crudelis',
    neutrum: 'crudele'
  },
  {
    id: 456,
    word: 'varius',
    type: 'adjective',
    translation: ['verschieden'],
    comparison: 'a_o',
    femininum: 'varia',
    neutrum: 'varium'
  },
  {
    id: 457,
    word: 'discere',
    type: 'verb',
    translation: ['lernen'],
    conjugation: 'k',
    present: 'disco',
    perfect: 'didici',
    participle: '-'
  },
  {
    id: 458,
    word: 'difficilis',
    type: 'adjective',
    translation: ['schwierig'],
    comparison: 'kon',
    femininum: 'difficilis',
    neutrum: 'difficile'
  },
  {
    id: 459,
    word: 'littera',
    type: 'noun',
    translation: ['buchstabe'],
    info: 'nur Singular!',
    genitive: 'litterae',
    gender: 'f',
    declension: 'a'
  },
  {
    id: 460,
    word: 'antiquus',
    type: 'adjective',
    translation: ['alt'],
    comparison: 'a_o',
    femininum: 'antiqua',
    neutrum: 'antiquum'
  },
  {
    id: 461,
    word: 'ferre',
    type: 'irregularVerb',
    translation: ['tragen', 'bringen', 'ertragen'],
    info: 'irreguläres Verb'
  },
  {
    id: 462,
    word: 'nobilitas',
    type: 'noun',
    translation: ['adel'],
    genitive: 'nobilitatis',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 463,
    word: 'ius',
    type: 'noun',
    translation: ['recht'],
    genitive: 'iuris',
    gender: 'n',
    declension: 'k'
  },
  {
    id: 464,
    word: 'oratio',
    type: 'noun',
    translation: ['rede'],
    genitive: 'orationis',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 465,
    word: 'iudicium',
    type: 'noun',
    translation: ['urteil'],
    genitive: 'iudicii',
    gender: 'n',
    declension: 'o'
  },
  {
    id: 466,
    word: 'sponte sua',
    type: 'other',
    translation: ['freiwillig']
  },
  {
    id: 467,
    word: 'exilium',
    type: 'noun',
    translation: ['exil', 'verbannung'],
    genitive: 'exilii',
    gender: 'n',
    declension: 'o'
  },
  {
    id: 468,
    word: 'ire',
    type: 'irregularVerb',
    translation: ['gehen'],
    info: 'irreguläres Verb'
  },
  {
    id: 469,
    word: 'romae',
    type: 'other',
    translation: ['in rom'],
    info: 'Lokativ'
  },
  {
    id: 470,
    word: 'litterae',
    type: 'noun',
    pluralOnly: true,
    translation: ['wissenschaft', 'brief'],
    info: 'nur Plural',
    genitive: 'litterarum',
    gender: 'f',
    declension: 'a'
  },
  {
    id: 471,
    word: 'studere',
    type: 'verb',
    translation: ['sich bemühen', 'streben'],
    info: 'mit Dativ; ... um, ... nach',
    conjugation: 'e',
    present: 'studeo',
    perfect: 'studui',
    participle: '-'
  },
  {
    id: 472,
    word: 'cogere',
    type: 'verb',
    translation: ['sammeln', 'zwingen'],
    conjugation: 'k',
    present: 'cogo',
    perfect: 'coegi',
    participle: 'coactum'
  },
  {
    id: 473,
    word: 'consul',
    type: 'noun',
    translation: ['konsul'],
    genitive: 'consulis',
    gender: 'm',
    declension: 'k'
  },
  {
    id: 474,
    word: 'convocare',
    type: 'verb',
    translation: ['zusammenrufen'],
    conjugation: 'a',
    present: 'convoco',
    perfect: 'convocavi',
    participle: 'convocatum'
  },
  {
    id: 475,
    word: 'senator',
    type: 'noun',
    translation: ['senator'],
    genitive: 'senatoris',
    gender: 'm',
    declension: 'k'
  },
  {
    id: 476,
    word: 'fere',
    type: 'other',
    translation: ['ungefähr', 'fast']
  },
  {
    id: 477,
    word: 'exire',
    type: 'irregularVerb',
    translation: ['hinausgehen'],
    info: 'irreguläres Verb'
  },
  {
    id: 478,
    word: 'iubere',
    type: 'verb',
    translation: ['befehlen', 'lassen'],
    info: 'mit Akkusativ',
    conjugation: 'e',
    present: 'iubeo',
    perfect: 'iussi',
    participle: 'iussum'
  },
  {
    id: 479,
    word: 'socius',
    type: 'noun',
    translation: ['gefährte'],
    genitive: 'socii',
    gender: 'm',
    declension: 'o'
  },
  {
    id: 480,
    word: 'comprehendere',
    type: 'verb',
    translation: ['ergreifen', 'erfassen'],
    info: 'auch geistig',
    conjugation: 'k',
    present: 'comprehendo',
    perfect: 'comprehendi',
    participle: 'comprehensum'
  },
  {
    id: 481,
    word: 'iuvenis',
    type: 'noun',
    translation: ['junger mann'],
    info: '30-45 Jahre',
    genitive: 'iuvenis',
    gender: 'm',
    declension: 'k'
  },
  {
    id: 482,
    word: 'afficere',
    type: 'verb',
    translation: ['erfüllen', 'versehen', 'versehen mit'],
    conjugation: 'm',
    present: 'afficio',
    perfect: 'affeci',
    participle: 'affectum'
  },
  {
    id: 483,
    word: 'priusquam',
    type: 'other',
    translation: ['bevor']
  },
  {
    id: 484,
    word: 'adire',
    type: 'irregularVerb',
    translation: ['hingehen', 'sich wenden', 'angreifen'],
    info: 'irreguläres Verb'
  },
  {
    id: 485,
    word: 'orator',
    type: 'noun',
    translation: ['redner'],
    genitive: 'oratoris',
    gender: 'm',
    declension: 'k'
  },
  {
    id: 486,
    word: 'res publica',
    type: 'noun',
    translation: ['staat'],
    genitive: 'res publicae',
    gender: 'f',
    declension: 'a'
  },
  {
    id: 487,
    word: 'iustitia',
    type: 'noun',
    translation: ['gerechtigkeit'],
    genitive: 'iustitiae',
    gender: 'f',
    declension: 'a'
  },
  {
    id: 488,
    word: 'incola',
    type: 'noun',
    translation: ['bewohner', 'einwohner'],
    genitive: 'incolae',
    gender: 'f',
    declension: 'a'
  },
  {
    id: 489,
    word: 'provincia',
    type: 'noun',
    translation: ['provinz'],
    genitive: 'provinciae',
    gender: 'f',
    declension: 'a'
  },
  {
    id: 490,
    word: 'divitiae',
    type: 'noun',
    pluralOnly: true,
    translation: ['reichtum'],
    genitive: 'divitiarum',
    gender: 'f',
    declension: 'a'
  },
  {
    id: 491,
    word: 'iulius caesar',
    type: 'noun',
    translation: ['gaius julius caesar'],
    genitive: 'iulii caesaris',
    gender: 'm',
    declension: 'k'
  },
  {
    id: 492,
    word: 'pauci/ae/a',
    type: 'other',
    translation: ['wenige']
  },
  {
    id: 493,
    word: 'totus',
    type: 'pronoun',
    translation: ['ganz'],
    info: '2. Fall: totius, 3. Fall: toti'
  },
  {
    id: 494,
    word: 'at',
    type: 'other',
    translation: ['aber']
  },
  {
    id: 495,
    word: 'auctoritas',
    type: 'noun',
    translation: ['ansehen', 'einfluss'],
    genitive: 'auctoritatis',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 496,
    word: 'omnis',
    type: 'adjective',
    translation: ['jeder', 'ganz'],
    info: 'nicht omnes/ia; im Singular',
    comparison: 'kon',
    femininum: 'omnis',
    neutrum: 'omne'
  },
  {
    id: 497,
    word: 'omnes',
    type: 'adjective',
    translation: ['alle', 'alles'],
    info: 'nicht omnis; im Plural; Neutrum wird im Singular übersetzt',
    comparison: 'kon',
    femininum: 'omnes',
    neutrum: 'omnia'
  },
  {
    id: 498,
    word: 'proelium',
    type: 'noun',
    translation: ['schlacht'],
    genitive: 'proelii',
    gender: 'n',
    declension: 'o'
  },
  {
    id: 499,
    word: 'qui',
    type: 'other',
    translation: ['dieser'],
    info: 'am Satzanfang'
  },
  {
    id: 500,
    word: 'quae',
    type: 'other',
    translation: ['diese'],
    info: 'am Satzanfang'
  },
  {
    id: 501,
    word: 'quod',
    type: 'other',
    translation: ['dieses'],
    info: 'am Satzanfang'
  },
  {
    id: 502,
    word: 'prudens',
    type: 'adjective',
    translation: ['klug'],
    comparison: 'kon',
    femininum: 'prudens',
    neutrum: 'prudens'
  },
  {
    id: 503,
    word: 'circumvenire',
    type: 'verb',
    translation: ['umzingeln'],
    conjugation: 'i',
    present: 'circumvenio',
    perfect: 'circumveni',
    participle: 'circumventum'
  },
  {
    id: 504,
    word: 'advenire',
    type: 'verb',
    translation: ['hinkommen', 'ankommen'],
    conjugation: 'i',
    present: 'advenio',
    perfect: 'adveni',
    participle: 'adventum'
  },
  {
    id: 505,
    word: 'frumentum',
    type: 'noun',
    translation: ['getreide'],
    genitive: 'frumenti',
    gender: 'n',
    declension: 'o'
  },
  {
    id: 506,
    word: 'concilium',
    type: 'noun',
    translation: ['versammlung'],
    genitive: 'concilii',
    gender: 'n',
    declension: 'o'
  },
  {
    id: 507,
    word: 'honestus',
    type: 'adjective',
    translation: ['ehrenhaft', 'ehrenvoll'],
    comparison: 'a_o',
    femininum: 'honesta',
    neutrum: 'honestum'
  },
  {
    id: 508,
    word: 'servitus',
    type: 'noun',
    translation: ['sklaverei'],
    genitive: 'servitutis',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 509,
    word: 'aetas',
    type: 'noun',
    translation: ['alter', 'zeitalter', 'zeit'],
    genitive: 'aetatis',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 510,
    word: 'aut',
    type: 'other',
    translation: ['oder']
  },
  {
    id: 511,
    word: 'ubi',
    type: 'other',
    translation: ['sobald'],
    info: 'mit Perfekt'
  },
  {
    id: 512,
    word: 'prior',
    type: 'adjective',
    translation: ['der frhere', 'die frhere', 'das frhere'],
    info: 'Komparativ',
    comparison: 'kon',
    femininum: 'prior',
    neutrum: 'prius'
  },
  {
    id: 513,
    word: 'quam',
    type: 'other',
    translation: ['als'],
    info: 'nach Komparativ'
  },
  {
    id: 514,
    word: 'acer',
    type: 'adjective',
    translation: ['heftig', 'spitz', 'scharf'],
    comparison: 'kon',
    femininum: 'acris',
    neutrum: 'acre'
  },
  {
    id: 515,
    word: 'incipere',
    type: 'verb',
    translation: ['beginnen', 'anfangen'],
    conjugation: 'm',
    present: 'incipio',
    perfect: 'coepi',
    participle: 'coeptum'
  },
  {
    id: 516,
    word: 'civitas',
    type: 'noun',
    translation: ['stamm', 'gemeinde', 'staat'],
    genitive: 'civitatis',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 517,
    word: 'gallia',
    type: 'noun',
    translation: ['gallien'],
    info: 'heutiges Frankreich',
    genitive: 'galliae',
    gender: 'f',
    declension: 'a'
  },
  {
    id: 518,
    word: 'tradere',
    type: 'verb',
    translation: ['ausliefern', 'berliefern'],
    conjugation: 'k',
    present: 'trado',
    perfect: 'tradidi',
    participle: 'traditum'
  },
  {
    id: 519,
    word: 'se tradere',
    type: 'other',
    translation: ['sich ergeben']
  },
  {
    id: 520,
    word: 'amicitia',
    type: 'noun',
    translation: ['freundschaft'],
    genitive: 'amicitiae',
    gender: 'f',
    declension: 'a'
  },
  {
    id: 521,
    word: 'legio',
    type: 'noun',
    translation: ['legion'],
    genitive: 'legionis',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 522,
    word: 'maximus',
    type: 'adjective',
    translation: ['der größte, sehr groß'],
    comparison: 'a_o',
    femininum: 'maxima',
    neutrum: 'maximum'
  },
  {
    id: 523,
    word: 'potestas',
    type: 'noun',
    translation: ['macht'],
    genitive: 'potestatis',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 524,
    word: 'dictator',
    type: 'noun',
    translation: ['diktator'],
    genitive: 'dictatoris',
    gender: 'm',
    declension: 'k'
  },
  {
    id: 525,
    word: 'perpetuus',
    type: 'adjective',
    translation: ['ununterbrochen', 'ewig'],
    comparison: 'a_o',
    femininum: 'perpetua',
    neutrum: 'perpetuum'
  },
  {
    id: 526,
    word: 'civis',
    type: 'noun',
    translation: ['brger'],
    genitive: 'civis',
    gender: 'm',
    declension: 'm'
  },
  {
    id: 527,
    word: 'persuadere',
    type: 'verb',
    translation: ['berreden', 'berzeugen'],
    conjugation: 'e',
    present: 'persuadeo',
    perfect: 'persuasi',
    participle: 'persuasum'
  },
  {
    id: 528,
    word: 'persuadeo tibi',
    type: 'other',
    translation: ['ich berrede dich']
  },
  {
    id: 529,
    word: 'mos',
    type: 'noun',
    translation: ['sitte', 'brauch'],
    genitive: 'moris',
    gender: 'm',
    declension: 'k'
  },
  {
    id: 530,
    word: 'lex',
    type: 'noun',
    translation: ['gesetz'],
    genitive: 'legis',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 531,
    word: 'libertas',
    type: 'noun',
    translation: ['freiheit'],
    genitive: 'libertatis',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 532,
    word: 'melior',
    type: 'other',
    translation: ['besser'],
    info: 'm. / f.'
  },
  {
    id: 533,
    word: 'melius',
    type: 'other',
    translation: ['besser'],
    info: 'n.'
  },
  {
    id: 534,
    word: 'caedes',
    type: 'noun',
    translation: ['ermordung', 'mord'],
    genitive: 'caedis',
    gender: 'f',
    declension: 'm'
  },
  {
    id: 535,
    word: 'vivere',
    type: 'verb',
    translation: ['leben'],
    conjugation: 'm',
    present: 'vivo',
    perfect: 'vixi',
    participle: '-'
  },
  {
    id: 536,
    word: 'facilis',
    type: 'adjective',
    translation: ['leicht'],
    comparison: 'kon',
    femininum: 'facilis',
    neutrum: 'facile'
  },
  {
    id: 537,
    word: 'plurimi/ae/a',
    type: 'other',
    translation: ['die meisten'],
    info: 'Superlativ von multi/ae/a'
  },
  {
    id: 538,
    word: 'statuere',
    type: 'verb',
    translation: ['beschließen', 'aufstellen'],
    conjugation: 'k',
    present: 'statuo',
    perfect: 'statui',
    participle: 'statutum'
  },
  {
    id: 539,
    word: 'futurus',
    type: 'adjective',
    translation: ['zuknftig'],
    comparison: 'a_o',
    femininum: 'futura',
    neutrum: 'futurum'
  },
  {
    id: 540,
    word: 'adesse',
    type: 'irregularVerb',
    translation: ['da sein', 'anwesend sein']
  },
  {
    id: 541,
    word: 'quidem',
    type: 'other',
    translation: ['zwar', 'freilich']
  },
  {
    id: 542,
    word: 'iste',
    type: 'other',
    translation: ['dieser', 'dieser da'],
    info: 'abschätzig gemeint'
  },
  {
    id: 543,
    word: 'ista',
    type: 'other',
    translation: ['diese', 'diese da'],
    info: 'abschätzig gemeint'
  },
  {
    id: 544,
    word: 'istud',
    type: 'other',
    translation: ['dieses', 'dieses da'],
    info: 'abschätzig gemeint'
  },
  {
    id: 545,
    word: 'defendere',
    type: 'verb',
    translation: ['verteidigen'],
    conjugation: 'k',
    present: 'defendo',
    perfect: 'defendi',
    participle: 'defensum'
  },
  {
    id: 546,
    word: 'vulnus',
    type: 'noun',
    translation: ['wunde'],
    genitive: 'vulneris',
    gender: 'n',
    declension: 'k'
  },
  {
    id: 547,
    word: 'ultimus',
    type: 'adjective',
    translation: ['der letzte', 'die letzte', 'das letzte'],
    comparison: 'a_o',
    femininum: 'ultima',
    neutrum: 'ultimum'
  },
  {
    id: 548,
    word: 'convenire',
    type: 'verb',
    translation: ['zusammenkommen', 'zusammen kommen'],
    conjugation: 'i',
    present: 'convenio',
    perfect: 'conveni',
    participle: 'conventum'
  },
  {
    id: 549,
    word: 'mulier',
    type: 'noun',
    translation: ['frau'],
    genitive: 'mulieris',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 550,
    word: 'finis',
    type: 'noun',
    translation: ['grenze', 'ende'],
    gender: 'm',
    declension: 'm',
    info: "Singular von 'fines'",
    genitive: 'finis'
  },
  {
    id: 551,
    word: 'fines',
    type: 'noun',
    translation: ['gebiet', 'gebiete'],
    gender: 'm',
    declension: 'm',
    genitive: 'finium',
    info: "Plural von 'finis'",
    pluralOnly: true
  },
  {
    id: 552,
    word: 'regnum',
    declension: 'o',
    type: 'noun',
    gender: 'n',
    genitive: 'regni',
    translation: ['königreich', 'reich', 'herrschaft']
  },
  {
    id: 553,
    word: 'augere',
    type: 'verb',
    conjugation: 'e',
    present: 'augeo',
    perfect: 'auxi',
    participle: 'auctum',
    translation: ['vergrößern', 'vermehren', 'steigern']
  },
  {
    id: 554,
    word: 'donum',
    type: 'noun',
    gender: 'n',
    declension: 'o',
    genitive: 'doni',
    translation: ['geschenk']
  },
  {
    id: 555,
    word: 'mihi gaudio est',
    type: 'other',
    translation: ['ich freue mich', 'es bereitet mir freude']
  },
  {
    id: 556,
    word: 'ingens',
    type: 'adjective',
    comparison: 'kon',
    femininum: 'ingens',
    neutrum: 'ingens',
    translation: ['riesig', 'gewaltig']
  },
  {
    id: 557,
    word: 'antea',
    type: 'adverb',
    translation: ['früher', 'vorher']
  },
  {
    id: 558,
    word: 'clades',
    type: 'noun',
    translation: ['niederlage'],
    genitive: 'cladis',
    declension: 'm',
    gender: 'f'
  },

  {
    id: 559,
    word: 'classis',
    type: 'noun',
    translation: ['flotte'],
    genitive: 'classis',
    declension: 'm',
    gender: 'f'
  },
  {
    id: 560,
    word: 'animadvertere',
    type: 'verb',
    translation: ['bemerken', 'wahrnehmen'],
    conjugation: 'k',
    present: 'animadverto',
    perfect: 'animadverti',
    participle: 'animadversum'
  },
  {
    id: 561,
    word: 'cedere',
    type: 'verb',
    translation: ['weggehen', 'weichen'],
    conjugation: 'k',
    present: 'cedo',
    perfect: 'cessi',
    participle: 'cessum'
  },
  {
    id: 562,
    word: 'claudere',
    type: 'verb',
    translation: ['einschließen', 'schließen'],
    conjugation: 'k',
    present: 'claudo',
    perfect: 'clausi',
    participle: 'clausum'
  },
  {
    id: 563,
    word: 'custos',
    type: 'noun',
    translation: ['wächter'],
    genitive: 'custodis',
    declension: 'k',
    gender: 'm'
  },
  {
    id: 564,
    word: 'ponere',
    type: 'verb',
    translation: ['stellen', 'legen'],
    conjugation: 'k',
    present: 'pono',
    perfect: 'posui',
    participle: 'positum'
  },
  {
    id: 565,
    word: 'enim',
    info: 'nachgestellt',
    type: 'other',
    translation: ['denn', 'nämlich']
  },
  {
    id: 566,
    word: 'auferre',
    type: 'irregularVerb',
    translation: ['wegbringen', 'wegnehmen'],
    info: 'irreguläres Verb'
  },
  {
    id: 567,
    word: 'serva',
    type: 'noun',
    translation: ['sklavin'],
    genitive: 'servae',
    declension: 'a',
    gender: 'f'
  },
  {
    id: 568,
    word: 'praeter',
    info: 'mit Akkusativ',
    type: 'other'
  },
  {
    id: 569,
    word: 'discordia',
    type: 'noun',
    translation: ['zwietracht', 'streit'],
    declension: 'a',
    gender: 'f',
    genitive: 'discordiae'
  },
  {
    id: 570,
    word: 'contoversia',
    type: 'noun',
    translation: ['auseinandersetzung'],
    declension: 'a',
    gender: 'f',
    genitive: 'controversiae'
  },
  {
    id: 571,
    word: 'iacere',
    type: 'verb',
    translation: ['werfen', 'schleudern'],
    conjugation: 'm',
    present: 'iacio',
    perfect: 'ieci',
    participle: 'iactum'
  },
  {
    id: 572,
    word: 'Venus',
    type: 'noun',
    translation: ['Venus'],
    genitive: 'Veneris',
    gender: 'f',
    declension: 'k'
  },
  {
    id: 573,
    word: 'certare',
    type: 'verb',
    translation: ['wetteifern', 'streiten'],
    conjugation: 'a',
    present: 'certo',
    perfect: 'certavi',
    participle: 'certatum'
  },
  {
    id: 574,
    word: 'iudicare',
    type: 'verb',
    translation: ['urteilen', 'beurteilen', 'richten'],
    conjugation: 'a',
    present: 'iudico',
    perfect: 'iudicavi',
    participle: 'iudicatum'
  },
  {
    id: 575,
    word: 'deligere',
    type: 'verb',
    translation: ['auswählen'],
    conjugation: 'k',
    present: 'deligo',
    perfect: 'delegi',
    participle: 'delectum'
  },
  {
    id: 576,
    word: 'praemium',
    type: 'noun',
    translation: ['belohnung', 'preis'],
    declension: 'o',
    gender: 'n',
    genitive: 'praemii'
  },
  {
    id: 577,
    word: 'praeterea',
    type: 'adverb',
    translation: ['außerdem']
  },
  {
    id: 578,
    word: 'dives',
    type: 'adjective',
    translation: ['reich'],
    comparison: 'kon',
    femininum: 'dives',
    neutrum: 'dives'
  },
  {
    id: 579,
    word: 'fortitudo',
    type: 'noun',
    translation: ['tapferkeit'],
    declension: 'k',
    gender: 'f',
    genitive: 'fortitudinis'
  },
  {
    id: 580,
    word: 'quia',
    type: 'other',
    translation: ['weil']
  },
  {
    id: 581,
    word: 'Graecia',
    type: 'noun',
    translation: ['Griechenland'],
    declension: 'a',
    gender: 'f',
    genitive: 'Graeciae'
  },
  {
    id: 582,
    word: 'decernere',
    type: 'verb',
    translation: ['beschließen'],
    conjugation: 'k',
    present: 'decerno',
    perfect: 'decrevi',
    participle: 'decretum'
  },
  {
    id: 583,
    word: 'eo',
    type: 'adverb',
    translation: ['dorthin']
  },
  {
    id: 584,
    word: 'fides',
    type: 'noun',
    translation: ['treue', 'vertrauen', 'schutz'],
    declension: 'e',
    gender: 'f',
    genitive: 'fidei'
  },

  {
    id: 585,
    word: 'mandare',
    type: 'verb',
    translation: ['anvertrauen'],
    conjugation: 'a',
    present: 'mando',
    perfect: 'mandavi',
    participle: 'mandatum'
  },
  {
    id: 586,
    word: 'occasio',
    type: 'noun',
    translation: ['gelegenheit'],
    declension: 'k',
    gender: 'f',
    genitive: 'occasionis'
  },
  {
    id: 587,
    word: 'iungere',
    type: 'verb',
    translation: ['verbinden'],
    conjugation: 'k',
    present: 'iungo',
    perfect: 'iunxi',
    participle: 'iunctum'
  },
  {
    id: 588,
    word: 'maritus',
    type: 'noun',
    translation: ['ehemann', 'gatte'],
    declension: 'o',
    gender: 'm',
    genitive: 'mariti'
  },
  {
    id: 589,
    word: 'aut ... aut',
    type: 'other',
    translation: ['entweder ... oder', 'entweder oder']
  },
  { id: 590, word: 'eiusmodi', type: 'other', translation: ['derartig'], info: '(= huiusmodi)' },
  {
    id: 591,
    word: 'Troia',
    type: 'noun',
    translation: ['Troja'],
    declension: 'a',
    gender: 'f',
    genitive: 'Troiae'
  }
];
