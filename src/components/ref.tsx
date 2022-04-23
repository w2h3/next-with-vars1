import AlzA from '/public/logos/AlzA.png';
import Head from 'public/logos/AmericanHeadache.png';
import Epi from 'public/logos/Epilepsy.png';
import MS from 'public/logos/MS.png';
import Park from 'public/logos/Park.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="h-12 w-full relative cursor-pointer">
              <Link href="https://alz.org" passHref>
                <Image layout="fill" src={AlzA.src} alt="Tuple" />
              </Link>
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="h-12 w-full relative cursor-pointer">
              <Link href="https://americanheadachesociety.org" passHref>
                <Image layout="fill" src={Head.src} alt="Tuple" />
              </Link>
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="h-12 w-full relative cursor-pointer">
              <Link href="https://epilepsy.com" passHref>
                <Image layout="fill" src={Epi.src} alt="Tuple" />
              </Link>
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <div className="h-12 w-full relative cursor-pointer">
              <Link href="https://nationalmssociety.org" passHref>
                <Image layout="fill" src={MS.src} alt="Tuple" />
              </Link>
            </div>
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <div className="h-12 w-full relative cursor-pointer">
              <Link href="https://parkinson.org" passHref>
                <Image layout="fill" src={Park.src} alt="Tuple" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
