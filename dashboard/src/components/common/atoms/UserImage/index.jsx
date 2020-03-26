// @flow
import React from 'react';

type Props = {
  cover: any,
  width?: number,
  height?: number
};

const UserImage = (props: Props) => {
  const { cover, width, height } = props;
  return (
    <img
      src={cover}
      alt="user"
      style={{
        width,
        height,
        borderRadius: width
      }}
    />
  );
};

UserImage.defaultProps = {
  width: 50,
  height: 50
};

export default UserImage;
