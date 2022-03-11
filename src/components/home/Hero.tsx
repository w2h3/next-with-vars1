// import tester from '/public/fd5.jpg';
import tester from '/public/tester.jpg';
import Image from 'next/image';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

export default function Hero() {
  return (
    <div className="relative mt-24 bg-white overflow-hidden lg:border-b-2 mx-auto  border-[#107E8E]">
      <div className="max-w-7xl  mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 lg:pl-32 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"></div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="container ">
            {/* mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-20 */}
            <div className="text-center lg:-ml-52">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Welcome to</span>{' '}
                <span className="block text-[#7ba009] l:inline">
                  Neurology and Sleep
                </span>
                <span className="block text-gray-900 xl:inline">
                  Medicine Associates
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                {/* Welcome to Neurology & Sleep Medicine Associates. We Specialize
                in Neurology, Sleep medicine, Psychiatry, and Physical Therapy.
                Whether it is your mind, body, or soul, we are here for you.
                With three different locations throughout the East Valley, we
                make it simple to come see us. Please feel free to schedule a
                patient and fill out the paperwork online or bring it in. Thank
                you and we look forward to seeing you. */}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-[#16a1b6] text-base font-medium rounded-md text-white bg-wcyan hover:bg-[#16a1b6] md:py-4 md:text-lg md:px-10"
                  >
                    New Patient Form
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-wcyan text-base font-medium rounded-md text-wcyan bg-[#d0e5e8] hover:bg-[#16a1b6] md:py-4 md:text-lg md:px-10 hover:text-white"
                  >
                    Schedule Appointment
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="border-2 border-wcyan lg:border-0 relative bg-no-repeat  lg:w-full h-80  shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full">
          <Image
            src={tester.src}
            alt="Office Image"
            layout="fill"
            objectFit="cover"
          />
          {/* <img
          className="h-full w-full object-cover lg:w-full lg:h-full"
          src={bg2.src}
          alt=""
        /> */}
        </div>
      </div>
    </div>
  );
}
