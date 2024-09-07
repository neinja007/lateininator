import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { settings } from '@/constants/settings';
import { SettingKey } from '@prisma/client';

type SettingProps = {
  settingKey: SettingKey;
  value: string;
};

const Setting = ({ settingKey, value }: SettingProps) => {
  const type = settings[settingKey].type;
  let element: React.ReactNode;

  switch (type) {
    case 'boolean':
      element = (
        <>
          <span className='text-neutral-400'>{value === 'true' ? 'Aktiviert' : 'Deaktiviert'}</span>
          <Button className='ml-3' color={value === 'true' ? 'red' : 'green'} onClick={() => {}}>
            {value === 'true' ? 'Deaktivieren' : 'Aktivieren'}
          </Button>
        </>
      );
      break;
    case 'input':
      element = <Input value={value} />;
      break;
    case 'list':
      element = <Select value={value} handleChange={() => {}} options={settings[settingKey].list || []} />;
      break;
  }

  return (
    <div className='my-2 flex items-center justify-between rounded-lg bg-neutral-800 p-2 px-4'>
      <div className='flex-grow'>
        <span className='text-lg font-medium'>{settings[settingKey].name}</span>
        <p className='text-neutral-400'>{settings[settingKey].description}</p>
      </div>
      <div className='flex-shrink'>{element}</div>
    </div>
  );
};

export default Setting;
