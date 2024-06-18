import React from 'react';

type MainLayoutProps = {
	children: React.ReactNode;
};

function AuthLayout({ children }: MainLayoutProps) {
	return (
		<div>
			<div className='w-fit mx-auto mt-7 reset-styles'>{children}</div>
		</div>
	);
}

export default AuthLayout;
