import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import Image from 'next/image';

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

export default function Navbar() {
  const router = useRouter();

  return (
    <Disclosure
      as="nav"
      className="bg-white border-b -mb-.5 border-cyan-700 w-full "
    >
      {({ open }) => (
        <>
          <div className="max-w-screen-2xl lg:mx-auto mx-auto">
            <div className="relative flex items-center justify-between h-16 ">
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden  ">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex md:items-stretch sm:justify-start ">
                <div className="flex-shrink-0 flex items-center ">
                  <div className="flex lg:hidden w-auto">
                    <Image
                      src="/navlogo.png"
                      alt="logo"
                      height={55}
                      width={67}
                    />
                  </div>
                  <div className="hidden lg:block pt-3 w-auto">
                    <Image src="/logo.png" alt="logo" height={55} width={300} />
                  </div>
                </div>
                <div className="md:flex-1 md:my-auto md:mx-auto">
                  <div className="hidden md:block md:ml-6">
                    <div className="flex space-x-4 justify-end">
                      {navigation.map((item) => (
                        <Link href={item.href} key={item.name}>
                          <a
                            className={classNames(
                              ' px-1 pt-2 text-md font-medium',
                              router.route === item.href
                                ? 'text-wcyan'
                                : // text-gray-900  border-gray-900
                                  ' text-gray-400  hover:text-wcyan'
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
                      <Link href="https://mycw34.eclinicalweb.com/portal3661/jsp/100mp/login_otp.jsp">
                        <button className="bg-[#107E8E] hover:bg-[#0B5A66] text-white font-bold py-2 px-4 rounded-full">
                          {/* className=" md:text-center md:px-1 md:pt-1 md:text-md font-medium md:inline-flex md:bg-cyan-700 md:p-1 md:rounded-full md:text-white md:hover:text-gray-200  md:focus:outline-none md:focus:ring-2 md:focus:ring-offset-2 md:focus:ring-offset-gray-800 md:focus:ring-white" */}
                          {/* > */}
                          Patient Portal
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className=" md:bg-gray-800 md:p-1 md:rounded-full md:text-gray-400 md:hover:text-white md:focus:outline-none md:focus:ring-2 md:focus:ring-offset-2 md:focus:ring-offset-gray-800 md:focus:ring-white"
                ></button> */}
              {/* </div> */}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}