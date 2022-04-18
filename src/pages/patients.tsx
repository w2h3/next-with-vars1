import Banner from '@/components/Banner';
import React from 'react';
import tester from 'public/forptbanner.jpg';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const links = [
  {
    name: 'Patient Portal',
    initials: 'PP',
    href: 'https://mycw34.eclinicalweb.com/portal3661/jsp/100mp/login_otp.jsp',
    bgColor: 'bg-wcyan',
  },
  {
    name: 'Online New Patient Form',
    initials: 'ONP',
    href: '#',
    bgColor: 'bg-purple-600',
  },
  {
    name: 'Print New Patient Form',
    initials: 'PNP',
    href: 'https://neurologyandsleep.com/wp-content/uploads/2020/03/New-Patient-Packet_3-2020.pdf',
    bgColor: 'bg-yellow-500',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const patients = () => {
  return (
    <>
      <Banner pageName={'For Patients'} imageURL={tester.src}></Banner>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div></div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-wcyan lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Please</span>
            </span>{' '}
            find links to our various patient resources below.
          </h2>
        </div>
        <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-3">
          <Link href="/" passHref>
            <button
              className="duration-300 transform bg-white border-l-4 border-wcyan hover:-translate-y-2"
              type="button"
            >
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <h6 className="mb-2 font-semibold leading-5 text-wcyan">
                  Online New Patient Form
                </h6>
                <p className="text-sm text-gray-900">
                  Click here to fill out and submit our new patient form online.
                </p>
              </div>
            </button>
          </Link>
          <Link
            href="https://neurologyandsleep.com/wp-content/uploads/2020/03/New-Patient-Packet_3-2020.pdf"
            passHref
          >
            <button
              className="duration-300 transform bg-white border-l-4 border-wcyan hover:-translate-y-2"
              type="button"
            >
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <h6 className="mb-2 font-semibold leading-5 text-wcyan">
                  Print New Patient Form
                </h6>
                <p className="text-sm text-gray-900">
                  Click here to navigate to our new patient PDF form.
                </p>
              </div>
            </button>
          </Link>
          <Link
            href="https://mycw34.eclinicalweb.com/portal3661/jsp/100mp/login_otp.jsp"
            passHref
          >
            <button
              className="duration-300 transform bg-white border-l-4 border-wcyan hover:-translate-y-2"
              type="button"
            >
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <h6 className="mb-2 font-semibold leading-5 text-wcyan">
                  Patient Portal
                </h6>
                <p className="text-sm text-gray-900">
                  Click here for access to the patient portal.
                </p>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default patients;

/* This example requires Tailwind CSS v2.0+ */
