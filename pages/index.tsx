import { GetStaticProps } from 'next';
import { IOffer } from '../interfaces';
import Layout from '../components/Layout';
import List from '../components/List';
import { getOffers } from './api/offers';

type Props = {
  offers: IOffer[];
};

const WithStaticProps = ({ offers }: Props) => {
  return (
    <Layout>
      <List offers={offers} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const offers: IOffer[] = await getOffers();
  return { props: { offers } };
};

export default WithStaticProps;
