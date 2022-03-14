import Divider from '../layout/Dividers';
import psychiatry from 'public/psychiatry.jpg';
import psych from 'public/psych.jpg';
import insomnia from 'public/insomnia.jpg';
import physical from 'public/physical.jpg';
import { CheckIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="testImage pt-10">
      <Divider sectionName="What We Offer"></Divider>
      <div className="container">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2   max-w-screen lg:px-8  mb-20 ">
          <div className="flex flex-col items-center bg-white rounded-lg border shadow-xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full h-full rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
              src={psychiatry.src}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-wcyan dark:text-white">
                Neurology
              </h5>
              <dd className="list-disc font-normal text-gray-700 dark:text-gray-400">
                <dd className="flex">
                  <CheckIcon
                    className="flex-shrink-0 h-6 w-6 text-wcyan"
                    aria-hidden="true"
                  />
                  <span className="ml-3 mb-3">
                    Headaches, facial pain, dizziness, tremors
                  </span>
                </dd>
                <dd className="mb-3 list-disc font-normal text-gray-700 dark:text-gray-400">
                  <dd className="flex">
                    <CheckIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3">
                      Pain in the neck, back, or extremities
                    </span>
                  </dd>
                </dd>

                <dd className="list-disc font-normal text-gray-700 dark:text-gray-400">
                  <dd className="flex">
                    <CheckIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3 mb-3">
                      Weakness, numbness, or walking difficulty
                    </span>
                  </dd>
                  <dd className="mb-3 list-disc font-normal text-gray-700 dark:text-gray-400">
                    <dd className="flex">
                      <CheckIcon
                        className="flex-shrink-0 h-6 w-6 text-wcyan"
                        aria-hidden="true"
                      />
                      <span className="ml-3 mb-3">
                        Syncope or fainting (blackouts)
                      </span>
                    </dd>{' '}
                    <div>
                      <Link href="/" passHref>
                        <a
                          aria-label=""
                          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                          Learn more
                          <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                          >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </dd>
                </dd>
              </dd>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg border shadow-xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
              src={psych.src}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-wcyan dark:text-white">
                Psychiatry
              </h5>
              <dd className="list-disc font-normal text-gray-700 dark:text-gray-400">
                <dd className="flex">
                  <CheckIcon
                    className="flex-shrink-0 h-6 w-6 text-wcyan"
                    aria-hidden="true"
                  />
                  <span className="ml-3 mb-3">Depression</span>
                </dd>
                <dd className="mb-3 list-disc font-normal text-gray-700 dark:text-gray-400">
                  <dd className="flex">
                    <CheckIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3">ADHD</span>
                  </dd>
                </dd>

                <dd className="list-disc font-normal text-gray-700 dark:text-gray-400">
                  <dd className="flex">
                    <CheckIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3 mb-3">
                      Mental health issues as a result of neurological disease.
                    </span>
                  </dd>
                  <dd className="mb-3 list-disc font-normal text-gray-700 dark:text-gray-400">
                    <dd className="flex">
                      <CheckIcon
                        className="flex-shrink-0 h-6 w-6 text-wcyan"
                        aria-hidden="true"
                      />
                      <span className="ml-3 mb-3">Anxiety</span>
                    </dd>{' '}
                    <div>
                      <Link href="/" passHref>
                        <a
                          aria-label=""
                          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                          Learn more
                          <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                          >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </dd>
                </dd>
              </dd>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg border shadow-xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
              src={physical.src}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-wcyan dark:text-white">
                Physical Therapy
              </h5>
              <dd className="list-disc font-normal text-gray-700 dark:text-gray-400">
                <dd className="flex">
                  <CheckIcon
                    className="flex-shrink-0 h-6 w-6 text-wcyan"
                    aria-hidden="true"
                  />
                  <span className="ml-3 mb-3">Muscle soreness</span>
                </dd>
                <dd className="mb-3 list-disc font-normal text-gray-700 dark:text-gray-400">
                  <dd className="flex">
                    <CheckIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Stretching</span>
                  </dd>
                </dd>

                <dd className="list-disc font-normal text-gray-700 dark:text-gray-400">
                  <dd className="flex">
                    <CheckIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3 mb-3">Rehab</span>
                  </dd>
                  <dd className="mb-3 list-disc font-normal text-gray-700 dark:text-gray-400">
                    <dd className="flex">
                      <CheckIcon
                        className="flex-shrink-0 h-6 w-6 text-wcyan"
                        aria-hidden="true"
                      />
                      <span className="ml-3 mb-3">MS recovery</span>
                    </dd>{' '}
                    <div>
                      <Link href="/" passHref>
                        <a
                          aria-label=""
                          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                          Learn more
                          <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                          >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </dd>
                </dd>
              </dd>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg border shadow-xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
              src={insomnia.src}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-wcyan dark:text-white">
                Sleep
              </h5>
              <dd className="list-disc font-normal text-gray-700 dark:text-gray-400">
                <dd className="flex">
                  <CheckIcon
                    className="flex-shrink-0 h-6 w-6 text-wcyan"
                    aria-hidden="true"
                  />
                  <span className="ml-3 mb-3">
                    Leg jerks or legs uncomfortable at night
                  </span>
                </dd>
                <dd className="mb-3 list-disc font-normal text-gray-700 dark:text-gray-400">
                  <dd className="flex">
                    <CheckIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3">
                      Sleepy / fall asleep during the day
                    </span>
                  </dd>
                </dd>

                <dd className="list-disc font-normal text-gray-700 dark:text-gray-400">
                  <dd className="flex">
                    <CheckIcon
                      className="flex-shrink-0 h-6 w-6 text-wcyan"
                      aria-hidden="true"
                    />
                    <span className="ml-3 mb-3">
                      Frequent awakening during the night
                    </span>
                  </dd>
                  <dd className="mb-3 list-disc font-normal text-gray-700 dark:text-gray-400">
                    <dd className="flex">
                      <CheckIcon
                        className="flex-shrink-0 h-6 w-6 text-wcyan"
                        aria-hidden="true"
                      />
                      <span className="ml-3 mb-3">
                        Sleep walking & other unusual sleep behavior
                      </span>
                    </dd>{' '}
                    <div>
                      <Link href="/" passHref>
                        <a
                          aria-label=""
                          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                          Learn more
                          <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                          >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </dd>
                </dd>
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
