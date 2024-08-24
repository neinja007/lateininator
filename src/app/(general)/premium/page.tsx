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

  return (
    <div>
      <Heading>Lateininator Premium</Heading>
      <div className='my-5 grid grid-cols-3 gap-x-2'>
        <Card
          title='Basic'
          features={features.slice(0, 2)}
          price={0}
          color='gray'
          owned
          description='Für Alle'
          highest={!user}
        />
        <Card
          title='Full'
          features={features.slice(0, 6)}
          price={0}
          color='sky'
          description='Für Angemeldete User'
          owned={!!user}
          loading={!user.isLoaded}
          highest={dbUser.isLoaded ? !dbUser.user?.premium || false : true}
        />
        <Card
          title='Premium'
          features={features}
          price={5}
          color='pink'
          description='Für Supporter'
          owned={dbUser.isLoaded ? dbUser.user?.premium || false : false}
          loading={!dbUser.isLoaded}
          highest={dbUser.isLoaded ? dbUser.user?.premium || false : false}
        />
      </div>
    </div>
  );
};

export default Page;
