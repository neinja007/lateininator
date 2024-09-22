import clsx from 'clsx';
import { ExternalLink } from 'lucide-react';
import NextLink from 'next/link';

type LinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
} & React.ComponentProps<typeof NextLink>;

const Link = ({ children, href, className, ...props }: LinkProps) => {
  return (
    <NextLink href={href} className={clsx('text-blue-500 hover:underline', className)} {...props}>
      {children}
      <ExternalLink className='mx-1 inline-block h-4 w-4 align-text-top' />
    </NextLink>
  );
};

export default Link;
