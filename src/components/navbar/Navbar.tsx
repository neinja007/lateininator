'use client';

import { useEffect, useState } from 'react';
import NavbarLink from '@/components/navbar/NavbarLink';
import Logo from '@/components/navbar/Logo';
import NavbarDropdown from '@/components/navbar/NavbarDropdown';
import { usePathname } from 'next/navigation';
import NavbarDropdownLink from './NavbarDropdownLink';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

type Link = {
	label: string;
	href: string;
	children?: never;
};

type Dropdown = {
	label: string;
	href: string;
	children: Array<Link>;
};

const links: Array<Link | Dropdown> = [
	{ label: 'Übersicht', href: '/dashboard' },
	{
		label: 'Vokabular',
		href: '/vocabulary',
		children: [
			{
				label: 'Trainer',
				href: '/trainer'
			},
			{ label: 'Wörterbuch', href: '/dictionary' }
		]
	},
	{
		label: 'Flexion',
		href: '/flexion',
		children: [
			{ label: 'Deklination', href: '/noun' },
			{ label: 'Konjugation', href: '/verb' },
			{ label: 'Komparation', href: '/adjective' }
		]
	},
	{ label: 'Grammatik', href: '/grammar' },
	{ label: 'Kompetenz', href: '/competence' }
];

function Navbar() {
	const [open, setOpen] = useState('');
	const pathname = usePathname();
	const pathnameSegments = pathname.split('/').map((segment) => '/' + segment);

	useEffect(() => {
		setOpen('');
	}, [pathname]);

	return (
		<div className='w-full h-16 inline-flex bg-gray-100'>
			<Logo />
			<div className='flex w-full justify-center gap-x-2'>
				{links.map((link, i) => {
					if (link.children) {
						return (
							<NavbarDropdown
								key={i}
								label={link.label}
								open={open}
								handleOpen={setOpen}
								active={pathnameSegments[1] === link.href}
							>
								{(link as Dropdown).children.map((child, i) => {
									return (
										<NavbarDropdownLink
											key={i}
											label={child.label}
											href={link.href + child.href}
											active={pathnameSegments[2] === child.href}
										/>
									);
								})}
							</NavbarDropdown>
						);
					} else {
						return (
							<NavbarLink key={i} label={link.label} href={link.href} active={pathnameSegments[1] === link.href} />
						);
					}
				})}
				<SignedIn>
					<UserButton showName />
				</SignedIn>
				<SignedOut>
					<NavbarLink label='Anmelden' href='/sign-in' active={pathnameSegments[1] === '/sign-in'} />
				</SignedOut>
			</div>
		</div>
	);
}

export default Navbar;
