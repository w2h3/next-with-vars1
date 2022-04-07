import React from 'react';
import services from '@/pages/services';
import Divider from '../layout/Dividers';
import neuro from 'public/neuroserve.jpg';
import psych from 'public/psychserv.jpg';
import insomnia from 'public/sleepserv.jpg';
import physical from 'public/physical.jpg';
import { CheckIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Image from 'next/image';

//TODO make component, DRY

const Service = () => {
  return (
    <div className="testImage">
      <section className="container mx-auto  ">
        <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 bg-white p-2 md:p-5 rounded-2xl shadow-lg border border-wcyan/20">
          <div className="">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-wcyan md:leading-tight sm:text-left md:text-6xl">
              Neurology
            </h2>
            <ul className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" />
                Headache, migraine
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" /> Pain in neck,
                back, and extremities
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" />
                Dizziness, balance problems
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" /> Multiple
                sclerosis, tremors
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" /> Seizure,
                epilepsy, passing out, blackouts
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" /> Parkinson’s
                disease
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" /> Restless leg
                syndrome
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" /> Stroke,
                transient ischemic attack
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" /> Memory
                problems, Alzheimer’s
              </li>
            </ul>
            <Link href="/services" passHref>
              <button className="bg-wcyan border border-wcyan hover:bg-wcyan/70 hover:border hover:border-wcyan text-white font-bold py-2 px-4 rounded-full ">
                Learn More
              </button>
            </Link>
          </div>
          <div className=" w-full h-full flex flex-col items-center">
            <div className="relative w-full h-96  md:h-140 ">
              <Image
                src={neuro.src}
                className="md:rounded-3xl"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* md:h-52 md:w-48 h-96  */}
          </div>
        </div>
        <div className="grid items-center flex-col-reverse grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 bg-white p-2 md:p-5 rounded-2xl shadow-lg border-wcyan/20 border">
          <div className="order-none md:order-2">
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-wcyan md:leading-tight sm:text-left md:text-6xl">
              Sleep
            </h2>
            <ul className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" />
                Obstructive sleep apnea; snoring
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" /> Excessive
                daytime sleepiness, narcolepsy
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" />
                Frequent awakening, insomnia
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" /> Sleep walking,
                sleep talking
              </li>
            </ul>
            <Link href="/services" passHref>
              <button className="bg-wcyan border border-wcyan hover:bg-wcyan/70 hover:border hover:border-wcyan text-white font-bold py-2 px-4 rounded-full ">
                Learn More
              </button>
            </Link>
          </div>
          <div className=" w-full h-full flex flex-col items-center">
            <div className="relative w-full h-96  md:h-140 ">
              <Image
                src={insomnia.src}
                className="md:rounded-3xl"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* md:h-52 md:w-48 h-96  */}
          </div>
        </div>
        <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 bg-white p-2 md:p-5 rounded-2xl shadow-lg border-wcyan/20 border">
          <div>
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-wcyan md:leading-tight sm:text-left md:text-6xl">
              Neuro Rehabilitation
            </h2>
            <ul className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" />
                Post stroke rehab
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" /> Pain in neck,
                back, and extremities
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" />
                Parkinson’s disease, balance problems
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" /> Dizziness,
                vertigo
              </li>
            </ul>
            <Link href="/services" passHref>
              <button className="bg-wcyan border border-wcyan hover:bg-wcyan/70 hover:border hover:border-wcyan text-white font-bold py-2 px-4 rounded-full ">
                Learn More
              </button>
            </Link>
          </div>
          <div className=" w-full h-full flex flex-col items-center">
            <div className="relative w-full h-96  md:h-140 ">
              <Image
                src={physical.src}
                className="md:rounded-3xl"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* md:h-52 md:w-48 h-96  */}
          </div>
        </div>
        <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 bg-white p-2 md:p-5 rounded-2xl shadow-lg border-wcyan/20 border">
          <div className="order-none md:order-2">
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-wcyan md:leading-tight sm:text-left md:text-6xl">
              Psychiatry
            </h2>
            <ul className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" />
                Depression, anxiety
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" /> Memory
                problems
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" /> Cognitive
                impatiemment
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" />
                Mental status changes, Alzheimer’s
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan mr-2" /> Traumatic
                brain injury
              </li>
            </ul>
            <Link href="/services" passHref>
              <button className="bg-wcyan border border-wcyan hover:bg-wcyan/70 hover:border hover:border-wcyan text-white font-bold py-2 px-4 rounded-full ">
                Learn More
              </button>
            </Link>
          </div>
          <div className=" w-full h-full flex flex-col items-center">
            <div className="relative w-full h-96  md:h-140 ">
              <Image
                src={psych.src}
                className="md:rounded-3xl"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* md:h-52 md:w-48 h-96  */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
