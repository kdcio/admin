import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Content from './Content';

const Layout = ({ dashboard, children }) => {
  return (
    <div className="c-app c-default-layout">
      <Sidebar>{children}</Sidebar>
      <div className="c-wrapper">
        <Header />
        <div className="c-body">
          <Content dashboard={dashboard}>{children}</Content>
        </div>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  dashboard: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.object,
  ]).isRequired,
};

export default Layout;
