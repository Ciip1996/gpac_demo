import { colors } from '../../../res';

export const styles = {
  marketWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    color: colors.white
  },
  searchBarWrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.searchBar
  },
  contentWrapper: {
    display: 'flex',
    flex: 12,
    flexDirection: 'column',
    backgroundColor: colors.appBackground,
    paddingRight: 78,
    paddingLeft: 78
  },
  headerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 2,
    flexDirection: 'row',
    backgroundColor: colors.transparent
  },
  circle: {
    position: 'absolute',
    top: 95,
    left: 172,
    backgroundColor: colors.accent,
    width: 22,
    height: 22,
    borderRadius: 22
  },
  label: {
    fontFamily: 'Montserrat-Bold, sans-serif',
    fontSize: 24
  },
  listWrapper: {
    display: 'flex',
    flex: 12,
    flexDirection: 'column',
    backgroundColor: colors.lightGrey
  }
};
