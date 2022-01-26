import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <>
      <Header />
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
