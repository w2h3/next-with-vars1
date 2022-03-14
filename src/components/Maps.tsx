import directions from '../../public/directions.png';
import Image from 'next/image';
import Map from './Chandler';
import { LocationMarkerIcon } from '@heroicons/react/outline';
import Mesa1 from './Mesa1';
import Mesa2 from './Mesa2';
import Divider from './layout/Dividers';
const posts = [
  {
    title: '2919 S. Ellsworth Road, Suite 135 Mesa, AZ 85212',
    href: '#',
    id: 1,
    category: { name: 'Mesa,AZ', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Directions',
    imageUrl: '/home/jimmy/Documents/NeurologySite/public/directions.png',
  },
  {
    title: '2919 S. Ellsworth Road, Suite 135 Mesa, AZ 85212',
    href: '#',
    id: 2,
    category: { name: 'Mesa, AZ', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Directions',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',  },

  {
    title: '2919 S. Ellsworth Road, Suite 135 Mesa, AZ 85212',
    href: '#',
    id: 3,
    category: { name: 'Mesa, AZ', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Directions',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
];

export default function Map2() {
  return (
    <div className="bg-white">
      {/* relative h-fill py-16 mx-auto sm:max-w-full bg-wcyan/20 z-1 lg:py-20  */}

      {/* bg-gray-50 bg-opacity-10 */}
      {/* <div className="absolute inset-0">
        {/* <div className=" h-1/3 sm:h-2/3 " /> */}
      {/* bg-white */}
      {/* </div>  */}
      <div className="container ">
        {/* bg-opacity-70 */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/*text-3xl  tracking-tight  text-gray-900 sm:text-4xl */}
            <Divider sectionName='Where You Can Find Us'></Divider>          </div>
          <div className="mt-12 bg-whitemax-w-lg  mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex border-2 border-wcyan/20 flex-col rounded-lg shadow-lg bg-white overflow-hidden "
              >
                <div className="flex-shrink-0 h-48 w-full mb-28">
                  <Mesa2></Mesa2>
                  {/* object-cover
                  <Image src={directions} alt="" layout="fixed" height={200} /> */}
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="flex gap-2 text-sm font-medium text-indigo-600">
                      <LocationMarkerIcon
                        className="flex-shrink-0 h-6 w-6 text-wcyan"
                        aria-hidden="true"
                      />
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0"></div>
                    <div className="ml-3">
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.date}>{post.date}</time>
                        {/* <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span> */}
                      </div>
                    </div>
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
