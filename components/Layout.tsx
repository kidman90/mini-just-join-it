import React, { ReactNode } from 'react';

import Head from 'next/head';
import Link from 'next/link';

type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

export const Layout = ({ children, title = 'justjoin.it' }: LayoutProps) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Link href="/">
        <h1>{title}</h1>
      </Link>
    </header>
    {children}
    <footer>
      <hr />
      <span>#1 Job Board for IT industry in Poland</span>
    </footer>
  </div>
);
