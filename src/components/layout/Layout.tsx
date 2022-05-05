import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';

const Layout = ({props}:any) => {
  return (
    <>

      <nav className="z-50 w-full top-0 fixed">
     
        <Navbar />
      </nav>
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
