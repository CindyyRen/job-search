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

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center p-4">
      <Link href="/">
        {/* <Image
          src="/assets/images/logo.png"
          width={44}
          height={16}
          alt="DevFlow"
          className="imageContainer"
        /> */}

        {/* <span className="relative text-white ml-20 font-bold w-12 h-12 bg-orange-400 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
          <span className="absolute text-sm font-bold right-[50px] top-[15px] text-slate-500">
            Academic
          </span>
          Jobs
        </span> */}
      </Link>
      <div className="max-sm:hidden flex">
        {NavbarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <Link
              key={item.route}
              href={item.route}
              className={`text-gray-900 hover:text-gray-700 hover:no-underline hover:underline-on-active p-4`}
            >
              <p className={`${isActive ? 'active-link' : 'text-gray-500'} `}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
