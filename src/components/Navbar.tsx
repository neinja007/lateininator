'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import Logo from '@/components/Logo';
import NavbarDropdown from '@/components/NavbarDropdown';
import NavbarLink from '@/components/NavbarLink';
import { routes } from '@/data/routes';
import { LogIn, Menu, User } from 'lucide-react';
import { useWidth } from '@/hooks/useWidth';

const Navbar = () => {
  const [open, setOpen] = useState('');
  const pathname = usePathname();
  const [mobileLinksOpen, setMobileLinksOpen] = useState(false);

  useEffect(() => {
    setOpen('');
    setMobileLinksOpen(false);
  }, [pathname]);

  useWidth('lg', () => setMobileLinksOpen(false), true);

  return (
    <>
      <div className='fixed inset-0 h-16 w-full bg-gray-100 lg:flex dark:bg-gray-950'>
        <Menu
          className='float-end m-3 h-9 w-11 cursor-pointer select-none lg:hidden'
          onClick={() => setMobileLinksOpen((prev) => !prev)}
        />
        <Logo />
        <div
          className={
            'mr-4 mt-16 w-full justify-end bg-gray-100 pb-1 lg:mt-0 xl:justify-center dark:bg-gray-950 ' +
            (mobileLinksOpen ? 'block' : 'hidden lg:flex')
          }
        >
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
            <NavbarLink
              route={{ href: '/account/manage', label: 'Profil', icon: User }}
              active={pathname === '/account/manage'}
            />
          </SignedIn>
          <SignedOut>
            <NavbarLink
              route={{ href: '/account/sign-in', label: 'Anmelden', icon: LogIn }}
              active={pathname === '/account/sign-in'}
            />
          </SignedOut>
        </div>
      </div>
    </>
  );
};

export default Navbar;
