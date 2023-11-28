'use client';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { DropdownMenu, Button } from '@radix-ui/themes';
import React from 'react';

const DropdownMenu0 = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="outline" radius='full' size="1"  color='gray'>
          Sort by
          <CaretDownIcon width="12" height="12" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content variant="soft" highContrast>
        <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default DropdownMenu0;
