import {
  Badge,
  Box,
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
        <Box className="my-5">
          <GlobalSearch />
          <BadgesLocation />
        </Box>

        <Grid
          columns={{
            initial: '1',
            sm: '1fr 2fr',
          }}
          gap="1"
        >
          <ScrollArea radius="full" size="1" style={{ height: 600 }}>
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
