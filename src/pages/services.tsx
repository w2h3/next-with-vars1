import Banner from '@/components/Banner';
import React from 'react';
import tester from 'public/servebanner.jpg';
const services = () => {
  return (
    <>
      <Banner pageName={'Services'} imageURL={tester.src}></Banner>
      <div className="testImage">
        <div className="container"></div>
      </div>
    </>
  );
};

export default services;
