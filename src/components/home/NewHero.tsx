import tester from '/public/neuro.jpg';

export const Header = () => {
  return (
    <div className="relative  mt-[6rem]">
      <img
        src={tester.src}
        className="absolute inset-0 object-cover w-full h-full "
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75 ">
        {/* md:h-[50rem] */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg: lg:py-20">
          <div className="flex flex-col  justify-center xl:flex-row">
            <div className="w-full max-w-2xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 text-center">
              <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none mx-auto">
                {/* Welcome to{' '} */}
                <p className="hidden md:block text-[#7ba009]">
                  Neurology and Sleep{' '}
                </p>{' '}
                <p className="">Medicine Associates</p>
              </h1>
              <p className="max-w-lg mb-4 text-base text-white md:text-lg mx-auto">
                Serving our community since 2005.
              </p>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className=" font-sans  font-bold tracking-tight  sm:leading-none text-center px-10 mt-8 py-2 border-2 border-wcyan bg-wcyan/80
                [#00847D]/60  
                text-gray-50  rounded-md text-lg flex flex-row items-center hover:bg-wcyan/50 "
                >
                  Request Appointment
                </button>
                <button
                  type="submit"
                  className=" font-sans  font-bold tracking-tight  sm:leading-none text-center px-10 mt-8 py-2 border-2 border-wcyan bg-wcyan/80
                [#00847D]/60  
                text-gray-50  rounded-md text-lg flex flex-row items-center hover:bg-wcyan/50 "
                >
                  New Patient Form
                </button>
              </div>
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
export default Header;
