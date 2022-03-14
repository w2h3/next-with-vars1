import Hheader from '@/components/Hheader';
import React from 'react';
import tester from 'public/tester.jpg';
const services = () => {
  return (
    <>
      <div className="pt-24">
        <Hheader pageName={'Services'} imageURL={tester.src}></Hheader>
      </div>
    </>
  );
};

export default services;
