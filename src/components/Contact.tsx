import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline';
import bgmap from 'public/cactus4.jpg';
import { useState } from 'react';

export default function Example() {
  const [buttonText, setButtonText] = useState('Send');

  return (
    <div className="testImage ">
      <div className="container max-w-6xl md:mb-16 ">
        {/*text-3xl  tracking-tight  text-gray-900 sm:text-4xl */}
        <h3 className="mx-auto">We're</h3>
        <h2 className="mx-auto font-bold text-shadow-md">Here</h2>
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
              <h1 className="text-center text-2xl font-extrabold tracking-tight text-[#00847D]/80 sm:text-5xl">
                Contact Us
              </h1>

              {/* <p className="text-center mt-3 text-xs leading-6 text-red-500">
                NOTE: DO NOT USE THIS FORM FOR ANY QUESTIONS RELATED TO PATIENT
                CARE, PLEASE CALL OUR OFFICE AT (480) 967-6888. IF YOU HAVE A
                MEDICAL EMERGENCY, PLEASE CALL 911.
              </p> */}
              <dl className="mt-6 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd className="flex">
                    <LocationMarkerIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3 mb-3">
                      2919 S. Ellsworth Road, Suite 135 Mesa, AZ 85212
                    </span>
                  </dd>
                  <dt className="sr-only">Postal address</dt>
                  <dd className="flex">
                    <LocationMarkerIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3 mb-3">
                      2919 S. Ellsworth Road, Suite 135 Mesa, AZ 85212
                    </span>
                  </dd>
                  <dt className="sr-only">Postal address</dt>
                  <dd className="flex">
                    <LocationMarkerIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3">
                      2919 S. Ellsworth Road, Suite 135 Mesa, AZ 85212
                    </span>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3 mb-3">+1 (480) 967-6888</span>
                  </dd>
                </div>
                <div className="mt-3 ">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3 mb-32 md:mb-20 text-gray-500 ">
                      clinic@drwang.com
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-[#5692B7]/60 py-16 sm:px-6 lg:col-span-2 lg:py-10 lg:px-8 xl:pl-12 rounded-2xl">
            <div className="max-w-lg mx-auto lg:max-w-none py-10">
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
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md"
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
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md"
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
                      className="px-10 mt-8 py-2 border-2 border-wcyan bg-[#00847D]/80 text-gray-50 font-light rounded-md text-lg flex flex-row items-center hover:bg-wcyan/50 "
                    >
                      {buttonText}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="text-cyan-500 ml-2"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                          fill="currentColor"
                        />
                      </svg>
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
