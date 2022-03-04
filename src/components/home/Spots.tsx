// import Image from 'next/image';
import React from 'react';

export const Spots = () => {
  return (
    <div className="bg-slate-100 border-b-2 border-l-2 border-r-2 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8 lg:py-12">
      {/* <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl border-8 border-gray-600 md:mb-12 w-full">
         <div className="flex  items-center justify-center w-16 h-16 mb-4  bg-cyan-700 sm:mx-auto sm:w-24 sm:h-24 lg:w-[90%] lg:h-[60%] lg:mx-0"> 
        <Image
          src="/maptest.jpg"
          alt="Picture of the author"
          height={250}
          width={800}
        />
         </div> 
      </div> */}
      <div className="grid gap-8 row-gap-5 mb-8 lg:px-60 md:row-gap-8  md:grid-cols-3 sm:grid-cols-2">
        <div className="duration-300 transform bg-white border-l-4 border-cyan-700 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Mesa</h6>
            <p className="text-sm text-gray-900">
            2919 S. Ellsworth Road, Suite 135 Mesa, AZ 85212
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-cyan-700  hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Chandler</h6>
            <p className="text-sm text-gray-900">
            2919 S. Ellsworth Road, Suite 135 Mesa, AZ 85212
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-cyan-700  hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">
              Mesa
            </h6>
            <p className="text-sm text-gray-900">
            2919 S. Ellsworth Road, Suite 135 Mesa, AZ 85212
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a
          href="/"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-cyan-700  hover:bg-cyan-600  focus:shadow-outline focus:outline-none mb-6"
        >
          Locations
        </a>
      </div>
    </div>
  );
};

export default Spots;
