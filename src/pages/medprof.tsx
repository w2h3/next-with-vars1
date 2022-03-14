import Hheader from '@/components/Hheader';
import React from 'react';
import tester from 'public/stock.jpg';

const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

export default function MedProf() {
  return (
    <>
      <Hheader
        pageName={'Medical Professionals'}
        imageURL={tester.src}
      ></Hheader>
      <div className="pt-24">
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently asked questions
            </h2>
            <div className="mt-8">
              <dl className="divide-y divide-gray-200">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
                  >
                    <dt className="text-base font-medium text-gray-900 md:col-span-5">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 md:mt-0 md:col-span-7">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        Phone: (480) 967-6888 Fax: (480) 967-6887 Email Contacts: Billing
        Requests and Information: billing@neurologyandsleep.com Consults
        Requests and Information: consults@neurologyandsleep.com Dictation
        Requests and Information: dictation@neurologyandsleep.com Labs and
        Procedures Requests and Information: labs@neurologyandsleep.com
        Radiology Information: radiology@neurologyandsleep.com Referrals
        Requests and Information: referrals@neurologyandsleep.com Therapy
        Requests and Information: therapy@neurologyandsleep.com
      </div>
    </>
  );
}
