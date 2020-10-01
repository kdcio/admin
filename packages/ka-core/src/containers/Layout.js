import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Content from './Content';

const Layout = ({ dashboard, children }) => {
  return (
    <div className="c-app c-default-layout">
      <Sidebar children={children} />
      <div className="c-wrapper">
        <Header />
        <div className="c-body">
          <Content dashboard={dashboard} children={children} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
