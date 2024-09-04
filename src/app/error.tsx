'use client';
import Button from '@/components/Button';
import Heading from '@/components/Heading';
import LinkToSupportEmail from '@/components/LinkToSupportEmail';

type PageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Page = ({ error, reset }: PageProps) => {
  return (
    <div className='mb-16'>
      <Heading className='text-orange-500'>Ein Fehler ist aufgetreten ({error.name})</Heading>
      <div>
        <div className='justify-between text-justify md:flex'>
          <span>
            Wir bitten Sie, diesen unserem <LinkToSupportEmail /> zu melden. Bitte geben Sie dabei die folgende
            Fehlermeldung an:
          </span>
          <button
            color='blue'
            className='text-blue-500 hover:underline active:text-blue-600 md:float-end'
            onClick={() =>
              navigator.clipboard.writeText(
                JSON.stringify({
                  error: error.message,
                  digest: error.digest,
                  name: error.name,
                  global: false
                })
              )
            }
          >
            Fehlermeldung Kopieren
          </button>
        </div>
        <div className='my-4 rounded-lg border border-gray-500 p-4 font-mono text-red-500'>{error.message}</div>
      </div>
      <div className='items-center justify-between text-justify md:flex'>
        <span>Wir Danken für Ihre Unterstützung. Sie können hier versuchen, den Fehler rückgängig zu machen:</span>
        <Button onClick={reset} className='mt-2 md:float-end md:mt-0' color='red'>
          Nochmal versuchen
        </Button>
      </div>
    </div>
  );
};

export default Page;
