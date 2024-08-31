'use client';

import Link from 'next/link';
import navbar from '@/styles/navbar.module.css';
import clsx from 'clsx';
import { Route } from '@/constants/routes';

type NavbarLinkProps = {
  route: Route;
  active: boolean;
  dropdown?: boolean;
};

const NavbarLink = ({ dropdown, route, active }: NavbarLinkProps) => {
  return (
    <Link
      className={clsx(
        route.label === 'Premium' && 'text-pink-600 hover:text-pink-500 dark:text-pink-400',
        dropdown ? navbar.dropdown_navlink : navbar.navlink,
        route.label !== 'Premium' && (active ? navbar.active : navbar.inactive)
      )}
      href={route.href}
    >
      <route.icon className='w-5' /> {route.label}
    </Link>
  );
};

export default NavbarLink;
