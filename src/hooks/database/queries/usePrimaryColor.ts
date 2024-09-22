import { PrimaryColor } from '@/types/other';
import { useSettings } from './useSettings';
import { availableColors } from '@/constants/other';

export const usePrimaryColor = (): PrimaryColor => {
  const { settings } = useSettings();

  const primaryColor = (settings?.PRIMARY_COLOR as PrimaryColor | 'random') || 'blue';

  if (primaryColor === 'random') {
    return availableColors[Math.floor(Math.random() * availableColors.length)];
  }

  return primaryColor;
};
