'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs';
import Logo from '@/components/Logo';
import NavbarDropdown from '@/components/NavbarDropdown';
import NavbarLink from '@/components/NavbarLink';
import navbar from '@/styles/navbar.module.css';
import clsx from 'clsx';
import Hr from './Hr';
import { routes } from '@/data/routes';
import { LogIn, LogOut, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState('');
  const pathname = usePathname();
  const [mobileLinksOpen, setMobileLinksOpen] = useState(false);

  useEffect(() => {
    setOpen('');
    setMobileLinksOpen(false);
  }, [pathname]);

  return (
    <>
      <div className='fixed inset-0 inline-flex h-16 w-full bg-gray-100 dark:bg-gray-950'>
        <Logo />
        <div className='mr-4 hidden w-full justify-end gap-x-2 lg:flex xl:justify-center'>
          {routes.map((route, i) => {
            if (route.children) {
              return (
                <NavbarDropdown
                  route={route}
                  key={i}
                  open={open}
                  handleOpen={setOpen}
                  active={pathname.startsWith(route.href)}
                >
                  {route.children
                    .map((child) => ({ ...child, href: route.href + child.href }))
                    .map((child, i) => {
                      return <NavbarLink dropdown key={i} route={child} active={pathname === child.href} />;
                    })}
                </NavbarDropdown>
              );
            } else {
              return <NavbarLink key={i} route={route} active={pathname === route.href} />;
            }
          })}
          <SignedIn>
            <div className={clsx(navbar.navlink, navbar.inactive)}>
              <LogOut className='w-5' /> <SignOutButton>Abmelden</SignOutButton>
            </div>
          </SignedIn>
          <SignedOut>
            <NavbarLink route={{ href: '/sign-in', label: 'Anmelden', icon: LogIn }} active={pathname === '/sign-in'} />
          </SignedOut>
        </div>
        <div className='my-auto block w-full lg:hidden'>
          <Menu
            className='float-end mr-4 h-9 w-11 cursor-pointer select-none'
            onClick={() => setMobileLinksOpen(true)}
          />
        </div>
      </div>
      <div
        className='fixed inset-16 z-50 h-fit rounded-lg border-gray-500 bg-white pb-1 shadow-xl dark:border dark:bg-gray-900'
        hidden={!mobileLinksOpen}
      >
        <div className='flex h-12'>
          <div className='my-auto w-full'>
            <span className='pl-4 text-2xl font-medium'>Navigation</span>
            <X
              className='float-end mr-4 h-7 w-9 cursor-pointer select-none'
              onClick={() => setMobileLinksOpen(false)}
            />
          </div>
        </div>
        <Hr />
        {routes.map((route, i) => {
          if (route.children) {
            return (
              <NavbarDropdown
                route={route}
                key={i}
                open={open}
                handleOpen={(open) => {
                  setOpen(open);
                }}
                active={pathname.startsWith(route.href)}
                mobile
              >
                {route.children
                  .map((child) => ({ ...child, href: route.href + child.href }))
                  .map((child, i) => {
                    return <NavbarLink dropdown key={i} route={child} active={pathname === child.href} />;
                  })}
              </NavbarDropdown>
            );
          } else {
            return <NavbarLink key={i} route={route} active={pathname === route.href} />;
          }
        })}
        <SignedIn>
          <div className={clsx(navbar.dropdown_navlink, navbar.inactive)}>
            <SignOutButton>Abmelden</SignOutButton>
          </div>
        </SignedIn>
        <SignedOut>
          <NavbarLink
            dropdown
            route={{ href: '/sign-in', label: 'Anmelden', icon: LogIn }}
            active={pathname === '/sign-in'}
          />
        </SignedOut>
      </div>
      <div
        className='fixed inset-0 z-40 h-full w-full'
        onClick={() => setMobileLinksOpen(false)}
        hidden={!mobileLinksOpen}
      />
    </>
  );
};

export default Navbar;
