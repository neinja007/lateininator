import { Word } from '@/types/word';
import { List } from '@prisma/client';

export type ListWithWords = Omit<List, 'createdAt' | 'updatedAt' | 'collectionId'> & { words: Word[] };
