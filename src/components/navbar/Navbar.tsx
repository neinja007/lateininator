'use client';

import React, { useEffect, useState } from 'react';
import NavbarLink from '@/components/navbar/NavbarLink';
import Logo from '@/components/navbar/Logo';
import NavbarDropdown from '@/components/navbar/NavbarDropdown';
import { usePathname } from 'next/navigation';
import NavbarDropdownLink from './NavbarDropdownLink';

type Link = {
	label: string;
	href: string;
};

type Dropdown = {
	label: string;
	href: string;
	children: Array<Link>;
};

const links: Array<Link | Dropdown> = [
	{ label: 'Übersicht', href: '/' },
	{
		label: 'Vokabular',
		href: '/vocabulary'
	},
	{
		label: 'Flexion',
		href: '/flexion',
		children: [
			{ label: 'Deklination', href: '/declension' },
			{ label: 'Konjugation', href: '/conjugation' },
			{ label: 'Komparation', href: '/comparation' }
		]
	},
	{ label: 'Grammatik', href: '/grammar' },
	{
		label: 'Tools',
		href: '/tools',
		children: [
			{ label: 'Wörterbuch', href: '/dictionary' },
			{ label: 'Formengenerator', href: '/generator' }
		]
	},
	{ label: 'Kompetenz', href: '/competence' }
];

function Navbar() {
	const [open, setOpen] = useState('');
	const pathname = usePathname();
	const segment = '/' + pathname.split('/')[1];
	useEffect(() => {
		setOpen('');
	}, [pathname]);

	return (
		<div className='w-full h-16 inline-flex border-b'>
			<Logo />
			<div className='flex w-full justify-center gap-x-3'>
				{links.map((link, i) => {
					if (link.hasOwnProperty('children')) {
						return (
							<NavbarDropdown
								key={i}
								label={link.label}
								open={open}
								handleOpen={setOpen}
								active={segment === link.href}
							>
								{(link as Dropdown).children.map((child, i) => {
									return (
										<NavbarDropdownLink
											key={i}
											label={child.label}
											href={link.href + child.href}
											active={segment === link.href + child.href}
										/>
									);
								})}
							</NavbarDropdown>
						);
					} else {
						return <NavbarLink key={i} label={link.label} href={link.href} active={segment === link.href} />;
					}
				})}
			</div>
		</div>
	);
}

export default Navbar;
