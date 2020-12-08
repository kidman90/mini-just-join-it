import * as React from 'react';

import Link from 'next/link';

type CategoriesProps = {
  data: string[];
};

export const Categories = ({ data }: CategoriesProps) => (
  <ul>
    <Link href="/">
      <a>
        <li>all</li>
      </a>
    </Link>
    {data.map((category, index) => (
      <li key={index}>
        <Link href="/[category]" as={`/${category}`}>
          <a>{category}</a>
        </Link>
      </li>
    ))}
  </ul>
);
