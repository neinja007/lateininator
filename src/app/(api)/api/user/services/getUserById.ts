import { prisma } from '@/utils/other/client';
import { User } from '@prisma/client';

export async function getUserById(userId: string, includedDataObject?: any): Promise<User | null> {
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
