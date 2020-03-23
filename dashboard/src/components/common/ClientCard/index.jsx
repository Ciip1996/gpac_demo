// @flow
import React from 'react';
import { styles } from './styles';
import { UserImage } from '../atoms';

type ClientCardProps = {
  name: string,
  insustry: string,
  jobPosition: string,
  phone: string,
  salary: string,
  location: string,
  image: string
};

const ClientCard = (props: ClientCardProps) => {
  const { name, insustry, jobPosition, phone, salary, location, image } = props;

  return (
    <div>
      <div style={styles.clientCardWrapper}>
        <UserImage cover={image} width={54} height={54} />
        <div>{name}</div>
        <div>{insustry}</div>
        <div>{jobPosition}</div>
        <div>{phone}</div>
        <div>{salary}</div>
        <div>{location}</div>
        <div>View Profile Button</div>
      </div>
      <div style={styles.clientCardWrapper}>
        <UserImage cover={image} width={54} height={54} />
        <div>{name}</div>
        <div>{insustry}</div>
        <div>{jobPosition}</div>
        <div>{phone}</div>
        <div>{salary}</div>
        <div>{location}</div>
        <div>View Profile Button</div>
      </div>
    </div>
  );
};

export default ClientCard;
