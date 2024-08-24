'use client';

import Link from 'next/link';
import navbar from '@/styles/navbar.module.css';
import clsx from 'clsx';
import { Route } from '@/data/routes';

type NavbarLinkProps = {
  route: Route;
  active: boolean;
  dropdown?: boolean;
};

const NavbarLink = ({ dropdown, route, active }: NavbarLinkProps) => {
  return (
    <Link
      className={clsx(
        dropdown ? navbar.dropdown_navlink : navbar.navlink,
        active ? navbar.active : navbar.inactive,
        route.label === 'Premium' && 'text-pink-600 dark:text-pink-400'
      )}
      href={route.href}
    >
      <route.icon className='w-5' /> {route.label}
    </Link>
  );
};

export default NavbarLink;
