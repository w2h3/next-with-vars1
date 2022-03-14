import Hheader from '@/components/Hheader';
import React from 'react';
import tester from 'public/tester.jpg'
const forms = () => {
  return (
    <>
    <div className="pt-24">
      <Hheader pageName={'Forms'} imageURL={tester.src}></Hheader>
    </div>
    </>
  );
};

export default forms;
