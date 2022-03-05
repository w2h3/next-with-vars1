import Team from '../components/Team';

export const AboutUs = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-4 lg:px-4">
        <div className="text-center">
          <h2 className="text-base font-semibold text-wcyan tracking-wide uppercase">
            Neurology and Sleep Medicine Associates
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Us
          </p>
          <p className="max-w-7xl mt-5 mx-auto text-xl text-gray-500">
            As a neurologic and sleep disorders specialty clinic, Neurology &
            Sleep Medicine Associates’ work is in a unique partnership of health
            care: providing and interpreting your tests, serving as a consultant
            to your referring physician and providing medical care for your
            specific neurologic and sleep disorder needs. Neurology & Sleep
            Medicine Associates’ has been carefully structured to provide a
            personal approach to patient care. Our goal is to provide you with
            very good service and pay close attention to your individual needs
            and concerns.
          </p>
        </div>
      </div>

      <Team></Team>
    </div>
  );
};
export default AboutUs;
