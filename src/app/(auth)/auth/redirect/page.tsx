'use client';

import LinkToSupportEmail from '@/components/LinkToSupportEmail';
import LoadingHeading from '@/components/LoadingHeading';
import { User } from '@prisma/client';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
  const [responseStatus, setResponseStatus] = useState<number>();
  const [response, setResponse] = useState<User>();

  const router = useRouter();

  useEffect(() => {
    fetch(window.location.origin + '/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        setResponseStatus(response.status);
        return response.json();
      })
      .then((data) => {
        setResponse(data);
      });
  }, []);

  if (responseStatus === 200) {
    router.push('/dashboard');
  }

  if (!response) {
    return (
      <div>
        <LoadingHeading>Ihr Profil wird eingerichtet...</LoadingHeading>
        <p>
          Sie werden in Kürze weitergeleitet. Sollte dies nicht der Fall sein, bitten wir Sie, unseren{' '}
          <LinkToSupportEmail /> zu kontaktieren.
        </p>
      </div>
    );
  } else if (responseStatus === 201) {
    return (
      <div>
        <p className='mb-4 flex items-center justify-center text-4xl'>
          <Check className='mr-3 h-8 w-8' /> Ihr Profil wurde erfolgreich eingerichtet.
        </p>
        <p>
          Klicken Sie <Link href='/dashboard'>hier</Link>, um zur Startseite des Lateininators zu gelangen.
        </p>
      </div>
    );
  } else if (responseStatus === 200) {
    return (
      <div>
        <p className='mb-4 flex items-center justify-center text-4xl'>
          <Check className='mr-3 h-8 w-8' /> Willkommen zurück, {response.name}!
        </p>
        <p>Sie werden automatisch zur homepage weitergeleitet...</p>
      </div>
    );
  } else {
    return (
      <div>
        <p className='mb-4 flex items-center justify-center text-4xl'>
          <Check className='mr-3 h-8 w-8' /> Ein Fehler ist geschehen.
        </p>
        <p>
          Wir bitten Sie, eine Nachricht an unseren
          <LinkToSupportEmail /> zu schicken.
        </p>
      </div>
    );
  }
};

export default Page;
