import Heading from '@/components/Heading';
import { Route, routes } from '@/data/routes';
import { SignedOut } from '@clerk/nextjs';
import { Fragment } from 'react';
import RouteLink from './components/RouteLink';

const Page = () => {
  return (
    <div>
      <Heading className='mb-3 md:mb-6 lg:mb-12'>Übersicht</Heading>
      <p className='mb-2 text-center text-lg font-bold'>Latein Lernen</p>
      <div className='grid grid-cols-4 items-center gap-y-2'>
        {routes
          .filter((route) => !!route.children)
          .map((route) => (
            <Fragment key={route.label}>
              <div>{route.label}:</div>
              <div className='col-span-3 flex items-center justify-between gap-2'>
                {route.children
                  .map((childRoute) => ({ ...childRoute, href: route.href + childRoute.href }))
                  .map((route, i) => {
                    return <RouteLink key={i} route={route} color={route.color} />;
                  })}
              </div>
            </Fragment>
          ))}
      </div>
      <p className='mb-2 mt-10 text-center text-lg font-bold'>Sonstiges</p>
      <div className='col-span-3 flex items-center justify-between gap-2'>
        <RouteLink route={routes.find((route) => route.label === 'Kompetenz') as Route} color='orange' />
        <SignedOut>
          <RouteLink route={{ href: '/sign-in', label: 'Anmelden' }} color='green' />
        </SignedOut>
        {/* <RouteLink route={{ href: '/premium', label: 'Premium' }} /> */}
      </div>
    </div>
  );
};

export default Page;
