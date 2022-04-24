import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useState } from 'react';
import Divider from '../layout/Dividers';

export default function Contact() {
  return (
    <div>
      <Divider sectionName="How did we do?" />
      <div className="container max-w-6xl pb-24 ">
        <div className="relative bg-slate-50 rounded-2xl">
          <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
            <div className=" py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
              <div className="max-w-lg mx-auto">
                <h2 className="text-2xl font-extrabold tracking-tight text-wcyan sm:text-3xl">
                  Get in touch
                </h2>
                <p className="mt-3 text-lg leading-6 text-gray-500">
                  Suggestion? <br />
                  Good Experience? <br />
                  Bad Experience? <br />
                  <br />
                  This contact form will route directly to our Office Manager,
                  so please use it to let us know how we are doing and how we
                  can improve. <br />
                  <br /> We value all forms of feedback and can't wait to hear
                  from you!
                </p>
                <dl className="mt-8 text-base text-gray-500">
                  <div className="mt-6">
                    <dt className="sr-only">Phone number</dt>
                    <dd className="flex">
                      <PhoneIcon
                        className="flex-shrink-0 h-6 w-6 text-wcyan"
                        aria-hidden="true"
                      />
                      <span className="ml-3">+1 (480) 967-6888</span>
                    </dd>
                  </div>
                  <div className="mt-3">
                    <dt className="sr-only">Email</dt>
                    <dd className="flex">
                      <MailIcon
                        className="flex-shrink-0 h-6 w-6 text-wcyan"
                        aria-hidden="true"
                      />
                      <span className="ml-3">
                        billing@neurologyandsleep.com
                      </span>
                    </dd>
                  </div>
                </dl>
                <p className="mt-6 text-base text-gray-500">
                  Looking for basic contact form and info?{' '}
                  <br/>
                  <Link href="/contact" passHref>
                    <a className="font-medium text-wcyan underline">
                      View normal contact
                    </a>
                  </Link>
                  <br />
                </p>
              </div>
            </div>
            <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
              <div className="max-w-lg mx-auto lg:max-w-none">
                <form
                  action="#"
                  method="POST"
                  className="grid grid-cols-1 gap-y-6"
                >
                  <div>
                    <label htmlFor="full-name" className="sr-only">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      autoComplete="name"
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-wcyan focus:border-wcyan border-gray-300 rounded-md"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-wcyan focus:border-wcyan border-gray-300 rounded-md"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-wcyan focus:border-wcyan border-gray-300 rounded-md"
                      placeholder="Phone"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={8}
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-wcyan focus:border-wcyan border border-gray-300 rounded-md"
                      placeholder="Message"
                      defaultValue={''}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-wcyan hover:bg-wcyan/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wcyan/60"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
