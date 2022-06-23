import React from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = (props: any) => {
  return (
    <>
      <nav className='fixed top-0 z-50 w-full'>
        <Navbar />
      </nav>
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
