import { useUser } from '@clerk/nextjs';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type AuthConditionalLockProps = {
  children: React.ReactNode;
};

export const AuthConditionalLock = ({ children }: AuthConditionalLockProps) => {
  const { isSignedIn, isLoaded } = useUser();

  const lockContent = isLoaded && !isSignedIn;

  return (
    <div className='relative'>
      <div className={lockContent ? 'blur-sm' : undefined}>{children}</div>
      {lockContent && (
        <div className='absolute left-0 top-0 flex h-full w-full place-items-center justify-center bg-black/50'>
          <Image
            src='/lock.png'
            alt='Lock'
            className='absolute h-full max-h-72 w-auto opacity-30'
            width={300}
            height={300}
          />
          <div className='absolute z-10'>
            <div className='flex flex-col items-center gap-4 text-center'>
              <div className='text-2xl font-bold'>Du musst angemeldet sein, um diese Seite verwenden zu können.</div>
              <div className='text-lg'>
                Bitte melde dich an, um fortzufahren.{' '}
                <Link href='/auth/sign-in' className='text-blue-500 hover:underline'>
                  Jetzt anmelden <ExternalLink className='inline-block h-4 w-4 align-text-top' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
