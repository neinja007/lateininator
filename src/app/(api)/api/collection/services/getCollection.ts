import { prisma } from '@/utils/other/client';
import { IncludedData } from '../../types';

export const getCollection = async (
  id: number,
  userId: string,
  includedDataObject: IncludedData,
  listIncludedDataObject: IncludedData
) => {
  const collection = await prisma.collection.findUnique({
    where: {
      id,
      OR: [{ ownerId: userId }, { private: false }]
    },
    include: {
      ...includedDataObject,
      lists: includedDataObject.lists && {
        include: {
          ...listIncludedDataObject
        }
      }
    }
  });

  return collection;
};
