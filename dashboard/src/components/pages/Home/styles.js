import { colors } from '../../../res';

export const styles = {
  homeWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    margin: '0 auto',
    backgroundColor: colors.appBackground,
    minHeight: 750
  },
  sidebar: {
    flex: 3,
    maxWidth: 140,
    backgroundColor: colors.sideBar
  },
  contentPage: {
    flex: 12
  }
};
