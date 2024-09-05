type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <div className='mx-auto w-fit text-center md:mt-16'>{children}</div>;
};

export default Layout;
