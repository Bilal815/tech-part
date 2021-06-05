import React from 'react';
import Footer from './Footer';
import DefaultHeader from './headers/DefaultHeader';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <DefaultHeader />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
