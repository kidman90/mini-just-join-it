import * as React from 'react';

import { Categories } from '../components/Categories';
import { GetStaticProps } from 'next';
import { IOffer } from '../interfaces';
import { Layout } from '../components/Layout';
import { List } from '../components/List';
import { getCategories } from '../utils';
import { getOffers } from './api/offers';

type Props = {
  offers: IOffer[];
};

export const WithStaticProps = ({ offers }: Props) => {
  return (
    <Layout>
      <Categories data={getCategories(offers)} />
      <List offers={offers} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const offers: IOffer[] = await getOffers();
  return { props: { offers } };
};

export default WithStaticProps;
