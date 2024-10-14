'use client';
import { Dispatch, SetStateAction } from 'react';
import navbar from '@/styles/navbar.module.css';
import clsx from 'clsx';
import { ChevronUp } from 'lucide-react';
import { Route } from '@/constants/routes';
import { COLORS } from '@/constants/other';
import { usePrimaryColor } from '@/hooks/database/queries/usePrimaryColor';

type NavbarDropdownProps = {
  route: Route;
  children: React.ReactNode;
  open: string;
  handleOpen: Dispatch<SetStateAction<string>>;
  active: boolean;
};

const NavbarDropdown = ({ route, children, open, handleOpen, active }: NavbarDropdownProps) => {
  const primaryColor = usePrimaryColor();

  return (
    <div className='flex justify-start xl:justify-center'>
      <div
        className={clsx(navbar.navlink, active ? COLORS[primaryColor].text : navbar.inactive)}
        onClick={() => handleOpen((prevOpen) => (prevOpen === route.label ? '' : route.label))}
      >
        <route.icon className='w-5' /> <span className='max-w-40 truncate'>{route.label}</span>
        <ChevronUp
          size={20}
          className={clsx(
            'ml-0 inline align-text-top transition-transform',
            open !== route.label ? '-rotate-180' : 'rotate-0'
          )}
        />
      </div>
      {open === route.label && (
        <>
          <div onClick={() => handleOpen('')} className='fixed inset-0 z-50 h-full w-full' />
          <div className='absolute z-50 translate-y-9 rounded-lg border bg-white text-center xl:translate-y-12 dark:border-gray-500 dark:bg-gray-900'>
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default NavbarDropdown;
