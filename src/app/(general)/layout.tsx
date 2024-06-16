import React from 'react';

type MainLayoutProps = {
	children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
	return (
		<div>
			<div className='w-full lg:w-[1024px] container'>{children}</div>
		</div>
	);
}

export default MainLayout;
