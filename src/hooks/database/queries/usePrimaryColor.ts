/* eslint-disable no-redeclare */
import { PrimaryColor } from '@/types/other';
import { useSettings } from './useSettings';
import { availableColors } from '@/constants/other';

export function usePrimaryColor(randomFn: true): () => PrimaryColor;
export function usePrimaryColor(randomFn?: false): PrimaryColor;
export function usePrimaryColor(randomFn?: boolean): (() => PrimaryColor) | PrimaryColor;
export function usePrimaryColor(randomFn?: boolean) {
  const { settings } = useSettings();

  const primaryColor = (settings?.PRIMARY_COLOR as PrimaryColor | 'random') || 'blue';

  if (randomFn) {
    if (primaryColor === 'random') {
      return () => availableColors[Math.floor(Math.random() * availableColors.length)];
    } else {
      return () => primaryColor;
    }
  } else {
    if (primaryColor === 'random') {
      return availableColors[Math.floor(Math.random() * availableColors.length)];
    } else {
      return primaryColor;
    }
  }
}
