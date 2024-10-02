import { prisma } from '@/utils/other/client';

export async function getWordById(id: number, includedDataObject: any, userId: string | undefined) {
  return await prisma.word.findUnique({
    where: {
      id: id,
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
    include: includedDataObject
  });
}
