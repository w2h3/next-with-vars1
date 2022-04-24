import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from './Header';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Insurances', href: '/insurance', current: false },
  { name: 'Locations', href: '/locations', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'Patients', href: '/patients', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const router = useRouter();

  return (
    <Disclosure
      as="nav"
      className="bg-white border-b -mb-.5 border-wcyan w-full z-50 "
    >
      {({ open }) => (
        <>
        <Header />
          <div className="max-w-screen-2xl lg:mx-auto mx-auto">
            <div className="relative flex items-center justify-between h-16 ">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden  ">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#00847D] focus:outline-none focus:ring-2 focus:ring-inset  focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-10 w-10" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-10 w-10" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex md:items-stretch sm:justify-start ">
                <div className="flex-shrink-0 flex items-center ">
                  {/* <div className="flex lg:hidden w-auto">
                    <Link href="/">
                      <Image
                        src="/navlogo.png"
                        alt="logo"
                        height={55}
                        width={67}
                      />
                    </Link>
                  </div> */}
                  <div className="block pt-3 w-auto ">
                    <Link href="/" passHref>
                      <Image
                        src="/logo.png"
                        alt="logo"
                        height={55}
                        width={300}
                        className="hover:cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
                <div className="md:flex-1 md:my-auto md:mx-auto ">
                  <div className="hidden lg:block lg:ml-6 ">
                    <div className="flex space-x-4 justify-end items-center">
                      {navigation.map((item) => (
                        <Link href={item.href} key={item.name} passHref>
                          <a
                            className={classNames(
                              ' px-1 text-lg font-heavy',
                              router.route === item.href
                                ? 'text-wcyan border-b border-wcyan'
                                : // text-gray-900  border-gray-900
                                  ' text-gray-600  hover:text-wcyan hover:border-b hover:border-wcyan'
                              // border-transparent
                            )}
                            aria-current={
                              router.route === item.href ? 'page' : undefined
                            }
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                      <Link
                        href="https://mycw34.eclinicalweb.com/portal3661/jsp/100mp/login_otp.jsp"
                        passHref
                      >
                        <button className="bg-wcyan border border-wcyan hover:bg-wcyan/70 hover:border hover:border-wcyan text-white font-bold p-1 xl:p-3 rounded-full">

                          Patient Portal
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    router.route === item.href
                      ? 'bg-wcyan text-white'
                      : 'bg-[#d0e5e8] hover:bg-[#5692B7]/70 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={router.route === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="flex items-center mt-1 space-x-3">
                <Link
                  href="https://mycw34.eclinicalweb.com/portal3661/jsp/100mp/login_otp.jsp"
                  passHref
                >
                  {/* <button className="bg-[#107E8E] hover:bg-[#0B5A66] text-white font-bold py-2 px-4 rounded-full">
                  Make an appointment
                </button> */}
                  <button
                    type="button"
                    className="text-white bg-wcyan border border-wcyan hover:bg-wcyan/90 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full "
                  >
                    Patient Portal
                  </button>
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
