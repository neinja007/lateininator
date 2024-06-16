'use client';

import Link from 'next/link';

type NavbarLinkProps = {
	label: string;
	href: string;
	active: boolean;
};

function NavbarLink({ label, href, active }: NavbarLinkProps) {
	return (
		<Link className={`navlink ${active ? 'bg-gray-200' : 'hover:bg-gray-100'}`} href={href}>
			{label}
		</Link>
	);
}

export default NavbarLink;
