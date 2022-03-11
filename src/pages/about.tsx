import Team from '@/components/Team3';
import Hheader from '@/components/Hheader';
export const AboutUs = () => {
  return (
    <>
      <div className="bg-wcyan/20 pt-24">
        <Hheader pageName={'About Us'}></Hheader>
        <div className="container">
          <div className="text-center ">
            <h2 className="mx-auto text-shadow-md ">
              {/*text-3xl  tracking-tight  text-gray-900 sm:text-4xl */}
              <span className="text-[#24598C]/50">About </span>
              <span className="font-bold text-[#24598C]/80">Us</span>
            </h2>

            <p className="max-w-7xl mt-5 mx-auto text-xl text-slate-500">
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
        </div>

        <Team></Team>
      </div>
    </>
  );
};
export default AboutUs;
