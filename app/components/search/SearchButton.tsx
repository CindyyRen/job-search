import { Button, Link } from '@radix-ui/themes';
import React from 'react';
import './style.css';

export const SearchButton = () => {
  return (
    <Button variant="solid" color="orange" className="button-pointer">
      Search
    </Button>
  );
};
