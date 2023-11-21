

import OtherPagesNavbar from '@/app/components/shared/navbar/OtherPagesNavbar';
import Navbar from '../../components/shared/navbar/Navbar';

import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OtherPagesNavbar />
      <main className="flex flex-col">
        <div className="">{children}</div>
      </main>
    </>
  );
};

export default Layout;
