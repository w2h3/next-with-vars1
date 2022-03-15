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
    offer1: 'test1',
    offer2: 'test2',
    offer3: 'test3',
    offer4: 'test4',
    offer5: 'test1',
    offer6: 'test2',
    offer7: 'test3',
    offer8: 'test4',
    image: `${neuro.src}`,
  },
  {
    name: 'Sleep',
    offer1: 'test1',
    offer2: 'test2',
    offer3: 'test3',
    offer4: 'test4',
    offer5: 'test1',
    offer6: 'test2',
    offer7: 'test3',
    offer8: 'test4',
    image: `${insomnia.src}`,
  },
  {
    name: 'Psychiatry',
    offer1: 'test1',
    offer2: 'test2',
    offer3: 'test3',
    offer4: 'test4',
    offer5: 'test1',
    offer6: 'test2',
    offer7: 'test3',
    offer8: 'test4',
    image: `${psych.src}`,
  },
  {
    name: 'Physical Therapy',
    offer1: 'test1',
    offer2: 'test2',
    offer3: 'test3',
    offer4: 'test4',
    offer5: 'test1',
    offer6: 'test2',
    offer7: 'test3',
    offer8: 'test4',
    image: `${physical.src}`,
  },
];

export default function Services() {
  return (
    <div className="testImage">
      <div className="container">
        <Divider sectionName="Our Services"></Divider>
        <div className="mt-12 testImage max-w-lg  mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
          {features.map((post) => (
            <div
              key={post.name}
              className="flex border-2 border-wcyan flex-col rounded-lg shadow-xl bg-white overflow-hidden "
            >
              <div className="grid gap-5 row-gap-10 lg:grid-cols-2 ">
                <div className="flex flex-col mx-4">
                    {/* items-center */}
                  <div className="max-w-xl mb-6 ">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-wcyan/80  py-10 sm:text-4xl sm:leading-none underline decoration-wcyan/40">
                      {post.name}
                    </h2>
                  </div>
                  <div className="justify-between">
                    <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0 ">
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
                    className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
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
