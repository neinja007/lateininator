import { DefaultSetting } from '@prisma/client';

type SettingProps = {
  setting: DefaultSetting;
};

const Setting = ({ setting }: SettingProps) => {
  return (
    <div className='flex items-center justify-between'>
      <div>{setting.settingKey}</div>
      <div>{setting.defaultValue}</div>
    </div>
  );
};

export default Setting;
