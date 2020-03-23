import { colors } from '../../../res';

export const styles = {
  marketWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    color: colors.white
  },
  headerWrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.searchBar
  },
  contentWrapper: {
    display: 'flex',
    flex: 12,
    flexDirection: 'column',
    backgroundColor: colors.appBackground
  },
  searchBarWrapper: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
    backgroundColor: colors.lightGrey // TODO replace with trasnparent
  },
  listWrapper: {
    display: 'flex',
    flex: 12,
    flexDirection: 'column',
    backgroundColor: colors.transparent
  }
};
