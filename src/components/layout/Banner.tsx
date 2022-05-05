/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
// import ExportedImage from "next-image-export-optimizer";

import ExportedImage from 'next-image-export-optimizer';

export default function Banner({ pageName, imageURL }) {
  return (
    <div className=" mt-[6.5rem]">
      <div className="relative h-[41vh]">
        <div className="relative">
          <ExportedImage
            src={imageURL.src}
            alt=""
            layout="fill"
            priority={true}
            objectFit="cover"
            // quality={60}
            // unoptimized={true}
            // placeholder="blur"
            // loading="eager"
          />
          {/* <img
            className="absolute"
            alt=""
            src={imageURL.src}
            style={{
              // float: "inline-start",
              width: '100%',
              height: '41vh',
              objectFit: 'cover',
            }}
          /> */}
          <div className="relative justify-center px-4  sm:px-6 pt-1 bg-black bg-opacity-50 h-[41vh] items-center">
            {/* py-20  */}
            <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl text-center mt-16 sm:mt-20 ">
              {pageName}
            </h1>

            <div className="pt-12 sm:pt-20" />

            <div className="max-w-sm mx-auto sm:max-w-none  flex justify-center ">
              <div className=" justify-center space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-7 px-10">
                <Link href="/appointment" passHref>
                  <button className="  flex  items-center justify-center px-4 py-3 border  text-base font-bold rounded-xl shadow-sm text-white bg-wcyan transition duration-450 hover:bg-[#07363D]   border-white  text-center">
                    REQUEST APPOINTMENT
                  </button>
                </Link>
                <Link
                  href="https://app.formdr.com/practice/MjE0Mjg=/form/K5ixNCi0wAsH8UKm1OIxGddyP-sLyZbr"
                  passHref
                >
                  <button
                    className="flex  items-center justify-center  px-9 py-3 border border-wcyan text-base font-bold rounded-xl shadow-sm text-wcyan bg-white  hover:text-[#052429] transition duration-450 "
                    // hover:text-white
                  >
                    NEW PATIENT FORM
                  </button>
                </Link>
              </div>
            </div>
          </div>{' '}
        </div>{' '}
      </div>
    </div>
  );
}
