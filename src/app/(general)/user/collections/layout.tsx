type LayoutProps = { children: React.ReactNode };

export const metadata = {
  title: { default: 'Wortschatz', template: '%s - Lateininator' },
  description: 'Wortschatz'
};

const Layout = ({ children }: LayoutProps) => children;

export default Layout;
