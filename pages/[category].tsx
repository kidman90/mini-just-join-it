import * as React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import { IOffer } from '../interfaces';
import { Layout } from '../components/Layout';
import { List } from '../components/List';
import { getCategories } from '../utils';
import { getOffers } from './api/offers';

type Props = {
  offers: IOffer[];
  category: string;
};

const WithStaticProps = ({ offers, category }: Props) => {
  const categories = getCategories(offers);
  const filteredOffers = offers.filter(
    (offer) => offer.marker_icon === category
  );

  return (
    <Layout categories={categories} selected={category}>
      <List offers={filteredOffers} />
    </Layout>
  );
};

export default WithStaticProps;

export const getStaticPaths: GetStaticPaths = async () => {
  const offers: IOffer[] = await getOffers();
  const paths = getCategories(offers).map((category) => ({
    params: { category }
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const offers: IOffer[] = await getOffers();
  return { props: { offers, category: params?.category } };
};
