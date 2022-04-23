import Image from 'next/image';
import Chandler from './Chandler';
import { LocationMarkerIcon } from '@heroicons/react/outline';
import Mesa from './Mesa';
import Gilbert from './Gilbert';
import Divider from '../layout/Dividers';
import Link from 'next/link';
const posts = [
  {
    title: '2919 S. Ellsworth Road',
    title2: 'Suite 135',
    title3: 'Mesa, AZ 85212',
    href: 'https://www.google.com/maps/place/2919+S+Ellsworth+Rd+%23135,+Mesa,+AZ+85212/@33.3620994,-111.6371875,17z/data=!3m1!4b1!4m5!3m4!1s0x872bb18e61a89343:0xbe659bbab6bcbf35!8m2!3d33.3620994!4d-111.6349988',
    id: 1,
    category: { name: 'Mesa,AZ' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Directions',
    imageUrl: '/home/jimmy/Documents/NeurologySite/public/directions.png',
    con: <Chandler></Chandler>,
  },
  {
    title: '2045 S. Vineyard Drive',
    title2: 'Bldg. N3, Suite 144',
    title3: 'Mesa, AZ 85210',
    href: 'https://www.google.com/maps/place/2045+S+Vineyard+n3+144,+Mesa,+AZ+85210/@33.3771736,-111.8454984,17z/data=!3m1!4b1!4m5!3m4!1s0x872ba83ce11b928f:0x1b871e9b9f8a0f04!8m2!3d33.3771691!4d-111.8433044',
    id: 2,
    category: { name: 'Mesa, AZ' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Directions',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    con: <Mesa></Mesa>,
  },

  {
    title: '4001 E. Baseline Road',
    title2: 'Suite 205',
    title3: 'Gilbert, AZ 85234',
    href: 'https://www.google.com/maps/place/4001+E+Baseline+Rd+Suite+%23205,+Gilbert,+AZ+85234/@33.3785159,-111.7490784,17z/data=!3m1!4b1!4m5!3m4!1s0x872baf13f77b0fc5:0xaf618104a20a2229!8m2!3d33.3785114!4d-111.7468844',
    id: 3,
    category: { name: 'Gilbert, AZ' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Directions',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    con: <Gilbert></Gilbert>,
  },
];

export default function Map() {
  return (
    <div className="bg-[#f0fdff]/80">
      {/* relative h-fill py-16 mx-auto sm:max-w-full bg-wcyan/20 z-1 lg:py-20  */}

      {/* bg-gray-50 bg-opacity-10 */}
      {/* <div className="absolute inset-0">
        {/* <div className=" h-1/3 sm:h-2/3 " /> */}
      {/* bg-white */}
      {/* </div>  */}
      <div className="container">
        {/* bg-opacity-70 */}
        <div className=" mx-auto ">
          <div className="text-center ">
            {/*text-3xl  tracking-tight  text-gray-900 sm:text-4xl */}
            <Divider sectionName="Our Locations"></Divider>{' '}
          </div>
          <div className="mt-12  max-w-2xl  mx-auto grid gap-14  md:max-w-md  lg:grid-cols-3 lg:max-w-none text-center ">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col rounded-lg shadow-xl bg-white overflow-hidden "
              >
                <div className="flex-shrink-0 h-48 w-full mb-32 bg-white ">
                  {post.con}
                  {/* object-cover
                  <Image src={directions} alt="" layout="fixed" height={200} /> */}
                </div>
                <div className="flex-1 mx-auto mb-4 flex flex-col justify-between ">
                  <div className="flex-1">
                    <p className="flex gap-2 items-center justify-center text-xl font-medium text-[#00847D] ">
                      <LocationMarkerIcon
                        className="flex-shrink-0 h-6 w-6 text-[#00847D]/80"
                        aria-hidden="true"
                      />
                      {post.category.name}
                      {/* <p className='text-wcyan justify-center'> */}
                    </p>
                    <p className="block mt-2">
                      <p className="text-2xl font-semibold text-gray-700">
                        {post.title}
                      </p>
                      <p className="text-2xl font-semibold text-gray-700">
                        {post.title2}
                      </p>
                      <p className="text-2xl font-semibold text-gray-700">
                        {post.title3}
                      </p>
                    </p>
                    <div className="mt-6 flex justify-center">
                      <div className="flex-shrink-0"></div>
                      <div className="w-full">
                        <Link href={post.href}>
                          <a
                            target="_blank"
                            className="flex items-center justify-center px-4 py-3 border border-wcyan text-base font-bold rounded-xl shadow-sm text-wcyan bg-white hover:text-wcyan/60"
                            // hover:text-white
                          >
                            <time dateTime={post.date}>{post.date}</time>
                            {/* <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span> */}
                          </a>
                        </Link>
                      </div>
                    </div>{' '}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
