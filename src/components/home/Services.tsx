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
    offer1: 'Headaches, facial pain, dizziness, tremors',
    offer2: 'Pain in the neck, back, or extremities',
    offer3: 'Weakness, numbness, or walking difficulty',
    offer4: 'Syncope or fainting (blackouts)',

    image: `${neuro.src}`,
  },
  {
    name: 'Sleep',
    offer1: 'Leg jerks or legs uncomfortable at night',
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

export default function Services() {
  return (
    <div className="py-12 testImage">
      <div className="container">
        <div className="text-center">
          <h2 className="text-base text-wcyan font-semibold tracking-wide uppercase text-center">
            Our Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to
            <span> Neurology and Sleep</span>
            <span> Medicine Associates. </span>
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our Providers are trained to provide a broad range of diagnostic &
            treatment services for adults, including:
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 sm:grid xl:space-y-0 xl:grid-cols-2 xl:gap-x-8 xl:gap-y-10">
            {' '}
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col items-center rounded-lg border-2 shadow-2xl md:flex-row md:max-w-xl border-wcyan/30 bg-slate-100"
              >
                <img
                  className="object-cover w-full h-96 rounded-t-lg md:h-52 md:w-48 md:rounded-none md:rounded-l-lg"
                  src={feature.image}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal ">
                  <h5 className="mb-2 text-2xl font-extrabold tracking-tight text-wcyan text-center">
                    {feature.name}
                  </h5>

                  <ul className="text-base text-black text-left mt-1 ">
                    <li className="flex items-center mb-1 ">
                      <span className="mr-1">
                        <CheckIcon className="w-5 h-5 text-wcyan" />
                      </span>
                      {feature.offer1}
                    </li>
                    <li className="flex items-center mb-1">
                      <span className="mr-1">
                        <CheckIcon className="w-5 h-5 text-wcyan/80" />
                      </span>
                      {feature.offer2}
                    </li>
                    <li className="flex items-center mb-1">
                      <span className="mr-1">
                        <CheckIcon className="w-5 h-5 text-wcyan/80" />
                      </span>
                      {feature.offer3}
                    </li>
                    <li className="flex">
                      <span className="mr-1">
                        <CheckIcon className="w-5 h-5 text-wcyan/80" />
                      </span>
                      {feature.offer4}
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
