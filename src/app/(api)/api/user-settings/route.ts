import { prisma } from '@/utils/other/client';
import { currentUser } from '@clerk/nextjs/server';
import { UserSetting } from '@prisma/client';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userSettings = await prisma.userSetting.findMany({
    where: {
      userId: user.id
    }
  });

  const defaultSettings = await prisma.defaultSetting.findMany();

  const combinedSettings: Omit<UserSetting, 'id' | 'userId' | 'createdAt' | 'updatedAt'>[] = defaultSettings.map(
    (setting) => {
      const userSetting = userSettings.find((userSetting) => userSetting.settingKey === setting.settingKey);
      return {
        settingKey: setting.settingKey,
        settingValue: userSetting?.settingValue || setting.defaultValue
      };
    }
  );

  return NextResponse.json(combinedSettings);
};

export const PATCH = async (req: Request) => {
  const { settingKey, settingValue } = await req.json();

  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userSetting = await prisma.userSetting.upsert({
    where: {
      userId_settingKey: {
        userId: user.id,
        settingKey
      }
    },
    update: {
      settingValue
    },
    create: {
      userId: user.id,
      settingKey,
      settingValue
    }
  });

  return NextResponse.json(userSetting);
};
