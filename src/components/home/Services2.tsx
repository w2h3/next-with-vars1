import Image from 'next/image';
import psychiatry from 'public/psychiatry.jpg';
import psych from 'public/psych.jpg';
import insomnia from 'public/insomnia.jpg';
import physical from 'public/physical.jpg';
import Link from 'next/link';

export const Feature = () => {
  return (
    <div className="testImage ">
        {/* px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  lg:max-w-screen-7xl md:px-24 lg:px-8 lg:py-20  */}
        <div className="container mb-10 mx-auto text-center lg:max-w-lg md:mb-20 ">
          <h2 className="font-bold ">Services</h2>

          {/* #002e41
            #10298E */}
        </div>
        <div className=" grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
          <div className="flex items-center flex-col max-w-md mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-40 h-40 mb-4 rounded-2xl bg-indigo-50 overflow-hidden ">
                <Image
                  src={psychiatry.src}
                  alt=""
                  layout="intrinsic"
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-2xl font-bold leading-5 text-[#5582a6] underline ">
                Neurology
              </h6>
              <ul className="list-disc mb-3 text-md text-gray-900 ml-4">
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
              </ul>
              <Link href="/" passHref>
                <a
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-sky-500 hover:text-sky-600"
                >
                  Learn more
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-40 h-40 mb-4 rounded-2xl bg-indigo-50 overflow-hidden">
                <Image
                  src={insomnia.src}
                  alt=""
                  layout="intrinsic"
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <div>
              <h6 className="mb-3  text-2xl font-bold leading-5 text-[#5582a6] underline">
                Sleep
              </h6>
              <ul className="list-disc mb-3 text-md text-gray-900 ml-4">
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
              </ul>
              <Link href="/" passHref>
                <a
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-sky-500 hover:text-sky-600"
                >
                  Learn more
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-40 h-40 mb-4 rounded-2xl bg-indigo-50 overflow-hidden">
                <Image
                  src={physical.src}
                  alt=""
                  layout="intrinsic"
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-2xl font-bold leading-5 text-[#5582a6] underline">
                Physical Therapy
              </h6>
              <ul className="list-disc mb-3 text-md text-gray-900 ml-4">
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
              </ul>
              <Link href="/" passHref>
                <a
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-sky-500 hover:text-sky-600"
                >
                  Learn more
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-40 h-40 mb-4 rounded-2xl bg-indigo-50 overflow-hidden">
                {' '}
                <Image
                  src={psych.src}
                  alt=""
                  layout="intrinsic"
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-2xl font-bold leading-5 text-[#5582a6] underline ">
                Psychiatry
              </h6>
              <ul className="list-disc mb-3 text-md text-gray-900 ml-4">
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
              </ul>
              <Link href="/" passHref>
                <a
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-sky-500 hover:text-sky-600"
                >
                  Learn more
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};
