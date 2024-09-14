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
      <Heading>Übersicht</Heading>
      <Tutorial heading={user.isSignedIn ? `Willkommen, ${user.user?.fullName}!` : 'Willkommen!'}>
        <p>
          Hier finden Sie alle Tools, die Ihnen zur Verfügung stehen. Es gibt Übungen für <b>Endungen</b>,{' '}
          <b>Vokabeln</b> und <b>Grammatik</b>. Außerdem können Sie Ihren Fortschritt verfolgen und Ihre Einstellungen
          anpassen.
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
