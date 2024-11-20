'use client';

import patternClasses from '@/styles/pattern.module.css';

import { useSettings } from '@/hooks/database/queries/useSettings';
import clsx from 'clsx';
import { fullPatterns } from '@/constants/other';
import { Pattern as PatternType } from '@/types/other';

type PatternProps = {
  children?: React.ReactNode;
};

const Pattern = ({ children }: PatternProps) => {
  const settings = useSettings();

  const pattern = settings.settings?.BACKGROUND_PATTERN as PatternType;

  const patternStyle = pattern === 'false' ? undefined : pattern;

  return (
    <div className={clsx('min-h-screen bg-fixed px-4 pt-24', patternStyle && patternClasses[patternStyle])}>
      <div className='container mx-auto max-w-[1024px] pb-16'>
        <div className={clsx('rounded-lg', fullPatterns.includes(pattern) ? undefined : 'bg-white dark:bg-black')}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Pattern;
