/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import Image from 'next/image';

export default function Banner({ pageName, imageURL }) {
  return (
    <div className="relative mt-[4rem]">
      <div className="absolute inset-0">
        {/* style={{ width: '9px', height: '1px' }} */}
        <div>
          <Image
            src={imageURL}
            className="inset-0 object-center "
            alt=""
            layout="fill"
            priority
            objectFit="cover"
            quality={60}
            // width={103}
            // height={70}
          />
        </div>
        <div
          className="absolute  inset-0  bg-black bg-opacity-40"
          aria-hidden="true"
        />

      </div>
      <div className="relative max-w-7xl mx-auto py-20 px-4   sm:px-6 lg:px-8">
        <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl text-center mt-20">
          {pageName}
        </h1>

        <div className="pt-20"></div>

        <div className="max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-7 px-10">
            <Link href="/appointment" passHref>
              <a className="flex items-center justify-center px-4 py-3 border  text-base font-bold rounded-xl shadow-sm text-white bg-wcyan hover:bg-opacity-60  hover:text-white border-white sm:px-8 text-center">
                REQUEST APPOINTMENT
              </a>
            </Link>
            <Link
              href="https://app.formdr.com/practice/MjE0Mjg=/form/K5ixNCi0wAsH8UKm1OIxGddyP-sLyZbr"
              passHref
            >
              <a
                className="flex items-center justify-center px-4 py-3 border border-wcyan text-base font-bold rounded-xl shadow-sm text-wcyan bg-white hover:text-wcyan/60  sm:px-8"
                // hover:text-white
              >
                NEW PATIENT FORM
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
