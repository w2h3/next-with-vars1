import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
  return (
    <>
      {/* bg-wcyan/10 bg-opacity-60 */}
      {/* <ExportedImage
          layout="fill"
          className="pt-20 object-top object-cover pointer-events-none"
          src={background2}
          alt="hello"
        /> */}
      <nav className="z-50 w-full top-0 fixed">
        {/* <Header/> */}
        <Navbar />
      </nav>
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
