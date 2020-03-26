import { colors } from '../../../res';

export const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '60%',
    minWidth: 700,
    height: 40,
    backgroundColor: colors.searchBar
  },
  input: {
    marginLeft: 1,
    flex: 1,
    color: colors.white
  },
  iconButton: {
    padding: 10,
    color: colors.white // TODO: change this one to match mockups
  },
  divider: {
    height: 28,
    margin: 4,
    backgroundColor: colors.divider
  },
  formControl: {
    margin: 1,
    minWidth: 120
  },
  advancedSearchLabel: {
    color: colors.white,
    fontFamily: 'Montserrat-light, sans-serif',
    fontSize: 16
  }
};
