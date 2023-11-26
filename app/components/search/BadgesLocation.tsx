import { BadgeLocationLinks } from '@/constants';
import { Badge } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import './style.css';

const BadgesLocation = () => {
  return (
    <div className="mt-3 flex justify-center">
      {BadgeLocationLinks.map((item) => {
        return (
          <Link key={item.route} href={item.route} className="m-1">
            <Badge variant="soft" className="button-pointer">
              {item.label}
            </Badge>
          </Link>
        );
      })}
    </div>
  );
};

export default BadgesLocation;
