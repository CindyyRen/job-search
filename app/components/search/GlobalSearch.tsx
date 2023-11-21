import Image from 'next/image';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] ">
      <div className=" relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={20}
          height={24}
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder="JOBS"
          className="paragraph-regular no-focus placeholder shadow-none outline-none"
        />
        <Button type="submit" variant="secondary">
          SEARCH
        </Button>
      </div>
    </div>
  );
};

export default GlobalSearch;
