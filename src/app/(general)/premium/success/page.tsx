'use client';
import Heading from '@/components/Heading';
import LinkToSupportEmail from '@/components/LinkToSupportEmail';
import { useDbUser } from '@/hooks/useDbUser';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
  const params = useSearchParams();
  const state = params.get('state');
  const [actualState, setActualState] = useState<'success' | 'error' | 'loading'>('loading');

  const [_, dbUser] = useDbUser();

  useEffect(() => {
    if (state !== null) {
      setActualState(state === 'success' ? 'success' : 'error');
    } else {
      if (dbUser.user?.premium) {
        setActualState('success');
      } else {
        setActualState('error');
      }
    }
  }, [dbUser.user?.premium, state]);

  return (
    <div>
      <Heading>Lateininator Premium</Heading>
      <p className='mt-5 text-center'>
        {actualState === 'loading' && <span className='animate-pulse'>Bitte warten...</span>}

        {actualState === 'error' && (
          <span className='text-yellow-500'>
            Die Bezahlung war leider nicht erfolgreich. Bitte versuchen Sie es erneut oder kontaktieren Sie uns unter{' '}
            <LinkToSupportEmail>support@lateininator.com</LinkToSupportEmail>, falls das Problem weiterhin besteht.
          </span>
        )}

        {actualState === 'success' && (
          <span className='text-green-500'>
            Die Bezahlung war erfolgreich. Vielen Dank für Ihren Einkauf! Sie können von nun an alle Premium-Funktionen
            nutzen.
          </span>
        )}
      </p>
    </div>
  );
};

export default Page;
