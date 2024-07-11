type MainLayoutProps = {
	children: React.ReactNode;
};

const AuthLayout = ({ children }: MainLayoutProps) => {
	return <div className='w-fit mx-auto pb-16 mt-16'>{children}</div>;
};

export default AuthLayout;
