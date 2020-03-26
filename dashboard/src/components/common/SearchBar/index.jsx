// @flow
import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Selector } from '../atoms';
import { MoreIcon, colors } from '../../../res';
import { styles } from './styles';

// type SearchBarProps = {};

const SearchBar = () => {
  const selectorStyle = { color: '#FFF' };
  return (
    <div style={styles.container}>
      <Paper component="form" style={styles.root}>
        <InputBase
          style={styles.input}
          placeholder="   Quick Search…"
          inputProps={{ 'aria-label': 'Quick Search' }}
        />
        <Divider style={styles.divider} orientation="vertical" />
        <Selector customStyle={selectorStyle} placeholder="All entities" />
        <Divider style={styles.divider} orientation="vertical" />
        <Selector placeholder="Industry" />
        <Divider style={styles.divider} orientation="vertical" />
        <Selector placeholder="Location" />
        <Divider style={styles.divider} orientation="vertical" />
        <IconButton type="submit" style={styles.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <IconButton type="submit" aria-label="search">
        <div style={styles.advancedSearchLabel}>Advance Search</div>
      </IconButton>
      <IconButton type="submit" style={styles.iconButton} aria-label="search">
        <MoreIcon width={33} height={7} fill={colors.white} />
      </IconButton>
    </div>
  );
};
export default SearchBar;
