'use client';
import Heading from '@/components/Heading';
import { routes } from '@/constants/routes';
import FancyLinkContainer from './components/FancyLinkContainer';
import StatusDependentRoutes from './components/StatusDependentRoutes';
import Tutorial from '@/components/Tutorial';
import { useUser } from '@clerk/nextjs';

const Page = () => {
  const signInRoute = routes.find((route) => route.label === 'Anmelden');
  const premiumRoute = routes.find((route) => route.label === 'Premium');
  if (!signInRoute || !premiumRoute) throw new Error('Route not found');

  const user = useUser();

  return (
    <div>
      <Heading className='mb-3 md:mb-6 lg:mb-12'>Übersicht</Heading>
      <div>
        <Tutorial heading={user.isSignedIn ? `Willkommen, ${user.user?.fullName}!` : 'Willkommen!'}>
          Unten findest du alle Tools, die dir zur Verfügung stehen.
        </Tutorial>
      </div>
      <div>
        <p className='mb-2 text-center text-lg font-bold'>Lernen</p>
        <div>
          {routes
            .filter((route) => !!route.children && !route.status)
            .map((route) => (
              <FancyLinkContainer key={route.label} route={route} />
            ))}
        </div>
      </div>
      <div>
        <p className='mb-2 mt-10 text-center text-lg font-bold'>Benutzer</p>
        <StatusDependentRoutes
          routes={[...(routes.find((route) => route.label === '{name}')!.children || []), signInRoute, premiumRoute]}
        />
      </div>
    </div>
  );
};

export default Page;
