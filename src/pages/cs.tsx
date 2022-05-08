import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ComingSoon() {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <h1 className='mt-8 text-4xl md:text-6xl'>
              This feature will be completed by 5/13/22. Please download and
              fillout the offline form for now. Thank you for your
              understanding.
            </h1>
            <link
              className='mt-4 text-blue-600 underline underline-offset-2 md:text-lg'
              href='/patients'
            >
              Back to Patients Page.
            </link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
