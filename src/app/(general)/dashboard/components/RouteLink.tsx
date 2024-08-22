import { Route } from '@/data/routes';
import Link from 'next/link';
import { ChevronsRight } from 'react-feather';

type RouteLinkProps = { route: Route };

const RouteLink = ({ route }: RouteLinkProps) => {
  return (
    <Link
      href={route.href}
      className='group flex w-full items-center justify-center rounded-lg border p-3 transition-transform hover:border-blue-500 hover:bg-blue-200 dark:border-gray-700 dark:hover:bg-blue-950'
    >
      <span className='transition-colors group-hover:font-medium group-hover:text-blue-950 group-hover:dark:text-blue-200'>
        {route.label}
      </span>{' '}
      <ChevronsRight className='ml-2 w-0 text-blue-950 transition-all group-hover:w-6 dark:text-blue-200' />
    </Link>
  );
};

export default RouteLink;
