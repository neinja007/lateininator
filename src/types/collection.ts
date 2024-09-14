import { Collection, List, User } from '@prisma/client';
import { Word } from './word';

export type FullCollection = Collection & {
  lists: ListWithWords[];
  owner: User;
  savedBy: User[];
};

export type ListWithWords = Omit<List, 'createdAt' | 'updatedAt' | 'collectionId'> & {
  words: Word[];
};
