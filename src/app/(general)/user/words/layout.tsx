type LayoutProps = { children: React.ReactNode };

export const metadata = {
  title: { default: 'Wörter verwalten', template: '%s - Lateininator' },
  description: 'Wörter verwalten'
};

const Layout = ({ children }: LayoutProps) => children;

export default Layout;
