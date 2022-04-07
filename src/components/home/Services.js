/* eslint-disable @next/next/no-img-element */
import services from '@/pages/services';
import Divider from '../layout/Dividers';
import neuro from 'public/neuroserve.jpg';
import psych from 'public/psychserv.jpg';
import insomnia from 'public/sleepserv.jpg';
import physical from 'public/physical.jpg';
import { CheckIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    name: 'Neurology',
    // offer: {
    //   bob: 'Headaches, facial pain, dizziness, tremors',
    //   sally: 'Pain in the neck, back, or extremitie',
    //   bill: 'Pain in the neck, back, or extremitie',
    // },
    offer2: 'Pain in the neck, back, or extremities',
    offer3: 'Weakness, numbness, or walking difficulty',
    offer4: 'Syncope or fainting (blackouts)',

    image: `${neuro.src}`,
  },
  {
    name: 'Sleep',
    offer: [
      'Sleep walking & other unusual sleep behavior',
      'Injuries related to neurological diseases and other various injuries',
      'Frequent awakening during the night',
    ],
    offer2: 'Sleepy / fall asleep during the day',
    offer3: 'Frequent awakening during the night',
    offer4: 'Sleep walking & other unusual sleep behavior',

    image: `${insomnia.src}`,
  },
  {
    name: 'Physical Therapy',
    offer1: 'Acute and chronic problems',
    offer2: 'Pre and post-surgical rehabilitation',
    offer3: 'Tendonitis',
    offer4:
      'Injuries related to neurological diseases and other various injuries',

    image: `${physical.src}`,
  },
  {
    name: 'Psychiatry',
    offer1: 'Confused thinking or inability to concentrate',
    offer2: 'Significant tiredness, low energy or problems sleeping',
    offer3: 'Foggy brain',
    offer4: 'Major changes in eating habits',

    image: `${psych.src}`,
  },
];
const neurOffer = [
  'headache, migraine ',
  'pain in neck, back, and extremities ',
  'dizziness, balance problems ',
  'multiple sclerosis ',
  'Parkinson’s disease, tremor, restless leg syndrome ',
  'memory problems, Alzheimer’s ',
];
const psychOffer = [
  'headache, migraine ',
  'pain in neck, back, and extremities ',
  'dizziness, balance problems ',
  'multiple sclerosis ',
  'Parkinson’s disease, tremor, restless leg syndrome ',
  'memory problems, Alzheimer’s ',
];
const ptOffer = [
  'headache, migraine ',
  'pain in neck, back, and extremities ',
  'dizziness, balance problems ',
  'multiple sclerosis ',
  'Parkinson’s disease, tremor, restless leg syndrome ',
  'memory problems, Alzheimer’s ',
];
const sleepOffer = [
  'headache, migraine ',
  'pain in neck, back, and extremities ',
  'dizziness, balance problems ',
  'multiple sclerosis ',
  'Parkinson’s disease, tremor, restless leg syndrome ',
  'memory problems, Alzheimer’s ',
];
export default function Services() {
  const feat = features.map((feature) => {
    return feature.offer;
  });
  // console.log(feat);

  const bob = feat[1].map((barry) => {
    return barry;
  });
  console.log(bob);
  let newBob = bob.concat([bob]);

  return (
    <div className="testImage">
      <div className="container">
        <div className="text-center">
          <Divider sectionName={'Our Services'}></Divider>
          {/* <h2 className="text-base text-wcyan font-semibold tracking-wide uppercase text-center">
            Our Services
          </h2> */}
          {/* <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to
            <span> Neurology and Sleep</span>
            <span> Medicine Associates. </span>
          </p> */}
          <p className="mt-4 max-w-6xl text-xl text-gray-500 lg:mx-auto text-center">
            Our Providers are trained to provide a broad range of diagnostic &
            treatment services for adults, including:
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 justify-center sm:grid  xl:space-y-0 xl:grid-cols-2 xl:gap-x-8 xl:gap-y-10">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col items-center rounded-lg border-2 shadow-2xl md:flex-row md:max-w-xl border-wcyan/30 bg-white"
              >
                <div className="relative w-full h-96 rounded-t-lg md:h-52 md:w-48 md:rounded-none md:rounded-l-lg">
                  <Image
                    src={feature.image}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal ">
                  <h5 className="mb-2 text-2xl font-extrabold tracking-tight text-wcyan text-center">
                    {feature.name}
                  </h5>
                  <ul className="text-base text-black text-left mt-1 ">
                    <li className="flex items-center mb-1 ">
                      <div className="mr-1">
                        {feat[1].map((barry) => {
                          <span
                            key={barry}
                            className="flex items-center"
                          >
                            <CheckIcon className="w-5 h-5 text-wcyan" />
                            {bob}
                          </span>;
                        })}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </dl>
          {/* ))} */}
        </div>
      </div>{' '}
    </div>
  );
}
