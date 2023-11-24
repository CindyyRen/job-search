'use client';
import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import PopoverDemo from '@/app/components/shared/search/model';
import { SearchButton } from './searchButton';
import Model from '@/app/components/shared/search/model';
import { Button } from '@radix-ui/themes';
import { MixerHorizontalIcon } from '@radix-ui/react-icons';

interface IFormInput {
  search: string;
}

const GlobalSearch = () => {
  const [model, setModel] = useState(false);
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      search: '',
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-auto flex justify-start max-sm:flex-col gap-1 rounded-xl px-4">
        <div className="w-full md:w-[400px] inline mx-auto">
          <input
            {...register('search')}
            className="shadow appearance-none border-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Search…"
          ></input>
        </div>
        <Model />
        {/* <SearchButton /> */}

        <Button variant="solid" className="button-pointer">
          Search
        </Button>
      </div>
    </form>
  );
};

// 'auto' | 'force-dynamic' | 'error' | 'force-static'
export default GlobalSearch;
