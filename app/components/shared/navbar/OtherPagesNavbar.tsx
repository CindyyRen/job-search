'use client';
import { NavbarLinks } from '@/constants';
import { SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
// import Theme from './Theme';
// import MobileNav from './MobileNav';
// import GlobalSearch from '../search/GlobalSearch';

const OtherPagesNavbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center p-4">
      <Link href="/">
        <span className="relative text-white ml-20 font-bold w-12 h-12 bg-[var(--accent-9)] rounded-full flex justify-center items-center text-center p-5 shadow-xl">
          <span className="absolute text-sm font-bold right-[50px] top-[15px] text-slate-500">
            Academic
          </span>
          Jobs
        </span>
      </Link>

      {NavbarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <Link
            key={item.route}
            href={item.route}
            className={`text-gray-900  p-4 hidden sm:block`}
          >
            <p
              className={`hover:'text-gray-700  bg-slate-50 rounded' ${
                isActive ? '' : 'text-gray-500'
              } `}
            >
              {item.label}
            </p>
          </Link>
        );
      })}

      {/* <GlobalSearch />

      <div className="flex-between gap-5">
        <Theme />

        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: 'h-10 w-10',
              },
              variables: {
                colorPrimary: '#ff7000',
              },
            }}
          />
        </SignedIn>
        <MobileNav />
      </div> */}
    </nav>
  );
};

export default OtherPagesNavbar;

// hover:no-underline hover:underline-on-active
