// @flow
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import { useStyles, styles } from './styles';

type SimpleListProps = {
  items: List<string>
};

const SimpleList = (props: SimpleListProps) => {
  const { items } = props;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {items.map(each => (
          <ListItem style={styles.button} button>
            <div style={styles.iconWrapper}>
              <ListItemIcon>
                <InboxIcon style={styles.icon} />
              </ListItemIcon>
            </div>
            <ListItemText style={styles.label} disableTypography primary={each} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
export default SimpleList;
