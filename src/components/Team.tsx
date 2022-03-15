import Divider from './layout/Dividers';
import dr from '/public/Dr.png';

const people = [
  {
    name: 'Dr. Wang',
    role: 'Doctor',
    imageUrl: `${dr.src}`,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Dr. Wang',
    role: 'Doctor',
    imageUrl: `${dr.src}`,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Dr. Wang',
    role: 'Doctor',
    imageUrl: `${dr.src}`,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Dr. Wang',
    role: 'Doctor',
    imageUrl: `${dr.src}`,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
];

export default function Team() {
  return (
    <div className="testImage">
      <div className="container">
        <Divider sectionName="Meet Our Team" />

        <div className="space-y-12  mb-12">
          <ul
            role="list"
            className=" space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-4 lg:gap-8"
          >
            {people.map((person) => (
              <li
                key={person.name}
                className="py-10 px-6 bg-[#00847D]/30 text-center rounded-3xl xl:px-10 xl:text-left"
              >
                <div className="space-y-6 xl:space-y-10">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2 xl:flex xl:items-center lg:justify-center">
                    <div className=" font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-white">{person.name}</h3>
                      <p className="text-slate-200 text-center">
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
