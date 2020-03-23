// @flow
import React, { Component } from 'react';
import { styles } from './styles';
import { AccentButton } from '../../common/atoms';
import { SearchBar, ClientCard } from '../../common';

class Market extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div style={styles.marketWrapper}>
        <div style={styles.searchBarWrapper}>
          <SearchBar />
        </div>
        <div style={styles.contentWrapper}>
          <div style={styles.circle} />
          <div style={styles.headerWrapper}>
            <p style={styles.label}>Market</p>
            <AccentButton width={175} text="Add new talent" />
          </div>
          <div style={styles.listWrapper}>
            <ClientCard
              name="Ivan"
              insustry="CBQA"
              jobPosition="Software Developer"
              phone="4776461175"
              salary="15,000"
              location="León, Gto."
              image="https://clipartart.com/images/profile-image-icon-clipart-1.png"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Market;
