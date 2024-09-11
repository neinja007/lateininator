type LayoutProps = { children: React.ReactNode };

export const metadata = {
  title: { default: 'Flexionstrainer', template: 'Flexionstrainer %s - Lateininator' },
  description: 'Flexionstrainer'
};

const Layout = ({ children }: LayoutProps) => children;

export default Layout;
