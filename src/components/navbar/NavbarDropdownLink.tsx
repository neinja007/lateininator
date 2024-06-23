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
			className={`p-2 px-4 my-auto font-semibold border-b last:border-b-0 block ${
				active ? 'text-blue-700' : 'text-gray-600'
			}`}
			href={href}
		>
			{label}
		</Link>
	);
}

export default NavbarDropdownLink;
