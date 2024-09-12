import { prisma } from '@/utils/other/client';

export const getCollection = async (
  id: number,
  includedDataObject: {
    [key: string]: true;
  }
) => {
  const collection = await prisma.collection.findUnique({
    where: {
      id
    },
    include: {
      ...includedDataObject
    }
  });

  return collection;
};
