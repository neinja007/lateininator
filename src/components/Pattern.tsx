'use client';
import pattern from '@/styles/pattern.module.css';

import { useSettings } from '@/hooks/database/queries/useSettings';
import clsx from 'clsx';

type PatternProps = {
  children?: React.ReactNode;
};

const Pattern = ({ children }: PatternProps) => {
  const settings = useSettings();

  const patternStyle =
    settings.settings?.BACKGROUND_PATTERN === 'false' ? undefined : settings.settings?.BACKGROUND_PATTERN;

  return <div className={clsx('min-h-screen px-4 pt-24', patternStyle && pattern[patternStyle])}>{children}</div>;
};

export default Pattern;
