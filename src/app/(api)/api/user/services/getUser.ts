import { prisma } from '@/utils/other/client';

export async function getUser(userId: string, includedDataObject?: any) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: includedDataObject
    });
    return user;
  } catch (error) {
    console.error('Error finding user:', error);
    throw error;
  }
}
