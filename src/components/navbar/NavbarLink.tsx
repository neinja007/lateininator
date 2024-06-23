'use client';

import Link from 'next/link';

type NavbarLinkProps = {
	label: string;
	href: string;
	active: boolean;
};

function NavbarLink({ label, href, active }: NavbarLinkProps) {
	return (
		<Link
			className={`p-2 px-4 my-auto font-semibold text-inherit border ${
				active ? 'bg-gray-200 text-theme' : 'hover:bg-gray-100'
			}`}
			href={href}
		>
			{label}
		</Link>
	);
}

export default NavbarLink;
