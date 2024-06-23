type MainLayoutProps = {
	children: React.ReactNode;
};

function AuthLayout({ children }: MainLayoutProps) {
	return <div className='w-fit mx-auto mt-7'>{children}</div>;
}

export default AuthLayout;
