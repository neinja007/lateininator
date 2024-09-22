import { PrimaryColor } from '@/types/other';
import { useSettings } from './useSettings';

export const usePrimaryColor = () => {
  const { settings } = useSettings();

  const primaryColor: PrimaryColor = (settings?.PRIMARY_COLOR as PrimaryColor) || 'blue';

  return primaryColor;
};
