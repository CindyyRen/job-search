import Navbar from '@/app/components/shared/navbar/Navbar';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col ">
        <div className="">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
