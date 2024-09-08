import { SettingKey, UserSetting } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useMemo } from 'react';

export const useSettings = () => {
  const { data: settings, status } = useQuery<UserSetting[]>({
    queryKey: ['user-settings'],
    queryFn: () => axios.get('/api/user-settings').then((res) => res.data)
  });

  const settingsObject = useMemo(() => {
    return settings?.reduce(
      (acc, setting) => {
        acc[setting.settingKey] = setting.settingValue;
        return acc;
      },
      {} as { [S in SettingKey]: string }
    );
  }, [settings]);

  return { settings: settingsObject, status };
};
