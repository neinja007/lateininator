import { Adjective, Noun, Verb, Word } from '@/types/word';
import { List } from '@prisma/client';

export const placeholderWord: Word & Noun & Verb & Adjective = {
  info: 'wird geladen...',
  translation: [],
  type: 'OTHER',
  lists: [],
  derivative: null,
  id: Math.random() * 100000,
  name: 'wird geladen...',
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

export const placeholderList: List & { words: Word[] } = {
  collectionId: Math.random() * 100000,
  id: Math.random() * 100000,
  name: 'wird geladen...',
  words: []
};
