type MainLayoutProps = {
	children: React.ReactNode;
};

const AuthLayout = ({ children }: MainLayoutProps) => {
	return <div className='w-fit mx-auto mt-7 mb-16'>{children}</div>;
};

export default AuthLayout;
