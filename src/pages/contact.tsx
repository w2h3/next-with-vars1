import Hheader from '@/components/Hheader';
import React from 'react';
import tester from 'public/tester.jpg'

const Contact = () => {
  return (
    <>
    <div className="pt-24">
      <Hheader pageName={'Contact Us'} imageURL={tester.src}></Hheader>
    </div>
    </>
  );
};

export default Contact;
