import Hheader from '@/components/Hheader';
import React from 'react';
import tester from 'public/servebanner.jpg';
const services = () => {
  return (
    <>
      <Hheader pageName={'Services'} imageURL={tester.src}></Hheader>
      <div className="mt-80"></div>
    </>
  );
};

export default services;
