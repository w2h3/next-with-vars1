import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Neurology & Sleep Medicine Associates</title>
        <link rel="icon" type="image/icon" sizes="16x16" href="/favicon.ico" />
        <meta
          name="description"
          content="Neurology/Sleep/Physical Therapy/Psychiatry in Arizona"
        />
        <meta name="author" content="James Wingert" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
