import * as React from 'react';

import { createStyles, makeStyles } from '@material-ui/core';

import { IOffer } from '../interfaces';
import dynamic from 'next/dynamic';

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      display: 'flex',
      height: '100%',
      '&&> div': {
        flex: 1
      }
    }
  })
);

type ListDetailProps = {
  offer: IOffer;
};

export const ListDetail = ({ offer }: ListDetailProps) => {
  const classes = useStyles();
  const MapWithNoSSR = dynamic(() => import('./Map'), {
    ssr: false
  });

  return (
    <div className={classes.wrapper}>
      <div>
        <h1>{offer.title}</h1>
        <p>ID: {offer.id}</p>
      </div>
      <div>
        <MapWithNoSSR
          latitude={offer.latitude}
          longitude={offer.longitude}
          popper={`${offer.company_name}, ${offer.city}, ${offer.street}`}
        />
      </div>
    </div>
  );
};
