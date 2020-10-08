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
    const nav = [...defaultNav];
    let lastGroup = 'Resources';
    children.forEach((child) => {
      const { props } = child;
      if (props.group && lastGroup !== props.group) {
        // new group
        nav.push({
          _tag: 'CSidebarNavTitle',
          _children: [props.group],
        });
        lastGroup = props.group;
      }

      nav.push({
        _tag: 'CSidebarNavItem',
        name: props.options.label,
        to: `/${props.name}`,
        icon: props.icon,
      });
    });
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
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  options: PropTypes.shape({
    label: PropTypes.string,
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Sidebar.defaultProps = {
  options: { label: '' },
};

export default Sidebar;
