type LayoutProps = { children: React.ReactNode };

export const metadata = {
  title: { default: 'Kollektion bearbeiten', template: '%s - Lateininator' },
  description: 'Kollektion bearbeiten'
};

const Layout = ({ children }: LayoutProps) => children;

export default Layout;
