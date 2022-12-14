import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider, createClient } from 'urql';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/index';
import { StateContext } from '../lib/context';

const client = createClient({
  url: process.env.NEXT_PUBLIC_BACKEND_API
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateContext>
      <Provider value={client}>
        <Navbar />
        <Component {...pageProps} />;
        <Footer />
      </Provider>
    </StateContext>
  );
}

export default MyApp;
