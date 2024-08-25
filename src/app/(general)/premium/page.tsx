'use client';
import Heading from '@/components/Heading';
import Card from './components/Card';
import { useDbUser } from '@/hooks/useDbUser';

const features = [
  'Wörterbuch',
  'Grammatikartikel',
  'Grammatikübungen',
  'Vokabeltrainer',
  'alle Flexionstrainer',
  'Wörterbuch',
  'Kompetenzbereich',
  'Automatisches Abfragen',
  'Statistiken',
  'Fehleranalyse',
  'Supporte die Entwickler'
];

const Page = () => {
  const [user, dbUser] = useDbUser();

  const userIsPremium = dbUser.isLoaded ? dbUser.user?.premium || false : false;

  return (
    <>
      <Heading>Lateininator Premium</Heading>
      <div className='my-5 grid gap-x-3 gap-y-5 lg:grid-cols-3'>
        <Card
          title='Basic'
          features={features.slice(0, 2)}
          price={0}
          color='gray'
          owned
          description='Für Alle'
          highest={!user.isSignedIn}
        />
        <Card
          title='Full'
          features={features.slice(0, 6)}
          price={0}
          color='sky'
          description='Für Angemeldete User'
          owned={user.isSignedIn}
          loading={!user.isLoaded}
          highest={!userIsPremium && user.isSignedIn}
        />
        <Card
          title='Premium'
          features={features}
          price={5}
          color='pink'
          description='Für Supporter'
          owned={userIsPremium}
          loading={!dbUser.isLoaded}
          highest={userIsPremium}
        />
      </div>
    </>
  );
};

export default Page;
