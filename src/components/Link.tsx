'use client';

import { COLORS } from '@/constants/other';
import { usePrimaryColor } from '@/hooks/database/queries/usePrimaryColor';
import clsx from 'clsx';
import { ExternalLink } from 'lucide-react';
import NextLink from 'next/link';

type LinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
} & React.ComponentProps<typeof NextLink>;

const Link = ({ children, href, className, ...props }: LinkProps) => {
  const primaryColor = usePrimaryColor();

  return (
    <NextLink href={href} className={clsx('hover:underline', className, COLORS[primaryColor].text)} {...props}>
      {children}
      <ExternalLink className='mx-1 inline-block h-4 w-4 align-text-top' />
    </NextLink>
  );
};

export default Link;
