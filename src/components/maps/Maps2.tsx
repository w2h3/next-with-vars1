import Image from 'next/image';
import Chandler from './Chandler';
import { LocationMarkerIcon } from '@heroicons/react/outline';
import Mesa from './Mesa';
import Gilbert from './Gilbert';
import Divider from '../layout/Dividers';
import Link from 'next/link';
import Button from '../button/Button';
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
    <div className="bg-[#264454]">
      <Divider sectionName="Locations"></Divider>
      <section className="container mx-auto space-y-12">
        <div className="grid items-center grid-cols-1 md:grid-cols-2  bg-gray-50  rounded-2xl mb-6">
          <div className=" h-fill rounded-2xl ">
            <Chandler />
          </div>
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <span className="flex text-s uppercase gap-2 items-center">
              <LocationMarkerIcon
                className="flex-shrink-0 h-6 w-6 text-[#00847D]/80"
                aria-hidden="true"
              />
              Mesa, AZ
            </span>
            <h3 className="text-3xl font-bold">2919 S. Ellsworth Road</h3>
            <p className="my-2">Suite 135</p>
            <p className="my-2">Mesa, AZ 85212</p>
            <Button variant="primary" className="self-start text-white ">
              Directions
            </Button>
          </div>
        </div>
        <div className="grid items-center grid-cols-1 md:grid-cols-2  bg-gray-50  rounded-2xl mb-6">
          <div className="w-fill h-fill rounded-2xl order-none md:order-2">
            <Gilbert />
          </div>
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <span className="flex text-s uppercase gap-2 items-center">
              <LocationMarkerIcon
                className="flex-shrink-0 h-6 w-6 text-[#00847D]/80"
                aria-hidden="true"
              />
              Gilbert, AZ
            </span>
            <h3 className="text-3xl font-bold my-2">2919 S. Ellsworth Road</h3>
            <p className="my-2">Suite 135</p>
            <p className="my-2">Gilbert, AZ 85234</p>
            <Button variant="primary" className="self-start text-white ">
              Directions
            </Button>
          </div>
        </div>
        <div className="grid items-center grid-cols-1 md:grid-cols-2  bg-gray-50  rounded-2xl mb-6">
          <div className="w-fill h-fill rounded-2xl">
            <Mesa />
          </div>
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <span className="flex text-s uppercase gap-2 items-center">
              <LocationMarkerIcon
                className="flex-shrink-0 h-6 w-6 text-[#00847D]/80"
                aria-hidden="true"
              />
              Mesa, AZ
            </span>
            <h3 className="text-3xl font-bold my-2">2919 S. Ellsworth Road</h3>
            <p className="my-2">Suite 135</p>
            <p className="my-2">Mesa, AZ 85212</p>
            <Button variant="primary" className="self-start text-white ">
              Directions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
