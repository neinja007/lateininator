import { prisma } from '@/utils/other/client';

export const getWords = async (includedDataObject: any, userId: string | undefined) => {
  try {
    const words = await prisma.word.findMany({
      include: includedDataObject,
      orderBy: {
        name: 'asc'
      },
      where: {
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
      take: 30
    });

    const count = await prisma.word.count({
      where: {
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
  } catch (error) {
    console.error('Error fetching words:', error);
    throw error;
  }
};
