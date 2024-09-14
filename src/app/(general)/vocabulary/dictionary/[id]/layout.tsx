import { prisma } from '@/utils/other/client';

type LayoutProps = { children: React.ReactNode };

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props) {
  const id = params.id;

  const word = await prisma.word.findUnique({
    where: {
      id: parseInt(id)
    }
  });

  return {
    title: `"${word?.name.toUpperCase()}"`,
    description: `Formen und Informationen zu ${word?.name} im Lateininator Wörterbuch`
  };
}

const Layout = ({ children }: LayoutProps) => {
  return children;
};

export default Layout;
