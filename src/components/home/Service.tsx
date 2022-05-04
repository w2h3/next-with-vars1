import React from 'react';
import Divider from '../layout/Dividers';
import neuro from 'public/neuroserve1223.jpeg';
import insomnia from 'public/sleepserv1223.jpeg';
import physical from 'public/physical.jpg';
import { CheckIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Image from 'next/image';

//TODO make component, DRY

const Service = () => {
  return (
    <div className="bg-white">
      <section className="mx-auto px-8 py-8  max-w-6xl">
        {' '}
        <div className="text-center mb-5">
          <Divider sectionName={'Our Services'} />
        </div>
        <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 bg-slate-50 p-2 md:p-5 rounded-2xl shadow-xl border border-wcyan/20">
          <div className="">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-center text-wcyan md:leading-tight sm:text-left md:text-4xl font-equinox">
              Neurology
            </h2>
            <ul className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan" />
                Headache, migraine
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan" /> Pain in neck, back,
                and extremities
              </li>{' '}
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan " /> Memory problems,
                Alzheimer’s
              </li>{' '}
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan " /> Stroke, transient
                ischemic attack
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan " />
                Dizziness, balance problems
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan " /> Multiple
                sclerosis, tremors
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan " /> Seizures
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan " /> Epilepsy, passing
                out, blackouts
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan " /> Parkinson’s
                disease
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan " /> Restless leg
                syndrome
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
                src={neuro}
                className="rounded-2xl"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* md:h-52 md:w-48 h-96  */}
          </div>
        </div>
        <div className="grid items-center flex-col-reverse grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 bg-slate-50 p-2 md:p-5 rounded-2xl shadow-xl border-wcyan/20 border">
          <div className="order-none md:order-2  ">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-center text-wcyan md:leading-tight sm:text-left md:text-4xl font-equinox">
              Sleep
            </h2>
            <ul className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg ">
              <li className="flex items-center text-center ">
                <CheckIcon className="w-5 h-5 text-wcyan " />
                Obstructive sleep apnea; snoring
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan " /> Excessive daytime
                sleepiness
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan " /> Narcolepsy
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan " />
                Frequent awakening, insomnia
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan " /> Sleep walking,
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
                src={insomnia}
                className="rounded-2xl"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* md:h-52 md:w-48 h-96  */}
          </div>
        </div>
        <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 bg-slate-50 p-2 md:p-5 rounded-2xl shadow-xl border-wcyan/20 border ">
          <div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-center text-wcyan md:leading-tight sm:text-left md:text-4xl font-equinox">
              Neuro rehabilitation
            </h2>
            <ul className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              {' '}
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan " />
                Balance problems
              </li>{' '}
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan " /> Pain in neck,
                back, and extremities
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan " />
                Parkinson’s disease
              </li>
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan " /> Dizziness, vertigo
              </li>{' '}
              <li className="flex items-center text-center">
                <CheckIcon className="w-5 h-5 text-wcyan " />
                Post stroke rehab
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
                src={physical}
                className="rounded-2xl"
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
