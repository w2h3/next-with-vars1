import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';

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
