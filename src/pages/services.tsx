/* eslint-disable @next/next/no-img-element */
import Banner from '@/components/layout/Banner';
import React from 'react';
// import tester from 'public/servebanner1.jpeg';
import tester from 'public/servebanner9.jpeg';
import icon1 from 'public/ser_icon1.png';
import icon2 from 'public/ser_icon2.png';
import icon3 from 'public/ser_icon3.png';
import icon4 from 'public/ser_icon4.png';
import icon5 from 'public/ser_icon5.png';
import icon6 from 'public/ser_icon6.png';
import icon7 from 'public/ser_icon9.png';
import icon8 from 'public/ser_icon8.png';

const features = [
  {
    name: 'PSG (Polysomnography)',
    description:
      'Used to record brain activities, respiratory efforts and body movement in sleep for diagnosis of a variety of sleep disorders such as sleep apnea and restless leg syndrome.',
    icon: `${icon1.src}`,
  },
  {
    name: 'CPAP Titration',
    description:
      'Used to find the best equipment and air pressure to treat obstructive sleep apnea.',
    icon: `${icon2.src}`,
  },
  {
    name: 'MSLT (Multiple Sleep Latency Test)',
    description:
      'Used to evaluate daytime sleepiness to diagnose disorders like narcolepsy.',
    icon: `${icon3.src}`,
  },
  {
    name: 'EEG (Electroencephalogram)',
    description:
      'Used to record electrical impulses of the brain for diagnosis of specific areas of abnormality.',
    icon: `${icon4.src}`,
  },
  {
    name: 'EMG / NCV',
    description:
      'Used to evaluate electrical waves in nervous system and muscles for diagnosis of the cause and site of nerve and muscular problems.',
    icon: `${icon5.src}`,
  },
  {
    name: 'VNG (Videonystagmography)',
    description:
      'VNG is a series of tests designed to evaluate the etiologies causing dizziness or balance problem.',
    icon: `${icon6.src}`,
  },
  {
    name: 'Botox',
    description:
      'Botox is used for migraine headaches because it blocks neurotransmitters that carry pain signals from your brain. It stops the chemicals before they get to the nerve endings around your head and neck.  ',
    icon: `${icon7.src}`,
  },
  {
    name: 'SUDOSCAN',
    description:
      'SUDOSCAN is a noninvasive, highly sensitive, and reproducible tool for the early detection of peripheral neuropathy. ',
    icon: `${icon8.src}`,
  },
];

const services = () => {
  return (
    <>
      <Banner pageName={'Services'} imageURL={tester} />
      <div className="testImage">
        <div className="container">
          <div className="bg-wcyan/30 rounded-3xl mb-20">
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8 text-center">
              <h2 className="text-3xl font-extrabold text-wcyan tracking-tight">
                Advanced Diagnostic Services
              </h2>
              <p className="mt-4 max-w-6xl text-lg text-slate-600 text-center">
                Our experienced team works together to evaluate your condition.
                Our advanced diagnostic services utilize state-of-the-art
                medical technology, providing referring physicians and patients
                with the opportunity to receive fast, accurate results so that
                appropriate treatments can begin as quickly as possible. Scroll
                down to review our Advanced Diagnostic Services.
              </p>
              <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <div>
                      <span className="flex items-center justify-center h-30 w-30 rounded-md ">
                        <img
                          className="h-30 w-30 text-slate-600"
                          aria-hidden="true"
                          src={feature.icon}
                          alt="service"
                        />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h3 className="text-lg font-medium text-slate-900 text-center">
                        {feature.name}
                      </h3>
                      <p className="mt-2 text-base text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
