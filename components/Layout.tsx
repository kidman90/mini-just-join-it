import {
  AppBar,
  Toolbar,
  Typography,
  createStyles,
  makeStyles
} from '@material-ui/core';
import React, { ReactNode } from 'react';

import { Categories } from './Categories';
import Link from 'next/link';

const useStyles = makeStyles(() =>
  createStyles({
    logo: {
      color: '#fff'
    }
  })
);

type LayoutProps = {
  children?: ReactNode;
  title?: string;
  categories: string[];
};

export const Layout = ({
  children,
  title = 'justjoin.it',
  categories
}: LayoutProps) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography component="h1" variant="h5">
            <Link href="/">
              <a className={classes.logo}>{title}</a>
            </Link>
          </Typography>
          <Categories data={categories} />
        </Toolbar>
      </AppBar>
      {children}
      <footer>
        <hr />
        <span>#1 Job Board for IT industry in Poland</span>
      </footer>
    </>
  );
};
