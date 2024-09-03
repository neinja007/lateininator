type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <div className='mx-auto mt-16 w-fit text-center'>{children}</div>;
};

export default Layout;
