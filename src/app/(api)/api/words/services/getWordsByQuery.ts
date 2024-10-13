import { prisma } from '@/utils/other/client';

export async function getWordsByQuery(query: string, includedDataObject: any, userId: string | undefined) {
  return await prisma.word.findMany({
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
        fields: ['name', 'translation'],
        search: query,
        sort: 'asc'
      }
    },
    include: includedDataObject
  });
}
