'use client';

import Link from 'next/link';
import React from 'react';

type NavbarDropdownLinkProps = {
	label: string;
	href: string;
	active: boolean;
};

function NavbarDropdownLink({ label, href, active }: NavbarDropdownLinkProps) {
	return (
		<Link
			className={`p-2 px-4 my-auto text-inherit font-semibold last:border-b-white border-b rounded-none block bg-white first:rounded-t-md last:rounded-b-md ${
				active ? 'bg-gray-200' : 'hover:bg-gray-100'
			}`}
			href={href}
		>
			{label}
		</Link>
	);
}

export default NavbarDropdownLink;
