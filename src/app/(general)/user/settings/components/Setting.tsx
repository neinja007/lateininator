type SettingProps = {
  settingKey: string;
  value: string;
};

const Setting = ({ settingKey, value }: SettingProps) => {
  return (
    <div className='flex items-center justify-between'>
      <div>{settingKey}</div>
      <div>{value}</div>
    </div>
  );
};

export default Setting;
