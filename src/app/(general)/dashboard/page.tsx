'use client';
import Heading from '@/components/Heading';
import { routes } from '@/constants/routes';
import FancyLinkContainer from './components/FancyLinkContainer';
import StatusDependentRoutes from './components/StatusDependentRoutes';
import Tutorial from '@/components/Tutorial';
import { useUser } from '@clerk/nextjs';
import Link from '@/components/Link';

const Page = () => {
  const signInRoute = routes.find((route) => route.label === 'Anmelden');
  const premiumRoute = routes.find((route) => route.label === 'Premium');
  if (!signInRoute || !premiumRoute) throw new Error('Route not found');

  const user = useUser();

  return (
    <div>
      <Heading className='mb-3 md:mb-6 lg:mb-12'>Übersicht</Heading>
      <Tutorial heading={user.isSignedIn ? `Willkommen, ${user.user?.fullName}!` : 'Willkommen!'}>
        <p>
          Hier findest du alle Tools, die dir zur Verfügung stehen. Es gibt Übungen für <b>Endungen</b>, <b>Vokabeln</b>{' '}
          und <b>Grammatik</b>. Außerdem kannst du deinen Fortschritt verfolgen und deine Einstellungen anpassen.
        </p>
        <p>
          Eine Anleitung zu allen Tools findest du <Link href='/user/tutorial'>hier</Link>.
        </p>
      </Tutorial>
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
