import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import GlobalSearch from '@/app/components/search/GlobalSearch';
import { Link } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative">
      <UserButton afterSignOutUrl="/" />
      <div className="flex justify-center h-screen top-100">
        <div className="absolute top-1/4">
          <div className='ml-[100px]'>
            <span className="relative text-white text-3xl ml-20 font-bold w-24 h-24 bg-orange-400 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
              <span className="absolute text-2xl font-bold right-[100px] top-[33px] text-slate-500">
                Academic
              </span>
              Jobs
              <span className="absolute font-thin text-xs tracking-[4px] right-[25px] top-[67px] text-slate-300">
                SIMPLY&nbsp;THE&nbsp;BEST
              </span>
            </span>
          </div>
          <GlobalSearch />
        </div>
      </div>
    </div>
  );
}
