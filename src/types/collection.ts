import { Collection, List, User, Word } from '@prisma/client';

export type FullCollection = Collection & {
  lists: ListWithWords[];
  owner: User;
};

export type ListWithWords = Omit<List, 'createdAt' | 'updatedAt' | 'collectionId'> & {
  words: Word[];
};
