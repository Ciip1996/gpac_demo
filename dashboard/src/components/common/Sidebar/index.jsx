import React from 'react';
import './styles.css';
import SimpleList from '../atoms/SimpleList';

const Sidebar = () => {
  //   const { items } = props;
  return (
    <div className="sideBarWrapper">
      <SimpleList />
    </div>
  );
};
export default Sidebar;
