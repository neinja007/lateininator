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
			className={`my-auto mx-2 font-semibold ${active ? 'text-blue-700' : 'text-gray-600 hover:text-gray-800'}`}
			href={href}
		>
			{label}
		</Link>
	);
}

export default NavbarLink;
