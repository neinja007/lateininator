import React from 'react';
import '@/app/globals.css';

type MainLayoutProps = {
	children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
	return (
		<div>
			<div className='container mx-auto mt-7 px-4 p-3 rounded-md border *:space-y-4'>{children}</div>
		</div>
	);
}

export default MainLayout;
