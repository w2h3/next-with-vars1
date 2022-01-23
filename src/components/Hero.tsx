import Link from 'next/link';
import bg2 from '/public/fd5.jpg';
const Hero = () => {
  return (
    <div className="relative border-t-2 border-cyan-700 lg:border-b-2 flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="bg-cover bg-no-repeat w-full h-80 rounded-2xl shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          style={{ backgroundImage: `url(${bg2.src})` }}
          alt=""
        />
      </div>
      <div className=" relative flex flex-col items-start w-fill max-w-xl px-4 mx-auto md:px-0 lg:mx-32 lg:max-w-3xl lg:flex-row lg:-top-16">
        <div className=" lg:z-50 lg:bg-white  shadow-lg mb-10 lg:my-40 lg:max-w-2xl lg:pl-4 lg:py-2">
          <h2 className="mb-3   font-sans text-3xl font-bold tracking-tight uppercase sm:text-4xl sm:leading-none text-center ">
            Welcome To
            <span className="block text-[#7ba009]">
              Neurology & Sleep <br />
              <span className="text-black">Medicine Associates</span>
            </span>
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

          <div className="mb-4 justify-center md:justify-center  flex items-center ">
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
