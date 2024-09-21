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

  return (
    <>
      <button className='ml-3 text-gray-300 hover:text-white'>
        <InfoIcon
          className={clsx(size === 4 && 'size-4', size === 5 && 'size-5', size === 6 && 'size-6')}
          onClick={() => setShowTutorial(true)}
        />
      </button>
      {showTutorial && (
        <div className='fixed inset-0 z-50 backdrop-brightness-75' onClick={() => setShowTutorial(false)}>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='mx-4 w-full max-w-md rounded-lg border border-cyan-200 bg-cyan-50 p-4 dark:border-cyan-700 dark:bg-cyan-900'>
              <h2 className='mb-2 flex items-start justify-between text-2xl font-bold'>
                <span>{heading || 'Information'}</span>{' '}
                <button onClick={() => setShowTutorial(false)}>
                  <X className='mt-2 size-6 text-gray-300 hover:text-white' />
                </button>
              </h2>
              <p className='break-words text-left text-base text-gray-300'>{children}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Info;
