'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { COLORS } from '@/constants/other';
import { usePrimaryColor } from '@/hooks/database/queries/usePrimaryColor';
import LogoSVG from './LogoSVG';

export const Logo = () => {
  const primaryColor = usePrimaryColor();

  return (
    <Link
      href={'/'}
      className='absolute start-1 top-1 h-[56px] w-[245px] overflow-hidden rounded-md focus:outline focus:outline-blue-500'
    >
      <LogoSVG
        style={{ width: '200%', height: '200%' }}
        className={clsx('h-full w-full object-contain', COLORS[primaryColor].text)}
      />
    </Link>
  );
};
