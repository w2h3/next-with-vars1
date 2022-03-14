import Hheader from '@/components/Hheader';
import React from 'react';
import tester from 'public/stock.jpg';
import Contact from '@/components/Contact';
const contact = () => {
  return (
    <>
      <div className="mt-26">
        <Hheader pageName={'Contact Us'} imageURL={tester.src}></Hheader>

        <Contact></Contact>
      </div>
    </>
  );
};

export default contact;
