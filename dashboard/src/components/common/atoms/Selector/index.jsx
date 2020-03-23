// @flow
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/styles';
import { styles } from './styles';

type SelectorProps = {
  placeholder: string,
  customStyle?: object
};

const customStyles = theme => ({
  icon: {
    color: 'white'
  },
  root: {
    color: 'white'
  }
});

const Selector = (props: SelectorProps) => {
  const { placeholder, customStyle, classes } = props;
  return (
    <div style={customStyle}>
      <FormControl style={styles.formControl}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={-1}
          onChange={() => {}}
          classes={{
            root: classes.root,
            icon: classes.icon
          }}
        >
          <MenuItem value={-1}>{placeholder}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

Selector.defaultProps = {
  customStyle: {}
};

export default withStyles(customStyles)(Selector);
