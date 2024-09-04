import { prisma } from '@/utils/other/client';

export async function getWordsByQuery(query: string, includedDataObject: any) {
  return await prisma.word.findMany({
    where: {
      name: {
        contains: query,
        mode: 'insensitive'
      }
    },
    include: includedDataObject
  });
}
