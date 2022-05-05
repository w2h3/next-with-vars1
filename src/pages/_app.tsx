import Head from 'next/head';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import '../components/swiper/swiper.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Neurology & Sleep Medicine Associates</title>
        <link rel='icon' type='image/icon' sizes='16x16' href='/favicon.ico' />
        <meta
          name='Neurology and Sleep Medicine Associates'
          content='Neurology/Sleep/Physical Therapy/Psychiatry in Arizona'
        />
        <meta name='author' content='James Wingert' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
