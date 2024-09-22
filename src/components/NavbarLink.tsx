'use client';

import Link from 'next/link';
import navbar from '@/styles/navbar.module.css';
import clsx from 'clsx';
import { Route } from '@/constants/routes';
import { useSettings } from '@/hooks/database/queries/useSettings';
import { AvailableColor } from '@/app/(general)/user/settings/components/ColorPicker';
import { COLORS } from '@/constants/other';

type NavbarLinkProps = {
  route: Route;
  active: boolean;
  dropdown?: boolean;
};

const NavbarLink = ({ dropdown, route, active }: NavbarLinkProps) => {
  const { settings } = useSettings();
  const primaryColor = settings?.PRIMARY_COLOR || 'blue';

  return (
    <Link
      className={clsx(
        route.label === 'Premium' && 'text-pink-600 hover:text-pink-500 dark:text-pink-400',
        dropdown ? navbar.dropdown_navlink : navbar.navlink,
        route.label !== 'Premium' && (active ? COLORS[primaryColor as AvailableColor].text : navbar.inactive)
      )}
      href={route.href}
    >
      <route.icon className='w-5' /> {route.label}
    </Link>
  );
};

export default NavbarLink;
