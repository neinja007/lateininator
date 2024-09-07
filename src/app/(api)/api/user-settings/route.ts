import { prisma } from '@/utils/other/client';
import { currentUser } from '@clerk/nextjs/server';
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

  const combinedSettings = defaultSettings.map((setting) => {
    const userSetting = userSettings.find((userSetting) => userSetting.settingKey === setting.settingKey);
    return {
      ...setting,
      value: userSetting?.settingValue || setting.defaultValue
    };
  });

  return NextResponse.json(combinedSettings);
};
