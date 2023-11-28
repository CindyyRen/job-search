'use client';
import React, { useEffect, useRef, useState } from 'react';
import Model from '@/app/components/shared/search/model';
import { DotsHorizontalIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useRouter, useSearchParams } from 'next/navigation';
import { IconButton, TextField } from '@radix-ui/themes';
import { CiLocationOn } from 'react-icons/ci';
import { fetchLocation1 } from '@/lib/utils';
const GlobalSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const keywordRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  // const a = { q: '', l: '' };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.geoapify.com/v1/ipinfo?apiKey=ea0e191c22a94bf39e0e58ffbe2d6b66'
        );
        const result = await response.json();
        if (locationRef.current) {
          const params = new URLSearchParams(searchParams);
          locationRef.current.value = result.country.name;
          params.set('query', locationRef.current.value);
        }
      } catch (error) {
        console.error('Error fetching Location:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    if (keywordRef.current) {
      const keywordValue = keywordRef.current.value;
      // console.log('Search Value:', searchValue);
      if (keywordValue) {
        // a.q = searchValue;
        params.set('query', keywordValue);
      } else {
        params.delete('query');
      }
      const queryString = params.toString();
      router.push(`/find-jobs`);
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
                  name="keywords"
                  // value={keyword}
                  ref={keywordRef}
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
                  name="location"
                  // value={location}
                  ref={locationRef}
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
