import { MapperType } from '@/types/mapper';

export const MAPPER: MapperType = {
  extended: {
    type: {
      NOUN: 'Nomen',
      VERB: 'Verb',
      ADJECTIVE: 'Adjektiv',
      OTHER: 'Sonstiges',
      ADVERB: 'Adverb',
      PRONOUN: 'Pronomen'
    },
    declension: {
      A: 'A Deklination',
      O: 'O Deklination',
      K: 'konsonantische Deklination',
      I: 'konsonantische Deklination I-Stämme',
      M: 'konsonantische Deklination Mischstämme',
      E: 'E Deklination',
      U: 'U Deklination',
      NONE: 'keine Deklination'
    },
    comparison: {
      A_O: 'A/O Komparation',
      K: 'konsonantische Komparation',
      NONE: 'keine Komparation'
    },
    wordCase: {
      1: 'Nominativ',
      2: 'Genitiv',
      3: 'Dativ',
      4: 'Akkusativ',
      5: 'Ablativ',
      6: 'Vokativ'
    },
    gender: {
      M: 'maskulin',
      F: 'feminin',
      N: 'neutrum',
      NONE: 'kein Geschlecht'
    },
    numerus: {
      sin: 'Singular',
      plu: 'Plural'
    },
    conjugation: {
      A: 'A Konjugation',
      E: 'E Konjugation',
      K: 'konsonantische Konjugation',
      I: 'I Konjugation',
      M: 'Mischkonjugation',
      NONE: 'keine Konjugation'
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
      3: '3. Person',
      4: 'Imperativ'
    },
    modus: {
      ind: 'Indikativ',
      kon: 'Konjunktiv'
    },
    voice: { act: 'Aktiv', pas: 'Passiv' },
    property: {
      conjugation: 'Konjugation',
      comparison: 'Komparation',
      declension: 'Deklination',
      gender: 'Geschlecht',
      femininum: 'Nominativ Feminin',
      neutrum: 'Nominativ Neutrum',
      genitive: 'Genitiv Singular',
      participle: 'Partizip Perfekt Passiv',
      perfect: '1. Person Singular Perfekt',
      present: '1. Person Singular Präsens',
      comparisonDegree: 'Steigerungsform',
      modus: 'Modus',
      person: 'Person',
      tense: 'Zeitform',
      voice: 'Aktiv / Passiv',
      wordCase: 'Fall',
      numerus: 'Numerus'
    },
    comparisonDegree: {
      pos: 'Positiv',
      comp: 'Komparativ',
      sup: 'Superlativ'
    }
  },
  short: {
    type: {
      NOUN: 'Nomen',
      VERB: 'Verb',
      ADJECTIVE: 'Adj.',
      OTHER: 'Sonst.',
      ADVERB: 'Adv.',
      PRONOUN: 'Pron.'
    },
    declension: {
      A: 'A Dekl.',
      O: 'O Dekl.',
      K: 'kons. Dekl.',
      I: 'kons. Dekl. I',
      M: 'kons. Dekl. Misch.',
      E: 'E Dekl.',
      U: 'U Dekl.',
      NONE: 'keine Dekl.'
    },
    comparison: {
      A_O: 'A/O Dekl.',
      K: 'kons. Dekl.',
      NONE: 'keine Dekl.'
    },
    wordCase: {
      1: '1. F.',
      2: '2. F.',
      3: '3. F.',
      4: '4. F.',
      5: '5. F.',
      6: '6. F.'
    },
    gender: {
      M: 'mask.',
      F: 'fem.',
      N: 'neut.',
      NONE: 'kein Geschl.'
    },
    numerus: {
      sin: 'Sg.',
      plu: 'Pl.'
    },
    conjugation: {
      A: 'A Konj.',
      E: 'E Konj.',
      K: 'kons. Konj.',
      I: 'I Konj.',
      M: 'Mischkonj.',
      NONE: 'keine Konj.'
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
      3: '3. P.',
      4: 'Imp.'
    },
    modus: {
      ind: 'Ind.',
      kon: 'Konj.'
    },
    voice: { act: 'Akt.', pas: 'Pas.' },
    property: {
      comparison: 'Komp.',
      conjugation: 'Konj.',
      declension: 'Dekl.',
      gender: 'Geschl.',
      femininum: 'Nom. F.',
      neutrum: 'Nom. N.',
      genitive: 'Gen.',
      participle: 'PPP',
      perfect: 'Perf.',
      present: 'Präs.',
      comparisonDegree: 'Steig.',
      modus: 'Mod.',
      person: 'Pers.',
      tense: 'Zeit',
      voice: 'Akt./Pas.',
      wordCase: 'F.',
      numerus: 'Num.'
    },
    comparisonDegree: {
      pos: 'Positiv',
      comp: 'Komparativ',
      sup: 'Superlativ'
    }
  }
};
