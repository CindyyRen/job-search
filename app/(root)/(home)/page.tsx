import { UserButton } from '@clerk/nextjs';
import GlobalSearch from '@/app/components/search/GlobalSearch';
import BadgesCareer from '@/app/components/search/BadgesCareer';
import BadgesLocation from '@/app/components/search/BadgesLocation';
export const metadata = {
  title:
    'Academic Jobs - The Number 1 job board for Higher Ed jobs, Top University Recruitment & College Jobs.',
  description:
    'Discover academic jobs at all universities today! Explore your next academic positions through visiting our higher ed jobs, with new academic jobs added daily.',
  keywords: [
    'Academic Jobs',
    'Higher Ed Jobs',
    'Academic positions',
    'University Jobs',
    'College Jobs',
  ],
};

export default function Home() {
  return (
    <div className="flex h-screen items-center mt-[-100px]">
      <div className="flex flex-col items-center w-screen">
        <div className="pb-11 mx-auto mx-sm:w-full">
          <span className="relative ml-[100px] text-white text-3xl font-bold w-24 h-24 bg-[var(--accent-8)] rounded-full flex justify-center items-center text-center p-5 shadow-xl">
            <span className="absolute text-2xl font-light right-[100px] top-[33px] text-slate-500">
              Academic
            </span>
            Jobs
            <span className="absolute font-thin text-xs tracking-[4px] right-[25px] top-[67px] text-slate-300">
              SIMPLY&nbsp;THE&nbsp;BEST
            </span>
          </span>
        </div>
        <GlobalSearch />
        <BadgesCareer />
        <BadgesLocation />
      </div>
    </div>
  );
}
export const dynamic = 'force-dynamic';
