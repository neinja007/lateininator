export type Color = 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'default' | 'pink';

export type Stage = 'settings' | 'test' | 'review' | 'results';

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

export type SettingData = {
  type: 'boolean' | 'list' | 'input';
  options?: { [key: string]: string };
  name: string;
  description: string;
  disabled?: boolean;
};
