import Divider from './layout/Dividers';
import dr from '/public/Dr.png';

const people = [
  {
    name: 'Dr. Wang',
    role: 'Dr. Wang’s expertise includes the diagnosis & medical treatment of disorders and diseases of the nervous system, which include the brain, spinal cord, nerves, and muscles. In addition, Dr. Wang has special training in Sleep Medicine. He is an expert in diagnosis & treatment of a variety of sleep disorders including sleep apnea, excessive daytime sleepiness and insomnia.',
    imageUrl: `${dr.src}`,
  },
  {
    name: 'Dr. Wang',
    role: 'Dr. Wang’s expertise includes the diagnosis & medical treatment of disorders and diseases of the nervous system, which include the brain, spinal cord, nerves, and muscles. In addition, Dr. Wang has special training in Sleep Medicine. He is an expert in diagnosis & treatment of a variety of sleep disorders including sleep apnea, excessive daytime sleepiness and insomnia.',
    imageUrl: `${dr.src}`,
  },
  {
    name: 'Dr. Wang',
    role: 'Dr. Wang’s expertise includes the diagnosis & medical treatment of disorders and diseases of the nervous system, which include the brain, spinal cord, nerves, and muscles. In addition, Dr. Wang has special training in Sleep Medicine. He is an expert in diagnosis & treatment of a variety of sleep disorders including sleep apnea, excessive daytime sleepiness and insomnia.',
    imageUrl: `${dr.src}`,
  },

  // More people...
];

export default function Team() {
  return (
    <div className="testImage">
      <div className="container">
        <Divider sectionName="Meet Our Team" />

        <div className="space-y-12 pb-12 pt-12">
          <ul
            role="list"
            className=" space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8 "
          >
            {people.map((person) => (
              <li
                key={person.name}
                className="py-10 px-6 bg-[#d9e9eb] text-center rounded-3xl xl:px-10 "
              >
                {/* [#00847D]/20 */}
                <div className="space-y-6 xl:space-y-10">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2 xl:flex xl:items-center lg:justify-center">
                    <div className=" font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-wcyan font-bold text-2xl">
                        {person.name}
                      </h3>
                      <p className="text-slate-600 text-center">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
