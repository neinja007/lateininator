import { AvailableColor } from '@/app/(general)/user/settings/components/ColorPicker';
import { COLORS } from '@/constants/other';
import { useSettings } from '@/hooks/database/queries/useSettings';
import clsx from 'clsx';
import { InfoIcon, X } from 'lucide-react';
import { useState } from 'react';

type InfoProps = {
  children: React.ReactNode;
  heading?: string;
  size?: 4 | 5 | 6;
};

const Info = ({ children, heading, size = 4 }: InfoProps) => {
  const [showTutorial, setShowTutorial] = useState(false);

  const { settings } = useSettings();
  const primaryColor = settings?.PRIMARY_COLOR || 'blue';

  return (
    <>
      <button className='ml-3 text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white'>
        <InfoIcon
          className={clsx(size === 4 && 'size-4', size === 5 && 'size-5', size === 6 && 'size-6')}
          onClick={() => setShowTutorial(true)}
        />
      </button>
      {showTutorial && (
        <div className='fixed inset-0 z-50 backdrop-brightness-75' onClick={() => setShowTutorial(false)}>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div
              className={clsx(
                'relative mx-4 w-full max-w-md rounded-lg border border-neutral-200 p-4 dark:border-neutral-700',
                COLORS[primaryColor as AvailableColor].static
              )}
            >
              <div className='absolute inset-0 z-0 rounded-lg bg-inherit brightness-50'></div>

              <div className='relative z-10'>
                <div className='flex items-start justify-between'>
                  <h2 className='mb-2 line-clamp-2 text-2xl font-bold'>{heading || 'Information'}</h2>
                  <button onClick={() => setShowTutorial(false)} className='mt-1 inline-block'>
                    <X className='size-6 text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white' />
                  </button>
                </div>
                <p className='break-words text-left text-base text-gray-700 dark:text-gray-300'>{children}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Info;
