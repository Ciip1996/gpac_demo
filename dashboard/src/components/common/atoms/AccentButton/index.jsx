// @flow
import React from 'react';
import Button from '@material-ui/core/Button';
import { AddLogo, colors } from '../../../../res';
import { styles } from './styles';

type AccentButtonProps = {
  text: string,
  onClick: Function,
  height: number,
  width: number
};

const AccentButton = (props: AccentButtonProps) => {
  const { text, onClick, height, width } = props;
  return (
    <div style={{ height, width }}>
      <Button
        style={styles.button}
        onClick={onClick}
        variant="contained"
        color="primary"
        endIcon={<AddLogo fill={colors.white} width={13.1} height={13.1} />}
      >
        {text}
      </Button>
    </div>
  );
};
export default AccentButton;
