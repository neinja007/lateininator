'use client';

import Heading from '@/components/Heading';
import { routes } from '@/constants/routes';
import FancyLink from '@/components/FancyLink';
import { makeStatusDependent } from '@/utils/other/makeStatusDependent';
import { Fragment } from 'react';

const Page = () => {
  const signInRoute = routes.find((route) => route.label === 'Anmelden');
  const premiumRoute = routes.find((route) => route.label === 'Premium');
  if (!signInRoute || !premiumRoute) throw new Error('Route not found');

  return (
    <div>
      <Heading className='mb-3 md:mb-6 lg:mb-12'>Übersicht</Heading>
      <p className='mb-2 text-center text-lg font-bold'>Lernen</p>
      {routes
        .filter((route) => !!route.children && !route.status)
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
                    return <FancyLink key={i} route={route} />;
                  })}
            </div>
          </div>
        ))}
      <p className='mb-2 mt-10 text-center text-lg font-bold'>Benutzer</p>
      <div className='col-span-3 items-center justify-between gap-2 sm:flex'>
        {routes
          .find((route) => route.label === '{name}')
          ?.children?.map((child, i) => (
            <Fragment key={i}>
              {makeStatusDependent(<FancyLink route={{ ...child, href: '/user' + child.href }} />, child.status)}
            </Fragment>
          ))}
        {makeStatusDependent(<FancyLink route={signInRoute} />, signInRoute.status)}
        {makeStatusDependent(<FancyLink route={premiumRoute} />, premiumRoute.status)}
      </div>
    </div>
  );
};

export default Page;
