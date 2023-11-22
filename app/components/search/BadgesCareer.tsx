import { BadgeLinks } from '@/constants';
import { Badge } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import './style.css';

const BadgesCareer = () => {
  return (
    <div className="mt-8 mx-auto">
      {BadgeLinks.map((item) => {
        return (
          <Link key={item.route} href={item.route} className="m-1">
            <Badge variant="soft" color="gray" className="button-pointer">
              {item.label}
            </Badge>
          </Link>
        );
      })}
    </div>
  );
};

export default BadgesCareer;
