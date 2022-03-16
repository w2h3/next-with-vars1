import Image from 'next/image';
import Chandler from '../components/maps/Chandler';
import { LocationMarkerIcon } from '@heroicons/react/outline';
import Mesa from '../components/maps/Mesa';
import Gilbert from '../components/maps/Gilbert';
import Link from 'next/link';
import Banner from '@/components/Banner';
import tester from 'public/locationbanner.jpg';
const posts = [
  {
    title: '2919 S. Ellsworth Road, Suite 135 Mesa, AZ 85212',
    href: '#',
    id: 1,
    category: { name: 'Mesa,AZ' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Directions',
    imageUrl: '/home/jimmy/Documents/NeurologySite/public/directions.png',
    con: <Chandler></Chandler>,
  },
  {
    title: '2045 S. Vineyard, Bldg. N3, Suite 144 Mesa, AZ 85210	',
    href: '#',
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
    title: '4001 E Baseline Road Suite 205 Gilbert, AZ 85234',
    href: '#',
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
    <div className="testImage">
      <Banner pageName={'Locations'} imageURL={tester.src}></Banner>

      {/* relative h-fill py-16 mx-auto sm:max-w-full bg-wcyan/20 z-1 lg:py-20  */}

      {/* bg-gray-50 bg-opacity-10 */}
      {/* <div className="absolute inset-0">
        {/* <div className=" h-1/3 sm:h-2/3 " /> */}
      {/* bg-white */}
      {/* </div>  */}
      <div className="container ">
        {/* bg-opacity-70 */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center ">
            {/*text-3xl  tracking-tight  text-gray-900 sm:text-4xl */}
          </div>
          <div className="mt-12  max-w-lg  mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none mb-20">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex border-2 border-wcyan flex-col rounded-lg shadow-xl bg-white overflow-hidden "
              >
                <div className="flex-shrink-0 h-48 w-full mb-32">
                  {post.con}
                  {/* object-cover
                  <Image src={directions} alt="" layout="fixed" height={200} /> */}
                </div>
                <div className="flex-1 ml-4 mb-4 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="flex gap-2 items-baseline text-sm font-medium text-slate-500 ">
                      <LocationMarkerIcon
                        className="flex-shrink-0 h-6 w-6 text-[#00847D]/80"
                        aria-hidden="true"
                      />
                      {post.category.name}
                      {/* <p className='text-wcyan justify-center'> */}
                    </p>
                    <p className="block mt-2">
                      <p className="text-xl font-semibold text-gray-700">
                        {post.title}
                      </p>
                    </p>
                    <div className="mt-6 flex justify-start">
                      <div className="flex-shrink-0"></div>
                      <div className="">
                        <Link href={post.href}>
                          <a
                            href="#"
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
