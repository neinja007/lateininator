'use client';
import Heading from '@/components/Heading';
import { routes } from '@/constants/routes';
import FancyLinkContainer from './components/FancyLinkContainer';
import StatusDependentRoutes from './components/StatusDependentRoutes';

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
          <FancyLinkContainer key={route.label} route={route} />
        ))}
      <p className='mb-2 mt-10 text-center text-lg font-bold'>Benutzer</p>
      <StatusDependentRoutes
        routes={[...(routes.find((route) => route.label === '{name}')!.children || []), signInRoute, premiumRoute]}
      />
    </div>
  );
};

export default Page;
