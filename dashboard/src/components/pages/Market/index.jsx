// @flow
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import axios from 'axios';
import { AccentButton } from '../../common/atoms';
import { SearchBar, ClientCard } from '../../common';

const Market = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("will start");
    axios.get('http://192.168.0.7:80/clients')
    .then(function (response) {
      // handle success
      console.log(response);
      setClients(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
      console.log('CLIENTS',clients);
      setIsLoading(false);
    });
  });

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
          {!isLoading ? clients.map((client) => (
            <ClientCard
              key={client.id}
              name={client.name}
              title={client.title}
              insustry={client.industry}
              jobPosition={client.job_position}
              phone={client.phone}
              salary={client.salary}
              location={client.location}
              image={client.image}
            />
          )): <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
}
export default Market;
