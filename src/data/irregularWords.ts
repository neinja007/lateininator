import { Endings } from '@/types/endings';

type FullyPartial<T> = {
  [P in keyof T]?: T[P] extends object ? FullyPartial<T[P]> : T[P];
};

export const irregularWords: {
  [key: number]: {
    adverb?: {
      [key in 'pos' | 'comp' | 'sup']?: string;
    };
  } & FullyPartial<Endings> & {
      customBases?: {
        [K in 'pos' | 'comp' | 'sup']?: string;
      };
    };
} = {
  1: {
    customBases: {
      comp: 'pe',
      sup: 'pessim'
    },
    adverb: {
      comp: 'peius',
      sup: 'pessime'
    }
  }
};
