import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useChangeUsername = () => {
  const query = useMutation({
    mutationFn: (name: string) => axios.patch('/api/user', { name: name.trim() })
  });

  return query;
};
