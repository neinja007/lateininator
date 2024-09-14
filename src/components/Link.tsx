import { ExternalLink } from 'lucide-react';
import NextLink from 'next/link';

type LinkProps = {
  children: React.ReactNode;
  href: string;
} & React.ComponentProps<typeof NextLink>;

const Link = ({ children, href, ...props }: LinkProps) => {
  return (
    <NextLink href={href} className='text-blue-500 hover:underline' {...props}>
      {children}
      <ExternalLink className='ml-1 inline-block h-4 w-4 align-text-top' />
    </NextLink>
  );
};

export default Link;
