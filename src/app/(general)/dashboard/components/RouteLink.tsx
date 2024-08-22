import { Route } from '@/data/routes';
import clsx from 'clsx';
import Link from 'next/link';
import { routeLinkColors } from '../constants/colors';
import { Color } from '@/types/other';
import { ChevronsRight } from 'lucide-react';

type RouteLinkProps = { route: Route; color?: Color };

const RouteLink = ({ route, color }: RouteLinkProps) => {
  return (
    <Link
      href={route.href}
      className={clsx(
        'group flex w-full items-center justify-center rounded-lg border p-3 transition-transform dark:border-gray-700',
        routeLinkColors[!color || color === 'default' ? 'gray' : color]
      )}
    >
      <span className='transition-colors group-hover:font-medium group-hover:text-gray-950 group-hover:dark:text-gray-200'>
        {route.label}
      </span>{' '}
      <ChevronsRight className='ml-2 w-0 text-gray-950 transition-all group-hover:w-6 dark:text-gray-200' />
    </Link>
  );
};

export default RouteLink;
