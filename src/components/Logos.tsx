import alz from '/public/logos/alz.png';
import ah from '/public/logos/ah.png';
import ep from '/public/logos/ep2.png';
import ms from '/public/logos/ms.jpeg';
import pk from '/public/logos/pk.png';
import ExportedImage from 'next-image-export-optimizer';

import Link from 'next/link';

export default function Logo() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="h-12 w-full relative cursor-pointer">
              <Link href="https://alz.org" passHref>
                <ExportedImage
                  layout="fill"
                  objectFit="contain"
                  src={alz}
                  alt="Tuple"
                />
              </Link>
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="h-12 w-full relative cursor-pointer">
              <Link href="https://americanheadachesociety.org" passHref>
                <ExportedImage
                  layout="fill"
                  src={ah}
                  objectFit="contain"
                  alt="Tuple"
                />
              </Link>
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="h-12 w-full relative cursor-pointer">
              <Link href="https://epilepsy.com" passHref>
                <ExportedImage
                  layout="fill"
                  src={ep}
                  objectFit="cover"
                  alt="Tuple"
                />
              </Link>
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <div className="h-12 w-full relative cursor-pointer">
              <Link href="https://nationalmssociety.org" passHref>
                <ExportedImage
                  layout="fill"
                  src={ms}
                  objectFit="cover"
                  alt="Tuple"
                />
              </Link>
            </div>
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <div className="h-12 w-full relative cursor-pointer">
              <Link href="https://parkinson.org" passHref>
                <ExportedImage
                  layout="fill"
                  src={pk}
                  objectFit="contain"
                  alt="Tuple"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
