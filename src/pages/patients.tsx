import Banner from '@/components/Banner';
import React from 'react';
import tester from 'public/forptbanner.jpg';
import { DotsVerticalIcon } from '@heroicons/react/solid';

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
      <div className="testImage">
        <div className="container">
          <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
            Patient Links
          </h2>
          <p>
            The "Online New Patient Form" lets you submit your new patient
            paperwork electronically.
          </p>
          <p>
            The "Print New Patient Form" is for downloading and printing the
            form.
          </p>
          <ul
            role="list"
            className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4  mb-40"
          >
            {links.map((link) => (
              <li
                key={link.name}
                className="col-span-1 flex shadow-sm rounded-md"
              >
                <div
                  className={classNames(
                    link.bgColor,
                    'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
                  )}
                >
                  {link.initials}
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                  <div className="flex-1 px-4 py-2 text-sm truncate">
                    <a
                      href={link.href}
                      className="text-gray-900 font-medium hover:text-gray-600"
                    >
                      {link.name}
                    </a>{' '}
                  </div>
                  <div className="flex-shrink-0 pr-2">
                    <button
                      type="button"
                      className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="sr-only">Open options</span>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default patients;

/* This example requires Tailwind CSS v2.0+ */
