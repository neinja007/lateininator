import { prisma } from '@/utils/other/client';

export async function getWordById(id: number, includedDataObject: any) {
  return await prisma.word.findUnique({
    where: {
      id: id
    },
    include: includedDataObject
  });
}
