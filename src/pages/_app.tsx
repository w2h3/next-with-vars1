import Head from 'next/head';
import Script from 'next/script';

import '../styles/globals.css';
import '../components/swiper/swiper.css';

import Layout from '../components/layout/Layout';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id='google-analytics-script' strategy='lazyOnload'>
        {/* dangerouslySetInnerHTML={ __html:*/}
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <Head>
        <title>Neurology & Sleep Medicine Associates</title>

        <meta
          name='Neurology and Sleep Medicine Associates'
          content='Neurology/Sleep/Physical Therapy in Arizona'
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
