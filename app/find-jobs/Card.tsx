import { BookmarkIcon } from '@radix-ui/react-icons';
import { Badge, Card, Grid, Heading, Text } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';

export default function CardElement() {
  return (
    <Card asChild className="mb-1  hover:border-orange-600">
      <Link href="#">
        <div className="flex justify-between">
          <Text as="div" size="3" weight="bold">
            job title
          </Text>
          <BookmarkIcon />
        </div>
        <Text as="div" color="gray" size="2">
          company name
        </Text>

        <Text as="div" color="gray" size="2">
          $80,000 /yr (est.)
        </Text>
        <div className="flex justify-start mr-1 mt-2">
          <Badge variant="soft" color="gray" className="mx-1">
            high slary
          </Badge>
          <Badge variant="soft" color="gray" className="mx-1">
            remote
          </Badge>
          <Badge variant="soft" color="gray" className="mx-1">
            easy
          </Badge>
        </div>
        <Text as="div" color="gray" size="2">
          <div className="flex items-center p-2">
            <CiLocationOn />
            Sydney
          </div>
        </Text>
      </Link>
    </Card>
  );
}
