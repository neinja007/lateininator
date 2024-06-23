'use client';

import Link from 'next/link';

type NavbarDropdownLinkProps = {
	label: string;
	href: string;
	active: boolean;
};

function NavbarDropdownLink({ label, href, active }: NavbarDropdownLinkProps) {
	return (
		<Link
			className={`p-2 px-4 my-auto text-inherit font-semibold border-b last:border-b-none block ${
				active ? 'bg-gray-200 text-theme' : 'hover:bg-gray-100'
			}`}
			href={href}
		>
			{label}
		</Link>
	);
}

export default NavbarDropdownLink;
