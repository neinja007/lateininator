import '@/app/globals.css';

type MainLayoutProps = {
	children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div>
			<div className='container max-w-[1024px] mx-auto pb-16'>{children}</div>
		</div>
	);
};

export default MainLayout;
