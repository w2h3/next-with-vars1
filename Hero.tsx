import Link from 'next/link';
import bg from '/public/fd4.jpg';
const Hero = () => {
  return (
    <div className="relative border-t lg:border-b border-cyan-700 flex flex-col-reverse py-8 lg:py-0 lg:flex-col lg:pb-0">
      <div className=" inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:max-w-fit md:px-8 lg:mb-0 lg:absolute lg:px-0 lg:max-w-screen-lg">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block "
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="bg-top bg-no-repeat mb-6 bg-cover  w-full h-60 rounded shadow-lg md:-mb-10 lg:rounded-none lg:shadow-none md:h-96 md:w-screen lg:max-w-screen-lg lg:h-full lg:bg-cover lg:bg-left"
          style={{ backgroundImage: `url(${bg.src})` }}
          alt=""
        />
      </div>
      <div className=" relative flex flex-col items-start w-fill max-w-xl px-4 mx-auto md:px-0 lg:mx-16 lg:max-w-3xl lg:flex-row lg:-top-16">
        <div className=" mb-10 lg:my-40 lg:max-w-2xl lg:pr-5 lg:py-2">
          <h2 className="mb-5 font-sans text-center text-3xl font-bold tracking-tight text-gray-900  sm:text-4xl sm:leading-none lg:text-center lg:text ">
            Patient care is our priority.
            {/* <br className="hidden md:block" />
            can imagine{' '} */}
            {/* <span className="inline-block text-deep-purple-accent-400"> */}
            {/* is real */}
            {/* </span> */}
          </h2>
          <p className="pr-5 mb-10  text-center text-base text-gray-700 md:text-lg  lg:text-justify ">
            Welcome to Neurology & Sleep Medicine Associates. We Specialize in
            Neurology, Sleep medicine, Psychiatry, and Physical Therapy. Whether
            it is your mind, body, or soul, we are here for you. With three
            different locations throughout the East Valley, we make it simple to
            come see us. Please feel free to schedule a patient and fill out the
            paperwork online or bring it in. Thank you and we look forward to
            seeing you.
          </p>

          <div className="lg:-mb-2 justify-center md:justify-center  flex items-center ">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-cyan-700 hover:bg-white focus:shadow-outline hover:border-2 border-cyan-700 hover:text-cyan-700 focus:outline-none "
            >
              Get started
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-cyan-700 transition duration-200 rounded border-2 border-cyan-700 hover:bg-cyan-700 hover:text-white focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ButtonProps {
  title: string;
  link?: string;
  color: string;
}

const Button = ({ title, color, link = '#' }: ButtonProps) => {
  return (
    <Link href={link}>
      <div
        className={`${color} 00 px-14 md:px-5 py-6 rounded font-medium cursor-pointer hover:brightness-90 transition-all`}
      >
        {title}
      </div>
    </Link>
  );
};

export default Hero;
