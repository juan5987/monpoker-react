import React from 'react';
import Header from './Header';
import '../styles/layout.sass';

const Layout = ({ children } : any) => {
  return (
    <div className="layout">
      <Header />
      <main className='main'>{children}</main>
    </div>
  );
};

export default Layout;
