// @flow
import React from 'react';
import { styles } from './styles';
import SimpleList from '../atoms/SimpleList';
import TimeComponent from '../atoms/Time';

type SidebarProps = {
  children?: Component
};

const Sidebar = (props: SidebarProps) => {
  const { children, pages } = props;
  const date = new Date();

  return (
    <div style={styles.sideBarWrapper}>
      <div style={styles.logoWrapper}>{children}</div>
      <SimpleList items={pages} />
      <TimeComponent date={date} />
    </div>
  );
};

Sidebar.defaultProps = {
  children: undefined
};

export default Sidebar;
