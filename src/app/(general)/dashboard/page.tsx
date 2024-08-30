import Heading from '@/components/Heading';
import { routes } from '@/data/routes';
import RouteLink from './components/RouteLink';
import { makeAuthStateDependent } from '@/utils/other/makeAuthStateDependent';
import { Fragment } from 'react';

const Page = () => {
  return (
    <div>
      <Heading className='mb-3 md:mb-6 lg:mb-12'>Übersicht</Heading>
      <p className='mb-2 text-center text-lg font-bold'>Lernen</p>
      {routes
        .filter((route) => !!route.children && !route.authStatus)
        .map((route) => (
          <div key={route.label} className='mb-5 grid-cols-4 items-center md:mb-2 md:grid'>
            <div className='flex items-center gap-x-2 font-bold text-gray-600 dark:text-gray-400'>
              <route.icon className='w-5' /> {route.label.replace('{name}', 'Profil')}
            </div>
            <div className='col-span-3 items-center justify-between gap-x-2 sm:flex'>
              {route.children &&
                route.children
                  .map((childRoute) => ({ ...childRoute, href: route.href + childRoute.href }))
                  .map((route, i) => {
                    return <RouteLink key={i} route={route} />;
                  })}
            </div>
          </div>
        ))}
      <p className='mb-2 mt-10 text-center text-lg font-bold'>Verwaltung</p>
      <div className='col-span-3 items-center justify-between gap-2 sm:flex'>
        {routes
          .find((route) => route.label === '{name}')
          ?.children?.map((child, i) => (
            <Fragment key={i}>
              {makeAuthStateDependent(<RouteLink route={{ ...child, href: '/user' + child.href }} />, child.authStatus)}
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default Page;
