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
        <h2 className="mx-auto text-shadow-md ">
          {/*text-3xl  tracking-tight  text-gray-900 sm:text-4xl */}
          <span className="text-[#24598C]/50">Meet Our </span>
          <span className="font-bold text-[#24598C]/80">Team</span>
        </h2>

        <div className="space-y-12  ">
          <ul
            role="list"
            className=" space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-4 lg:gap-8"
          >
            {people.map((person) => (
              <li
                key={person.name}
                className="py-10 px-6 bg-cyan-900/40  text-center rounded-lg xl:px-10 xl:text-left"
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
                      <p className="text-slate-200 text-center">{person.role}</p>
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
