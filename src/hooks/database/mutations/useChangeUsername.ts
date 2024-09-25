import { AllSettingKey } from '@/types/other';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useChangeUsername = () => {
  const query = useMutation({
    mutationFn: (name: AllSettingKey) => axios.patch('/api/user', { name })
  });

  return query;
};
