type MainLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: MainLayoutProps) => {
  return <div className='mx-auto mt-16 w-fit pb-16'>{children}</div>;
};

export default AuthLayout;
