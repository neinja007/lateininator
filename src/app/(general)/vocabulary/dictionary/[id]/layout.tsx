import { prisma } from '@/utils/other/client';

type LayoutProps = { children: React.ReactNode };

type Props = {
  params: { id: string };
};

export const generateMetadata = async ({ params }: Props) => {
  const id = params.id;

  const word = await prisma.word.findUnique({
    where: {
      id: parseInt(id)
    }
  });

  if (!word) {
    return {
      title: 'Wort nicht gefunden - Lateininator Wörterbuch',
      description: 'Das Wort wurde nicht gefunden'
    };
  }

  return {
    title: `"${word?.name.toUpperCase()}" - Lateininator Wörterbuch`,
    description: `Formen und Informationen zu "${word?.name}" im Lateininator Wörterbuch`
  };
};

const Layout = ({ children }: LayoutProps) => {
  return children;
};

export default Layout;
