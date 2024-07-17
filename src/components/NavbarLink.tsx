'use client';

import Link from 'next/link';
import navbar from '@/styles/navbar.module.css';
import clsx from 'clsx';

type NavbarLinkProps = {
  label: string;
  href: string;
  active: boolean;
};

const NavbarLink = ({ label, href, active }: NavbarLinkProps) => {
  return (
    <Link className={clsx(navbar.navlink, active ? navbar.active : navbar.inactive)} href={href}>
      {label}
    </Link>
  );
};

export default NavbarLink;
