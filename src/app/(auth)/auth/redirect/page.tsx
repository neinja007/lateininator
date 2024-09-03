'use client';
import LinkToSupportEmail from '@/components/LinkToSupportEmail';
import LoadingHeading from '@/components/LoadingHeading';
import { User } from '@prisma/client';
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
      <>
        <LoadingHeading>Ihr Profil wird eingerichtet...</LoadingHeading>
        <p>
          Sie werden in Kürze weitergeleitet. Sollte dies nicht der Fall sein, bitten wir Sie, unseren{' '}
          <LinkToSupportEmail /> zu kontaktieren.
        </p>
      </>
    );
  } else if (responseStatus === 201) {
    return (
      <>
        <LoadingHeading done>Ihr Profil wurde erfolgreich eingerichtet.</LoadingHeading>
        <p>
          Sie können nun{' '}
          <Link href='/dashboard' className='text-blue-500 hover:underline'>
            zur Startseite des Lateininators
          </Link>{' '}
          .
        </p>
      </>
    );
  } else if (responseStatus === 200) {
    return (
      <>
        <LoadingHeading done>Willkommen zurück, {response.name}!</LoadingHeading>
        <p>Sie werden automatisch zur homepage weitergeleitet...</p>
      </>
    );
  } else {
    return (
      <>
        <LoadingHeading done>Ein Fehler ist aufgetreten.</LoadingHeading>
        <p>
          Wir bitten Sie, eine Nachricht an unseren
          <LinkToSupportEmail /> zu schicken.
        </p>
      </>
    );
  }
};

export default Page;
