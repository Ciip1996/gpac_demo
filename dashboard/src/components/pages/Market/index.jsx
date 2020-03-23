// @flow
import React, { Component } from 'react';
import { styles } from './styles';

class Market extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div style={styles.marketWrapper}>
        <div style={styles.headerWrapper}>HEADER here!</div>
        <div style={styles.contentWrapper}>
          <div style={styles.searchBarWrapper}>Searchbar</div>
          <div style={styles.listWrapper}>List View</div>
        </div>
      </div>
    );
  }
}
export default Market;
