'use client';

import { Dispatch, SetStateAction } from 'react';
import { ChevronUp } from 'react-feather';

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
				className={`font-semibold mx-2 ${
					active ? 'text-blue-700' : 'text-gray-600 hover:text-gray-800'
				} cursor-pointer`}
				onClick={() => handleOpen((prevOpen) => (prevOpen === label ? '' : label))}
			>
				{label}
				<ChevronUp
					size={20}
					className={`inline ml-0.5 transition-transform align-text-top text-black ${
						open !== label ? '-rotate-180' : 'rotate-0'
					}`}
				/>
			</div>
			{open === label && (
				<>
					<div onClick={() => handleOpen('')} className='z-40 fixed inset-0 w-full h-full'></div>
					<div className='absolute z-50 text-center translate-y-8 rounded-lg border shadow bg-white'>{children}</div>
				</>
			)}
		</div>
	);
}

export default NavbarDropdown;
