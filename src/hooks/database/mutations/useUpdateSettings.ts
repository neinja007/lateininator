import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { AllSettingKey } from '@/types/other';

export const useUpdateSettings = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ settingKey, settingValue }: { settingKey: AllSettingKey; settingValue: string }) =>
      axios.patch('/api/user-settings', { settingKey, settingValue: settingValue.trim() }),
    onMutate: async ({ settingKey, settingValue }) => {
      await queryClient.cancelQueries({ queryKey: ['user-settings'] });
      const previousSettings = queryClient.getQueryData(['user-settings']);
      queryClient.setQueryData(['user-settings'], (oldData: { [key: string]: string }[]) => {
        return [...oldData.filter((setting) => setting.settingKey !== settingKey), { settingKey, settingValue }];
      });
      return { previousSettings };
    },
    onError: (err, variables, context) => {
      if (context?.previousSettings) {
        queryClient.setQueryData(['user-settings'], context.previousSettings);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['user-settings'] });
    }
  });
};
