'use client';

import Link from 'next/link';

type NavbarDropdownLinkProps = {
	label: string;
	href: string;
	active: boolean;
};

const NavbarDropdownLink = ({ label, href, active }: NavbarDropdownLinkProps) => {
	return (
		<Link
			className={`p-2 px-4 font-semibold border-b last:border-b-0 block ${
				active ? 'text-blue-700' : 'text-gray-600 hover:text-gray-800'
			}`}
			href={href}
		>
			{label}
		</Link>
	);
};

export default NavbarDropdownLink;
