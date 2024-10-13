import { prisma } from '@/utils/other/client';
import { User } from '@prisma/client';

export const getUserById = async (userId: string, includedDataObject?: any): Promise<User | null> => {
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
};
