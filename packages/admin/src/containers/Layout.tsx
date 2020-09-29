import * as React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Content from './Content';

const Layout: React.FC = () => {
  return (
    <div className="c-app c-default-layout">
      <Sidebar />
      <div className="c-wrapper">
        <Header />
        <div className="c-body">
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
