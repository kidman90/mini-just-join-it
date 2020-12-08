import * as React from 'react';

import { IOffer } from '../interfaces';
import Link from 'next/link';

type ListItemProps = {
  data: IOffer;
};

const ListItem = ({ data }: ListItemProps) => (
  <Link href="/[id]" as={`/${data.id}`}>
    <a>{data.title}</a>
  </Link>
);

export default ListItem;
