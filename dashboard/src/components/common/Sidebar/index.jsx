// @flow
import React from 'react';
import { styles } from './styles';
import SimpleList from '../atoms/SimpleList';

type SidebarProps = {
  children?: Component
};

const weekday = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

const Sidebar = (props: SidebarProps) => {
  const { children, pages } = props;
  const date = new Date();

  return (
    <div style={styles.sideBarWrapper}>
      <div style={styles.logoWrapper}>{children}</div>
      <SimpleList items={pages} />
      <div style={styles.dateTimeWrapper}>
        <div>
          <p style={styles.date}>{weekday[date.getDay()]}</p>
          <p style={styles.date}>{`${monthNames[date.getMonth()]} ${date.getDate().toString()}`}</p>
        </div>
        <div style={styles.timeWrapper}>{`${date.getHours()}:${date.getMinutes()}`}</div>
        <p style={styles.date}>Actual Time</p>
      </div>
    </div>
  );
};

Sidebar.defaultProps = {
  children: undefined
};

export default Sidebar;
