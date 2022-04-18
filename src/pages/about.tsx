import Team from '@/components/Team';
import Banner from '@/components/layout/Banner';
import tester from 'public/tester.jpg';
import business from 'public/business.jpg';
import sleeper from 'public/sleeper.jpg';
import stock from 'public/aboutbanner.jpg';
import Divider from '@/components/layout/Dividers';
import Swipe from '@/components/swiper/Swiper';
export const AboutUs = () => {
  return (
    <>
      <Banner pageName="About Us" imageURL={stock.src}></Banner>
      <div className="container py-20">
        {/* px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 */}
        <div className="grid grid-cols-1  md:grid-cols-2 ">
          <div className="flex flex-col  justify-center lg:max-w-6xl">
            <h2 className=" mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-center md:text-left  ">
              Welcome to
              <br />
              <p className="block text-[#7ba009]">Neurology and Sleep </p>
              <span className="inline-block ">Medicine Associates</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg md:mr-20 mb-10">
              As a neurologic and sleep disorders specialty clinic, Neurology &
              Sleep Medicine Associates’ work is in a unique partnership of
              health care: providing and interpreting your tests, serving as a
              consultant to your referring physician and providing medical care
              for your specific neurologic and sleep disorder needs. Neurology &
              Sleep Medicine Associates’ has been carefully structured to
              provide a personal approach to patient care. Our goal is to
              provide you with very good service and pay close attention to your
              individual needs and concerns.
            </p>
          </div>
          <div className="">
            {/* <div className="flex items-center justify-center -mx-4 lg:pl-8"> */}
            <Swipe></Swipe>
            {/* <div className="flex flex-col items-end px-3">
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
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
