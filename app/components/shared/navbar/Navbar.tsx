'use client';
import { NavbarLinks } from '@/constants';
import { SignedIn, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
// import MobileNav from './MobileNav';
// import GlobalSearch from '../search/GlobalSearch';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center p-4 justify-between">
      {/* <Link href="/"></Link> */}
      <div className="max-sm:hidden flex">
        {NavbarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <Link
              key={item.route}
              href={item.route}
              className={`text-gray-900 p-4 hover:'text-gray-700 '`}
            >
              <p
                className={`hover:bg-slate-50 ${
                  isActive ? 'bg-slate-50' : 'text-gray-500'
                } `}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
      <UserButton afterSignOutUrl="/" />
    </nav>
  );
};
// hover:underline-on-active
export default Navbar;
