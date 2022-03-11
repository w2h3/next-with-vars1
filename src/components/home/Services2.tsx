import Image from 'next/image';
import psychiatry from 'public/psychiatry.jpg';
import psych from 'public/psych.jpg';
import insomnia from 'public/insomnia.jpg';
import physical from 'public/physical.jpg';

export const Feature = () => {
  return (
    <div className="testImage ">
      <div className="container">
        {/* px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  lg:max-w-screen-7xl md:px-24 lg:px-8 lg:py-20  */}
        <div className="max-w-4xl   mb-10 mx-auto text-center lg:max-w-lg md:mb-20">
          <h2>
          <span className='text-[#24598C]/30'>Our </span><span className="font-bold text-[#24598C]/60">Services</span>

            
            {/* #002e41
            #10298E */}
          </h2>
        </div>
        <div className="grid  max-w-screen-lg gap-8  row-gap-10 mx-auto lg:grid-cols-2">
          <div className="flex  items-center flex-col max-w-md mx-auto sm:flex-row">
            <div className="mr-4 ">
              <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50 overflow-hidden">
                <Image src={psychiatry.src} alt="" height={200} width={200} />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5 text-[#10298E]">
                Neurology
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                A flower in my garden, a mystery in my panties. Heart attack
                never stopped old Big Bear. I didn't even know we were calling
                him Big Bear. We never had the chance to.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="flex items-center  flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50 overflow-hidden">
                <Image src={psych.src} alt="" height={200} width={200} />
              </div>
            </div>
            <div>
              <h6 className="mb-3  text-xl font-bold leading-5 text-[#10298E]">
                Sleep
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Rough pomfret lemon shark plownose chimaera southern sandfish
                kokanee northern sea robin Antarctic cod. Yellow-and-black
                triplefin gulper South American Lungfish mahi-mahi,
                butterflyfish glass catfish soapfish ling gray mullet!
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="flex items-center flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50 overflow-hidden">
                <Image src={insomnia.src} alt="" height={200} width={200} />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5 text-[#10298E]">
                Physical Therapy
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                A slice of heaven. O for awesome, this chocka full cuzzie is as
                rip-off as a cracker. Meanwhile, in behind the bicycle shed,
                Hercules Morse, as big as a horse and Mrs Falani were up to no
                good with a bunch of crook pikelets.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="flex items-center flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50 overflow-hidden">
                {' '}
                <Image src={physical.src} alt="" height={200} width={200} />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5 text-[#10298E]">
                Psychiatry
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Disrupt inspire and think tank, social entrepreneur but
                preliminary thinking think tank compelling. Inspiring, invest
                synergy capacity building, white paper; silo, unprecedented
                challenge B-corp problem-solvers.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
