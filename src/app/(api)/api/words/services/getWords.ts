import { prisma } from '@/utils/other/client';

export async function getWords(includedDataObject: any) {
  try {
    const words = await prisma.word.findMany({
      include: includedDataObject
    });
    return words;
  } catch (error) {
    console.error('Error fetching words:', error);
    throw error;
  }
}
