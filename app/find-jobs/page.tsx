import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  ScrollArea,
  Text,
} from '@radix-ui/themes';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import GlobalSearch from '../components/search/GlobalSearch';
import { BookmarkIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import CardElement from './Card';
import CardRight from './CardRight';
import BadgesLocation from '../components/search/BadgesLocation';
import Search from './Search';
import DropdownMenu0 from './DropdownMenu0';

function page() {
  return (
    <Box
      style={{
        height: '200vh',
        background: 'var(--gray-a2)',
        borderRadius: 'var(--radius-3)',
      }}
    >
      <Container>
        {/* <DecorativeBox> */}
        <Box className="my-5 flex justify-center items-center gap-3">
          <Search />
          <Grid columns="4" gap="3" display="inline-grid">
            <DropdownMenu0 />
            <DropdownMenu0 />
            <DropdownMenu0 />
            <DropdownMenu0 />
          </Grid>
        </Box>

        <Grid
          columns={{
            initial: '1',
            sm: '1fr 2fr',
          }}
          gap="1"
        >
          <ScrollArea
            radius="full"
            type="always"
            size="1"
            style={{ height: 600 }}
          >
            <Box className="p-3">
              <CardElement />
              <CardElement />
              <CardElement />
              <CardElement />
              <CardElement />
            </Box>
          </ScrollArea>
          <Box>
            <CardRight />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default page;
