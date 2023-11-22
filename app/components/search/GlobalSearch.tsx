'use client';
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import PopoverDemo from '@/app/components/shared/search/model';
import { SearchButton } from './searchButton';

interface IFormInput {
  search: string;
}

const GlobalSearch = () => {
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
      <div className="mx-auto flex justify-start sm:flex-row grow gap-1 rounded-xl px-4">
        <div className="w-[400px] inline mx-auto">
          <input
            {...register('search')}
            className="shadow appearance-none border-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Search…"
          ></input>
        </div>
        <PopoverDemo />
        <SearchButton />
      </div>
    </form>
  );
};

// 'auto' | 'force-dynamic' | 'error' | 'force-static'
export default GlobalSearch;
