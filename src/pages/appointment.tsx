import Banner from '@/components/Banner';
import React from 'react';
import tester from 'public/servebanner.jpg';
const services = () => {
  return (
    <>
      <Banner pageName={'Book an Appointment'} imageURL={tester.src}></Banner>
      <div className="mt-80"></div>
    </>
  );
};

export default services;
