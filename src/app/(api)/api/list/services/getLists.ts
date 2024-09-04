import { prisma } from '@/utils/other/client';

export async function getLists(userId: string, includedData: any, includedWordData: any) {
  try {
    const lists = await prisma.list.findMany({
      where: {
        collection: {
          savedBy: {
            some: {
              id: userId
            }
          }
        }
      },
      include: {
        ...includedData,
        words: includedData.words && {
          include: includedWordData
        }
      }
    });
    return lists;
  } catch (error) {
    console.error('Error fetching lists:', error);
    throw error;
  }
}
