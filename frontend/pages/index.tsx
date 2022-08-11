import type { NextPage } from 'next';
import Head from 'next/head';
import { useQuery } from 'urql';
import Loading from '../components/Loading';

import Products from '../components/Products/products';
import SummerSale from '../components/Promo/SummerSale';
import { PRODUCT_QUERY } from '../lib/query';

const Home: NextPage = () => {
  // Fetch products from strapi
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  if (fetching)
    return (
      <div className="flex justify-center items-center">
        <Loading />
      </div>
    );
  if (error) return <p>oh no...{error.message}</p>;

  const products = data.products.data;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SummerSale />
        <Products products={products} />
      </main>
    </div>
  );
};

export default Home;
