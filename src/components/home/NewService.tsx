import Divider from '../layout/Dividers';
import psychiatry from 'public/psychiatry.jpg';
import psych from 'public/psych.jpg';
import insomnia from 'public/insomnia.jpg';
import physical from 'public/physical.jpg';
import { CheckIcon } from '@heroicons/react/outline';

export default function Services() {
  return (
    <div className="testImage pt-10">
      <Divider sectionName="What We Offer"></Divider>
      <div className="container">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2   max-w-screen lg:px-8  mb-20 ">
          <a
            href="#"
            className="flex flex-col items-center bg-white rounded-lg border shadow-xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={psychiatry.src}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Neurology
              </h5>
              <dd className="list-disc font-normal text-gray-700 dark:text-gray-400">
                <dd className="flex">
                  <CheckIcon
                    className="flex-shrink-0 h-6 w-6 text-wcyan"
                    aria-hidden="true"
                  />
                  <span className="ml-3 mb-3">Test</span>
                </dd>
                <dd className="mb-3 list-disc font-normal text-gray-700 dark:text-gray-400">
                  <dd className="flex">
                    <CheckIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Test</span>
                  </dd>
                </dd>

                <dd className="list-disc font-normal text-gray-700 dark:text-gray-400">
                  <dd className="flex">
                    <CheckIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3 mb-3">Test</span>
                  </dd>
                  <dd className="mb-3 list-disc font-normal text-gray-700 dark:text-gray-400">
                    <dd className="flex">
                      <CheckIcon
                        className="flex-shrink-0 h-6 w-6 text-wcyan"
                        aria-hidden="true"
                      />
                      <span className="ml-3 mb-3">Test</span>
                    </dd>
                  </dd>
                </dd>
              </dd>
            </div>
          </a>
          <a
            href="#"
            className="flex flex-col items-center bg-white rounded-lg border shadow-xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
              src={psych.src}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Psychiatry
              </h5>
              <dd className="list-disc font-normal text-gray-700 dark:text-gray-400">
                <dd className="flex">
                  <CheckIcon
                    className="flex-shrink-0 h-6 w-6 text-wcyan"
                    aria-hidden="true"
                  />
                  <span className="ml-3 mb-3">Test</span>
                </dd>
                <dd className="mb-3 list-disc font-normal text-gray-700 dark:text-gray-400">
                  <dd className="flex">
                    <CheckIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Test</span>
                  </dd>
                </dd>

                <dd className="list-disc font-normal text-gray-700 dark:text-gray-400">
                  <dd className="flex">
                    <CheckIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3 mb-3">Test</span>
                  </dd>
                  <dd className="mb-3 list-disc font-normal text-gray-700 dark:text-gray-400">
                    <dd className="flex">
                      <CheckIcon
                        className="flex-shrink-0 h-6 w-6 text-wcyan"
                        aria-hidden="true"
                      />
                      <span className="ml-3 mb-3">Test</span>
                    </dd>
                  </dd>
                </dd>
              </dd>
            </div>
          </a>
          <a
            href="#"
            className="flex flex-col items-center bg-white rounded-lg border shadow-xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
              src={physical.src}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Physical Therapy
              </h5>
              <dd className="list-disc font-normal text-gray-700 dark:text-gray-400">
                <dd className="flex">
                  <CheckIcon
                    className="flex-shrink-0 h-6 w-6 text-wcyan"
                    aria-hidden="true"
                  />
                  <span className="ml-3 mb-3">Test</span>
                </dd>
                <dd className="mb-3 list-disc font-normal text-gray-700 dark:text-gray-400">
                  <dd className="flex">
                    <CheckIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Test</span>
                  </dd>
                </dd>

                <dd className="list-disc font-normal text-gray-700 dark:text-gray-400">
                  <dd className="flex">
                    <CheckIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3 mb-3">Test</span>
                  </dd>
                  <dd className="mb-3 list-disc font-normal text-gray-700 dark:text-gray-400">
                    <dd className="flex">
                      <CheckIcon
                        className="flex-shrink-0 h-6 w-6 text-wcyan"
                        aria-hidden="true"
                      />
                      <span className="ml-3 mb-3">Test</span>
                    </dd>
                  </dd>
                </dd>
              </dd>
            </div>
          </a>
          <a
            href="#"
            className="flex flex-col items-center bg-white rounded-lg border shadow-xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
              src={insomnia.src}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Sleep
              </h5>
              <dd className="list-disc font-normal text-gray-700 dark:text-gray-400">
                <dd className="flex">
                  <CheckIcon
                    className="flex-shrink-0 h-6 w-6 text-wcyan"
                    aria-hidden="true"
                  />
                  <span className="ml-3 mb-3">Test</span>
                </dd>
                <dd className="mb-3 list-disc font-normal text-gray-700 dark:text-gray-400">
                  <dd className="flex">
                    <CheckIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Test</span>
                  </dd>
                </dd>

                <dd className="list-disc font-normal text-gray-700 dark:text-gray-400">
                  <dd className="flex">
                    <CheckIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3 mb-3">Test</span>
                  </dd>
                  <dd className="mb-3 list-disc font-normal text-gray-700 dark:text-gray-400">
                    <dd className="flex">
                      <CheckIcon
                        className="flex-shrink-0 h-6 w-6 text-wcyan"
                        aria-hidden="true"
                      />
                      <span className="ml-3 mb-3">Test</span>
                    </dd>
                  </dd>
                </dd>
              </dd>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
