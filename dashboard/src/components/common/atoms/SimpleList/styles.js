import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../../../res';

export const styles = {
  button: {
    width: 140,
    height: 49,
    padding: 0
  },
  iconWrapper: {
    marginLeft: 22
  },
  icon: {
    color: colors.white
  },
  label: {
    marginLeft: -20
  }
};

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: 360,
    fontFamily: 'Montserrat-light, sans-serif',
    fontSize: 12
  }
}));
