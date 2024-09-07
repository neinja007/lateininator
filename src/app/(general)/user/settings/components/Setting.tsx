import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { settings } from '@/constants/settings';
import { SettingKey } from '@prisma/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

type SettingProps = {
  settingKey: SettingKey;
  value: string;
};

const Setting = ({ settingKey, value }: SettingProps) => {
  const queryClient = useQueryClient();

  const { status, mutate } = useMutation({
    mutationFn: (value: string) => axios.patch('/api/user-settings', { settingKey, settingValue: value }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-settings'] });
    }
  });

  const [newValue, setNewValue] = useState(value);

  const type = settings[settingKey].type;
  let element: React.ReactNode;

  switch (type) {
    case 'boolean':
      element = (
        <>
          <span className='text-neutral-400'>{value === 'true' ? 'Aktiviert' : 'Deaktiviert'}</span>
          <Button
            disabled={status === 'pending'}
            className='ml-3'
            color={value === 'true' ? 'red' : 'green'}
            onClick={() => mutate(value === 'true' ? 'false' : 'true')}
          >
            {value === 'true' ? 'Deaktivieren' : 'Aktivieren'}
          </Button>
        </>
      );
      break;
    case 'input':
      element = <Input value={newValue} onChange={setNewValue} disabled={status === 'pending'} />;
      break;
    case 'list':
      element = (
        <Select
          value={newValue}
          handleChange={() => mutate(newValue)}
          options={settings[settingKey].list || []}
          disabled={status === 'pending'}
        />
      );
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
