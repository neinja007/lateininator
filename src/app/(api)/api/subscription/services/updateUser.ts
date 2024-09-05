import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateUser = async (userId: string, data: { premium?: boolean }) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: data
    });
    return updatedUser;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
