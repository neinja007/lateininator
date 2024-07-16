'use client';

import { Dispatch, SetStateAction } from 'react';
import { ChevronUp } from 'react-feather';
import navbar from '@/styles/navbar.module.css';
import clsx from 'clsx';

type NavbarDropdownProps = {
	label: string;
	children: React.ReactNode;
	open: string;
	handleOpen: Dispatch<SetStateAction<string>>;
	active: boolean;
	mobile?: boolean;
};

const NavbarDropdown = ({ label, children, open, handleOpen, active, mobile }: NavbarDropdownProps) => {
	return (
		<div className={mobile ? 'border-b last:border-b-0 border-gray-500 p-2' : 'flex justify-center my-auto'}>
			<div
				className={clsx(navbar.navlink, active ? navbar.active : navbar.inactive)}
				onClick={() => handleOpen((prevOpen) => (prevOpen === label ? '' : label))}
			>
				{label}
				<ChevronUp
					size={20}
					className={clsx(
						'inline ml-0.5 transition-transform align-text-top text-gray-600 dark:text-gray-400',
						open !== label ? '-rotate-180' : 'rotate-0'
					)}
				/>
			</div>
			{open === label && (
				<>
					<div onClick={() => handleOpen('')} className='z-50 fixed inset-0 w-full h-full' />
					<div
						className={clsx(
							'absolute z-[50] text-center rounded-lg border dark:border-gray-500 shadow bg-white dark:bg-gray-900',
							mobile ? 'translate-x-2' : 'translate-y-8'
						)}
					>
						{children}
					</div>
				</>
			)}
		</div>
	);
};

export default NavbarDropdown;
