// @flow
import React from 'react';
import { styles } from './styles';
import { UserImage, RegularButton } from '../atoms';

type ClientCardProps = {
  name: string,
  title: string,
  insustry: string,
  jobPosition: string,
  phone: string,
  salary: string,
  location: string,
  image: string
};

const ClientCard = (props: ClientCardProps) => {
  const { name, title, insustry, jobPosition, phone, salary, location, image } = props;

  return (
    <div>
      <div style={styles.clientCardWrapper}>
        <div style={styles.imageWrapper}>
          <UserImage cover={image} width={54} height={54} />
        </div>
        <div style={styles.container}>
          <div style={styles.lblName}>{name}</div>
          <div style={styles.regularLabel}>{title}</div>
        </div>
        <div style={styles.regularLabel}>{insustry}</div>
        <div style={styles.regularLabel}>{jobPosition}</div>
        <div style={styles.regularLabel}>{phone}</div>
        <div style={styles.regularLabel}>{salary}</div>
        <div style={styles.regularLabel}>{location}</div>
        <RegularButton width={175} text="View Profile" />
      </div>
    </div>
  );
};

export default ClientCard;
