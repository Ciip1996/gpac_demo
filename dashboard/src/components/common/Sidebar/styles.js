import { colors } from '../../../res';

export const styles = {
  sideBarWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    backgroundColor: colors.sideBar,
    color: colors.white,
    justifyContent: 'space-around'
  },
  logoWrapper: {
    display: 'flex',
    backgroundColor: colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    height: 130
  },
  dateTimeWrapper: {
    flexDirection: 'column',
    backgroundColor: colors.transparent,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeWrapper: {
    fontFamily: 'Montserrat-bold, sans-serif',
    fontSize: 30,
    margin: 0
  },
  date: {
    fontFamily: 'Montserrat-light, sans-serif',
    fontSize: 10,
    color: colors.lightGrey,
    margin: 0
  }
};
