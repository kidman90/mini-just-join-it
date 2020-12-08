import { GetStaticPaths, GetStaticProps } from 'next';

import { IOffer } from '../interfaces';
import Layout from '../components/Layout';
import ListDetail from '../components/ListDetail';
import { getOffers } from './api/offers';

type Props = {
  offer: IOffer;
};

const StaticPropsDetail = ({ offer }: Props) => (
  <Layout>
    <ListDetail offer={offer} />
  </Layout>
);

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const offers: IOffer[] = await getOffers();
  const paths = offers.map((offer) => ({ params: { id: offer.id } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const offers: IOffer[] = await getOffers();
  const id = params?.id;
  const offer = offers.find((offer) => offer.id === id);
  return { props: { offer } };
};
