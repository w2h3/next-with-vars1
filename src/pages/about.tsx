import Team from '@/components/Team3';
import Hheader from '@/components/Hheader';
import tester from 'public/tester.jpg';
import business from 'public/business.jpg';
import sleeper from 'public/sleeper.jpg';
import stock from 'public/stock.jpg';
import Divider from '@/components/layout/Dividers';
export const AboutUs = () => {
  return (
    <>
      <Hheader pageName="About Us" imageURL={stock.src}></Hheader>
      <Divider sectionName="Our Office"></Divider>
      <div className="container">
      {/* px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 */}
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full ">
              {/* <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points=" 8,5 8,1 16,1 16,5"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="9,15 1,15 1,5 23,5 23,15 15,15"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="22,18 22,23 2,23 2,18"
                  strokeLinejoin="round"
                />
                <rect
                  x="9"
                  y="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  width="6"
                  height="4"
                  strokeLinejoin="round"
                />
              </svg> */}
            </div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Welcome to
                <br />
                <p className="hidden md:block text-[#7ba009]">
                  Neurology and Sleep{' '}
                </p>
                <span className="inline-block ">Medicine Associates</span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                As a neurologic and sleep disorders specialty clinic, Neurology
                & Sleep Medicine Associates’ work is in a unique partnership of
                health care: providing and interpreting your tests, serving as a
                consultant to your referring physician and providing medical
                care for your specific neurologic and sleep disorder needs.
                Neurology & Sleep Medicine Associates’ has been carefully
                structured to provide a personal approach to patient care. Our
                goal is to provide you with very good service and pay close
                attention to your individual needs and concerns. Some of our
                core tenants are:
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src={business.src}
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src={sleeper.src}
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={tester.src}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Team></Team>
    </>
  );
};
export default AboutUs;
