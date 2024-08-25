'use client';
import { User } from '@prisma/client';
import { Check, LoaderPinwheel } from 'lucide-react';
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
      },
      body: JSON.stringify({ user: 'John Doe' })
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
        <p className='mb-4 flex animate-pulse items-center justify-center text-4xl'>
          <LoaderPinwheel className='mr-3 h-8 w-8 animate-spin' /> Ihr Profil wird eingerichtet...
        </p>
        <p>
          Sie werden in Kürze weitergeleitet. Sollte dies nicht der Fall sein, bitten wir Sie, unseren{' '}
          <Link className='text-blue-500 hover:underline' href={'mailto:support@lateininator.com'}>
            Support
          </Link>{' '}
          zu kontaktieren.
        </p>
      </div>
    );
  } else if (responseStatus === 201) {
    return (
      <div>
        <p className='mb-4 flex items-center justify-center text-4xl'>
          <Check className='mr-3 h-8 w-8' /> Ihr profil wurde erfolgreich eingerichtet.
        </p>
        <p>
          Clicken Sie <Link href={'/dashboard'}>hier</Link>, um zur Startseite des Lateininators zu gelangen.
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
          <Link className='text-blue-500 hover:underline' href={'mailto:support@lateininator.com'}>
            Support
          </Link>{' '}
          zu schicken.
        </p>
      </div>
    );
  }
};

export default Page;
