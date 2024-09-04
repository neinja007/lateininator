import { prisma } from '@/utils/other/client';

export async function getCollections(userId: string, saved: boolean, includedData: any) {
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
      include: includedData
    });
    return collections;
  } catch (error) {
    console.error('Error fetching collections:', error);
    throw error;
  }
}
