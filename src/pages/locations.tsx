import Hheader from '@/components/Hheader';
import React from 'react';
import tester from 'public/tester.jpg'

const locations = () => {
  return (
    <>
    <div className="pt-24">
      <Hheader pageName={'Locations'} imageURL={tester.src}></Hheader>
    </div>
    </>
  );
};

export default locations;
