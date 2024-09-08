import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { settings } from '@/constants/settings';
import { SettingKey } from '@prisma/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

type SettingProps = {
  setting: UserSetting;
};

const Setting = ({ setting }: SettingProps) => {
  const { settingKey, settingValue } = setting;

  const disabled = settings[settingKey].disabled;

  const queryClient = useQueryClient();

  const { variables, status, mutate } = useMutation({
    mutationFn: (value: string) => axios.patch('/api/user-settings', { settingKey, settingValue: value }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-settings'] });
    }
  });

  value = variables || value;

  const [newValue, setNewValue] = useState(value);

  const type = settings[settingKey].type;
  let element: React.ReactNode;

  switch (type) {
    case 'boolean':
      element = (
        <div className='flex items-center justify-center gap-2'>
          <Switch
            checked={value === 'true'}
            onChange={() => mutate(value === 'true' ? 'false' : 'true')}
            disabled={status === 'pending' || disabled}
            uncheckedIcon={false}
            checkedIcon={false}
          />
          <span className='text-neutral-400'>{value === 'true' ? 'Aktiviert' : 'Deaktiviert'}</span>
        </div>
      );
      break;
    case 'input':
      element = <Input value={newValue} onChange={setNewValue} disabled={status === 'pending'} />;
      break;
    case 'list':
      element = (
        <Select
          value={value}
          handleChange={(value) => mutate(value)}
          options={settings[settingKey].options || {}}
          disabled={status === 'pending'}
          disabledStyle
        />
      );
      break;
  }

  return (
    <div className='my-2 flex min-h-20 items-center justify-between rounded-lg bg-neutral-800 px-4 py-2'>
      <div className='flex-grow'>
        <span className='text-lg font-medium'>{settings[settingKey].name}</span>
        <p className='text-neutral-400'>{settings[settingKey].description}</p>
      </div>
      <div className='flex-shrink'>{element}</div>
    </div>
  );
};

export default Setting;
