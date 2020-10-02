import React from 'react';
import { CHeader, CToggler, CHeaderBrand } from '@coreui/react';
import { useLocation } from 'react-router-dom';
import { matchPath } from 'react-router';
import { useAdminContext } from '../context';
// import CIcon from '@coreui/icons-react';

const Header = () => {
  const location = useLocation();
  const { params = '' } =
    matchPath(location.pathname, {
      path: '/:resource',
      exact: false,
    }) || {};
  const { getResourceOpts } = useAdminContext();
  const options = getResourceOpts(params.resource);
  const { label = '' } = options || {};

  const toggleSidebar = () => {
    // const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    // dispatch({type: 'set', sidebarShow: val})
  };

  const toggleSidebarMobile = () => {
    // const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    // dispatch({type: 'set', sidebarShow: val})
  };

  return (
    <CHeader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto mb-0 h3">{label}</CHeaderBrand>
    </CHeader>
  );
};

export default Header;
