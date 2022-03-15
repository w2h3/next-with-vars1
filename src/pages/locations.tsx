import Banner from '@/components/Banner';
import React from 'react';
import tester from 'public/locationbanner.jpg';
import Map from '@/components/maps/Maps';
const locations = () => {
  return (
    <>
      <Banner pageName={'Locations'} imageURL={tester.src}></Banner>
      <Map></Map>
      <div className="pt-24"></div>
    </>
  );
};

export default locations;
