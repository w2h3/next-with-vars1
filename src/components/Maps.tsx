import Image from 'next/image';
import React from 'react';

const Maps = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px- lg:py-2">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-l md:mb-16 lg:mb-0">
          <h2 className="max-w-lg mb-4 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto lg:text-4xl lg:mb-16">
            <span className="relative inline-block">
              {/* <img
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-40 lg:mb-12 sm:block"
                // src="/brain.svg"
                // alt="brain"
              /> */}

              <span className="relative">Locations</span>
            </span>{' '}
          </h2>
          {/* <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p> */}
        </div>
        <div className="grid gap-8 row-gap-8 lg:grid-cols-6 lg:grid-rows-1 ">
          <div className="sm:text-center lg:col-span-2 lg:row-span-1 ">
            <div className="flex  items-center justify-center w-16 h-16 mb-4  bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24 lg:w-[80%] lg:h-[60%] lg:mx-0">
              <Image
                src="/maptest.jpg"
                alt="Picture of the author"
                height={500}
                width={600}
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">The good cheese</h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
              Cheese on toast airedale the big cheese. Danish fontina cheesy
              grin airedale danish
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-600"
            >
              Learn more
            </a>
          </div>
          <div className="sm:text-center lg:col-span-2 lg:row-span-1 ">
            <div className="flex  items-center justify-center w-16 h-16 mb-4  bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24 lg:w-[80%] lg:h-[60%] lg:mx-0">
              <Image
                src="/maptest.jpg"
                alt="Picture of the author"
                height={500}
                width={600}
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">The good cheese</h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
              Cheese on toast airedale the big cheese. Danish fontina cheesy
              grin airedale danish
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-600"
            >
              Learn more
            </a>
          </div>
          <div className="sm:text-center lg:col-span-2 lg:row-span-1 ">
            <div className="flex  items-center justify-center w-16 h-16 mb-4  bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24 lg:w-[80%] lg:h-[60%] lg:mx-0">
              <Image
                src="/maptest.jpg"
                alt="Picture of the author"
                height={500}
                width={600}
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">The good cheese</h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
              Cheese on toast airedale the big cheese. Danish fontina cheesy
              grin airedale danish
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-600"
            >
              Learn more
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Maps;
