import React from 'react';

type MainLayoutProps = {
	children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
	return (
		<div>
			<div className='w-full lg:w-[1024px] mx-auto mt-7 px-4 p-3 rounded-md border'>{children}</div>
		</div>
	);
}

export default MainLayout;
