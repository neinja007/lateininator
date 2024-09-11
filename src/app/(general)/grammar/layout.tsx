type LayoutProps = { children: React.ReactNode };

export const metadata = {
  title: { default: 'Grammatik', template: 'Grammatik %s - Lateininator' },
  description: 'Grammatik'
};

const Layout = ({ children }: LayoutProps) => children;

export default Layout;
