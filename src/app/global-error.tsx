'use client';
import Button from '@/components/Button';
import LinkToSupportEmail from '@/components/LinkToSupportEmail';

type PageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Page = ({ error, reset }: PageProps) => {
  return (
    <html>
      <body className={'dark:bg-black dark:text-gray-300'}>
        <div className='container mx-auto min-h-screen max-w-[1024px] px-4 pb-16 pt-24'>
          <div className='mb-5 mt-16 text-center text-3xl font-bold text-orange-500'>
            Ein Globaler Fehler ist aufgetreten ({error.name})
          </div>
          <div>
            <div className='flex justify-between'>
              <span>
                Wir bitten Sie, diesen unserem <LinkToSupportEmail /> zu melden. Bitte geben Sie dabei die folgende
                Fehlermeldung an:
              </span>
              <button
                color='blue'
                className='float-end text-blue-500 hover:underline active:text-blue-600'
                onClick={() =>
                  navigator.clipboard.writeText(
                    JSON.stringify({
                      error: error.message,
                      digest: error.digest,
                      name: error.name,
                      global: true
                    })
                  )
                }
              >
                Fehlermeldung Kopieren
              </button>
            </div>
            <pre className='my-4 rounded-lg border border-gray-500 p-4 text-red-500'>{error.message}</pre>
          </div>
          <div className='flex items-center justify-between'>
            <span>Wir Danken für Ihre Unterstützung. Sie können hier versuchen, den Fehler rückgängig zu machen:</span>
            <Button onClick={reset} className={'float-end'} color='red'>
              Nochmal versuchen
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Page;
