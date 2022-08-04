import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useQuery } from 'urql';
import Products from '../components/Products/products';
import SummerSale from '../components/Promo/SummerSale';
import { PRODUCT_QUERY } from '../lib/query';

const Home: NextPage = () => {
  // Fetch products from strapi
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
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
