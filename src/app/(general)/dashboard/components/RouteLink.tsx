import { Route } from '@/data/routes';
import clsx from 'clsx';
import Link from 'next/link';
import { routeLinkColors } from '../constants/colors';
import { ChevronsRight } from 'lucide-react';

type RouteLinkProps = { route: Route };

const RouteLink = ({ route }: RouteLinkProps) => {
  return (
    <Link
      href={route.href}
      className={clsx(
        'group mt-2 flex w-full items-center justify-center rounded-lg border p-3 transition-transform md:mt-0 dark:border-gray-700',
        routeLinkColors[!route.color || route.color === 'default' ? 'gray' : route.color]
      )}
    >
      <span className='flex items-center gap-x-3 truncate transition-colors group-hover:font-medium group-hover:text-gray-950 group-hover:dark:text-gray-200'>
        <route.icon className='w-5 flex-shrink-0 transition-transform group-hover:rotate-12' />
        {route.label}
      </span>
      <ChevronsRight className='ml-2 w-0 text-gray-950 transition-all group-hover:w-6 dark:text-gray-200' />
    </Link>
  );
};

export default RouteLink;
