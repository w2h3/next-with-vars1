import Image from 'next/image';
import dr from '../../public/Dr.png';

export const Team = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-6xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
          Our Team
        </p>
        {/* <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p> */}
      </div>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src={dr.src}
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-lg font-bold">Dr. Wang</p>
            <p className="mb-5 text-xs text-gray-800">Doctor</p>
            <div className="flex items-center space-x-3 sm:justify-center">
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              ></a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              ></a>
            </div>
          </div>
        </div>
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src={dr.src}
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-lg font-bold">Dr. George</p>
            <p className="mb-5 text-xs text-gray-800">Doctor</p>
            <div className="flex items-center space-x-3 sm:justify-center">
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              ></a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              ></a>
            </div>
          </div>
        </div>
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src={dr.src}
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-lg font-bold">Dr. George Wang</p>
            <p className="mb-5 text-xs text-gray-800">Dr. George</p>
            <div className="flex items-center space-x-3 sm:justify-center">
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              ></a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              ></a>
            </div>
          </div>
        </div>
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src={dr.src}
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-lg font-bold">Wang, Dr. Wang</p>
            <p className="mb-5 text-xs text-gray-800">Good guy</p>
            <div className="flex items-center space-x-3 sm:justify-center">
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              ></a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
