'use client';

import Link from 'next/link';
import navbar from '@/styles/navbar.module.css';
import clsx from 'clsx';

type NavbarDropdownLinkProps = {
	label: string;
	href: string;
	active: boolean;
};

const NavbarDropdownLink = ({ label, href, active }: NavbarDropdownLinkProps) => {
	return (
		<Link className={clsx(navbar.dropdown_navlink, active ? navbar.active : navbar.inactive)} href={href}>
			{label}
		</Link>
	);
};

export default NavbarDropdownLink;
