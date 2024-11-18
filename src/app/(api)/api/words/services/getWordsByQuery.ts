import { prisma } from '@/utils/other/client';

export const getWordsByQuery = async (query: string, includedDataObject: any, userId: string | undefined) => {
  const words = await prisma.word.findMany({
    where: {
      name: {
        contains: query,
        mode: 'insensitive'
      },
      OR: [
        {
          private: false
        },
        {
          createdBy: {
            id: userId ?? ''
          }
        }
      ]
    },
    orderBy: {
      _relevance: {
        fields: ['name'],
        search: query,
        sort: 'desc'
      }
    },
    take: 30,
    include: includedDataObject
  });

  const count = await prisma.word.count({
    where: {
      name: {
        contains: query,
        mode: 'insensitive'
      },
      OR: [
        {
          private: false
        },
        {
          createdBy: {
            id: userId ?? ''
          }
        }
      ]
    }
  });

  return { words, count };
};
