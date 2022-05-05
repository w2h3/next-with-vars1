import { Cloudinary } from '@cloudinary/url-gen';
import Link from 'next/link';
import React from 'react';

import Banner from '@/components/layout/Banner';
import Divider from '@/components/layout/Dividers';
import Logo from '@/components/Logos';

const patients = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'jameswingert',
    },
  });
  const myImage = cld.image('v1651729614/forptbanner_hik3k6');
  return (
    <>
      <Banner
        pageName='For Patients'
        imageURL={myImage}
     
      />
      <Divider sectionName='Patient Resources' />
      <div className='container mb-20 '>
        <h2 className='mb-6 text-center font-sans text-3xl font-bold leading-none tracking-tight text-wcyan  md:mx-auto'>
          Forms and Portal Access
        </h2>
        <div className='row-gap-5 md:row-gap-8 mb-8 grid gap-8 sm:grid-cols-3 lg:grid-cols-3'>
          <Link href='/' passHref>
            <button
              className='transform border-l-4 border-wcyan bg-white duration-300 hover:-translate-y-2'
              type='button'
            >
              <div className='h-full rounded-r border border-l-0 p-5 shadow-sm'>
                <h6 className='mb-2 font-semibold leading-5 text-wcyan'>
                  Online New Patient Form
                </h6>
                <p className='text-sm text-gray-900'>
                  Click here to fill out and submit our new patient form online.
                </p>
              </div>
            </button>
          </Link>
          <Link
            href='https://neurologyandsleep.com/wp-content/uploads/2020/03/New-Patient-Packet_3-2020.pdf'
            passHref
          >
            <button
              className='transform border-l-4 border-wcyan bg-white duration-300 hover:-translate-y-2'
              type='button'
            >
              <div className='h-full rounded-r border border-l-0 p-5 shadow-sm'>
                <h6 className='mb-2 font-semibold leading-5 text-wcyan'>
                  Print New Patient Form
                </h6>
                <p className='text-sm text-gray-900'>
                  Click here to navigate to our new patient PDF form.
                </p>
              </div>
            </button>
          </Link>
          <Link
            href='https://mycw34.eclinicalweb.com/portal3661/jsp/100mp/login_otp.jsp'
            passHref
          >
            <button
              className='transform border-l-4 border-wcyan bg-white duration-300 hover:-translate-y-2'
              type='button'
            >
              <div className='h-full rounded-r border border-l-0 p-5 shadow-sm'>
                <h6 className='mb-2 font-semibold leading-5 text-wcyan'>
                  Patient Portal
                </h6>
                <p className='text-sm text-gray-900'>
                  Click here for access to the patient portal.
                </p>
              </div>
            </button>
          </Link>
        </div>{' '}
        <h2 className='mb-6 text-center font-sans text-3xl font-bold leading-none tracking-tight text-wcyan  md:mx-auto'>
          Patient Education{' '}
        </h2>
        <p className='mb-6  text-center font-sans text-lg font-bold leading-none tracking-tight text-gray-900 md:mx-auto'>
          Please click any of the images below to visit their website.
        </p>
        <Logo></Logo>
      </div>
    </>
  );
};

export default patients;
