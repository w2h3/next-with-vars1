import Team from '../components/Team';

export const AboutUs = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Welcome to
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block"></span> NEUROLOGY & SLEEP
          MEDICINE ASSOCIATES
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          As a neurologic and sleep disorders specialty clinic, Neurology &
          Sleep Medicine Associates’ work is in a unique partnership of health
          care: providing and interpreting your tests, serving as a consultant
          to your referring physician and providing medical care for your
          specific neurologic and sleep disorder needs. Neurology & Sleep
          Medicine Associates’ has been carefully structured to provide a
          personal approach to patient care. Our goal is to provide you with
          very good service and pay close attention to your individual needs and
          concerns. Some of our core tenants are:
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center">
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-cyan-700">
                <svg
                  className="w-8 h-8 text-white"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                A Trusting Relationship:
              </h6>
              <p className="text-sm text-gray-900">
                The providers at Neurology & Sleep Medicine Associates take a
                genuine interest in you, the person, & in your personal well
                -being. Our providers believe that it is equally important to
                spend time both listening to your concerns as well as diagnosing
                and treating your specific health condition.
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-cyan-700">
                <svg
                  className="w-8 h-8 text-white"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Patient Education:
              </h6>
              <p className="text-sm text-gray-900">
                Neurology & Sleep Medicine Associates advocates thorough patient
                education. We believe that sharing the updated medical
                information about your illness with you, as well as, involving
                you in the care plan are an important part of health care. We
                make every effort to work with you as a partner to deliver the
                best care to you.
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-cyan-700">
                <svg
                  className="w-8 h-8 text-white"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">Responsive Care:</h6>
              <p className="text-sm text-gray-900">
                Knowing that you are anxious to find answers our medical staff
                strives to provide an environment that is warm and responsive to
                your needs. You are assured of receiving a timely appointment
                after your call our office. From our providers to our support
                staff we are committed to return your calls to answer questions
                or to provide medication refills in a timely manner.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          {/* <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          /> */}
        </div>
      </div>
      <Team></Team>
    </div>
  );
};
export default AboutUs;
