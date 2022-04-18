import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
  NewspaperIcon,
} from '@heroicons/react/outline';
import bgmap from 'public/cactus4.jpg';
import { useState } from 'react';
import Divider from '../layout/Dividers';

export default function Contact() {
  const [buttonText, setButtonText] = useState('Send');

  return (
    <div className="testImage text-center">
      <Divider sectionName="Get In Touch"></Divider>
      <div className="container max-w-6xl md:pb-24 ">
        {/*text-3xl  tracking-tight  text-gray-900 sm:text-4xl */}

        <div className=" lg:grid lg:grid-cols-3 mt-14 ">
          <div
            className=" rounded-2xl py-1 px-4 sm:px-6 lg:col-span-1 lg:px-8 lg:py-10 xl:pr-12"
            style={{
              backgroundImage: `url(${bgmap.src})`,
              width: '100%',
              height: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom center',
            }}
          >
            {' '}
            {/* <Image
              src="/public/bgmap.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className="bgImage"
            /> */}
            <div className="max-w-lg  mx-auto">
              <h1 className="text-center text-2xl font-extrabold tracking-tight text-[#00847D]/80 sm:text-4xl">
                Contact Us
              </h1>

              {/* <p className="text-center mt-3 text-xs leading-6 text-red-500">
                NOTE: DO NOT USE THIS FORM FOR ANY QUESTIONS RELATED TO PATIENT
                CARE, PLEASE CALL OUR OFFICE AT (480) 967-6888. IF YOU HAVE A
                MEDICAL EMERGENCY, PLEASE CALL 911.
              </p> */}
              <dl className="mt-6 text-base text-gray-800 lg:text-gray-500">
                {' '}
                <div className="mt-4">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3 mb-2 font-bold text-lg">
                      +1 (480) 967-6888
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd className="flex">
                    <LocationMarkerIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3 mb-3 font-bold">
                      2919 S. Ellsworth Road, Suite 135 Mesa, AZ 85212
                    </span>
                  </dd>
                  <dt className="sr-only">Postal address</dt>
                  <dd className="flex">
                    <LocationMarkerIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3 mb-3 font-bold">
                      2045 S. Vineyard Road, Bldg. N3, Suite 144 Mesa, AZ 85210
                    </span>
                  </dd>
                  <dt className="sr-only">Postal address</dt>
                  <dd className="flex">
                    <LocationMarkerIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3 font-bold">
                      4001 E Baseline Road, Suite 205 Mesa, AZ 85234
                    </span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <NewspaperIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3 mb-3 font-bold">
                      +1 (480) 967-6887
                    </span>
                  </dd>
                </div>
                <div className="mt-3 ">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3 mb-32 md:mb-20 text-gray-800 lg:text-gray-500 font-bold">
                      billing@neurologyandsleep.com
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-[#d0e5e8] py-16 sm:px-6 lg:col-span-2 lg:py-10 lg:px-8 xl:pl-12 rounded-2xl">
            {/* [#5692B7]/60 */}
            <div className="max-w-lg mx-auto lg:max-w-none py-10">
              <form
                action="#"
                method="POST"
                className="grid grid-cols-1 gap-y-6 mx-4 sm:mx-0 "
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
                    className="block w-full shadow-sm py-3 px-4  placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md"
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
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md"
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
                    className="w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md"
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
                    rows={4}
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 border border-gray-300 rounded-md"
                    placeholder="Message"
                    defaultValue={''}
                  />
                </div>
                <div>
                  <div className="flex flex-col justify-between items-center ">
                    {' '}
                    NOTE: DO NOT USE THIS FORM FOR ANY QUESTIONS RELATED TO
                    PATIENT CARE, PLEASE CALL OUR OFFICE AT (480) 967-6888. IF
                    YOU HAVE A MEDICAL EMERGENCY, PLEASE CALL 911.
                    <button
                      type="submit"
                      className="px-10 mt-8 py-2  text-white bg-wcyan border border-wcyan hover:bg-wcyan/70 hover:border hover:border-wcyan font-bold rounded-md text-lg flex flex-row items-center"
                    >
                      {buttonText}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
