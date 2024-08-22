'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs';
import Logo from '@/components/Logo';
import NavbarDropdown from '@/components/NavbarDropdown';
import NavbarDropdownLink from '@/components/NavbarDropdownLink';
import NavbarLink from '@/components/NavbarLink';
import navbar from '@/styles/navbar.module.css';
import clsx from 'clsx';
import Hr from './Hr';
import { Dropdown, routes } from '@/data/routes';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState('');
  const pathname = usePathname();
  const pathnameSegments = pathname.split('/').map((segment) => '/' + segment);
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
                  key={i}
                  label={route.label}
                  open={open}
                  handleOpen={setOpen}
                  active={pathnameSegments[1] === route.href}
                >
                  {(route as Dropdown).children.map((child, i) => {
                    return (
                      <NavbarDropdownLink
                        key={i}
                        label={child.label}
                        href={route.href + child.href}
                        active={pathnameSegments[2] === child.href}
                      />
                    );
                  })}
                </NavbarDropdown>
              );
            } else {
              return (
                <NavbarLink key={i} label={route.label} href={route.href} active={pathnameSegments[1] === route.href} />
              );
            }
          })}
          <SignedIn>
            <div className={clsx(navbar.navlink, navbar.inactive)}>
              <SignOutButton>Abmelden</SignOutButton>
            </div>
          </SignedIn>
          <SignedOut>
            <NavbarLink label='Anmelden' href='/sign-in' active={pathnameSegments[1] === '/sign-in'} />
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
        {routes.map((link, i) => {
          if (link.children) {
            return (
              <NavbarDropdown
                key={i}
                label={link.label}
                open={open}
                handleOpen={(open) => {
                  setOpen(open);
                }}
                active={pathnameSegments[1] === link.href}
                mobile
              >
                {(link as Dropdown).children.map((child, i) => {
                  return (
                    <NavbarDropdownLink
                      key={i}
                      label={child.label}
                      href={link.href + child.href}
                      active={pathnameSegments[2] === child.href}
                    />
                  );
                })}
              </NavbarDropdown>
            );
          } else {
            return (
              <NavbarDropdownLink
                key={i}
                label={link.label}
                href={link.href}
                active={pathnameSegments[1] === link.href}
              />
            );
          }
        })}
        <SignedIn>
          <div className={clsx(navbar.dropdown_navlink, navbar.inactive)}>
            <SignOutButton>Abmelden</SignOutButton>
          </div>
        </SignedIn>
        <SignedOut>
          <NavbarDropdownLink label='Anmelden' href='/sign-in' active={pathnameSegments[1] === '/sign-in'} />
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
