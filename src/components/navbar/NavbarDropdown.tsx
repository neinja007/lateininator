'use client';

import { Dispatch, SetStateAction } from 'react';

type NavbarDropdownProps = {
	label: string;
	children: React.ReactNode;
	open: string;
	handleOpen: Dispatch<SetStateAction<string>>;
	active: boolean;
};

function NavbarDropdown({ label, children, open, handleOpen, active }: NavbarDropdownProps) {
	return (
		<div className='flex justify-center my-auto'>
			<div
				className={`p-2 px-4 rounded-md my-auto font-semibold text-inherit border ${
					active ? 'bg-gray-200' : 'hover:bg-gray-100'
				} cursor-pointer selection:bg-inherit`}
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
			</div>
			<div hidden={open !== label} className='absolute z-50 mt-2 rounded-md text-center translate-y-10 border'>
				{children}
			</div>
		</div>
	);
}

export default NavbarDropdown;
