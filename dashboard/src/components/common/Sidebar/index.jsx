// @flow
import React from 'react';
import './styles.css';
import SimpleList from '../atoms/SimpleList';

type SidebarProps = {
  logo?: string
};

const Sidebar = (props: SidebarProps) => {
  const { logo } = props;
  return (
    <div className="sideBarWrapper">
      <div>
        <img source={logo} alt="Sidebar Logo" />
      </div>
      <SimpleList />
    </div>
  );
};

Sidebar.defaultProps = {
  logo: ''
};

export default Sidebar;
