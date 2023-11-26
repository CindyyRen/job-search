'use client';
import { DatePosted, JobType, Location, WorkLocation } from '@/constants';
import * as Dialog from '@radix-ui/react-dialog';
import { MixerHorizontalIcon } from '@radix-ui/react-icons';
import { useEffect } from 'react';
import {
  Button,
  Checkbox,
  Flex,
  RadioGroup,
  TextField,
  Text,
  Select,
} from '@radix-ui/themes';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import './style.css';

type Inputs = {
  location: string;
  LocationCheckbox: string[];
  selectedOption: string | null;
};

const Model = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="max-sm:w-full flex justify-center items-center mr-1  max-sm:mb-1  border-orange-500 border  text-orange-500 hover:text-orange-900 text-sm py-1 px-2 rounded"
          type="button"
          style={{ height: '34px' }}
        >
          <MixerHorizontalIcon className="w-5 h-5 mr-1" /> Filter
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="overflow-y-auto max-sm:text-xs data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-xl font-bold text-center">
            Filters
          </Dialog.Title>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <hr className="border-gray-200 my-4"></hr>
            <label className="py-2 font-bold">
              <p>Select a Location</p>
            </label>
            <br />
            <div className="w-full flex justify-center">
              <Controller
                name="location"
                control={control}
                render={({ field }) => (
                  <Select.Root {...field} defaultValue="Global">
                    <Select.Trigger color="gray" variant="soft" />
                    <Select.Content color="gray" className="w-[250px]">
                      {Location.map((item) => (
                        <Select.Item
                          key={item.label}
                          value={item.label}
                          className=" hover:bg-gray-300 active:accent-slate-300 "
                        >
                          {item.label}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                )}
              />
            </div>
            <hr className="border-gray-200 my-4"></hr>
            <fieldset>
              <legend className="pb-2 font-bold">Work Location</legend>
              <label className="grid grid-cols-2 gap-4  pb-2">
                <Controller
                  name="LocationCheckbox"
                  control={control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <>
                      {WorkLocation.map((option, index) => (
                        <div key={index}>
                          <input
                            type="checkbox"
                            value={option.label}
                            className="text-gray-600 rounded focus:ring-0"
                            onChange={(e) => {
                              const updatedValue = e.target.checked
                                ? [...field.value, e.target.value]
                                : field.value.filter(
                                    (val) => val !== e.target.value
                                  );
                              field.onChange(updatedValue);
                            }}
                            checked={field.value.includes(option.label)}
                          />
                          <label className="inline-flex items-center outline-none pl-2 ">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </>
                  )}
                />
              </label>
            </fieldset>
            <hr className="border-gray-200 my-4"></hr>
            <fieldset>
              <legend className="pb-2 font-bold">Time Posted</legend>
              <label className="grid grid-cols-2 gap-4  pb-2">
                <Controller
                  name="selectedOption"
                  control={control}
                  defaultValue="Any time"
                  render={({ field }) => (
                    <>
                      {DatePosted.map((option, index) => (
                        <div key={index}>
                          <input
                            type="radio"
                            id={option.label}
                            value={option.label}
                            className="text-gray-600 focus:ring-0"
                            onChange={(e) => {
                              field.onChange(e.target.value);
                            }}
                            checked={field.value === option.label}
                          />
                          <label
                            className="inline-flex items-center outline-none pl-2 "
                            htmlFor={option.label}
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </>
                  )}
                />
              </label>
            </fieldset>
            <hr className="border-gray-200 my-4"></hr>
            <div className="grid grid-cols-2">
              <button
                type="submit"
                className="bg-gray-200 hover:bg-gray-100 text-gray-500 font-bold py-2 px-4 rounded"
                onClick={() => reset()}
              >
                Clear
              </button>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded"
              >
                Search
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Model;
