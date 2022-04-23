import Link from 'next/link';

const Header = () => {
  return (
    <nav className="flex-row ">
      <div className="flex  md:flex-row md:items-center lg:justify-evenly bg-[#f0fdff] mx-auto justify-center md:px-10 lg:mx-auto  sm:px-2">
        {/* bg-gradient-to-t from-slate-100 to-white*/}
        <div className="flex my-2">
          <Link href="tel:4807478296" passHref>
            <a>
              <button className="flex items-center justify-center px-5 text-md font-semibold rounded-lg font-small  text-[#107E8E] hover:text-[#5582a6] hover:outline hover:border-[#5582a6]   focus:outline-none space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <Link href="tel:4809676888" passHref>
                  <a className="hidden lg:flex text-gray-600">
                    Phone: (480) 967-6888
                  </a>
                </Link>
                <Link href="tel:4807478296" passHref>
                  <a className="hidden md:flex lg:hidden text-gray-600 ">
                    Phone
                  </a>
                </Link>
              </button>
            </a>
          </Link>
          <Link href="/contact" passHref>
            <a>
              <button className="flex items-center justify-center px-5 rounded-lg  text-md font-semibold font-small text-[#107E8E] border-black hover:text-[#5582a6] hover:outline hover:border-[#5582a6] focus:outline-none space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                <Link href="/contact" passHref>
                  <a className="hidden lg:flex text-gray-600 ">
                    Fax: (480) 967-6887
                  </a>
                </Link>
                {/* <p className="hidden md:flex lg:hidden text-black">Fax</p> */}
              </button>
            </a>
          </Link>
          <Link href="/contact" passHref>
            <a>
              <button className="flex items-center justify-center px-5 rounded-lg    border-black font-semibold text-md font-small hover:text-[#5582a6] text-[#107E8E]  hover:outline hover:border-[#5582a6] focus:outline-none space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <Link href="/contact" passHref>
                  <a className="hidden md:flex text-gray-600 ">
                    M-F 8:00 AM-5:00 PM
                  </a>
                </Link>
                {/* <p className="hidden md:flex lg:hidden text-black">Hours</p> */}
              </button>
            </a>
          </Link>
          <Link href="/medprof">
            <a>
              <button className="flex items-center justify-center px-5 rounded-lg   font-semibold border-black text-md font-small hover:text-[#5582a6] text-[#107E8E]  hover:outline hover:border-[#5582a6]  focus:outline-none space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <Link href="/medprof" passHref>
                  <p className="hidden lg:flex text-gray-600 ">For Providers</p>
                </Link>
                <Link href="/medprof" passHref>
                  <p className="hidden md:flex lg:hidden text-gray-600 ">
                    For Providers
                  </p>
                </Link>
              </button>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
