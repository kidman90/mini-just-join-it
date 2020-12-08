import * as React from 'react';

import { IOffer } from '../interfaces';
import Link from 'next/link';

type ListItemProps = {
  data: IOffer;
};

export const ListItem = ({ data }: ListItemProps) => (
  <Link href="/[category]/[id]" as={`/${data.marker_icon}/${data.id}`}>
    <a>{data.title}</a>
  </Link>
);
