import * as React from 'react';

import { Button, Grid, withStyles } from '@material-ui/core';

import Link from 'next/link';

const StyledButton = withStyles({
  root: {
    minWidth: 'auto'
  }
})(Button);

type CategoriesProps = {
  data: string[];
  selected?: string;
};

export const Categories = ({ data, selected }: CategoriesProps) => (
  <Grid container spacing={1} justify="flex-end">
    <Link href="/">
      <Grid item>
        <StyledButton
          variant="contained"
          color={!selected ? 'secondary' : 'primary'}
          size="small"
        >
          all
        </StyledButton>
      </Grid>
    </Link>
    {data.map((category, index) => (
      <Link href="/[category]" as={`/${category}`} key={index}>
        <Grid item>
          <StyledButton
            variant="contained"
            color={category === selected ? 'secondary' : 'primary'}
            size="small"
          >
            {category}
          </StyledButton>
        </Grid>
      </Link>
    ))}
  </Grid>
);
