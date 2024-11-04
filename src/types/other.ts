import { availableColors } from '@/constants/other';
import { SettingKey } from '@prisma/client';

export type Color =
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'default'
  | 'pink'
  | 'cyan'
  | 'lime';

export type PrimaryColor = (typeof availableColors)[number];

export type Stage = 'settings' | 'test' | 'review' | 'results';

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

export type ListSettingData = BaseSettingData & {
  type: 'list';
  options: { [key: string]: string };
};

export type ButtonSettingData = BaseSettingData & {
  type: 'button';
  buttonText: string;
  onClick: () => Promise<void>;
  color: Color;
};

export type ColorSettingData = BaseSettingData & {
  type: 'color';
};

export type BaseSettingData = {
  name: string;
  description: string;
  disabled?: boolean;
  invalidateQueries?: string;
};

export type OtherSettingData = BaseSettingData & {
  type: 'boolean' | 'input';
};

export type SettingData = ListSettingData | ButtonSettingData | ColorSettingData | OtherSettingData;

type ClientSettingKey = 'RESET_POINTS' | 'NAME_CHANGE';
export type AllSettingKey = SettingKey | ClientSettingKey;

export type Settings = {
  [S in AllSettingKey]: SettingData;
};

export type Pattern = 'dotted' | 'isometric' | 'false';

export type RouteStatus = 'signedIn' | 'signedOut' | 'premium' | 'notPremium' | 'staff';
