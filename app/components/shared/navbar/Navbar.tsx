'use client';
import { NavbarLinks } from '@/constants';
import { SignedIn, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Button, Tabs } from '@radix-ui/themes';

// const Navbar = () => {
//   const pathname = usePathname();
//   return (
//     <nav className="flex items-center p-4 justify-between">
//       <div className="max-sm:hidden flex">
//         {NavbarLinks.map((item) => {
//           const isActive =
//             (pathname.includes(item.route) && item.route.length > 1) ||
//             pathname === item.route;
//           return (
//             <Link
//               key={item.route}
//               href={item.route}
//               className={`text-gray-900 p-4 hover:'text-gray-700 '`}
//             >
//               <p
//                 className={`hover:bg-slate-50 ${
//                   isActive ? 'bg-slate-50' : 'text-gray-500'
//                 } `}
//               >
//                 {item.label}
//               </p>
//             </Link>
//           );
//         })}
//       </div>
//       <UserButton afterSignOutUrl="/" />
//     </nav>
//   );
// };
// // hover:underline-on-active
// export default Navbar;
const Navbar = () => {
  return (
    <Tabs.Root defaultValue="account">
      <Tabs.List size="2">
        {NavbarLinks.map((item) => {
          return (
            <Tabs.Trigger value={item.label} key={item.label}>
              <Link href={item.route} className=''>{item.label}</Link>
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>
    </Tabs.Root>
  );
};
export default Navbar;
