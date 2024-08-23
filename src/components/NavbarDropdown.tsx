'use client';

import { Dispatch, SetStateAction } from 'react';
import navbar from '@/styles/navbar.module.css';
import clsx from 'clsx';
import { ChevronUp } from 'lucide-react';
import { Route } from '@/data/routes';

type NavbarDropdownProps = {
  route: Route;
  children: React.ReactNode;
  open: string;
  handleOpen: Dispatch<SetStateAction<string>>;
  active: boolean;
  mobile?: boolean;
};

const NavbarDropdown = ({ route, children, open, handleOpen, active, mobile }: NavbarDropdownProps) => {
  return (
    <div className={mobile ? 'border-b p-2 last:border-b-0 dark:border-gray-500' : 'my-auto flex justify-center'}>
      <div
        className={clsx(navbar.navlink, active ? navbar.active : navbar.inactive)}
        onClick={() => handleOpen((prevOpen) => (prevOpen === route.label ? '' : route.label))}
      >
        <route.icon className='w-5' /> {route.label}
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
          <div
            className={clsx(
              'absolute z-[50] rounded-lg border bg-white text-center shadow dark:border-gray-500 dark:bg-gray-900 dark:shadow-gray-500',
              mobile ? 'translate-x-2' : 'translate-y-8'
            )}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default NavbarDropdown;
