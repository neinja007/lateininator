import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { settings } from '@/constants/settings';
import { useUpdateSettings } from '@/hooks/database/mutations/useUpdateSettings';
import { AllSettingKey, ButtonSettingData, PrimaryColor } from '@/types/other';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import Switch from 'react-switch';
import ColorPicker from './ColorPicker';
import { Check } from 'lucide-react';
import { useChangeUsername } from '@/hooks/database/mutations/useChangeUsername';
import { useUser } from '@clerk/nextjs';
type SettingProps = {
  settingKey: AllSettingKey;
  settingValue: string | undefined;
};

const Setting = ({ settingKey, settingValue }: SettingProps) => {
  const queryClient = useQueryClient();

  const disabled = settings[settingKey].disabled;

  const { variables, status, mutate } = useUpdateSettings();
  const { mutate: mutateUsername, status: statusUsername } = useChangeUsername();
  const user = useUser();

  const value = settingKey === 'NAME_CHANGE' ? user?.user?.fullName || '' : variables?.settingValue || settingValue;

  const [newValue, setNewValue] = useState(value || '');

  const type = settings[settingKey].type;
  let element: React.ReactNode;

  const invalidateQueries = () => {
    const queryKey = (settings[settingKey] as ButtonSettingData).invalidateQueries;
    if (queryKey) {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey.includes(queryKey)
      });
    }
  };

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
      element = (
        <div className='flex items-end gap-x-3'>
          <Input value={newValue} onChange={setNewValue} disabled={status === 'pending' || disabled} />
          <Button
            color='green'
            onClick={
              settingKey === 'NAME_CHANGE'
                ? () => mutateUsername(newValue)
                : () => mutate({ settingKey, settingValue: newValue || '' })
            }
            disabled={status === 'pending' || disabled}
          >
            <Check className='size-5' />
          </Button>
        </div>
      );
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
    case 'button':
      element = (
        <Button
          color={settings[settingKey].color}
          onClick={async () => {
            await (settings[settingKey] as ButtonSettingData).onClick();
            invalidateQueries();
          }}
          disabled={status === 'pending' || disabled}
        >
          {settings[settingKey].buttonText}
        </Button>
      );
      break;
    case 'color':
      element = (
        <ColorPicker
          value={value as PrimaryColor}
          onChange={(value) => mutate({ settingKey: 'PRIMARY_COLOR', settingValue: value })}
          disabled={status === 'pending' || !!disabled}
        />
      );
      break;
  }

  return (
    <div className='my-2 items-center justify-between px-4 py-4 sm:flex sm:h-20 dark:border-gray-700'>
      <div className='flex-grow'>
        <span className='text-lg font-medium'>
          {settings[settingKey].name} {disabled && <span className='text-red-400'>(noch nicht verfügbar)</span>}
        </span>
        <p className='text-neutral-400'>{settings[settingKey].description}</p>
      </div>
      <div className='mt-4 flex-shrink sm:mt-0'>{element}</div>
    </div>
  );
};

export default Setting;
