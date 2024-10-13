import { prisma } from '@/utils/other/client';

export const createUser = async (userId: string, email: string, name: string, customerId: string) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        id: userId,
        email: email,
        name: name,
        stripeCustomerId: customerId,
        savedCollections: {
          connect: {
            id: 1
          }
        }
      }
    });
    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
