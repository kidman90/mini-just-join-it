import * as React from 'react';

import { IOffer } from '../interfaces';
import ListItem from './ListItem';

type ListProps = {
  offers: IOffer[];
};

const List = ({ offers }: ListProps) => (
  <ul>
    {offers.map((offer) => (
      <li key={offer.id}>
        <ListItem data={offer} />
      </li>
    ))}
  </ul>
);

export default List;
