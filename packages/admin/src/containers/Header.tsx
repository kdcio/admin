import * as React from 'react';
import { CHeader, CToggler, CHeaderBrand } from '@coreui/react';
// import CIcon from '@coreui/icons-react';

const Header: React.FC = () => {
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
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        Dashboard
      </CHeaderBrand>
    </CHeader>
  );
};

export default Header;
