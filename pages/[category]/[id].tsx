import { GetStaticPaths, GetStaticProps } from 'next';

import { IOffer } from '../../interfaces';
import { Layout } from '../../components/Layout';
import { ListDetail } from '../../components/ListDetail';
import { getCategories } from '../../utils';
import { getOffers } from '../api/offers';

type Props = {
  offers: IOffer[];
  id: string;
};

const StaticPropsDetail = ({ offers, id }: Props) => {
  const categories = getCategories(offers);
  const offer = offers.find((offer) => offer.id === id);

  return (
    <Layout categories={categories}>
      {offer && <ListDetail offer={offer} />}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const offers: IOffer[] = await getOffers();
  const paths = offers.map((offer) => ({
    params: { category: offer.marker_icon, id: offer.id }
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const offers: IOffer[] = await getOffers();
  return { props: { offers, id: params?.id } };
};
