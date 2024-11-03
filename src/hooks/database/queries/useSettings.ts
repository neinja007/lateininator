import { SettingKey, UserSetting } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useSettings = () => {
  const query = useQuery<UserSetting[]>({
    queryKey: ['user-settings'],
    queryFn: () => axios.get('/api/user-settings').then((res) => res.data)
  });

  const settingsObject = query.data?.reduce(
    (acc, setting) => {
      acc[setting.settingKey] = setting.settingValue;
      return acc;
    },
    {} as { [S in SettingKey]: string }
  );

  return { settings: settingsObject, query };
};
