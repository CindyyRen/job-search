'use client';
import React, { useRef, useState } from 'react';
import Model from '@/app/components/shared/search/model';
import {
  DotsHorizontalIcon,
  MagnifyingGlassIcon,
  OpacityIcon,
} from '@radix-ui/react-icons';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Flex, IconButton, TextField } from '@radix-ui/themes';
import { CiLocationOn } from 'react-icons/ci';
const GlobalSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    if (inputRef.current) {
      const searchValue = inputRef.current.value;
      console.log('Search Value:', searchValue);
      if (searchValue) {
        params.set('query', searchValue);
      } else {
        params.delete('query');
      }
      router.push(`/find-jobs?search=${searchValue}`);
    }
  };
  return (
    <form onSubmit={handleSearch}>
      <div className="flex justify-between">
        <div className="w-screen flex justify-center">
          <div className="relative md:w-9/12 lg:w-1/2 max-sm:w-full flex flex-col sm:flex-row items-center max-sm:border-none border-b border-[var(--accent-11)] py-2">
            <div className="flex  flex-grow max-sm:flex-col max-sm:w-full">
              <TextField.Root
                variant="soft"
                radius="large"
                // color="gray"
                className="flex-grow mr-1 max-sm:mb-1"
              >
                <TextField.Slot>
                  <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
                <TextField.Input
                  placeholder="Enter key words"
                  className="w-full focus:ring-0 focus:border-none"
                />
                <TextField.Slot>
                  <IconButton size="1" variant="ghost">
                    <DotsHorizontalIcon height="14" width="14" />
                  </IconButton>
                </TextField.Slot>
              </TextField.Root>
              <TextField.Root
                variant="soft"
                radius="large"
                // color="gray"
                className="mr-1  max-sm:mb-1 "
              >
                <TextField.Slot>
                  <CiLocationOn height="16" width="16" />
                </TextField.Slot>
                <TextField.Input
                  placeholder="Where"
                  className="w-full focus:ring-0 focus:border-none"
                />
                <TextField.Slot>
                  <IconButton size="1" variant="ghost">
                    <DotsHorizontalIcon height="14" width="14" />
                  </IconButton>
                </TextField.Slot>
              </TextField.Root>
            </div>
            <Model />
            <button
              className="max-sm:w-full flex-shrink-0 bg-[var(--accent-10)] hover:bg-[var(--accent-9)] border-[var(--accent-10)] hover:border-[var(--accent-9)] text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
              style={{ height: '36px' }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

// 'auto' | 'force-dynamic' | 'error' | 'force-static'
export default GlobalSearch;
// className="mx-auto flex justify-start max-sm:flex-col gap-1 rounded-xl px-4"
