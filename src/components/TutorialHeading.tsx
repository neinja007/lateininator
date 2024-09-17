'use client';

import clsx from 'clsx';
import { CircleX, Info } from 'lucide-react';
import { useState } from 'react';
import Tutorial from './Tutorial';

type TutorialHeadingProps = {
  children: React.ReactNode;
  className?: React.CSSProperties;
  heading: string;
} & React.ComponentProps<'h1'>;

const TutorialHeading = ({ children, className, heading, ...props }: TutorialHeadingProps) => {
  const [showTutorial, setShowTutorial] = useState(false);

  return (
    <h1 {...props} className={clsx('mb-5', className)}>
      <div className='mb-5 flex items-center justify-center text-3xl'>
        <span className='font-bold text-blue-500'>{heading}</span>
        <button onClick={() => setShowTutorial(!showTutorial)}>
          {showTutorial ? (
            <CircleX className='ml-2 size-6 text-orange-500 hover:text-orange-600' />
          ) : (
            <Info className='ml-2 size-6 hover:text-sky-500' />
          )}
        </button>
      </div>
      {showTutorial && <Tutorial>{children}</Tutorial>}
    </h1>
  );
};

export default TutorialHeading;
