import React from 'react';

import Banner from '@/components/layout/Banner';

import tester from '/public/resized/drtest.jpg';

const faqs = [
  {
    id: 1,
    question: 'Phone',
    answer: '(480) 967-6888',
  },
  {
    id: 2,
    question: 'Fax',
    answer: '(480) 967-6887',
  },
  {
    id: 3,
    question: 'Billing Requests and Information:',
    answer: 'billing@neurologyandsleep.com',
  },
  {
    id: 3,
    question: 'Consults Requests and Information:',
    answer: 'consults@neurologyandsleep.com ',
  },
  {
    id: 3,
    question: 'Dictation Requests and Information: ',
    answer: 'dictation@neurologyandsleep.com',
  },
  {
    id: 3,
    question: 'Labs and Procedures Requests and Information:  ',
    answer: 'labs@neurologyandsleep.com ',
  },
  {
    id: 3,
    question: 'Radiology Information: ',
    answer: 'radiology@neurologyandsleep.com',
  },
  {
    id: 3,
    question: 'Radiology Information: ',
    answer: 'radiology@neurologyandsleep.com',
  },
  {
    id: 3,
    question: 'Referrals Requests and Information:',
    answer: 'referrals@neurologyandsleep.com',
  },
  {
    id: 3,
    question: 'Therapy Requests and Information:',
    answer: 'therapy@neurologyandsleep.com',
  },
];

export default function MedProf() {
  return (
    <>
      <Banner
        pageName='Medical Professionals'
        imageURL={
          'https://res.cloudinary.com/jameswingert/image/upload/c_lfill,g_south,h_360,q_auto:low,w_1600/v1651729614/drtest_t3fzum.webp'
        }
      />
      <div className='container pt-24'>
        <div className='bg-gray-50'>
          <div className='mx-auto max-w-7xl divide-y divide-gray-200 py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
            <h2 className='text-3xl font-extrabold text-gray-900'>
              For Medical Professionals
            </h2>
            <div className='mt-8'>
              <dl className='divide-y divide-gray-200'>
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className='pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8'
                  >
                    <dt className='text-base font-medium text-gray-900 md:col-span-5'>
                      {faq.question}
                    </dt>
                    <dd className='mt-2 md:col-span-7 md:mt-0'>
                      <p className='text-base text-gray-500'>{faq.answer}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
