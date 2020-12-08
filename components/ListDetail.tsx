import * as React from 'react';

import { IOffer } from '../interfaces';

type ListDetailProps = {
  offer: IOffer;
};

const ListDetail = ({ offer }: ListDetailProps) => (
  <div>
    <h1>{offer.title}</h1>
    <p>ID: {offer.id}</p>
  </div>
);

export default ListDetail;
