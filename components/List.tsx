import * as React from 'react';

import { Grid } from '@material-ui/core';
import { IOffer } from '../interfaces';
import { ListItem } from './ListItem';

type ListProps = {
  offers: IOffer[];
};

export const List = ({ offers }: ListProps) => (
  <Grid container spacing={4}>
    {offers.map((offer) => (
      <ListItem data={offer} />
    ))}
  </Grid>
);
