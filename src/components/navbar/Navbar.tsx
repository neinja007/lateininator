'use client';

import { useEffect, useState } from 'react';
import NavbarLink from '@/components/navbar/NavbarLink';
import Logo from '@/components/navbar/Logo';
import NavbarDropdown from '@/components/navbar/NavbarDropdown';
import { usePathname } from 'next/navigation';
import NavbarDropdownLink from './NavbarDropdownLink';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Menu, X } from 'react-feather';

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
			{ label: 'Nomen', href: '/noun' },
			{ label: 'Verben', href: '/verb' },
			{ label: 'Adjektive', href: '/adjective' }
		]
	},
	{ label: 'Grammatik', href: '/grammar' },
	{ label: 'Kompetenz', href: '/competence' }
];

const Navbar = () => {
	const [open, setOpen] = useState('');
	const pathname = usePathname();
	const pathnameSegments = pathname.split('/').map((segment) => '/' + segment);
	const [mobileLinksOpen, setMobileLinksOpen] = useState(false);

	useEffect(() => {
		setOpen('');
	}, [pathname]);

	return (
		<div className='fixed inset-0 w-full h-16 inline-flex bg-gray-100'>
			<Logo />
			<div className='w-full justify-end xl:justify-center gap-x-2 hidden lg:flex mr-4'>
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
			<div className='w-full my-auto block lg:hidden'>
				<Menu className='h-9 w-11 mr-4 cursor-pointer float-end' onClick={() => setMobileLinksOpen(true)} />
			</div>
			<div className='fixed inset-16 h-fit z-20 rounded-lg bg-white shadow-xl' hidden={!mobileLinksOpen}>
				<div className='h-12 flex'>
					<div className='my-auto w-full'>
						<span className='pl-4 text-xl font-medium'>Navigation</span>
						<X className='h-7 w-9 mr-4 cursor-pointer float-end' onClick={() => setMobileLinksOpen(false)} />
					</div>
				</div>
				<hr />
				{links.map((link, i) => {
					if (link.children) {
						return (
							<NavbarDropdown
								key={i}
								label={link.label}
								open={open}
								handleOpen={setOpen}
								active={pathnameSegments[1] === link.href}
								mobile
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
							<NavbarDropdownLink
								key={i}
								label={link.label}
								href={link.href}
								active={pathnameSegments[1] === link.href}
							/>
						);
					}
				})}
			</div>
			<div
				className='z-10 fixed inset-0 h-full w-full bg-black opacity-10'
				onClick={() => setMobileLinksOpen(false)}
				hidden={!mobileLinksOpen}
			/>
		</div>
	);
};

export default Navbar;
