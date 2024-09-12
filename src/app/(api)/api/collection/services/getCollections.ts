import { prisma } from '@/utils/other/client';
import { IncludedData } from '../../types';

export async function getCollections(
  userId: string,
  saved: boolean,
  includedData: IncludedData,
  listIncludedData: IncludedData
) {
  try {
    const collections = await prisma.collection.findMany({
      where: {
        savedBy: saved
          ? {
              some: {
                id: userId
              }
            }
          : {
              none: {
                id: userId
              }
            },
        OR: [
          {
            private: false
          },
          {
            owner: {
              id: userId
            }
          }
        ]
      },
      include: {
        ...includedData,
        lists: includedData.lists && {
          include: {
            ...listIncludedData
          }
        }
      }
    });
    return collections;
  } catch (error) {
    console.error('Error fetching collections:', error);
    throw error;
  }
}
