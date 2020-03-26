import { colors } from '../../../res';

export const styles = {
  marketWrapper: {
    // display: 'flex',
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'flex-end',
  },
  searchBarWrapper: {
    // display: 'flex',
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    marginLeft: 10,
    alignItems: 'center'
  },
  contentWrapper: {
    display: 'flex',
    flex: 12,
    flexDirection: 'column',
    backgroundColor: colors.transparent,
    paddingRight: 78,
    paddingLeft: 78
  },
  headerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 2,
    flexDirection: 'row',
    backgroundColor: colors.transparent,
    minHeight: 93
  },
  circle: {
    position: 'absolute',
    top: 90,
    left: 172,
    backgroundColor: colors.accent,
    width: 22,
    height: 22,
    borderRadius: 22
  },
  label: {
    fontFamily: 'Montserrat-Bold, sans-serif',
    fontSize: 24,
    color: colors.white
  },
  full: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    overflow: 'hidden'
  },
  listWrapper: {
    overflow: 'auto',
    display: 'block',
    minHeight: 500,
    maxHeight: 1000,
    height: '75vh'
  },
  newNotFound: {
    height: '50vh',
    width: '100%',
    position: 'relative'
  },
  newNotFoundCont: {
    width: '100%',
    paddingTop: '10vh',
    fontSize: 100,
    textShadow: '2px 2px 5px rgba(39, 39, 39, 0.403)'
  },
  skeletonCard: {
    height: 90,
    width: '100%'
  }
};
