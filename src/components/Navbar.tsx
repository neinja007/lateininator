'use client';
import { Fragment, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/Logo';
import NavbarDropdown from '@/components/NavbarDropdown';
import NavbarLink from '@/components/NavbarLink';
import { routes } from '@/constants/routes';
import { Coins, Menu } from 'lucide-react';
import { useWidth } from '@/hooks/useWidth';
import clsx from 'clsx';
import { makeStatusDependent } from '@/utils/other/makeStatusDependent';
import { useUser } from '@clerk/nextjs';
import { usePoints } from '@/hooks/database/queries/usePoints';
import NumberFlow from '@number-flow/react';
import Link from './Link';
import Button from './Button';

const Navbar = () => {
  const [open, setOpen] = useState('');
  const pathname = usePathname();
  const [mobileLinksOpen, setMobileLinksOpen] = useState(false);

  useEffect(() => {
    setOpen('');
    setMobileLinksOpen(false);
  }, [pathname]);

  useWidth(
    'xl',
    () => setMobileLinksOpen(false),
    () => {},
    true
  );

  const user = useUser();

  const { data: points } = usePoints();

  return (
    <>
      <div className='fixed inset-0 z-50 h-16 w-full bg-gray-100 xl:flex dark:bg-gray-950'>
        <Menu
          className='float-end m-3 h-9 w-11 cursor-pointer select-none xl:hidden'
          onClick={() => setMobileLinksOpen((prev) => !prev)}
        />
        <Logo />
        {process.env.NEXT_PUBLIC_ENABLE_SPONSOR === 'TRUE' &&
          typeof window !== 'undefined' &&
          window.localStorage.getItem('hide-sponsor') !== 'true' && (
            <div className='absolute left-5 top-20 animate-pulse rounded-lg p-3 pb-5 backdrop-blur-lg'>
              Gesponsert von YouTuber{' '}
              <Link href={process.env.NEXT_PUBLIC_SPONSOR_LINK!} target='_blank'>
                Aaron Gessati
              </Link>
              ! <br />
              <Link href='/user/settings' className='text-blue-500'>
                Hier
              </Link>{' '}
              Creator Code eingeben für <b>100 Punkte</b>! <br />
              <Button
                color='blue'
                onClick={() => {
                  window.localStorage.setItem('hide-sponsor', 'true');
                  window.location.reload();
                }}
              >
                Nachricht verbergen
              </Button>
            </div>
          )}
        <div
          className={clsx(
            'mr-4 mt-16 w-full justify-end bg-gray-100 pb-1 xl:mt-0 2xl:justify-center dark:bg-gray-950',
            mobileLinksOpen ? 'block' : 'hidden xl:flex'
          )}
        >
          {routes.map((route, i) => {
            let profileNavlink = route.label === '{name}';
            if (profileNavlink) {
              route = {
                ...route,
                label: user.isLoaded && user.user ? user.user.fullName || 'Profil' : 'Profil'
              };
            }

            let element: React.ReactNode;
            if (route.children) {
              element = (
                <NavbarDropdown
                  showAdminIndicator={profileNavlink}
                  route={route}
                  open={open}
                  handleOpen={setOpen}
                  active={pathname.startsWith(route.href)}
                >
                  {route.children
                    .map((child) => ({ ...child, href: route.href + child.href }))
                    .map((child, i) => {
                      return (
                        <Fragment key={i}>
                          {makeStatusDependent(
                            <NavbarLink dropdown key={i} route={child} active={pathname.startsWith(child.href)} />,
                            child.status
                          )}
                        </Fragment>
                      );
                    })}
                </NavbarDropdown>
              );
            } else {
              element = <NavbarLink route={route} active={pathname.startsWith(route.href)} />;
            }

            return <Fragment key={i}>{makeStatusDependent(element, route.status)}</Fragment>;
          })}
          {user.isSignedIn && (
            <div className={clsx('mx-4 my-2 flex items-center xl:my-auto', points ?? 'animate-pulse')}>
              {points !== undefined ? (
                <NumberFlow value={points} willChange respectMotionPreference={false} style={{ fontWeight: 'bold' }} />
              ) : (
                '??'
              )}{' '}
              <Coins className='ml-3 w-6 text-yellow-500 dark:text-yellow-400' />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
