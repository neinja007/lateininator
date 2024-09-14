type LayoutProps = { children: React.ReactNode };

export const metadata = {
  title: { default: 'Endungstrainer', template: 'Endungstrainer %s - Lateininator' },
  description: 'Endungstrainer'
};

const Layout = ({ children }: LayoutProps) => children;

export default Layout;
