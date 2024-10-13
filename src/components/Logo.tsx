'use client';

import Link from 'next/link';
import LogoSVG from '../../public/logo_1000x.svg';
import clsx from 'clsx';
import { COLORS } from '@/constants/other';
import { usePrimaryColor } from '@/hooks/database/queries/usePrimaryColor';

const Logo = () => {
  const primaryColor = usePrimaryColor();

  return (
    <Link
      href={'/'}
      className='absolute start-1 top-1 h-[56px] w-[245px] overflow-hidden rounded-md focus:outline focus:outline-blue-500'
    >
      <LogoSVG
        className={clsx('h-full w-full', COLORS[primaryColor].text)}
        style={{
          transform: 'scale(0.245)',
          transformOrigin: 'top left',
          overflow: 'visible'
        }}
      />
    </Link>
  );
};

export default Logo;
