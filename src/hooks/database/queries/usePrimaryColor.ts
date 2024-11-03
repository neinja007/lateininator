/* eslint-disable no-redeclare */
import { AllSettingKey, PrimaryColor } from '@/types/other';
import { useSettings } from './useSettings';
import { availableColors } from '@/constants/other';
import { useQueryClient } from '@tanstack/react-query';

export function usePrimaryColor(randomFn: true): () => PrimaryColor;
export function usePrimaryColor(randomFn?: false): PrimaryColor;
export function usePrimaryColor(randomFn?: boolean): (() => PrimaryColor) | PrimaryColor;

export function usePrimaryColor(randomFn?: boolean) {
  const { settings } = useSettings();

  const queryClient = useQueryClient();
  const queryData: { settingKey: AllSettingKey; settingValue: string }[] | undefined = queryClient.getQueryData([
    'user-settings'
  ]);

  const primaryColorData = queryData?.find((setting) => setting.settingKey === 'PRIMARY_COLOR')?.settingValue;

  const primaryColor = primaryColorData ?? (settings?.PRIMARY_COLOR as PrimaryColor | 'random') ?? 'blue';

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
