'use client';

import React, { SetStateAction } from 'react';

type NavbarDropdownProps = {
	label: string;
	children: React.ReactNode;
	open: string;
	handleOpen: (arg: SetStateAction<string>) => void;
	active: boolean;
};

function NavbarDropdown({ label, children, open, handleOpen, active }: NavbarDropdownProps) {
	return (
		<div className='flex justify-center my-auto'>
			<button
				className={`navlink ${active ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
				onClick={() => handleOpen((prevOpen: string) => (prevOpen === label ? '' : label))}
			>
				{label}
				<svg
					className={`inline ml-1 align-top transition-transform ${open !== label ? '-rotate-180' : 'rotate-0'}`}
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					strokeWidth='2'
					xmlns='http://www.w3.org/2000/svg'
				>
					<polyline points='6 15 12 9 18 15' fill='none' stroke='black' strokeWidth='2' />
				</svg>
			</button>
			<div hidden={open !== label} className='absolute mt-2 shadow rounded-lg text-center translate-y-10 border'>
				{children}
			</div>
		</div>
	);
}

export default NavbarDropdown;
