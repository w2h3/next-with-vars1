import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Forms', href: '/forms', current: false },
  { name: 'Insurances', href: '/insurance', current: false },
  { name: 'Locations', href: '/locations', current: false },
  { name: 'Contact', href: '/contact', current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Footer = () => {
  const router = useRouter();

  <svg
    className="absolute right-32 w-fill top-0  h-6 -mt-5 sm:-mt-10 sm:h-14  text-[#E8FAFC]"
    preserveAspectRatio="none"
    viewBox="100 100 1540 54"
  >
    <path
      fill="currentColor"
      d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
    />
  </svg>;

  return (
    <div className="bg-[#E8FAFC] relative mt-10  ">
      <div className="container">
        <div className="custom-shape-divider-bottom-1647011816 absolute right-32 w-fill top-0  h-6 -mt-5 sm:-mt-10 sm:h-14 z-10">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 ">
          <div className="sm:col-span-1 ">
            <Link href="/" passHref>
              <a
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <Image src="/logo.png" alt="logo" height={55} width={300} />
              </a>
            </Link>

            <p className="mt-5 text-l font-bold tracking-wide text-gray-900 ">
              Hours: 
              <span className='tracking-wide font-light text-base text-gray-500'> Monday - Friday 8:00 AM to 5:00 PM </span>
            </p>
          </div>
          <div className=" sm:col-span-1  ">
            <div className="mx-auto space-y-2">
              <div className="gap-2 grid grid-rows-6 justify-center">
                <p className=" text-base font-bold tracking-wide text-gray-900">
                  Navigate
                </p>
                <div className="text-base row-span-6 ">
                  {navigation.map((item) => (
                    <Link href={item.href} key={item.name} passHref>
                      <a
                        className={classNames(
                          'text-md ',
                          router.route === item.href
                            ? 'text-wcyan'
                            : // text-gray-900  border-gray-900
                              ' text-gray-500  hover:text-wcyan'
                          // border-transparent
                        )}
                        aria-current={
                          router.route === item.href ? 'page' : undefined
                        }
                      >
                        <div className="mb-3">{item.name}</div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-base font-bold tracking-wide text-gray-900 ">
              Contacts
            </p>
            <dl className="text-base text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd className="flex">
                  <LocationMarkerIcon
                    className="flex-shrink-0 h-6 w-6 text-wcyan"
                    aria-hidden="true"
                  />
                  <span className="ml-3 mb-3">
                    2919 S. Ellsworth Road, Suite 135 <br />
                    Mesa, AZ 85212
                  </span>
                </dd>
                <dt className="sr-only">Postal address</dt>
                <dd className="flex">
                  <LocationMarkerIcon
                    className="flex-shrink-0 h-6 w-6 text-wcyan"
                    aria-hidden="true"
                  />
                  <span className="ml-3 mb-3">
                    2919 S. Ellsworth Road, Suite 135
                    <br /> Mesa, AZ 85212
                  </span>
                </dd>
                <dt className="sr-only">Postal address</dt>
                <dd className="flex">
                  <LocationMarkerIcon
                    className="flex-shrink-0 h-6 w-6 text-wcyan"
                    aria-hidden="true"
                  />
                  <span className="ml-3 mb-3">
                    2919 S. Ellsworth Road, Suite 135
                    <br /> Mesa, AZ 85212
                  </span>
                </dd>
              </div>
              <div className="">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="flex-shrink-0 h-6 w-6 text-wcyan"
                    aria-hidden="true"
                  />
                  <span className="ml-3 mb-3">+1 (480) 967-6888</span>
                </dd>
              </div>
              <div className="mt-3 ">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon
                    className="flex-shrink-0 h-6 w-6 text-wcyan"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-gray-500 ">clinic@drwang.com</span>
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Quick Links
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <Link href="https://mycw34.eclinicalweb.com/portal3661/jsp/100mp/login_otp.jsp">
                {/* <button className="bg-[#107E8E] hover:bg-[#0B5A66] text-white font-bold py-2 px-4 rounded-full">
                  Make an appointment
                </button> */}
                <button
                  type="button"
                  className="text-white bg-wcyan border border-wcyan hover:bg-wcyan/70 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                >
                  MAKE AN APPOINTMENT
                </button>
              </Link>
            </div>
            <div className="flex items-center mt-1 space-x-3">
              <Link href="/contact">
                <button
                  type="button"
                  className="text-white bg-wcyan border border-wcyan hover:bg-wcyan/70 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                >
                  CONTACT US
                </button>
              </Link>
            </div>
            <div className="flex items-center mt-1 space-x-3">
              <Link href="/medprof">
                <button
                  type="button"
                  className="text-white bg-wcyan border border-wcyan hover:bg-wcyan/70 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                >
                  Medical Professionals
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 lg:-mb-10 border-t border-wcyan lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2  lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <Link href="/" passHref>
                <a className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                  F.A.Q
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                  Privacy Policy
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                  Terms &amp; Conditions
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
