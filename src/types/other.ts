export type Color = 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'default' | 'pink';

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
  invalidateQueries?: string;
};

export type BaseSettingData = {
  name: string;
  description: string;
  disabled?: boolean;
};

export type OtherSettingData = BaseSettingData & {
  type: 'boolean' | 'input';
};

export type SettingData = ListSettingData | ButtonSettingData | OtherSettingData;
