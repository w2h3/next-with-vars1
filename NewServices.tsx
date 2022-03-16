import Divider from './src/components/layout/Dividers';
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
    offer1: 'test1',
    offer2: 'test2',
    offer3: 'test3',
    offer4: 'test4',

    image: `${neuro.src}`,
  },
  {
    name: 'Sleep',
    offer1: 'test1',
    offer2: 'test2',
    offer3: 'test3',
    offer4: 'test4',

    image: `${insomnia.src}`,
  },
  {
    name: 'Psychiatry',
    offer1: 'test1',
    offer2: 'test2',
    offer3: 'test3',
    offer4: 'test4',

    image: `${psych.src}`,
  },
  {
    name: 'Physical Therapy',
    offer1: 'test1',
    offer2: 'test2',
    offer3: 'test3',
    offer4: 'test4',

    image: `${physical.src}`,
  },
];

export default function Services() {
  return (
    <div className="testImage">
      <div className="container">
        <Divider sectionName="Our Services"></Divider>
        <div className="mt-12 testImage max-w-md   mx-auto grid gap-20 lg:grid-cols-2 lg:max-w-6xl relative">
          {features.map((post) => (
            <div
              key={post.name}
              className="border-2 border-wcyan/10 h-82 flex-col rounded-2xl  shadow-2xl bg-slate-100 "
            >
              <div className=" relative grid gap-20 row-gap-12 lg:grid-cols-2 ">
                <div className="flex flex-col  mx-4">
                  {/* items-center */}
                  <div className="max-w-xl ">
                    <h2 className="max-w-lg font-extrabold tracking-tight text-wcyan/60  py-10 text-4xl sm:leading-none underline decoration-wcyan/30 text-center">
                      {post.name}
                    </h2>
                  </div>
                  <div className="">
                    <div className="grid text-center  sm:gap-2 grid-cols-2 sm:space-y-0 ">
                      <ul className="space-y-3">
                        <li className="flex">
                          <span className="mr-1">
                            <CheckIcon className="w-5 h-5 mt-px text-wcyan/80" />
                          </span>
                          {post.offer1}
                        </li>
                        <li className="flex">
                          <span className="mr-1">
                            <CheckIcon className="w-5 h-5 mt-px text-wcyan/80" />
                          </span>
                          {post.offer2}{' '}
                        </li>
                        <li className="flex">
                          <span className="mr-1">
                            <CheckIcon className="w-5 h-5 mt-px text-wcyan/80" />
                          </span>
                          {post.offer3}
                        </li>
                      </ul>
                      <ul className="space-y-3">
                        <li className="flex">
                          <span className="mr-1">
                            <CheckIcon className="w-5 h-5 mt-px text-wcyan/80" />
                          </span>
                          {post.offer4}
                        </li>
                        <li className="flex">
                          <span className="mr-1">
                            <CheckIcon className="w-5 h-5 mt-px text-wcyan/80" />
                          </span>
                          {post.offer5}
                        </li>
                        <li className="flex">
                          <span className="mr-1">
                            <CheckIcon className="w-5 h-5 mt-px text-wcyan/80" />
                          </span>
                          {post.offer6}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    className="object-cover w-60 h-60 rounded shadow-lg absolute right-0 -mt-2 rounded-2xl border-4 border-wcyan"
                    src={post.image}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
