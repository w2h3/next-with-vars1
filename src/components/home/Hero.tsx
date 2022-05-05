/* eslint-disable @next/next/no-html-link-for-pages */
import tester from '/public/banner2.jpeg';
import ExportedImage from 'next-image-export-optimizer';

import Link from 'next/link';
import { GoPrimitiveDot } from 'react-icons/go';
export default function Hero() {
  return (
    <div className="mt-[6.5rem]">
      <div className="relative h-[90vh]">
        <div className="relative  ">
          <ExportedImage
            src={tester}
            className="tiny-hero"
            alt=""
            layout="fill"
            priority={true}
            objectFit="cover"
            quality={75}
          />
          <div className="relative flex justify-center px-4  sm:px-6  bg-black bg-opacity-60 h-[90vh] items-center ">
            <div className=" max-w-7xl relative rounded-3xl ">
              <h1 className="text-center text-4xl md:text-5xl font-extrabold tracking-tighter lg:text-6xl ">
                <span className="block text-[#c2df6c]  sm:pt-10 font-nexa ">
                  Neurology and Sleep Medicine
                </span>
                <span className="block text-3xl mx:text-4xl font-thin tracking-widest  lg:text-5xl  text-white font-roboto align-text-bottom">
                  Associates
                </span>
              </h1>

              <div className="mt-12  max-w-lg sm:max-w-3xl mx-auto text-center text-2xl font-medium text-white flex flex-col sm:flex-row items-center justify-center">
                Neurology
                <GoPrimitiveDot className="text-[#c2df6c] mx-2" />
                Physical Therapy
                <GoPrimitiveDot className="text-[#c2df6c] mx-2" />
                Sleep
              </div>
              <p className="mt-12 max-w-lg mx-auto text-center text-xl font-medium font-widest text-white sm:max-w-3xl">
                Serving our local community since{' '}
                <span className="text-[#c2df6c]">2002</span>.
              </p>

              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 pb-10 px-10">
                  <Link href="/appointment">
                    <a className="flex items-center justify-center px-4 py-3 border  text-base font-bold rounded-xl shadow-sm text-white bg-wcyan hover:bg-opacity-60  hover:text-white border-white sm:px-8 text-center">
                      REQUEST APPOINTMENT
                    </a>
                  </Link>
                  <Link href="https://app.formdr.com/practice/MjE0Mjg=/form/K5ixNCi0wAsH8UKm1OIxGddyP-sLyZbr">
                    <a className="flex items-center justify-center px-4 py-3 border border-wcyan text-base font-bold rounded-xl shadow-sm text-wcyan bg-white hover:text-wcyan/60  sm:px-8 text-center">
                      NEW PATIENT FORM
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
