import Input from '@/components/Input';
import Select from '@/components/Select';
import { settings } from '@/constants/settings';
import { useUpdateSettings } from '@/hooks/database/mutations/useUpdateSettings';
import { SettingKey } from '@prisma/client';
import clsx from 'clsx';
import { useState } from 'react';
import Switch from 'react-switch';

type SettingProps = {
  settingKey: SettingKey;
  settingValue: string;
};

const Setting = ({ settingKey, settingValue }: SettingProps) => {
  const disabled = settings[settingKey].disabled;

  const { variables, status, mutate } = useUpdateSettings();

  const value = variables?.settingValue || settingValue;

  const [newValue, setNewValue] = useState(value);

  const type = settings[settingKey].type;
  let element: React.ReactNode;

  switch (type) {
    case 'boolean':
      element = (
        <div className='flex items-center justify-center gap-2'>
          <Switch
            checked={value === 'true'}
            onChange={() => mutate({ settingKey, settingValue: value === 'true' ? 'false' : 'true' })}
            disabled={status === 'pending' || disabled}
            uncheckedIcon={false}
            checkedIcon={false}
            offColor='#aa0000'
            onColor='#008800'
          />
          <span className='w-20 text-center text-neutral-400'>{value === 'true' ? 'Aktiviert' : 'Deaktiviert'}</span>
        </div>
      );
      break;
    case 'input':
      element = <Input value={newValue} onChange={setNewValue} disabled={status === 'pending' || disabled} />;
      break;
    case 'list':
      element = (
        <Select
          value={value}
          handleChange={(value) => mutate(value)}
          options={settings[settingKey].options || {}}
          disabled={status === 'pending' || disabled}
          disabledStyle
        />
      );
      break;
  }

  return (
    <div
      className={clsx(
        'my-2 min-h-20 items-center justify-between rounded-lg bg-neutral-800 px-4 py-2 sm:flex',
        disabled && 'opacity-50'
      )}
    >
      <div className='flex-grow'>
        <span className='text-lg font-medium'>{settings[settingKey].name}</span>
        <p className='text-neutral-400'>{settings[settingKey].description}</p>
      </div>
      <div className='mt-4 flex-shrink text-center sm:mt-0'>{element}</div>
    </div>
  );
};

export default Setting;
