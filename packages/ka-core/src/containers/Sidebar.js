import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';

const defaultNav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Resources'],
  },
];

const Sidebar = ({ children }) => {
  const [navigation, setNavigation] = useState([...defaultNav]);
  const show = true;
  useEffect(() => {
    let lastGroup = 'Resources';
    const nav = children.reduce(
      (acc, cur) => {
        const { props: resProps } = cur;
        if (resProps.group && lastGroup !== resProps.group) {
          // new group
          acc.push({
            _tag: 'CSidebarNavTitle',
            _children: [resProps.group],
          });
          lastGroup = resProps.group;
        }

        acc.push({
          _tag: 'CSidebarNavItem',
          name: resProps.options.label,
          to: `/${resProps.name}`,
          icon: resProps.icon,
        });
        return acc;
      },
      [...defaultNav]
    );
    setNavigation(nav);
  }, [children]);

  return (
    <CSidebar
      show={show}
      // onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon className="c-sidebar-brand-full" name="logo" height={26} />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={26}
        />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

Sidebar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Sidebar;
