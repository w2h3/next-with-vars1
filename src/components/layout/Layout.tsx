import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <>
      {/* bg-wcyan/10 bg-opacity-60 */}
      {/* <Image
          layout="fill"
          className="pt-20 object-top object-cover pointer-events-none"
          src={background2}
          alt="hello"
        /> */}
      <nav className="fixed z-50 w-full top-0">
        <Header />
        <Navbar />
      </nav>
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
