import Divider from '../layout/Dividers';
import neuro from 'public/neuroserve.jpg';
import psych from 'public/psychserv.jpg';
import insomnia from 'public/sleepserv.jpg';
import physical from 'public/physical.jpg';
import { CheckIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  { name: 'Neurology', description: 'Designed by Good Goods, Inc.' },
  {
    name: 'Sleep',
    description:
      'Solid walnut base with rare earth magnets and powder coated steel card cover',
  },
  { name: 'Psychiatry', description: '6.25" x 3.55" x 1.15"' },
  {
    name: 'Physical Therapy',
    description: 'Hand sanded and finished with natural oil',
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      <Divider sectionName="Our Services"></Divider>
      <div className="container  grid  grid-cols-1 gap-x-8  lg:grid-cols-2">
          <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="bg-gray-100 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

// export default function Services() {
//   return (
//     <div className="testImage pt-10">
//       <Divider sectionName="What We Offer"></Divider>
//       <div className="container">
//         <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 mb-20 ">
//         <div className="flex flex-col items-center bg-white rounded-lg border shadow-xl md:flex-row md:max-w-xl">
//               <img
//                 className="object-cover w-full h-96 rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
//                 src={neuro.src}
//                 alt=""
//               />
//               <div className="flex flex-col justify-between leading-normal">
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-wcyan  ">
//                   Sleep
//                 </h5>
//                 <dd className="list-disc font-normal text-gray-700 ">
//                   <dd className="flex">
//                     <CheckIcon
//                       className="flex-shrink-0 h-6 w-6 text-wcyan"
//                       aria-hidden="true"
//                     />
//                     <span className="ml-3 mb-3">
//                       Leg jerks or legs uncomfortable at night
//                     </span>
//                   </dd>
//                   <dd className="mb-3 list-disc font-normal text-gray-700    ">
//                     <dd className="flex">
//                       <CheckIcon
//                         className="flex-shrink-0 h-6 w-6 text-wcyan"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-3">
//                         Sleepy / fall asleep during the day
//                       </span>
//                     </dd>
//                   </dd>

//                   <dd className="list-disc font-normal text-gray-700    ">
//                     <dd className="flex">
//                       <CheckIcon
//                         className="flex-shrink-0 h-6 w-6 text-wcyan"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-3 mb-3">
//                         Frequent awakening during the night
//                       </span>
//                     </dd>
//                     <dd className="mb-3 list-disc font-normal text-gray-700    ">
//                       <dd className="flex">
//                         <CheckIcon
//                           className="flex-shrink-0 h-6 w-6 text-wcyan"
//                           aria-hidden="true"
//                         />
//                         <span className="ml-3 mb-3">
//                           Sleep walking & other unusual sleep behavior
//                         </span>
//                       </dd>{' '}
//                       <div>
//                         <Link href="/" passHref>
//                           <a
//                             aria-label=""
//                             className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
//                           >
//                             Learn more
//                             <svg
//                               className="inline-block w-3 ml-2"
//                               fill="currentColor"
//                               viewBox="0 0 12 12"
//                             >
//                               <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
//                             </svg>
//                           </a>
//                         </Link>
//                       </div>
//                     </dd>
//                   </dd>
//                 </dd>
//               </div>
//           </div>

//           <div className="flex flex-col items-center bg-white rounded-lg border shadow-xl md:flex-row md:max-w-xl ">
//               <img
//                 className="object-cover w-full h-96 rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
//                 src={psych.src}
//                 alt=""
//               />
//               <div className="flex flex-col justify-between p-4 leading-normal">
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-wcyan   ">
//                   Psychiatry
//                 </h5>
//                 <dd className="list-disc font-normal text-gray-700    ">
//                   <dd className="flex">
//                     <CheckIcon
//                       className="flex-shrink-0 h-6 w-6 text-wcyan"
//                       aria-hidden="true"
//                     />
//                     <span className="ml-3 mb-3">Depression</span>
//                   </dd>
//                   <dd className="mb-3 list-disc font-normal text-gray-700    ">
//                     <dd className="flex">
//                       <CheckIcon
//                         className="flex-shrink-0 h-6 w-6 text-wcyan"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-3">ADHD</span>
//                     </dd>
//                   </dd>

//                   <dd className="list-disc font-normal text-gray-700    ">
//                     <dd className="flex">
//                       <CheckIcon
//                         className="flex-shrink-0 h-6 w-6 text-wcyan"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-3 mb-3">
//                         Mental health issues as a result of neurological
//                         disease.
//                       </span>
//                     </dd>
//                     <dd className="mb-3 list-disc font-normal text-gray-700    ">
//                       <dd className="flex">
//                         <CheckIcon
//                           className="flex-shrink-0 h-6 w-6 text-wcyan"
//                           aria-hidden="true"
//                         />
//                         <span className="ml-3 mb-3">Anxiety</span>
//                       </dd>{' '}
//                       <div>
//                         <Link href="/" passHref>
//                           <a
//                             aria-label=""
//                             className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
//                           >
//                             Learn more
//                             <svg
//                               className="inline-block w-3 ml-2"
//                               fill="currentColor"
//                               viewBox="0 0 12 12"
//                             >
//                               <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
//                             </svg>
//                           </a>
//                         </Link>
//                       </div>
//                     </dd>
//                   </dd>
//                 </dd>
//               </div>
//           </div>

//           <div className="flex flex-col  bg-white rounded-lg border shadow-xl md:flex-row md:max-w-xl ">
//               {/* items-center */}
//               <img
//                 className="object-cover w-full h-96 rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
//                 src={physical.src}
//                 alt=""
//               />
//               <div className="flex flex-col justify-between p-4 leading-normal">
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-wcyan   ">
//                   Physical Therapy
//                 </h5>
//                 <dd className="list-disc font-normal text-gray-700    ">
//                   <dd className="flex">
//                     <CheckIcon
//                       className="flex-shrink-0 h-6 w-6 text-wcyan"
//                       aria-hidden="true"
//                     />
//                     <span className="ml-3 mb-3">Muscle soreness</span>
//                   </dd>
//                   <dd className="mb-3 list-disc font-normal text-gray-700    ">
//                     <dd className="flex">
//                       <CheckIcon
//                         className="flex-shrink-0 h-6 w-6 text-wcyan"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-3">Stretching</span>
//                     </dd>
//                   </dd>

//                   <dd className="list-disc font-normal text-gray-700    ">
//                     <dd className="flex">
//                       <CheckIcon
//                         className="flex-shrink-0 h-6 w-6 text-wcyan"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-3 mb-3">Rehab</span>
//                     </dd>
//                     <dd className="mb-3 list-disc font-normal text-gray-700    ">
//                       <dd className="flex">
//                         <CheckIcon
//                           className="flex-shrink-0 h-6 w-6 text-wcyan"
//                           aria-hidden="true"
//                         />
//                         <span className="ml-3 mb-3">MS recovery</span>
//                       </dd>{' '}
//                       <div>
//                         <Link href="/" passHref>
//                           <a
//                             aria-label=""
//                             className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
//                           >
//                             Learn more
//                             <svg
//                               className="inline-block w-3 ml-2"
//                               fill="currentColor"
//                               viewBox="0 0 12 12"
//                             >
//                               <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
//                             </svg>
//                           </a>
//                         </Link>
//                       </div>
//                     </dd>
//                   </dd>
//                 </dd>
//               </div>
//           </div>

//           <div className="flex flex-col items-center bg-white rounded-lg border shadow-xl md:flex-row md:max-w-xl">
//               <img
//                 className="object-cover w-full h-96 rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
//                 src={insomnia.src}
//                 alt=""
//               />
//               <div className="flex flex-col justify-between leading-normal">
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-wcyan  ">
//                   Sleep
//                 </h5>
//                 <dd className="list-disc font-normal text-gray-700 ">
//                   <dd className="flex">
//                     <CheckIcon
//                       className="flex-shrink-0 h-6 w-6 text-wcyan"
//                       aria-hidden="true"
//                     />
//                     <span className="ml-3 mb-3">
//                       Leg jerks or legs uncomfortable at night
//                     </span>
//                   </dd>
//                   <dd className="mb-3 list-disc font-normal text-gray-700    ">
//                     <dd className="flex">
//                       <CheckIcon
//                         className="flex-shrink-0 h-6 w-6 text-wcyan"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-3">
//                         Sleepy / fall asleep during the day
//                       </span>
//                     </dd>
//                   </dd>

//                   <dd className="list-disc font-normal text-gray-700    ">
//                     <dd className="flex">
//                       <CheckIcon
//                         className="flex-shrink-0 h-6 w-6 text-wcyan"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-3 mb-3">
//                         Frequent awakening during the night
//                       </span>
//                     </dd>
//                     <dd className="mb-3 list-disc font-normal text-gray-700    ">
//                       <dd className="flex">
//                         <CheckIcon
//                           className="flex-shrink-0 h-6 w-6 text-wcyan"
//                           aria-hidden="true"
//                         />
//                         <span className="ml-3 mb-3">
//                           Sleep walking & other unusual sleep behavior
//                         </span>
//                       </dd>{' '}
//                       <div>
//                         <Link href="/" passHref>
//                           <a
//                             aria-label=""
//                             className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
//                           >
//                             Learn more
//                             <svg
//                               className="inline-block w-3 ml-2"
//                               fill="currentColor"
//                               viewBox="0 0 12 12"
//                             >
//                               <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
//                             </svg>
//                           </a>
//                         </Link>
//                       </div>
//                     </dd>
//                   </dd>
//                 </dd>
//               </div>
//           </div>

//           </div>
//         </div>
//       </div>
//   );
//
