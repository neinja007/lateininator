import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { SettingKey } from '@prisma/client';

export const useUpdateSettings = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ settingKey, settingValue }: { settingKey: SettingKey; settingValue: string }) =>
      axios.patch('/api/user-settings', { settingKey, settingValue }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-settings'] });
    }
  });
};
