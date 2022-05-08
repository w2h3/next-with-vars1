import Link from 'next/link';
import * as React from 'react';

import Seo from '@/components/Seo';

export default function cs() {
  return (
    <>
      <Seo />

      <section className='container'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <h1 className='mt-8 text-4xl md:text-6xl'>
            This feature will be completed by 5/13/22. Please download and
            fillout the offline form for now. Thank you for your understanding.
          </h1>
          <Link
            className='mt-4 text-blue-600 underline underline-offset-2 md:text-lg'
            href='/patients'
          >
            Back to Patients Page.
          </Link>
        </div>
      </section>
    </>
  );
}
