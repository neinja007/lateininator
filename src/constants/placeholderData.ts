import { Adjective, Noun, Verb, Word } from '@/types/word';

export const placeholderWord: Word & Noun & Verb & Adjective = {
  info: '',
  translation: [],
  type: 'OTHER',
  list: [],
  derivative: null,
  id: Math.random() * 100000,
  name: '',
  exception: {},
  noun: {
    declension: 'NONE',
    genitive: '',
    pluralOnly: false,
    gender: 'NONE',
    id: Math.random() * 100000
  },
  verb: {
    present: '',
    perfect: '',
    participle: '',
    conjugation: 'NONE',
    id: Math.random() * 100000
  },
  adjective: {
    femininum: '',
    comparison: 'NONE',
    id: Math.random() * 100000,
    neutrum: ''
  }
};
