import tester from '/public/banner1.jpg';
import Image from 'next/image';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Hero() {
  return (
    <div>
      {/* Hero card */}
      <div className=" mt-[6rem] bg-white">
        <div className=" max-w-screen mx-auto  ">
           <div className="relative shadow-xl sm:rounded-2xl   ">
            <div className="absolute inset-0"> 
          {/* <div className="relative ">
            <div className=" lg:border-0 absolute inset-0 bg-no-repeat  lg:w-full   shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"> */}
              <Image
                src={tester.src}
                alt="Office Image"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="relative inline-0 flex justify-center px-4 py-16 sm:px-6 sm:py-22 bg-black bg-opacity-50  ">
              {/* lg:pt-48 */}
              {/* md:px-28 2xl:px-[40rem] */}
              <div className=" max-w-2xl relative   bg-opacity-50  rounded-3xl px-10">
                <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl ">
                  <span className="block text-[#c2df6c] pt-10">
                    Neurology and Sleep
                  </span>
                  <span className="block text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
                    Medicine Associates
                  </span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl font-medium text-white sm:max-w-3xl">
                  Serving the Valley since 2005.
                </p>

                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 pb-10 px-10">
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border  text-base font-bold rounded-xl shadow-sm text-white bg-wcyan hover:bg-opacity-60  hover:text-white border-white sm:px-8 text-center"
                    >
                      REQUEST AN APPOINTMENT
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-wcyan text-base font-bold rounded-xl shadow-sm text-wcyan bg-white hover:text-wcyan/60  sm:px-8"
                      // hover:text-white
                    >
                      NEW PATIENT FORM
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// export const Header = () => {
//   return (
//     <div className="relative mt-24  py-20 px-32 bg-[#7dabc5] ">
//       <img
//         src={tester.src}
//         className=" relative left-96 right-0 top-0 object-contain  h-full w-full"
//         alt=""

//       />
//       <div className="relative  bg-opacity-75 h-[20rem] rounded-[.9rem]">
//         {/* md:h-[50rem] */}
//         <div className="px-4 py-16 mx-auto sm:max-w-lg md:max-w-full lg:max-w-screen-xl md:px-24 lg: lg:py-20">
//           <div className="flex flex-col  justify-center xl:flex-row">
//             <div className="w-full max-w-2xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 text-center">
//               <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none mx-auto">
//                 {/* Welcome to{' '} */}
//                 <p className="block ">
//                   Neurology and Sleep{' '}
//                   {/* text-[#7ba009] */}
//                 </p>{' '}
//                 <p className="pt-2">Medicine Associates</p>
//               </h1>
//               <p className="max-w-lg mb-4 text-base text-white md:text-lg mx-auto">
//                 Serving our community since 2005.
//               </p>
//               <div className="flex justify-between">
//                 <button
//                   type="submit"
//                   className=" font-sans  font-bold tracking-tight  sm:leading-none text-center px-10 mt-8 py-4 border-2 border-wcyan bg-wcyan/80
//                 [#00847D]/60
//                 text-gray-50  rounded-md text-lg flex flex-row items-center hover:bg-wcyan/50 "
//                 >
//                   Request Appointment
//                 </button>
//                 <button
//                   type="submit"
//                   className=" font-sans  font-bold tracking-tight  sm:leading-none text-center px-10 mt-8 py-2 border-2 border-wcyan bg-wcyan/80
//                 [#00847D]/60
//                 text-gray-50  rounded-md text-lg flex flex-row items-center hover:bg-wcyan/50 "
//                 >
//                   New Patient Form
//                 </button>
//               </div>
//             </div>
//             {/* <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
//               <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
//                 <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
//                   Sign up for updates
//                 </h3>
//                 <form>
//                   <div className="mb-1 sm:mb-2">
//                     <label
//                       htmlFor="firstName"
//                       className="inline-block mb-1 font-medium"
//                     >
//                       First name
//                     </label>
//                     <input
//                       placeholder="John"
//                       required
//                       type="text"
//                       className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
//                       id="firstName"
//                       name="firstName"
//                     />
//                   </div>
//                   <div className="mb-1 sm:mb-2">
//                     <label
//                       htmlFor="lastName"
//                       className="inline-block mb-1 font-medium"
//                     >
//                       Last name
//                     </label>
//                     <input
//                       placeholder="Doe"
//                       required
//                       type="text"
//                       className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
//                       id="lastName"
//                       name="lastName"
//                     />
//                   </div>
//                   <div className="mb-1 sm:mb-2">
//                     <label
//                       htmlFor="email"
//                       className="inline-block mb-1 font-medium"
//                     >
//                       E-mail
//                     </label>
//                     <input
//                       placeholder="john.doe@example.org"
//                       required
//                       type="text"
//                       className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
//                       id="email"
//                       name="email"
//                     />
//                   </div>
//                   <div className="mt-4 mb-2 sm:mb-4">
//                     <button
//                       type="submit"
//                       className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
//                     >
//                       Subscribe
//                     </button>
//                   </div>
//                   <p className="text-xs text-gray-600 sm:text-sm">
//                     We respect your privacy. Unsubscribe at any time.
//                   </p>
//                 </form>
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Header;
