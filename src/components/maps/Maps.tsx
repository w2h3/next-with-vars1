import { LocationMarkerIcon } from '@heroicons/react/outline';
import Link from 'next/link';

import Chandler from './Chandler';
import Gilbert from './Gilbert';
import Mesa from './Mesa';
import Divider from '../layout/Dividers';
const posts = [
  {
    title: '2919 S. Ellsworth Road',
    title2: 'Suite 135',
    title3: 'Mesa, AZ 85212',
    href: 'https://www.google.com/maps/place/2919+S+Ellsworth+Rd+%23135,+Mesa,+AZ+85212/@33.3620994,-111.6371875,17z/data=!3m1!4b1!4m5!3m4!1s0x872bb18e61a89343:0xbe659bbab6bcbf35!8m2!3d33.3620994!4d-111.6349988',
    id: 1,
    category: { name: 'Mesa, AZ' },
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
    <div className='testImage'>
      <div className='container'>
        <div className=' mx-auto '>
          <div className='text-center '>
            <Divider sectionName='Our Locations' />
          </div>
          <div className='mx-auto  mt-12  grid max-w-2xl gap-14  text-center  md:max-w-md lg:max-w-none lg:grid-cols-3 '>
            {posts.map((post) => (
              <div
                key={post.title}
                className='flex flex-col overflow-hidden rounded-lg bg-white shadow-xl '
              >
                <div className='mb-32 h-48 w-full flex-shrink-0 bg-white '>
                  {post.con}
                </div>
                <div className='mx-auto mb-4 flex flex-1 flex-col justify-between '>
                  <div className='flex-1'>
                    <p className='flex items-center justify-center gap-2 text-2xl font-medium text-wcyan '>
                      <LocationMarkerIcon
                        className='h-6 w-6 flex-shrink-0 text-wcyan'
                        aria-hidden='true'
                      />
                      {post.category.name}
                    </p>
                    <div className='mt-2 block'>
                      <p className='text-2xl font-semibold text-gray-700'>
                        {post.title}
                      </p>
                      <p className='text-2xl font-semibold text-gray-700'>
                        {post.title2}
                      </p>
                      <p className='text-2xl font-semibold text-gray-700'>
                        {post.title3}
                      </p>
                    </div>
                    <div className='mt-6 flex justify-center'>
                      <div className='flex-shrink-0' />
                      <div className='w-full'>
                        <Link href={post.href}>
                          <a
                            target='_blank'
                            className='flex items-center justify-center rounded-xl border border-wcyan bg-white px-4 py-3 text-base font-bold text-wcyan shadow-sm hover:text-wcyan/60'
                          >
                            <time dateTime={post.date}>{post.date}</time>
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
