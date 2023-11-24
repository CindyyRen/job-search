import { MixerHorizontalIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';
import React from 'react';

const FilterButton = () => {
  return (
    <Button variant="outline" className="max-sm:w-full">
      <MixerHorizontalIcon /> Filter
    </Button>
  );
};

export default FilterButton;
