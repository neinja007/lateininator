type LayoutProps = { children: React.ReactNode };

export const metadata = {
  title: { default: 'Wörter', template: '%s - Lateininator' },
  description: 'Wörter'
};

const Layout = ({ children }: LayoutProps) => children;

export default Layout;
