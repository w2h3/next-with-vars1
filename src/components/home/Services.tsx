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
    name: 'Psychiatry',
    offer1: 'Confused thinking or inability to concentrate',
    offer2: 'Significant tiredness, low energy or problems sleeping'  ,
    offer3: 'Foggy brain',
    offer4: 'Major changes in eating habits',

    image: `${psych.src}`,
  },
  {
    name: 'Physical Therapy',
    offer1: 'Acute and chronic problems',
    offer2: 'Pre and post-surgical rehabilitation',
    offer3: 'Tendonitis',
    offer4: 'Overuse injuries',

    image: `${physical.src}`,
  },
];

export default function Services() {
  return (
    <div className="py-12 testImage">
      <div className="container">
        <div className="lg:text-center">
          <h2 className="text-base text-wcyan font-semibold tracking-wide uppercase">
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
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {' '}
            {features.map((feature) => (
              <div key={feature.name} className="pt-16 lg:py-12 mr-2">
                <div className="pb-16 bg-white border-2 border-wcyan/20 shadow-2xl lg:pb-0 lg:z-10 lg:relative rounded-3xl ">
                  <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:flex  lg:"> 
                    <div className="lg:-my-8 lg:-ml-12 ">
                      {/* <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                      /> */}
                      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full  ">
                        <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:w-72 lg:h-72  ">
                          <img
                            className="object-cover lg:h-full lg:w-full"
                            src={feature.image}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" relative mt-12 lg:mt-4 lg:mb-4 lg:col-span-1 lg:pl-8 flex">
                      <div className=" relative mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-5 lg:max-w-none text-2xl text-wcyan ">
                        {' '}{feature.name}
                        <ul className="text-base text-black">
                          <li className="flex ">
                            <span className="mr-1">
                              <CheckIcon className="w-5 h-5 text-wcyan" />
                            </span>
                            {feature.offer1}
                          </li>
                          <li className="flex">
                            <span className="mr-1">
                              <CheckIcon className="w-5 h-5 text-wcyan/80" />
                            </span>
                            {feature.offer2}
                          </li>
                          <li className="flex">
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
                  </div>
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
