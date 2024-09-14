import { settings } from '@/constants/settings';
import { prisma } from '@/utils/other/client';
import { currentUser } from '@clerk/nextjs/server';
import { SettingKey, UserSetting } from '@prisma/client';
import { NextResponse } from 'next/server';
import { z } from 'zod';

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
  const body = await req.json();
  const schema = z.object({
    settingKey: z.string(),
    settingValue: z.string()
  });
  const { settingKey, settingValue } = schema.parse(body);

  if (!Object.keys(settings).includes(settingKey)) {
    return NextResponse.json({ error: 'Invalid setting key' }, { status: 400 });
  }

  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userSetting = await prisma.userSetting.upsert({
    where: {
      userId_settingKey: {
        userId: user.id,
        settingKey: settingKey as SettingKey
      }
    },
    update: {
      settingValue
    },
    create: {
      userId: user.id,
      settingKey: settingKey as SettingKey,
      settingValue
    }
  });

  return NextResponse.json(userSetting);
};
