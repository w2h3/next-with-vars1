import Banner from '@/components/Banner';
import React from 'react';
import tester from 'public/servebanner.jpg';

function patients() {
  return (
    <>
      <Banner pageName={'Services'} imageURL={tester.src}></Banner>
    </>
  );
}

export default patients;
