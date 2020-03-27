// @flow
import React from 'react';
import Button from '@material-ui/core/Button';
import { styles } from './styles';

type RegularButtonProps = {
  text: string,
  onClick: Function,
  height: number,
  width: number
};

const RegularButton = (props: RegularButtonProps) => {
  const { text, onClick, height, width } = props;
  return (
    <div style={{ height, width }}>
      <Button
        disableElevation
        style={styles.button}
        onClick={onClick}
        variant="contained"
        color="primary"
      >
        {text}
      </Button>
    </div>
  );
};
export default RegularButton;
