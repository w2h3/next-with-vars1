import Banner from '@/components/Banner';
import React from 'react';
import tester from 'public/contactBanner.jpg';
import Contact from '@/components/Contact';
const contact = () => {
  return (
    <>
      <div className="mt-26">
        <Banner pageName={'Contact Us'} imageURL={tester.src}></Banner>

        <Contact></Contact>
      </div>
    </>
  );
};

export default contact;
