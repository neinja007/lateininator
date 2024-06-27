import '@/app/globals.css';

type MainLayoutProps = {
	children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
	return (
		<div>
			<div className='container max-w-[1024px] mx-auto mt-7 mb-16 *:space-y-5'>{children}</div>
		</div>
	);
}

export default MainLayout;
