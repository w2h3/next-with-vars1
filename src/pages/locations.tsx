import Hheader from '@/components/Hheader';
import React from 'react';
import tester from 'public/stock.jpg';
import Map from '@/components/Mesa2';
const locations = () => {
  return (
    <>
      <Hheader pageName={'Locations'} imageURL={tester.src}></Hheader>
      <Map></Map>
      <div className="pt-24"></div>
    </>
  );
};

export default locations;
