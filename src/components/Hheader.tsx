import neuro from '/public/stock.jpg';
// import tester from '/public/fd5.jpg';
import tester1 from '/public/tester.jpg';
import Image from 'next/image';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

import tester from '/public/stock.jpg';

export const Hheader = () => {
  return (
    <div className="relative  ">
      {/* mt-[6rem] */}
      <img
        src={tester.src}
        className="absolute inset-0 object-contain w-full h-full "
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75 ">
        {/* md:h-[50rem] */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg: lg:py-20">
          <div className="flex flex-col  justify-center xl:flex-row">
            <div className="w-full max-w-2xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 text-center">
              <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none mx-auto">
                About Us{' '}
                <p className="justify-center text-[#7ba009]">
                  {/* About Us{' '} */}
                </p>{' '}
                {/* <p className="">Medicine Associates</p> */}
              </h1>
              <p className="max-w-lg mb-4 text-base text-white md:text-lg mx-auto">
          About Us
                {/* Serving our community since 2005. */}
              </p>
    
            </div>
            {/* <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Sign up for updates
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      First name
                    </label>
                    <input
                      placeholder="John"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      Last name
                    </label>
                    <input
                      placeholder="Doe"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      placeholder="john.doe@example.org"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hheader;


// export default function Hheader({ pageName }) {
//   return (
//     <div className="pt-28 bg-[#00AEC7] relative overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
//           <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
//             <div className="sm:text-center lg:text-left">
//               <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
//                 <span className="block xl:inline">{pageName}</span>
//                 {/* <span className="block text-indigo-600 xl:inline">online business</span> */}
//               </h2>
//               {/* <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
//                 Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
//                 fugiat veniam occaecat fugiat aliqua.
//               </p> */}
//             </div>
//           </main>
//         </div>
//       </div>
//       <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
//         <img
//           className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
//           src={neuro.src}
//           alt=""
//         />
//       </div>
//     </div>
//   );
// }
