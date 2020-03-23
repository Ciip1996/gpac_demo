// @flow
import React, { Component } from 'react';
import { styles } from './styles';
import { AccentButton } from '../../common/atoms';

class Market extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div style={styles.marketWrapper}>
        <div style={styles.searchBarWrapper}> </div>
        <div style={styles.contentWrapper}>
          <div style={styles.circle} />
          <div style={styles.headerWrapper}>
            <p style={styles.label}>Market</p>
            <AccentButton width={175} text="Add new talent" />
          </div>
          <div style={styles.listWrapper}> </div>
        </div>
      </div>
    );
  }
}
export default Market;
