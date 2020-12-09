import {
  AppBar,
  Container,
  Grid,
  Theme,
  Toolbar,
  Typography,
  createStyles,
  makeStyles
} from '@material-ui/core';
import React, { ReactNode } from 'react';

import { Categories } from './Categories';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    },
    logo: {
      color: '#fff'
    },
    main: {
      flex: 1,
      paddingBottom: theme.spacing(4),
      paddingTop: theme.spacing(4),
      overflowY: 'auto'
    }
  })
);

type LayoutProps = {
  children: NonNullable<ReactNode>;
  title?: string;
  categories: string[];
  selected?: string;
};

export const Layout = ({
  children,
  title = 'justjoin.it',
  categories,
  selected
}: LayoutProps) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar position="static">
        <Toolbar>
          <Typography component="h1" variant="h5">
            <Link href="/">
              <a className={classes.logo}>{title}</a>
            </Link>
          </Typography>
          <Categories data={categories} selected={selected} />
        </Toolbar>
      </AppBar>
      <Container maxWidth={false} className={classes.main}>
        <>{children}</>
      </Container>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Grid container justify="center">
            #1 Job Board for IT industry in Poland
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
