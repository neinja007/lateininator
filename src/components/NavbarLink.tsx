'use client';

import Link from 'next/link';
import navbar from '@/styles/navbar.module.css';
import clsx from 'clsx';

type NavbarLinkProps = {
  label: string;
  href: string;
  active: boolean;
  dropdown?: boolean;
};

const NavbarLink = ({ dropdown, route, active }: NavbarLinkProps) => {
  return (
      className={clsx(dropdown ? navbar.dropdown_navlink : navbar.navlink, active ? navbar.active : navbar.inactive)}
    </Link>
  );
};

export default NavbarLink;
