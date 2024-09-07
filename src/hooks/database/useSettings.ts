import { UserSetting } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useSettings = () => {
  const { data: settings, status } = useQuery<UserSetting[]>({
    queryKey: ['user-settings'],
    queryFn: () => axios.get('/api/user-settings').then((res) => res.data)
  });

  return { settings, status };
};
