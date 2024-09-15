type LayoutProps = { children: React.ReactNode };

export const metadata = {
  title: { default: 'Kollektionen', template: '%s - Lateininator' },
  description: 'Kollektionen'
};

const Layout = ({ children }: LayoutProps) => children;

export default Layout;
