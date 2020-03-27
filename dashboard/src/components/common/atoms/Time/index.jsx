// @flow
import React from 'react';
import { styles } from './styles';

type TimeComponentProps = {
  date: Date
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

const TimeComponent = (props: TimeComponentProps) => {
  const { date } = props;
  return (
    <div style={styles.dateTimeWrapper}>
      <div>
        <p style={styles.date}>{weekday[date.getDay()]}</p>
        <p style={styles.date}>{`${monthNames[date.getMonth()]} ${date.getDate().toString()}`}</p>
      </div>
      <div style={styles.timeWrapper}>{`${date.getHours()}:${date.getMinutes()}`}</div>
      <p style={styles.date}>Actual Time</p>
    </div>
  );
};
export default TimeComponent;
