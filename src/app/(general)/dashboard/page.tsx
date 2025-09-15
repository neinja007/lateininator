'use client';
import Heading from '@/components/Heading';
import { routes } from '@/constants/routes';
import FancyLinkContainer from './components/FancyLinkContainer';
import StatusDependentRoutes from './components/StatusDependentRoutes';
import { useUser } from '@clerk/nextjs';
import { Leaderboard } from './components/Leaderboard';
import { LastActive } from './components/LastActive';

const Page = () => {
  const signInRoute = routes.find((route) => route.label === 'Anmelden');
  // const premiumRoute = routes.find((route) => route.label === 'Premium');
  // if (!signInRoute || !premiumRoute) throw new Error('Route not found');
  if (!signInRoute) throw new Error('Route not found');

  const user = useUser();

  return (
    <div>
      <Heading heading={user.isSignedIn ? `Willkommen, ${user.user?.fullName}!` : 'Willkommen!'}>
        Hier finden Sie alle Tools, die Ihnen zur Verfügung stehen. Es gibt Übungen für <b>Endungen</b>, <b>Vokabeln</b>{' '}
        und <b>Grammatik</b>. Außerdem können Sie Ihren Fortschritt verfolgen und Ihre Einstellungen anpassen.
      </Heading>
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
          hrefPrefix='/user'
          routes={routes.find((route) => route.label === '{name}')!.children || []}
        />
        <StatusDependentRoutes routes={[signInRoute]} />
      </div>
      <div className='flex flex-col gap-10 lg:grid lg:grid-cols-2'>
        <div>
          <p className='mb-2 mt-10 text-center text-lg font-bold'>Leaderboard</p>
          <Leaderboard />
        </div>

        <div>
          <p className='mb-2 mt-10 text-center text-lg font-bold'>Zuletzt aktiv</p>
          <LastActive />
        </div>
      </div>
    </div>
  );
};

export default Page;
