import React from 'react';

type MainLayoutProps = {
	children: React.ReactNode;
};

function AuthLayout({ children }: MainLayoutProps) {
	return (
		<div>
			<div className='w-full sm:w-[640px] container'>{children}</div>
		</div>
	);
}

export default AuthLayout;
