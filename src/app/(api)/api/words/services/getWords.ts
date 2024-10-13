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
      }
    });
    return words;
  } catch (error) {
    console.error('Error fetching words:', error);
    throw error;
  }
};
