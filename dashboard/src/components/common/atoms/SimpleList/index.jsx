// @flow
import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles, styles } from './styles';
import {
  MapIcon,
  MarketIcon,
  ComapniesIcon,
  TasksToolIcon,
  SendOutsIcon,
  SFProjects,
  JobOrdersIcon,
  DashboardIcon
} from '../../../../res';

type SimpleListProps = {
  items: List<string>
};

const Icons = [
  <DashboardIcon width={20} height={17} style={styles.icon} />,
  <JobOrdersIcon width={20} height={17} style={styles.icon} />,
  <MarketIcon width={20} height={17} style={styles.icon} />,
  <ComapniesIcon width={20} height={17} style={styles.icon} />,
  <SFProjects width={20} height={17} style={styles.icon} />,
  <MapIcon width={20} height={17} style={styles.icon} />,
  <TasksToolIcon width={20} height={17} style={styles.icon} />,
  <SendOutsIcon width={20} height={17} style={styles.icon} />
];

const SimpleList = (props: SimpleListProps) => {
  const { items } = props;
  const [selectedItem, setSelectedItem] = useState(0);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List component="nav">
        {items.map((each, i) => (
          <ListItem
            key={i}
            style={i === selectedItem ? styles.buttonSelected : styles.button}
            button
            onClick={() => {
              setSelectedItem(i);
            }}
          >
            <div style={styles.iconWrapper}>
              <ListItemIcon>{Icons[i]}</ListItemIcon>
            </div>
            <ListItemText style={styles.label} disableTypography primary={each} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
export default SimpleList;
