import Link from 'next/link';
import bg from '/public/fd4.jpg';
const Hero = () => {
  return (
    <div className="relative flex border-t-4 border-cyan-700 lg:border-b-4 flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:max-w-[78em] lg:absolute xl:px-0">
        <svg
          className="absolute left-14 hidden h-full text-white transform -translate-x-1/2 lg:block z-50"
          viewBox="0 0 100 85"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="bg-cover   bg-no-repeat w-full  rounded shadow-lg h-56 md:h-72 lg:rounded-none lg:shadow-none lg:bg-cover lg:absolute lg:inset-y-0 lg:right-0 lg:max-w-full lg:h-full lg:w-11/12"
          style={{ backgroundImage: `url(${bg.src})` }}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center w-full max-w-xl px-4 mx-auto md:px-0  lg:mx-auto">
        <div className="relative  mb-16  lg:my-36  lg:max-w-fill lg:pr-5 lg:-top-20 shadow-lg shadow-border shadow-black lg:px-auto lg:-left-[27em]">
          {/* <div className="lg:h-full border-8 border-black"> */}
          <h2 className="mb-3 font-sans text-3xl font-bold tracking-tight uppercase sm:text-4xl sm:leading-none text-center ">
            Welcome To
            <span className="inline-block text-[#7ba009]">
              Neurology & Sleep <br />
              <span className="text-black">Medicine Associates</span>
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg lg:mb-2 lg:text-center">
            We Specialize in Neurology, Sleep medicine, Psychiatry, and Physical
            Therapy. Whether it is your mind, body, or soul, we are here for
            you. With three different locations throughout the East Valley, we
            make it simple to come see us. Please feel free to schedule a
            patient and fill out the paperwork online or bring it in. Thank you
            and we look forward to seeing you.
          </p>
          <div className="py-8 flex items-center justify-evenly text-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-cyan-700 hover:bg-white focus:shadow-outline hover:border-2 border-cyan-700 hover:text-cyan-700 focus:outline-none "
            >
              Request Appointment
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-cyan-700 transition duration-200 rounded border-2 border-cyan-700 hover:bg-cyan-700 hover:text-white focus:shadow-outline focus:outline-none"
            >
              New Patient Paperwork
            </a>
          </div>
        </div>
      </div>{' '}
    </div>
    // </div>
  );
};

export default Hero;
